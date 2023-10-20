// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as Common from '../../core/common/common.js';
import * as i18n from '../../core/i18n/i18n.js';
import * as Formatter from '../../models/formatter/formatter.js';
import * as Persistence from '../../models/persistence/persistence.js';
import * as Workspace from '../../models/workspace/workspace.js';
import type * as SourceFrame from '../../ui/legacy/components/source_frame/source_frame.js';
import * as UI from '../../ui/legacy/legacy.js';

import {
  type EditorAction,
  type EditorClosedEvent,
  Events,
  registerEditorAction,
  type SourcesView,
} from './SourcesView.js';

const UIStrings = {
  /**
   *@description Title of the format button in the Sources panel
   *@example {file name} PH1
   */
  formatS: 'Format {PH1}',
  /**
   *@description Tooltip text that appears when hovering over the largeicon pretty print button in the Inplace Formatter Editor Action of the Sources panel
   */
  format: 'Format',
};
const str_ = i18n.i18n.registerUIStrings('panels/sources/InplaceFormatterEditorAction.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);

let inplaceFormatterEditorActionInstance: InplaceFormatterEditorAction;

export class InplaceFormatterEditorAction implements EditorAction {
  private button!: UI.Toolbar.ToolbarButton;
  private sourcesView!: SourcesView;
  private uiSourceCodeTitleChangedEvent: Common.EventTarget.EventDescriptor|null = null;
  constructor() {
  }
  static instance(opts: {
    forceNew: boolean|null,
  } = {forceNew: null}): InplaceFormatterEditorAction {
    const {forceNew} = opts;
    if (!inplaceFormatterEditorActionInstance || forceNew) {
      inplaceFormatterEditorActionInstance = new InplaceFormatterEditorAction();
    }

    return inplaceFormatterEditorActionInstance;
  }

  private editorSelected(event: Common.EventTarget.EventTargetEvent<Workspace.UISourceCode.UISourceCode>): void {
    const uiSourceCode = event.data;
    this.updateButton(uiSourceCode);
  }

  private editorClosed(event: Common.EventTarget.EventTargetEvent<EditorClosedEvent>): void {
    const {wasSelected} = event.data;
    if (wasSelected) {
      this.updateButton(null);
    }
  }

  private updateButton(uiSourceCode: Workspace.UISourceCode.UISourceCode|null): void {
    if (this.uiSourceCodeTitleChangedEvent) {
      Common.EventTarget.removeEventListeners([this.uiSourceCodeTitleChangedEvent]);
    }
    this.uiSourceCodeTitleChangedEvent = uiSourceCode ?
        uiSourceCode.addEventListener(
            Workspace.UISourceCode.Events.TitleChanged, event => this.updateButton(event.data), this) :
        null;
    const isFormattable = this.isFormattable(uiSourceCode);
    this.button.element.classList.toggle('hidden', !isFormattable);
    if (uiSourceCode && isFormattable) {
      this.button.setTitle(i18nString(UIStrings.formatS, {PH1: uiSourceCode.name()}));
    }
  }

  getOrCreateButton(sourcesView: SourcesView): UI.Toolbar.ToolbarButton {
    if (this.button) {
      return this.button;
    }

    this.sourcesView = sourcesView;
    this.sourcesView.addEventListener(Events.EditorSelected, this.editorSelected.bind(this));
    this.sourcesView.addEventListener(Events.EditorClosed, this.editorClosed.bind(this));

    this.button = new UI.Toolbar.ToolbarButton(i18nString(UIStrings.format), 'brackets');
    this.button.addEventListener(UI.Toolbar.ToolbarButton.Events.Click, this.formatSourceInPlace, this);
    this.updateButton(sourcesView.currentUISourceCode());

    return this.button;
  }

  private isFormattable(uiSourceCode: Workspace.UISourceCode.UISourceCode|null): boolean {
    if (!uiSourceCode) {
      return false;
    }
    if (uiSourceCode.project().canSetFileContent()) {
      return true;
    }
    if (Persistence.Persistence.PersistenceImpl.instance().binding(uiSourceCode) !== null) {
      return true;
    }
    return false;
  }

  private formatSourceInPlace(): void {
    const uiSourceCode = this.sourcesView.currentUISourceCode();
    if (!uiSourceCode || !this.isFormattable(uiSourceCode)) {
      return;
    }

    if (uiSourceCode.isDirty()) {
      void this.contentLoaded(uiSourceCode, uiSourceCode.workingCopy());
    } else {
      void uiSourceCode.requestContent().then(deferredContent => {
        void this.contentLoaded((uiSourceCode as Workspace.UISourceCode.UISourceCode), deferredContent.content || '');
      });
    }
  }

  private async contentLoaded(uiSourceCode: Workspace.UISourceCode.UISourceCode, content: string): Promise<void> {
    const highlighterType = uiSourceCode.mimeType();
    const {formattedContent, formattedMapping} =
        await Formatter.ScriptFormatter.format(uiSourceCode.contentType(), highlighterType, content);
    this.formattingComplete(uiSourceCode, formattedContent, formattedMapping);
  }

  /**
   * Post-format callback
   */
  private formattingComplete(
      uiSourceCode: Workspace.UISourceCode.UISourceCode, formattedContent: string,
      formatterMapping: Formatter.ScriptFormatter.FormatterSourceMapping): void {
    if (uiSourceCode.workingCopy() === formattedContent) {
      return;
    }
    const sourceFrame = (this.sourcesView.viewForFile(uiSourceCode) as SourceFrame.SourceFrame.SourceFrameImpl);
    let start: number[]|number[] = [0, 0];
    if (sourceFrame) {
      const selection = sourceFrame.textEditor.toLineColumn(sourceFrame.textEditor.state.selection.main.head);
      start = formatterMapping.originalToFormatted(selection.lineNumber, selection.columnNumber);
    }
    uiSourceCode.setWorkingCopy(formattedContent);

    this.sourcesView.showSourceLocation(uiSourceCode, {lineNumber: start[0], columnNumber: start[1]});
  }
}

registerEditorAction(InplaceFormatterEditorAction.instance);
