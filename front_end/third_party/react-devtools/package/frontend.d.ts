export type MessagePayload = null | string | number | boolean | {[key: string]: MessagePayload} | MessagePayload[];
export type Message = {event: string, payload?: MessagePayload};

export type WallListener = (message: Message) => void;
export type Wall = {
  listen: (fn: WallListener) => Function,
  send: (event: string, payload?: MessagePayload) => void,
};

export type Bridge = {
  shutdown: () => void,
};
export type Store = Object;
export type BrowserTheme = 'dark' | 'light';

export function createBridge(wall: Wall): Bridge;
export function createStore(bridge: Bridge): Store;

export type InitializationOptions = {
  bridge: Bridge,
  store: Store,
  theme?: BrowserTheme,
  viewElementSourceFunction?: (source: {sourceURL: string, line: number, column: number}, symbolicatedSource?: {sourceURL: string, line: number, column: number}) => void,
  canViewElementSourceFunction?: () => boolean,
};
export function initialize(node: Element | Document, options: InitializationOptions): void;

