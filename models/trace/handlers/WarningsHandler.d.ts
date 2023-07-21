import * as Types from '../types/types.js';
export interface WarningsData {
    perEvent: Map<Types.TraceEvents.TraceEventData, Warning[]>;
    perWarning: Map<Warning, Types.TraceEvents.TraceEventData[]>;
}
export type Warning = 'LONG_TASK' | 'IDLE_CALLBACK_OVER_TIME';
export declare function reset(): void;
export declare function handleEvent(event: Types.TraceEvents.TraceEventData): void;
export declare function data(): WarningsData;
