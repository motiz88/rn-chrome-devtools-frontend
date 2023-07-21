var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../../recorder/components/components.js';
import * as Host from '../../../core/host/host.js';
import * as SDK from '../../../core/sdk/sdk.js';
import * as Buttons from '../../../ui/components/buttons/buttons.js';
import * as Dialogs from '../../../ui/components/dialogs/dialogs.js';
import * as Menus from '../../../ui/components/menus/menus.js';
import * as UI from '../../../ui/legacy/legacy.js';
import * as LitHtml from '../../../ui/lit-html/lit-html.js';
import * as ElementsComponents from '../../elements/components/components.js';
import * as RecorderComponents from '../../recorder/components/components.js';
import editorWidgetStyles from './JSONEditor.css.js';
const { html, Decorators, LitElement, Directives, nothing } = LitHtml;
const { customElement, property, state } = Decorators;
const { live, classMap, repeat } = Directives;
/**
 * Parents should listen for this event and register the listeners provided by
 * this event"
 */
export class SubmitEditorEvent extends Event {
    static eventName = 'submiteditor';
    data;
    constructor(data) {
        super(SubmitEditorEvent.eventName);
        this.data = data;
    }
}
const splitDescription = (description) => {
    // If the description is too long we make the UI a bit better by highlighting the first sentence
    // which contains the most informations.
    // The number 150 has been chosen arbitrarily
    if (description.length > 150) {
        const [firstSentence, restOfDescription] = description.split('.');
        // To make the UI nicer, we add a dot at the end of the first sentence.
        firstSentence + '.';
        return [firstSentence, restOfDescription];
    }
    return [description, ''];
};
const DUMMY_DATA = 'dummy';
export let JSONEditor = class JSONEditor extends LitElement {
    static styles = [editorWidgetStyles];
    command = '';
    targetId;
    #hintPopoverHelper;
    constructor() {
        super();
        this.parameters = [];
        this.targetManager = SDK.TargetManager.TargetManager.instance();
        this.targetId = this.targetManager.targets().length !== 0 ? this.targetManager.targets()[0].id() : undefined;
        this.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' &&
                (event.metaKey || event.ctrlKey)) {
                this.dispatchEvent(new SubmitEditorEvent({
                    command: this.command,
                    parameters: this.getParameters(),
                    targetId: this.targetId,
                }));
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.#hintPopoverHelper = new UI.PopoverHelper.PopoverHelper(this, event => this.#handlePopoverDescriptions(event));
        this.#hintPopoverHelper.setDisableOnClick(true);
        this.#hintPopoverHelper.setTimeout(300);
        this.#hintPopoverHelper.setHasPadding(true);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.#hintPopoverHelper?.hidePopover();
        this.#hintPopoverHelper?.dispose();
    }
    #convertObjectToParameterSchema(key, value, schema, initialSchema) {
        const type = schema?.type || typeof value;
        const description = schema?.description ?? '';
        const optional = schema?.optional ?? true;
        switch (type) {
            case 'string':
            case 'boolean':
            case 'number':
                return {
                    type,
                    name: key,
                    optional,
                    typeRef: schema?.typeRef,
                    value,
                    description,
                };
            case 'object': {
                if (typeof value !== 'object' || value === null) {
                    throw Error('Wrong value');
                }
                const typeRef = schema?.typeRef;
                if (!typeRef) {
                    break;
                }
                let nestedType;
                if (typeRef === DUMMY_DATA) {
                    nestedType = initialSchema;
                }
                else {
                    nestedType = this.typesByName.get(typeRef);
                }
                if (!nestedType) {
                    break;
                }
                const objectValues = [];
                for (const objectKey of Object.keys(value)) {
                    const objectType = nestedType.find(param => param.name === objectKey);
                    objectValues.push(this.#convertObjectToParameterSchema(objectKey, value[objectKey], objectType));
                }
                return {
                    type: "object" /* ParameterType.Object */,
                    name: key,
                    optional: schema.optional,
                    typeRef: schema.typeRef,
                    value: objectValues,
                    description,
                };
            }
            case 'array': {
                const typeRef = schema?.typeRef;
                if (!typeRef) {
                    throw Error('No type ref');
                }
                if (!Array.isArray(value)) {
                    throw Error('Wrong value');
                }
                const nestedType = this.#isTypePrimitive(typeRef) ? undefined : {
                    optional: true,
                    type: "object" /* ParameterType.Object */,
                    value: [],
                    typeRef,
                    description: '',
                    name: '',
                };
                const objectValues = [];
                for (let i = 0; i < value.length; i++) {
                    const temp = this.#convertObjectToParameterSchema(`${i}`, value[i], nestedType);
                    objectValues.push(temp);
                }
                return {
                    type: "array" /* ParameterType.Array */,
                    name: key,
                    optional: optional,
                    typeRef: schema?.typeRef,
                    value: objectValues,
                    description,
                };
            }
        }
        return {
            type,
            name: key,
            optional,
            typeRef: schema?.typeRef,
            value,
            description,
        };
    }
    displayCommand(command, parameters) {
        this.command = command;
        const schema = this.metadataByCommand.get(this.command);
        if (!schema?.parameters) {
            return;
        }
        this.parameters = this.#convertObjectToParameterSchema('', parameters, {
            'typeRef': DUMMY_DATA,
            'type': "object" /* ParameterType.Object */,
            'name': '',
            'description': '',
            'optional': true,
            'value': [],
        }, schema.parameters)
            .value;
        this.requestUpdate();
    }
    #handlePopoverDescriptions(event) {
        const hintElement = event.composedPath()[0];
        const elementData = this.#getDescriptionAndTypeForElement(hintElement);
        if (!elementData?.description) {
            return null;
        }
        const [head, tail] = splitDescription(elementData.description);
        const type = elementData.type;
        const replyArgs = elementData.replyArgs;
        let popupContent = '';
        // replyArgs and type cannot get into conflict because replyArgs is attached to a command and type to a parameter
        if (replyArgs) {
            popupContent = tail + `Returns: ${replyArgs}<br>`;
        }
        else if (type) {
            popupContent = tail + `<br>Type: ${type}<br>`;
        }
        else {
            popupContent = tail;
        }
        return {
            box: hintElement.boxInWindow(),
            show: async (popover) => {
                const popupElement = new ElementsComponents.CSSHintDetailsView.CSSHintDetailsView({
                    'getMessage': () => `<code><span>${head}</span></code>`,
                    'getPossibleFixMessage': () => popupContent,
                    'getLearnMoreLink': () => `https://chromedevtools.github.io/devtools-protocol/tot/${this.command.split('.')[0]}/`,
                });
                popover.contentElement.appendChild(popupElement);
                return true;
            },
        };
    }
    #getDescriptionAndTypeForElement(hintElement) {
        if (hintElement.matches('.command')) {
            const metadata = this.metadataByCommand.get(this.command);
            if (metadata) {
                return { description: metadata.description, replyArgs: metadata.replyArgs };
            }
        }
        if (hintElement.matches('.parameter')) {
            const id = hintElement.dataset.paramid;
            if (!id) {
                return;
            }
            const realParamId = id.split('.');
            const { parameter } = this.#getChildByPath(realParamId);
            if (!parameter.description) {
                return;
            }
            return { description: parameter.description, type: parameter.type };
        }
        return;
    }
    #copyToClipboard() {
        const commandJson = JSON.stringify({ command: this.command, parameters: this.getParameters() });
        Host.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(commandJson);
    }
    #handleCommandSend() {
        this.dispatchEvent(new SubmitEditorEvent({
            command: this.command,
            parameters: this.getParameters(),
            targetId: this.targetId,
        }));
    }
    getParameters() {
        const formatParameterValue = (parameter) => {
            if (!parameter.value) {
                return;
            }
            switch (parameter.type) {
                case 'number': {
                    return Number(parameter.value);
                }
                case 'boolean': {
                    return Boolean(parameter.value);
                }
                case 'object': {
                    const nestedParameters = {};
                    for (const subParameter of parameter.value) {
                        const formattedValue = formatParameterValue(subParameter);
                        if (formattedValue !== undefined) {
                            nestedParameters[subParameter.name] = formatParameterValue(subParameter);
                        }
                    }
                    if (Object.keys(nestedParameters).length === 0) {
                        return undefined;
                    }
                    return nestedParameters;
                }
                case 'array': {
                    const nestedArrayParameters = [];
                    for (const subParameter of parameter.value) {
                        nestedArrayParameters.push(formatParameterValue(subParameter));
                    }
                    return nestedArrayParameters;
                }
                default: {
                    return parameter.value;
                }
            }
        };
        const formattedParameters = {};
        for (const parameter of this.parameters) {
            formattedParameters[parameter.name] = formatParameterValue(parameter);
        }
        return formatParameterValue({
            type: "object" /* ParameterType.Object */,
            name: DUMMY_DATA,
            optional: true,
            value: this.parameters,
            description: '',
        });
    }
    populateParametersForCommand() {
        const commandParameters = this.metadataByCommand.get(this.command)?.parameters;
        if (!commandParameters) {
            return;
        }
        this.parameters = commandParameters.map((parameter) => {
            if (parameter.type === 'object') {
                const typeInfos = this.typesByName.get(parameter.typeRef) ?? [];
                return {
                    optional: parameter.optional,
                    type: parameter.type,
                    description: parameter.description,
                    typeRef: parameter.typeRef,
                    value: typeInfos.map(type => {
                        const param = {
                            optional: type.optional,
                            type: this.#isParameterSupported(parameter) ? type.type : 'string',
                            name: type.name,
                            description: type.description,
                            value: undefined,
                        };
                        return param;
                    }),
                    name: parameter.name,
                };
            }
            if (parameter.type === 'array') {
                return {
                    optional: parameter.optional,
                    type: parameter.type,
                    description: parameter.description,
                    typeRef: parameter.typeRef,
                    value: [],
                    name: parameter.name,
                };
            }
            return {
                optional: parameter.optional,
                type: parameter.type,
                typeRef: this.#isParameterSupported(parameter) ? parameter.typeRef : 'string',
                value: parameter.value || undefined,
                name: parameter.name,
                description: parameter.description,
            };
        });
    }
    #getChildByPath(pathArray) {
        let parameters = this.parameters;
        let parentParameter;
        for (let i = 0; i < pathArray.length; i++) {
            const name = pathArray[i];
            const parameter = parameters.find(param => param.name === name);
            if (i === pathArray.length - 1) {
                return { parameter, parentParameter };
            }
            if (parameter?.type === 'array' || parameter?.type === 'object') {
                if (parameter.value) {
                    parameters = parameter.value;
                }
            }
            else {
                throw new Error('Parameter on the path in not an object or an array');
            }
            parentParameter = parameter;
        }
        throw new Error('Not found');
    }
    #handleParameterInputBlur = (event) => {
        if (event.target instanceof RecorderComponents.RecorderInput.RecorderInput) {
            const value = event.target.value;
            const paramId = event.target.getAttribute('data-paramid');
            if (paramId) {
                const realParamId = paramId.split('.');
                const object = this.#getChildByPath(realParamId).parameter;
                object.value = value;
            }
        }
    };
    #handleCommandInputBlur = async (event) => {
        if (event.target instanceof RecorderComponents.RecorderInput.RecorderInput) {
            this.command = event.target.value;
        }
        this.populateParametersForCommand();
    };
    #computeTargetLabel(target) {
        return `${target.name()} (${target.inspectedURL()})`;
    }
    #isParameterSupported(parameter) {
        if (parameter.type === 'array' || parameter.type === 'object' || parameter.type === 'string' ||
            parameter.type === 'boolean' || parameter.type === 'number') {
            return true;
        }
        throw new Error('Parameter is not of correct type');
    }
    #isTypePrimitive(type) {
        if (type === 'string' || type === 'boolean' || type === 'number') {
            return true;
        }
        return false;
    }
    #handleAddArrayParameter(parameterId) {
        const realParamId = parameterId.split('.');
        const parameter = this.#getChildByPath(realParamId).parameter;
        if (!parameter) {
            return;
        }
        if (parameter.type !== 'array' || !parameter.typeRef) {
            return;
        }
        const typeInfos = this.typesByName.get(parameter.typeRef) ?? [];
        parameter.value.push({
            optional: true,
            type: this.#isTypePrimitive(parameter.typeRef) ? parameter.typeRef : 'object',
            name: String(parameter.value.length),
            value: typeInfos.length !== 0 ?
                typeInfos.map(type => ({
                    optional: type.optional,
                    type: this.#isParameterSupported(parameter) ? type.type : 'string',
                    name: type.name,
                    value: undefined,
                })) :
                undefined,
        });
        this.requestUpdate();
    }
    #handleDeleteArrayParameter(parameterId) {
        const realParamId = parameterId.split('.');
        const { parameter, parentParameter } = this.#getChildByPath(realParamId);
        if (!parameter) {
            return;
        }
        if (!Array.isArray(parentParameter.value)) {
            return;
        }
        parentParameter.value.splice(parentParameter.value.findIndex(p => p === parameter), 1);
        for (let i = 0; i < parentParameter.value.length; i++) {
            parentParameter.value[i].name = String(i);
        }
        this.requestUpdate();
    }
    #renderTargetSelectorRow() {
        const target = this.targetManager.targets().find(el => el.id() === this.targetId);
        const targetLabel = target ? this.#computeTargetLabel(target) : '';
        // clang-format off
        return html `
    <div class="row attribute padded">
      <div>target<span class="separator">:</span></div>
      <${Menus.SelectMenu.SelectMenu.litTagName}
            class="target-select-menu"
            @selectmenuselected=${this.#onTargetSelected}
            .showDivider=${true}
            .showArrow=${true}
            .sideButton=${false}
            .showSelectedItem=${true}
            .showConnector=${false}
            .position=${"bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */}
            .buttonTitle=${targetLabel}
          >
          ${repeat(this.targetManager.targets(), target => {
            return LitHtml.html `
                <${Menus.Menu.MenuItem.litTagName}
                  .value=${target.id()}>
                    ${this.#computeTargetLabel(target)}
                </${Menus.Menu.MenuItem.litTagName}>
              `;
        })}
          </${Menus.SelectMenu.SelectMenu.litTagName}>
    </div>
  `;
        // clang-format on
    }
    #onTargetSelected(event) {
        this.targetId = event.itemValue;
        this.requestUpdate();
    }
    #renderInlineButton(opts) {
        return html `
          <devtools-button
            title=${opts.title}
            .size=${"MEDIUM" /* Buttons.Button.Size.MEDIUM */}
            .iconName=${opts.iconName}
            .variant=${"round" /* Buttons.Button.Variant.ROUND */}
            class=${classMap(opts.classMap)}
            @click=${opts.onClick}
          ></devtools-button>
        `;
    }
    /**
     * Renders the parameters list corresponding to a specific CDP command.
     */
    #renderParameters(parameters, id, parentParameter, parentParameterId) {
        parameters.sort((a, b) => Number(a.optional) - Number(b.optional));
        // clang-format off
        return html `
      <ul>
        ${repeat(parameters, parameter => {
            const parameterId = parentParameter ? `${parentParameterId}` + '.' + `${parameter.name}` : parameter.name;
            const subparameters = parameter.type === 'array' || parameter.type === 'object' ? (parameter.value ?? []) : [];
            const handleInputOnBlur = (event) => {
                this.#handleParameterInputBlur(event);
            };
            const classes = { colorBlue: parameter.optional, parameter: true };
            return html `
                <li class="row">
                  <div class="row">
                    <div class=${classMap(classes)} data-paramId=${parameterId}>${parameter.name}<span class="separator">:</span></div>
                    ${parameter.type === 'array' ? html `
                    ${this.#renderInlineButton({
                title: 'Add parameter',
                iconName: 'plus',
                onClick: () => this.#handleAddArrayParameter(parameterId),
                classMap: { deleteButton: true },
            })}
                  ` : nothing}
                    ${parameter.type !== 'array' && parameter.type !== 'object' ? html `
                    <devtools-recorder-input
                      data-paramId=${parameterId}
                      .value=${live(parameter.value ?? '')}
                      .placeholder=${'Enter your parameter...'}
                      @blur=${handleInputOnBlur}
                    ></devtools-recorder-input>` : nothing}

                    ${parameter.optional ? html `
                      ${this.#renderInlineButton({
                title: 'Delete',
                iconName: 'minus',
                onClick: () => this.#handleDeleteArrayParameter(parameterId),
                classMap: { deleteButton: true },
            })}` : nothing}
                  </div>
                </li>
                ${this.#renderParameters(subparameters, id, parameter, parameterId)}
              `;
        })}
      </ul>
    `;
        // clang-format on
    }
    render() {
        // clang-format off
        return html `
    <div class="wrapper">
      ${this.#renderTargetSelectorRow()}
      <div class="row attribute padded">
        <div class="command">command<span class="separator">:</span></div>
        <devtools-recorder-input
          .options=${[...this.metadataByCommand.keys()]}
          .value=${this.command}
          .placeholder=${'Enter your command...'}
          @blur=${this.#handleCommandInputBlur}
        ></devtools-recorder-input>
      </div>
      ${this.parameters.length ? html `
      <div class="row attribute padded">
        <div>parameters<span class="separator">:</span></div>
      </div>
        ${this.#renderParameters(this.parameters)}
      ` : nothing}
    </div>
    <devtools-pm-toolbar @copycommand=${this.#copyToClipboard} @commandsent=${this.#handleCommandSend}></devtools-pm-toolbar>`;
        // clang-format on
    }
};
__decorate([
    property()
], JSONEditor.prototype, "metadataByCommand", void 0);
__decorate([
    property()
], JSONEditor.prototype, "typesByName", void 0);
__decorate([
    property()
], JSONEditor.prototype, "targetManager", void 0);
__decorate([
    state()
], JSONEditor.prototype, "parameters", void 0);
__decorate([
    state()
], JSONEditor.prototype, "command", void 0);
__decorate([
    state()
], JSONEditor.prototype, "targetId", void 0);
JSONEditor = __decorate([
    customElement('devtools-json-editor')
], JSONEditor);
//# sourceMappingURL=JSONEditor.js.map