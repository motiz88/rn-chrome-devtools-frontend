import '../../recorder/components/components.js';
import * as SDK from '../../../core/sdk/sdk.js';
import * as LitHtml from '../../../ui/lit-html/lit-html.js';
declare const LitElement: typeof LitHtml.LitElement;
declare global {
    interface HTMLElementTagNameMap {
        'devtools-json-editor': JSONEditor;
    }
}
declare const enum ParameterType {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    Array = "array",
    Object = "object"
}
interface BaseParameter {
    optional: boolean;
    name: string;
    typeRef?: string;
    description: string;
}
interface ArrayParameter extends BaseParameter {
    type: ParameterType.Array;
    value: Parameter[];
}
interface NumberParameter extends BaseParameter {
    type: ParameterType.Number;
    value?: number;
}
interface StringParameter extends BaseParameter {
    type: ParameterType.String;
    value?: string;
}
interface BooleanParameter extends BaseParameter {
    type: ParameterType.Boolean;
    value?: boolean;
}
interface ObjectParameter extends BaseParameter {
    type: ParameterType.Object;
    value: Parameter[];
}
export type Parameter = ArrayParameter | NumberParameter | StringParameter | BooleanParameter | ObjectParameter;
export interface Command {
    command: string;
    parameters: {
        [x: string]: unknown;
    };
    targetId?: string;
}
/**
 * Parents should listen for this event and register the listeners provided by
 * this event"
 */
export declare class SubmitEditorEvent extends Event {
    static readonly eventName = "submiteditor";
    readonly data: Command;
    constructor(data: Command);
}
export declare class JSONEditor extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    metadataByCommand: Map<string, {
        parameters: Parameter[];
        description: string;
        replyArgs: string[];
    }>;
    typesByName: Map<string, Parameter[]>;
    targetManager: SDK.TargetManager.TargetManager;
    parameters: Parameter[];
    command: string;
    targetId?: string;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    displayCommand(command: string, parameters: {
        [paramName: string]: unknown;
    }): void;
    getParameters(): {
        [key: string]: unknown;
    };
    populateParametersForCommand(): void;
    render(): LitHtml.TemplateResult;
}
export {};
