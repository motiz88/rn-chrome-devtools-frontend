// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as i18n from '../../../../core/i18n/i18n.js';
import { assertNotNullOrUndefined } from '../../../../core/platform/platform.js';
import * as SDK from '../../../../core/sdk/sdk.js';
import * as ComponentHelpers from '../../../../ui/components/helpers/helpers.js';
import * as LegacyWrapper from '../../../../ui/components/legacy_wrapper/legacy_wrapper.js';
import * as Coordinator from '../../../../ui/components/render_coordinator/render_coordinator.js';
import * as ReportView from '../../../../ui/components/report_view/report_view.js';
import * as LitHtml from '../../../../ui/lit-html/lit-html.js';
import { prefetchFailureReason, prerenderFailureReason } from './PreloadingString.js';
const UIStrings = {
    /**
     *@description Title for the panel
     */
    preloadingUsedForThisPage: 'Preloading used for this page',
    /**
     *@description Label for failure reason of preloeading
     */
    detailsFailureReason: 'Failure reason',
    /**
     *@description Message that tells this page was prerendered.
     */
    downgradedPrefetchUsed: 'The initiating page attempted to prerender this page\'s URL. The prerender failed, but the resulting response body was still used as a prefetch.',
    /**
     *@description Message that tells this page was prefetched.
     */
    prefetchUsed: 'This page was successfully prefetched.',
    /**
     *@description Message that tells this page was prerendered.
     */
    prerenderUsed: 'This page was successfully prerendered.',
    /**
     *@description Message that tells this page was prefetched.
     */
    prefetchFailed: 'The initiating page attempted to prefetch this page\'s URL, but the prefetch failed, so a full navigation was performed instead.',
    /**
     *@description Message that tells this page was prerendered.
     */
    prerenderFailed: 'The initiating page attempted to prerender this page\'s URL, but the prerender failed, so a full navigation was performed instead.',
    /**
     *@description Message that tells this page was not preloaded.
     */
    noPreloads: 'The initiating page did not attempt to preload this page\'s URL.',
};
const str_ = i18n.i18n.registerUIStrings('panels/application/preloading/components/UsedPreloadingView.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = Coordinator.RenderCoordinator.RenderCoordinator.instance();
// TODO(crbug.com/1167717): Make this a const enum again
// eslint-disable-next-line rulesdir/const_enum
export var UsedKind;
(function (UsedKind) {
    UsedKind["DowngradedPrerenderToPrefetchAndUsed"] = "DowngradedPrerenderToPrefetchAndUsed";
    UsedKind["PrefetchUsed"] = "PrefetchUsed";
    UsedKind["PrerenderUsed"] = "PrerenderUsed";
    UsedKind["PrefetchFailed"] = "PrefetchFailed";
    UsedKind["PrerenderFailed"] = "PrerenderFailed";
    UsedKind["NoPreloads"] = "NoPreloads";
})(UsedKind || (UsedKind = {}));
export class UsedPreloadingView extends LegacyWrapper.LegacyWrapper.WrappableComponent {
    static litTagName = LitHtml.literal `devtools-resources-used-preloading-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = {
        pageURL: '',
        attempts: [],
    };
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [];
    }
    set data(data) {
        this.#data = data;
        void this.#render();
    }
    async #render() {
        await coordinator.write('UsedPreloadingView render', () => {
            LitHtml.render(this.#renderInternal(), this.#shadow, { host: this });
        });
    }
    #renderInternal() {
        const forThisPage = this.#data.attempts.filter(attempt => attempt.key.url === this.#data.pageURL);
        const prefetch = forThisPage.filter(attempt => attempt.key.action === "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */)[0];
        const prerender = forThisPage.filter(attempt => attempt.key.action === "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */)[0];
        let kind = UsedKind.NoPreloads;
        // Prerender -> prefetch downgrade case
        //
        // This code does not handle the case SpecRules designate these preloads rather than prerenderer automatically downgrade prerendering.
        // TODO(https://crbug.com/1410709): Improve this logic once automatic downgrade implemented.
        if (prerender?.status === "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ &&
            prefetch?.status === "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */) {
            kind = UsedKind.DowngradedPrerenderToPrefetchAndUsed;
        }
        else if (prefetch?.status === "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */) {
            kind = UsedKind.PrefetchUsed;
        }
        else if (prerender?.status === "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */) {
            kind = UsedKind.PrerenderUsed;
        }
        else if (prefetch?.status === "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */) {
            kind = UsedKind.PrefetchFailed;
        }
        else if (prerender?.status === "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */) {
            kind = UsedKind.PrerenderFailed;
        }
        else {
            kind = UsedKind.NoPreloads;
        }
        let basicMessage;
        switch (kind) {
            case UsedKind.DowngradedPrerenderToPrefetchAndUsed:
                basicMessage = i18nString(UIStrings.downgradedPrefetchUsed);
                break;
            case UsedKind.PrefetchUsed:
                basicMessage = i18nString(UIStrings.prefetchUsed);
                break;
            case UsedKind.PrerenderUsed:
                basicMessage = i18nString(UIStrings.prerenderUsed);
                break;
            case UsedKind.PrefetchFailed:
                basicMessage = i18nString(UIStrings.prefetchFailed);
                break;
            case UsedKind.PrerenderFailed:
                basicMessage = i18nString(UIStrings.prerenderFailed);
                break;
            case UsedKind.NoPreloads:
                basicMessage = i18nString(UIStrings.noPreloads);
                break;
        }
        let maybeFailureReasonMessage;
        if (kind === UsedKind.PrefetchFailed) {
            assertNotNullOrUndefined(prefetch);
            maybeFailureReasonMessage = prefetchFailureReason(prefetch);
        }
        else if (kind === UsedKind.PrerenderFailed || kind === UsedKind.DowngradedPrerenderToPrefetchAndUsed) {
            assertNotNullOrUndefined(prerender);
            maybeFailureReasonMessage = prerenderFailureReason(prerender);
        }
        let maybeFailureReason = LitHtml.nothing;
        if (maybeFailureReasonMessage !== undefined) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            maybeFailureReason = LitHtml.html `
        <${ReportView.ReportView.ReportSection.litTagName}>
          <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsFailureReason)}</${ReportView.ReportView.ReportKey.litTagName}>
          <${ReportView.ReportView.ReportValue.litTagName}>
            ${maybeFailureReasonMessage}
          </${ReportView.ReportView.ReportValue.litTagName}>
        </${ReportView.ReportView.ReportSection.litTagName}>
      `;
            // clang-format on
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return LitHtml.html `
      <${ReportView.ReportView.Report.litTagName} .data=${{ reportTitle: i18nString(UIStrings.preloadingUsedForThisPage) }}>
        <${ReportView.ReportView.ReportSection.litTagName}>
          ${basicMessage}
        </${ReportView.ReportView.ReportSection.litTagName}>

        ${maybeFailureReason}
      </${ReportView.ReportView.Report.litTagName}>
    `;
        // clang-format on
    }
}
ComponentHelpers.CustomElements.defineComponent('devtools-resources-used-preloading-view', UsedPreloadingView);
//# sourceMappingURL=UsedPreloadingView.js.map