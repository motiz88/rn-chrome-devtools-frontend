/**
 * Copyright 2020 Google Inc. All rights reserved.
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
import { debugError } from './util.js';
import { isErrorLike } from '../util/ErrorLike.js';
import { isNode } from '../environment.js';
import { assert } from '../util/assert.js';
import { CDPBrowser } from './Browser.js';
import { Connection } from './Connection.js';
import { getFetch } from './fetch.js';
const getWebSocketTransportClass = async () => {
    return isNode
        ? (await import('./NodeWebSocketTransport.js')).NodeWebSocketTransport
        : (await import('./BrowserWebSocketTransport.js'))
            .BrowserWebSocketTransport;
};
/**
 * Users should never call this directly; it's called when calling
 * `puppeteer.connect`.
 *
 * @internal
 */
export async function _connectToCDPBrowser(options) {
    const { browserWSEndpoint, browserURL, ignoreHTTPSErrors = false, defaultViewport = { width: 800, height: 600 }, transport, headers = {}, slowMo = 0, targetFilter, _isPageTarget: isPageTarget, } = options;
    assert(Number(!!browserWSEndpoint) + Number(!!browserURL) + Number(!!transport) ===
        1, 'Exactly one of browserWSEndpoint, browserURL or transport must be passed to puppeteer.connect');
    let connection;
    if (transport) {
        connection = new Connection('', transport, slowMo);
    }
    else if (browserWSEndpoint) {
        const WebSocketClass = await getWebSocketTransportClass();
        const connectionTransport = await WebSocketClass.create(browserWSEndpoint, headers);
        connection = new Connection(browserWSEndpoint, connectionTransport, slowMo);
    }
    else if (browserURL) {
        const connectionURL = await getWSEndpoint(browserURL);
        const WebSocketClass = await getWebSocketTransportClass();
        const connectionTransport = await WebSocketClass.create(connectionURL);
        connection = new Connection(connectionURL, connectionTransport, slowMo);
    }
    const version = await connection.send('Browser.getVersion');
    const product = version.product.toLowerCase().includes('firefox')
        ? 'firefox'
        : 'chrome';
    const { browserContextIds } = await connection.send('Target.getBrowserContexts');
    const browser = await CDPBrowser._create(product || 'chrome', connection, browserContextIds, ignoreHTTPSErrors, defaultViewport, undefined, () => {
        return connection.send('Browser.close').catch(debugError);
    }, targetFilter, isPageTarget);
    return browser;
}
async function getWSEndpoint(browserURL) {
    const endpointURL = new URL('/json/version', browserURL);
    const fetch = await getFetch();
    try {
        const result = await fetch(endpointURL.toString(), {
            method: 'GET',
        });
        if (!result.ok) {
            throw new Error(`HTTP ${result.statusText}`);
        }
        const data = await result.json();
        return data.webSocketDebuggerUrl;
    }
    catch (error) {
        if (isErrorLike(error)) {
            error.message =
                `Failed to fetch browser webSocket URL from ${endpointURL}: ` +
                    error.message;
        }
        throw error;
    }
}
//# sourceMappingURL=BrowserConnector.js.map