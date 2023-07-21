// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as i18n from '../../../../core/i18n/i18n.js';
import { assertNotNullOrUndefined } from '../../../../core/platform/platform.js';
import * as SDK from '../../../../core/sdk/sdk.js';
import * as Logs from '../../../../models/logs/logs.js';
import * as Buttons from '../../../../ui/components/buttons/buttons.js';
import * as ComponentHelpers from '../../../../ui/components/helpers/helpers.js';
import * as LegacyWrapper from '../../../../ui/components/legacy_wrapper/legacy_wrapper.js';
import * as Coordinator from '../../../../ui/components/render_coordinator/render_coordinator.js';
import * as ReportView from '../../../../ui/components/report_view/report_view.js';
import * as RequestLinkIcon from '../../../../ui/components/request_link_icon/request_link_icon.js';
import * as UI from '../../../../ui/legacy/legacy.js';
import * as LitHtml from '../../../../ui/lit-html/lit-html.js';
import preloadingDetailsReportViewStyles from './preloadingDetailsReportView.css.js';
import { prefetchFailureReason, prerenderFailureReason } from './PreloadingString.js';
const UIStrings = {
    /**
     *@description Text in PreloadingDetailsReportView of the Application panel
     */
    selectAnElementForMoreDetails: 'Select an element for more details',
    /**
     *@description Text in details
     */
    detailsDetailedInformation: 'Detailed information',
    /**
     *@description Text in details
     */
    detailsAction: 'Action',
    /**
     *@description Text in details
     */
    detailsStatus: 'Status',
    /**
     *@description Text in details
     */
    detailsFailureReason: 'Failure reason',
    /**
     *@description Header of rule set
     */
    detailsRuleSet: 'Rule set',
    /**
     *@description Description: status
     */
    detailedStatusNotTriggered: 'Preloading attempt is not yet triggered.',
    /**
     *@description Description: status
     */
    detailedStatusPending: 'Preloading attempt is eligible but pending.',
    /**
     *@description Description: status
     */
    detailedStatusRunning: 'Preloading is running.',
    /**
     *@description Description: status
     */
    detailedStatusReady: 'Preloading finished and the result is ready for the next navigation.',
    /**
     *@description Description: status
     */
    detailedStatusSuccess: 'Preloading finished and used for a navigation.',
    /**
     *@description Description: status
     */
    detailedStatusFailure: 'Preloading failed.',
    /**
     *@description button: Contents of button to inspect prerendered page
     */
    buttonInspect: 'Inspect',
    /**
     *@description button: Title of button to inspect prerendered page
     */
    buttonClickToInspect: 'Click to inspect prerendered page',
    /**
     *@description button: Contents of button to activate prerendered page
     */
    buttonActivate: 'Activate',
    /**
     *@description button: Title of button to activate prerendered page
     */
    buttonClickToActivate: 'Click to activate prerendered page',
};
const str_ = i18n.i18n.registerUIStrings('panels/application/preloading/components/PreloadingDetailsReportView.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
class PreloadingUIUtils {
    static action({ key }) {
        // Use "prefetch"/"prerender" as is in SpeculationRules.
        switch (key.action) {
            case "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */:
                return i18n.i18n.lockedString('prefetch');
            case "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */:
                return i18n.i18n.lockedString('prerender');
        }
    }
    static detailedStatus({ status }) {
        // See content/public/browser/preloading.h PreloadingAttemptOutcome.
        switch (status) {
            case "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */:
                return i18nString(UIStrings.detailedStatusNotTriggered);
            case "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */:
                return i18nString(UIStrings.detailedStatusPending);
            case "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */:
                return i18nString(UIStrings.detailedStatusRunning);
            case "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */:
                return i18nString(UIStrings.detailedStatusReady);
            case "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */:
                return i18nString(UIStrings.detailedStatusSuccess);
            case "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */:
                return i18nString(UIStrings.detailedStatusFailure);
            // NotSupported is used to handle unreachable case. For example,
            // there is no code path for
            // PreloadingTriggeringOutcome::kTriggeredButPending in prefetch,
            // which is mapped to NotSupported. So, we regard it as an
            // internal error.
            case "NotSupported" /* SDK.PreloadingModel.PreloadingStatus.NotSupported */:
                return i18n.i18n.lockedString('Internal error');
        }
    }
}
const coordinator = Coordinator.RenderCoordinator.RenderCoordinator.instance();
export class PreloadingDetailsReportView extends LegacyWrapper.LegacyWrapper.WrappableComponent {
    static litTagName = LitHtml.literal `devtools-resources-preloading-details-report-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = null;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [preloadingDetailsReportViewStyles];
    }
    set data(data) {
        this.#data = data;
        void this.#render();
    }
    async #render() {
        await coordinator.write('PreloadingDetailsReportView render', () => {
            if (this.#data === null) {
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                LitHtml.render(LitHtml.html `
          <div class="preloading-noselected">
            <div>
              <p>${i18nString(UIStrings.selectAnElementForMoreDetails)}</p>
            </div>
          </div>
        `, this.#shadow, { host: this });
                // clang-format on
                return;
            }
            const detailedStatus = PreloadingUIUtils.detailedStatus(this.#data.preloadingAttempt);
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            LitHtml.render(LitHtml.html `
        <${ReportView.ReportView.Report.litTagName} .data=${{ reportTitle: 'Preloading Attempt' }}>
          <${ReportView.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.detailsDetailedInformation)}</${ReportView.ReportView.ReportSectionHeader.litTagName}>

          ${this.#url()}
          ${this.#action()}

          <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsStatus)}</${ReportView.ReportView.ReportKey.litTagName}>
          <${ReportView.ReportView.ReportValue.litTagName}>
            ${detailedStatus}
          </${ReportView.ReportView.ReportValue.litTagName}>

          ${this.#maybePrefetchFailureReason()}
          ${this.#maybePrerenderFailureReason()}

          ${this.#data.ruleSets.map(ruleSet => this.#renderRuleSet(ruleSet))}
        </${ReportView.ReportView.Report.litTagName}>
      `, this.#shadow, { host: this });
            // clang-format on
        });
    }
    #url() {
        assertNotNullOrUndefined(this.#data);
        const attempt = this.#data.preloadingAttempt;
        let value;
        if (attempt.action === "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ && attempt.requestId !== undefined) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            value = LitHtml.html `
          <${RequestLinkIcon.RequestLinkIcon.RequestLinkIcon.litTagName}
            .data=${{
                affectedRequest: {
                    requestId: attempt.requestId,
                    url: attempt.key.url,
                },
                requestResolver: this.#data.requestResolver || new Logs.RequestResolver.RequestResolver(),
                displayURL: true,
                urlToDisplay: attempt.key.url,
            }}
          >
          </${RequestLinkIcon.RequestLinkIcon.RequestLinkIcon.litTagName}>
      `;
        }
        else {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            value = LitHtml.html `
          <div class="text-ellipsis" title=${attempt.key.url}>${attempt.key.url}</div>
      `;
            // clang-format on
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return LitHtml.html `
        <${ReportView.ReportView.ReportKey.litTagName}>${i18n.i18n.lockedString('URL')}</${ReportView.ReportView.ReportKey.litTagName}>
        <${ReportView.ReportView.ReportValue.litTagName}>
          ${value}
        </${ReportView.ReportView.ReportValue.litTagName}>
    `;
        // clang-format on
    }
    #action() {
        assertNotNullOrUndefined(this.#data);
        const attempt = this.#data.preloadingAttempt;
        const action = PreloadingUIUtils.action(this.#data.preloadingAttempt);
        let maybeInspectButton = LitHtml.nothing;
        (() => {
            if (attempt.action !== "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */) {
                return;
            }
            const target = SDK.TargetManager.TargetManager.instance().primaryPageTarget();
            if (target === null) {
                return;
            }
            const prerenderTarget = SDK.TargetManager.TargetManager.instance().targets().find(child => child.targetInfo()?.subtype === 'prerender' && child.inspectedURL() === attempt.key.url);
            const disabled = (prerenderTarget === undefined);
            const inspect = () => {
                if (prerenderTarget === undefined) {
                    return;
                }
                UI.Context.Context.instance().setFlavor(SDK.Target.Target, prerenderTarget);
            };
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            maybeInspectButton = LitHtml.html `
          <${Buttons.Button.Button.litTagName}
            @click=${inspect}
            .title=${i18nString(UIStrings.buttonClickToInspect)}
            .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
            .variant=${"secondary" /* Buttons.Button.Variant.SECONDARY */}
            .disabled=${disabled}
          >
            ${i18nString(UIStrings.buttonInspect)}
          </${Buttons.Button.Button.litTagName}>
      `;
            // clang-format on
        })();
        let maybeActivateButton = LitHtml.nothing;
        (() => {
            if (attempt.action !== "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */) {
                return;
            }
            const target = SDK.TargetManager.TargetManager.instance().scopeTarget();
            if (target === null) {
                return;
            }
            // Prevents prerender activation for non primary targets.
            if (target !== SDK.TargetManager.TargetManager.instance().primaryPageTarget()) {
                return;
            }
            const disabled = (attempt.status !== "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */);
            const activate = () => {
                void target.pageAgent().invoke_navigate({ url: attempt.key.url });
            };
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            maybeActivateButton = LitHtml.html `
          <${Buttons.Button.Button.litTagName}
            @click=${activate}
            .title=${i18nString(UIStrings.buttonClickToActivate)}
            .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
            .variant=${"secondary" /* Buttons.Button.Variant.SECONDARY */}
            .disabled=${disabled}
          >
            ${i18nString(UIStrings.buttonActivate)}
          </${Buttons.Button.Button.litTagName}>
      `;
            // clang-format on
        })();
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return LitHtml.html `
        <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsAction)}</${ReportView.ReportView.ReportKey.litTagName}>
        <${ReportView.ReportView.ReportValue.litTagName}>
          <div class="text-ellipsis" title="">
            ${action}
            ${maybeInspectButton}
            ${maybeActivateButton}
          </div>
        </${ReportView.ReportView.ReportValue.litTagName}>
    `;
        // clang-format on
    }
    #maybePrefetchFailureReason() {
        assertNotNullOrUndefined(this.#data);
        const attempt = this.#data.preloadingAttempt;
        if (attempt.action !== "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */) {
            return LitHtml.nothing;
        }
        const failureDescription = prefetchFailureReason(attempt);
        if (failureDescription === null) {
            return LitHtml.nothing;
        }
        return LitHtml.html `
        <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsFailureReason)}</${ReportView.ReportView.ReportKey.litTagName}>
        <${ReportView.ReportView.ReportValue.litTagName}>
          ${failureDescription}
        </${ReportView.ReportView.ReportValue.litTagName}>
    `;
    }
    #maybePrerenderFailureReason() {
        assertNotNullOrUndefined(this.#data);
        const attempt = this.#data.preloadingAttempt;
        if (attempt.action !== "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */) {
            return LitHtml.nothing;
        }
        const failureReason = prerenderFailureReason(attempt);
        if (failureReason === null) {
            return LitHtml.nothing;
        }
        return LitHtml.html `
        <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsFailureReason)}</${ReportView.ReportView.ReportKey.litTagName}>
        <${ReportView.ReportView.ReportValue.litTagName}>
          ${failureReason}
        </${ReportView.ReportView.ReportValue.litTagName}>
    `;
    }
    #renderRuleSet(ruleSet) {
        // We can assume `sourceText` is a valid JSON because this triggered the preloading attempt.
        const json = JSON.stringify(JSON.parse(ruleSet.sourceText));
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return LitHtml.html `
          <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.detailsRuleSet)}</${ReportView.ReportView.ReportKey.litTagName}>
          <${ReportView.ReportView.ReportValue.litTagName}>
            <div class="text-ellipsis" title="">
              ${json}
            </div>
          </${ReportView.ReportView.ReportValue.litTagName}>
    `;
        // clang-format on
    }
}
ComponentHelpers.CustomElements.defineComponent('devtools-resources-preloading-details-report-view', PreloadingDetailsReportView);
//# sourceMappingURL=PreloadingDetailsReportView.js.map