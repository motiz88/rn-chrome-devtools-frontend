"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _NodeWebSocketTransport_ws;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeWebSocketTransport = void 0;
/**
 * Copyright 2018 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ws_1 = __importDefault(require("ws"));
const version_js_1 = require("../generated/version.js");
/**
 * @internal
 */
class NodeWebSocketTransport {
    static create(url, headers) {
        return new Promise((resolve, reject) => {
            const ws = new ws_1.default(url, [], {
                followRedirects: true,
                perMessageDeflate: false,
                maxPayload: 256 * 1024 * 1024,
                headers: {
                    'User-Agent': `Puppeteer ${version_js_1.packageVersion}`,
                    ...headers,
                },
            });
            ws.addEventListener('open', () => {
                return resolve(new NodeWebSocketTransport(ws));
            });
            ws.addEventListener('error', reject);
        });
    }
    constructor(ws) {
        _NodeWebSocketTransport_ws.set(this, void 0);
        __classPrivateFieldSet(this, _NodeWebSocketTransport_ws, ws, "f");
        __classPrivateFieldGet(this, _NodeWebSocketTransport_ws, "f").addEventListener('message', event => {
            if (this.onmessage) {
                this.onmessage.call(null, event.data);
            }
        });
        __classPrivateFieldGet(this, _NodeWebSocketTransport_ws, "f").addEventListener('close', () => {
            if (this.onclose) {
                this.onclose.call(null);
            }
        });
        // Silently ignore all errors - we don't know what to do with them.
        __classPrivateFieldGet(this, _NodeWebSocketTransport_ws, "f").addEventListener('error', () => { });
    }
    send(message) {
        __classPrivateFieldGet(this, _NodeWebSocketTransport_ws, "f").send(message);
    }
    close() {
        __classPrivateFieldGet(this, _NodeWebSocketTransport_ws, "f").close();
    }
}
exports.NodeWebSocketTransport = NodeWebSocketTransport;
_NodeWebSocketTransport_ws = new WeakMap();
//# sourceMappingURL=NodeWebSocketTransport.js.map