import type * as ModelHandlers from './ModelHandlers.js';
import * as Types from '../types/types.js';
export interface TraceEventHandler {
    reset(): void;
    initialize?(freshRecording?: boolean): void;
    handleEvent(data: {}): void;
    finalize?(): Promise<void>;
    data(): unknown;
    deps?(): TraceEventHandlerName[];
}
export type TraceEventHandlerName = keyof typeof ModelHandlers;
export type EnabledHandlerDataWithMeta<T extends {
    [key: string]: TraceEventHandler;
}> = {
    Meta: Readonly<ReturnType<typeof ModelHandlers['Meta']['data']>>;
} & {
    [K in keyof T]: Readonly<ReturnType<T[K]['data']>>;
};
export type HandlersWithMeta<T extends {
    [key: string]: TraceEventHandler;
}> = {
    Meta: typeof ModelHandlers.Meta;
} & {
    [K in keyof T]: T[K];
};
export type TraceParseData = Readonly<EnabledHandlerDataWithMeta<typeof ModelHandlers>>;
export type Handlers = typeof ModelHandlers;
export declare const enum HandlerState {
    UNINITIALIZED = 1,
    INITIALIZED = 2,
    FINALIZED = 3
}
export declare const enum EventCategory {
    Parse = "Parse",
    V8 = "V8",
    Js = "Js",
    Gc = "Gc",
    Layout = "Layout",
    Paint = "Paint",
    Load = "Load",
    Other = "Other"
}
export declare const KNOWN_EVENTS: Map<Types.TraceEvents.KnownEventName, {
    category: EventCategory;
    label: string;
}>;
