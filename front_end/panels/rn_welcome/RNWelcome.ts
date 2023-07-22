// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as UI from '../../ui/legacy/legacy.js';

import rnWelcomeStyles from './rnWelcome.css.js';
import * as LitHtml from '../../ui/lit-html/lit-html.js';

const UIStrings = {
  /** @description The name of the debugging product */
  debuggerBrandName: 'React Native DevTools',
  /** @description Welcome text */
  welcomeMessage: 'Welcome to debugging in React Native.',
  /** @description "Learn what's new" message */
  callToAction: "Learn what's new",
};
const {render, html} = LitHtml;

// const str_ = i18n.i18n.registerUIStrings('panels/rn_welcome/RNWelcome.ts', UIStrings);
// const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);

let rnWelcomeImplInstance: RNWelcomeImpl;

export class RNWelcomeImpl extends UI.Widget.VBox {
  static instance(opts: {forceNew: null|boolean} = {forceNew: null}): RNWelcomeImpl {
    const {forceNew} = opts;
    if (!rnWelcomeImplInstance || forceNew) {
      rnWelcomeImplInstance = new RNWelcomeImpl();
    }
    return rnWelcomeImplInstance;
  }

  private constructor() {
    super(true, true);
  }

  override wasShown(): void {
    super.wasShown();
    this.registerCSSFiles([rnWelcomeStyles]);
    this.render();
    UI.InspectorView.InspectorView.instance().showDrawer(true);
  }

  render(): void {
    render(html`
      <div class="rnWelcomeContainer">
        <div class="title">
          ${UIStrings.debuggerBrandName}
        </div>
        <div class="tagline">
          ${UIStrings.welcomeMessage}
        </div>
        <x-link class="cta" href="https://reactnative.dev/docs/next/debugging">
          ${UIStrings.callToAction}
        </x-link>
      </div>
    `, this.contentElement, {host: this});
  }
}
