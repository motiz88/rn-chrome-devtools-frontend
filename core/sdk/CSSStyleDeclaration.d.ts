import * as TextUtils from '../../models/text_utils/text_utils.js';
import type * as Protocol from '../../generated/protocol.js';
import { type CSSModel, type Edit } from './CSSModel.js';
import { CSSProperty } from './CSSProperty.js';
import { type CSSRule } from './CSSRule.js';
import { type Target } from './Target.js';
export declare class CSSStyleDeclaration {
    #private;
    parentRule: CSSRule | null;
    styleSheetId: Protocol.CSS.StyleSheetId | undefined;
    range: TextUtils.TextRange.TextRange | null;
    cssText: string | undefined;
    type: Type;
    constructor(cssModel: CSSModel, parentRule: CSSRule | null, payload: Protocol.CSS.CSSStyle, type: Type);
    rebase(edit: Edit): void;
    leadingProperties(): CSSProperty[];
    target(): Target;
    cssModel(): CSSModel;
    allProperties(): CSSProperty[];
    hasActiveProperty(name: string): boolean;
    getPropertyValue(name: string): string;
    isPropertyImplicit(name: string): boolean;
    propertyAt(index: number): CSSProperty | null;
    pastLastSourcePropertyIndex(): number;
    newBlankProperty(index?: number): CSSProperty;
    setText(text: string, majorChange: boolean): Promise<boolean>;
    insertPropertyAt(index: number, name: string, value: string, userCallback?: ((arg0: boolean) => void)): void;
    appendProperty(name: string, value: string, userCallback?: ((arg0: boolean) => void)): void;
}
export declare enum Type {
    Regular = "Regular",
    Inline = "Inline",
    Attributes = "Attributes"
}
