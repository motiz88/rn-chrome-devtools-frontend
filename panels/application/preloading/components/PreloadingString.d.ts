import type * as SDK from '../../../../core/sdk/sdk.js';
import type * as Platform from '../../../../core/platform/platform.js';
export declare const PrefetchReasonDescription: {
    [key: string]: {
        name: () => Platform.UIString.LocalizedString;
    };
};
export declare function prefetchFailureReason({ prefetchStatus }: SDK.PreloadingModel.PrefetchAttempt): string | null;
export declare function prerenderFailureReason(attempt: SDK.PreloadingModel.PrerenderAttempt): string | null;
