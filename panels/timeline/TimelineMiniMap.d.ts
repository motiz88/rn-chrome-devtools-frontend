import * as Common from '../../core/common/common.js';
import * as TraceEngine from '../../models/trace/trace.js';
import * as PerfUI from '../../ui/legacy/components/perf_ui/perf_ui.js';
import * as UI from '../../ui/legacy/legacy.js';
import { type PerformanceModel } from './PerformanceModel.js';
export interface OverviewData {
    performanceModel: PerformanceModel | null;
    traceParsedData: TraceEngine.Handlers.Migration.PartialTraceData | null;
    settings: {
        showScreenshots: boolean;
        showMemory: boolean;
    };
}
declare const TimelineMiniMap_base: (new (...args: any[]) => {
    "__#13@#events": Common.ObjectWrapper.ObjectWrapper<PerfUI.TimelineOverviewPane.EventTypes>;
    addEventListener<T extends PerfUI.TimelineOverviewPane.Events.WindowChanged>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<PerfUI.TimelineOverviewPane.EventTypes[T], any>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<PerfUI.TimelineOverviewPane.EventTypes, T>;
    once<T_1 extends PerfUI.TimelineOverviewPane.Events.WindowChanged>(eventType: T_1): Promise<PerfUI.TimelineOverviewPane.EventTypes[T_1]>;
    removeEventListener<T_2 extends PerfUI.TimelineOverviewPane.Events.WindowChanged>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<PerfUI.TimelineOverviewPane.EventTypes[T_2], any>) => void, thisObject?: Object | undefined): void;
    hasEventListeners(eventType: PerfUI.TimelineOverviewPane.Events.WindowChanged): boolean;
    dispatchEventToListeners<T_3 extends PerfUI.TimelineOverviewPane.Events.WindowChanged>(eventType: import("../../core/platform/typescript-utilities.js").NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<PerfUI.TimelineOverviewPane.EventTypes, T_3>): void;
}) & typeof UI.Widget.VBox;
/**
 * This component wraps the generic PerfUI Overview component and configures it
 * specifically for the Performance Panel, including injecting the CSS we use
 * to customise how the components render within the Performance Panel.
 */
export declare class TimelineMiniMap extends TimelineMiniMap_base {
    #private;
    constructor();
    wasShown(): void;
    reset(): void;
    setNavStartTimes(navStartTimes: Map<string, TraceEngine.Legacy.Event>): void;
    setBounds(min: number, max: number): void;
    setWindowTimes(left: number, right: number): void;
    setMarkers(markers: Map<number, Element>): void;
    updateControls(data: OverviewData): void;
}
export {};
