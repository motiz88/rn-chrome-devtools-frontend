import * as Common from '../../../../core/common/common.js';
import type * as Protocol from '../../../../generated/protocol.js';
import * as LegacyWrapper from '../../../../ui/components/legacy_wrapper/legacy_wrapper.js';
import type * as UI from '../../../../ui/legacy/legacy.js';
export declare const i18nString: (id: string, values?: import("../../../../core/i18n/i18nTypes.js").Values | undefined) => Common.UIString.LocalizedString;
export interface RuleSetGridRow {
    id: string;
    processLocalId: string;
    preloadsStatusSummary: string;
    ruleSetId: Protocol.Preload.RuleSetId;
    validity: string;
    location: string;
}
export declare class RuleSetGrid extends LegacyWrapper.LegacyWrapper.WrappableComponent<UI.Widget.VBox> {
    #private;
    static readonly litTagName: import("../../../../ui/lit-html/static.js").Static;
    connectedCallback(): void;
    update(rows: RuleSetGridRow[]): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-resources-ruleset-grid': RuleSetGrid;
    }
}
