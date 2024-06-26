"use strict";
/**
 * Copyright 2019 Google Inc. All rights reserved.
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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _IsolatedWorld_instances, _a, _IsolatedWorld_frame, _IsolatedWorld_document, _IsolatedWorld_context, _IsolatedWorld_detached, _IsolatedWorld_ctxBindings, _IsolatedWorld_boundFunctions, _IsolatedWorld_taskManager, _IsolatedWorld_bindingIdentifier, _IsolatedWorld_client_get, _IsolatedWorld_frameManager_get, _IsolatedWorld_timeoutSettings_get, _IsolatedWorld_settingUpBinding, _IsolatedWorld_onBindingCalled;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsolatedWorld = void 0;
const assert_js_1 = require("../util/assert.js");
const DeferredPromise_js_1 = require("../util/DeferredPromise.js");
const ErrorLike_js_1 = require("../util/ErrorLike.js");
const IsolatedWorlds_js_1 = require("./IsolatedWorlds.js");
const LifecycleWatcher_js_1 = require("./LifecycleWatcher.js");
const util_js_1 = require("./util.js");
const WaitTask_js_1 = require("./WaitTask.js");
const LazyArg_js_1 = require("./LazyArg.js");
/**
 * @internal
 */
class IsolatedWorld {
    get taskManager() {
        return __classPrivateFieldGet(this, _IsolatedWorld_taskManager, "f");
    }
    get _boundFunctions() {
        return __classPrivateFieldGet(this, _IsolatedWorld_boundFunctions, "f");
    }
    constructor(frame) {
        _IsolatedWorld_instances.add(this);
        _IsolatedWorld_frame.set(this, void 0);
        _IsolatedWorld_document.set(this, void 0);
        _IsolatedWorld_context.set(this, (0, DeferredPromise_js_1.createDeferredPromise)());
        _IsolatedWorld_detached.set(this, false);
        // Set of bindings that have been registered in the current context.
        _IsolatedWorld_ctxBindings.set(this, new Set());
        // Contains mapping from functions that should be bound to Puppeteer functions.
        _IsolatedWorld_boundFunctions.set(this, new Map());
        _IsolatedWorld_taskManager.set(this, new WaitTask_js_1.TaskManager());
        // If multiple waitFor are set up asynchronously, we need to wait for the
        // first one to set up the binding in the page before running the others.
        _IsolatedWorld_settingUpBinding.set(this, null);
        _IsolatedWorld_onBindingCalled.set(this, async (event) => {
            let payload;
            if (!this.hasContext()) {
                return;
            }
            const context = await this.executionContext();
            try {
                payload = JSON.parse(event.payload);
            }
            catch {
                // The binding was either called by something in the page or it was
                // called before our wrapper was initialized.
                return;
            }
            const { type, name, seq, args } = payload;
            if (type !== 'internal' ||
                !__classPrivateFieldGet(this, _IsolatedWorld_ctxBindings, "f").has(__classPrivateFieldGet(IsolatedWorld, _a, "f", _IsolatedWorld_bindingIdentifier).call(IsolatedWorld, name, context._contextId))) {
                return;
            }
            if (context._contextId !== event.executionContextId) {
                return;
            }
            try {
                const fn = this._boundFunctions.get(name);
                if (!fn) {
                    throw new Error(`Bound function $name is not found`);
                }
                const result = await fn(...args);
                await context.evaluate((name, seq, result) => {
                    // @ts-expect-error Code is evaluated in a different context.
                    const callbacks = self[name].callbacks;
                    callbacks.get(seq).resolve(result);
                    callbacks.delete(seq);
                }, name, seq, result);
            }
            catch (error) {
                // The WaitTask may already have been resolved by timing out, or the
                // execution context may have been destroyed.
                // In both caes, the promises above are rejected with a protocol error.
                // We can safely ignores these, as the WaitTask is re-installed in
                // the next execution context if needed.
                if (error.message.includes('Protocol error')) {
                    return;
                }
                (0, util_js_1.debugError)(error);
            }
        });
        // Keep own reference to client because it might differ from the FrameManager's
        // client for OOP iframes.
        __classPrivateFieldSet(this, _IsolatedWorld_frame, frame, "f");
        __classPrivateFieldGet(this, _IsolatedWorld_instances, "a", _IsolatedWorld_client_get).on('Runtime.bindingCalled', __classPrivateFieldGet(this, _IsolatedWorld_onBindingCalled, "f"));
    }
    frame() {
        return __classPrivateFieldGet(this, _IsolatedWorld_frame, "f");
    }
    clearContext() {
        __classPrivateFieldSet(this, _IsolatedWorld_document, undefined, "f");
        __classPrivateFieldSet(this, _IsolatedWorld_context, (0, DeferredPromise_js_1.createDeferredPromise)(), "f");
    }
    setContext(context) {
        __classPrivateFieldGet(this, _IsolatedWorld_ctxBindings, "f").clear();
        __classPrivateFieldGet(this, _IsolatedWorld_context, "f").resolve(context);
        __classPrivateFieldGet(this, _IsolatedWorld_taskManager, "f").rerunAll();
    }
    hasContext() {
        return __classPrivateFieldGet(this, _IsolatedWorld_context, "f").resolved();
    }
    _detach() {
        __classPrivateFieldSet(this, _IsolatedWorld_detached, true, "f");
        __classPrivateFieldGet(this, _IsolatedWorld_instances, "a", _IsolatedWorld_client_get).off('Runtime.bindingCalled', __classPrivateFieldGet(this, _IsolatedWorld_onBindingCalled, "f"));
        __classPrivateFieldGet(this, _IsolatedWorld_taskManager, "f").terminateAll(new Error('waitForFunction failed: frame got detached.'));
    }
    executionContext() {
        if (__classPrivateFieldGet(this, _IsolatedWorld_detached, "f")) {
            throw new Error(`Execution context is not available in detached frame "${__classPrivateFieldGet(this, _IsolatedWorld_frame, "f").url()}" (are you trying to evaluate?)`);
        }
        if (__classPrivateFieldGet(this, _IsolatedWorld_context, "f") === null) {
            throw new Error(`Execution content promise is missing`);
        }
        return __classPrivateFieldGet(this, _IsolatedWorld_context, "f");
    }
    async evaluateHandle(pageFunction, ...args) {
        const context = await this.executionContext();
        return context.evaluateHandle(pageFunction, ...args);
    }
    async evaluate(pageFunction, ...args) {
        const context = await this.executionContext();
        return context.evaluate(pageFunction, ...args);
    }
    async $(selector) {
        const document = await this.document();
        return document.$(selector);
    }
    async $$(selector) {
        const document = await this.document();
        return document.$$(selector);
    }
    async document() {
        if (__classPrivateFieldGet(this, _IsolatedWorld_document, "f")) {
            return __classPrivateFieldGet(this, _IsolatedWorld_document, "f");
        }
        const context = await this.executionContext();
        __classPrivateFieldSet(this, _IsolatedWorld_document, await context.evaluateHandle(() => {
            return document;
        }), "f");
        return __classPrivateFieldGet(this, _IsolatedWorld_document, "f");
    }
    async $x(expression) {
        const document = await this.document();
        return document.$x(expression);
    }
    async $eval(selector, pageFunction, ...args) {
        const document = await this.document();
        return document.$eval(selector, pageFunction, ...args);
    }
    async $$eval(selector, pageFunction, ...args) {
        const document = await this.document();
        return document.$$eval(selector, pageFunction, ...args);
    }
    async content() {
        return await this.evaluate(() => {
            let retVal = '';
            if (document.doctype) {
                retVal = new XMLSerializer().serializeToString(document.doctype);
            }
            if (document.documentElement) {
                retVal += document.documentElement.outerHTML;
            }
            return retVal;
        });
    }
    async setContent(html, options = {}) {
        const { waitUntil = ['load'], timeout = __classPrivateFieldGet(this, _IsolatedWorld_instances, "a", _IsolatedWorld_timeoutSettings_get).navigationTimeout(), } = options;
        // We rely upon the fact that document.open() will reset frame lifecycle with "init"
        // lifecycle event. @see https://crrev.com/608658
        await this.evaluate(html => {
            document.open();
            document.write(html);
            document.close();
        }, html);
        const watcher = new LifecycleWatcher_js_1.LifecycleWatcher(__classPrivateFieldGet(this, _IsolatedWorld_instances, "a", _IsolatedWorld_frameManager_get), __classPrivateFieldGet(this, _IsolatedWorld_frame, "f"), waitUntil, timeout);
        const error = await Promise.race([
            watcher.timeoutOrTerminationPromise(),
            watcher.lifecyclePromise(),
        ]);
        watcher.dispose();
        if (error) {
            throw error;
        }
    }
    async click(selector, options) {
        const handle = await this.$(selector);
        (0, assert_js_1.assert)(handle, `No element found for selector: ${selector}`);
        await handle.click(options);
        await handle.dispose();
    }
    async focus(selector) {
        const handle = await this.$(selector);
        (0, assert_js_1.assert)(handle, `No element found for selector: ${selector}`);
        await handle.focus();
        await handle.dispose();
    }
    async hover(selector) {
        const handle = await this.$(selector);
        (0, assert_js_1.assert)(handle, `No element found for selector: ${selector}`);
        await handle.hover();
        await handle.dispose();
    }
    async select(selector, ...values) {
        const handle = await this.$(selector);
        (0, assert_js_1.assert)(handle, `No element found for selector: ${selector}`);
        const result = await handle.select(...values);
        await handle.dispose();
        return result;
    }
    async tap(selector) {
        const handle = await this.$(selector);
        (0, assert_js_1.assert)(handle, `No element found for selector: ${selector}`);
        await handle.tap();
        await handle.dispose();
    }
    async type(selector, text, options) {
        const handle = await this.$(selector);
        (0, assert_js_1.assert)(handle, `No element found for selector: ${selector}`);
        await handle.type(text, options);
        await handle.dispose();
    }
    async _addBindingToContext(context, name) {
        // Previous operation added the binding so we are done.
        if (__classPrivateFieldGet(this, _IsolatedWorld_ctxBindings, "f").has(__classPrivateFieldGet(IsolatedWorld, _a, "f", _IsolatedWorld_bindingIdentifier).call(IsolatedWorld, name, context._contextId))) {
            return;
        }
        // Wait for other operation to finish
        if (__classPrivateFieldGet(this, _IsolatedWorld_settingUpBinding, "f")) {
            await __classPrivateFieldGet(this, _IsolatedWorld_settingUpBinding, "f");
            return this._addBindingToContext(context, name);
        }
        const bind = async (name) => {
            const expression = (0, util_js_1.pageBindingInitString)('internal', name);
            try {
                // TODO: In theory, it would be enough to call this just once
                await context._client.send('Runtime.addBinding', {
                    name,
                    executionContextName: context._contextName,
                });
                await context.evaluate(expression);
            }
            catch (error) {
                // We could have tried to evaluate in a context which was already
                // destroyed. This happens, for example, if the page is navigated while
                // we are trying to add the binding
                if (error instanceof Error) {
                    // Destroyed context.
                    if (error.message.includes('Execution context was destroyed')) {
                        return;
                    }
                    // Missing context.
                    if (error.message.includes('Cannot find context with specified id')) {
                        return;
                    }
                }
                (0, util_js_1.debugError)(error);
                return;
            }
            __classPrivateFieldGet(this, _IsolatedWorld_ctxBindings, "f").add(__classPrivateFieldGet(IsolatedWorld, _a, "f", _IsolatedWorld_bindingIdentifier).call(IsolatedWorld, name, context._contextId));
        };
        __classPrivateFieldSet(this, _IsolatedWorld_settingUpBinding, bind(name), "f");
        await __classPrivateFieldGet(this, _IsolatedWorld_settingUpBinding, "f");
        __classPrivateFieldSet(this, _IsolatedWorld_settingUpBinding, null, "f");
    }
    async _waitForSelectorInPage(queryOne, root, selector, options, bindings = new Map()) {
        const { visible: waitForVisible = false, hidden: waitForHidden = false, timeout = __classPrivateFieldGet(this, _IsolatedWorld_instances, "a", _IsolatedWorld_timeoutSettings_get).timeout(), } = options;
        try {
            const handle = await this.waitForFunction(async (PuppeteerUtil, query, selector, root, visible) => {
                if (!PuppeteerUtil) {
                    return;
                }
                const node = (await PuppeteerUtil.createFunction(query)(root || document, selector, PuppeteerUtil));
                return PuppeteerUtil.checkVisibility(node, visible);
            }, {
                bindings,
                polling: waitForVisible || waitForHidden ? 'raf' : 'mutation',
                root,
                timeout,
            }, LazyArg_js_1.LazyArg.create(context => {
                return context.puppeteerUtil;
            }), queryOne.toString(), selector, root, waitForVisible ? true : waitForHidden ? false : undefined);
            const elementHandle = handle.asElement();
            if (!elementHandle) {
                await handle.dispose();
                return null;
            }
            return elementHandle;
        }
        catch (error) {
            if (!(0, ErrorLike_js_1.isErrorLike)(error)) {
                throw error;
            }
            error.message = `Waiting for selector \`${selector}\` failed: ${error.message}`;
            throw error;
        }
    }
    waitForFunction(pageFunction, options = {}, ...args) {
        const { polling = 'raf', timeout = __classPrivateFieldGet(this, _IsolatedWorld_instances, "a", _IsolatedWorld_timeoutSettings_get).timeout(), bindings, root, } = options;
        if (typeof polling === 'number' && polling < 0) {
            throw new Error('Cannot poll with non-positive interval');
        }
        const waitTask = new WaitTask_js_1.WaitTask(this, {
            bindings,
            polling,
            root,
            timeout,
        }, pageFunction, ...args);
        return waitTask.result;
    }
    async title() {
        return this.evaluate(() => {
            return document.title;
        });
    }
    async adoptBackendNode(backendNodeId) {
        const executionContext = await this.executionContext();
        const { object } = await __classPrivateFieldGet(this, _IsolatedWorld_instances, "a", _IsolatedWorld_client_get).send('DOM.resolveNode', {
            backendNodeId: backendNodeId,
            executionContextId: executionContext._contextId,
        });
        return (0, util_js_1.createJSHandle)(executionContext, object);
    }
    async adoptHandle(handle) {
        const executionContext = await this.executionContext();
        (0, assert_js_1.assert)(handle.executionContext() !== executionContext, 'Cannot adopt handle that already belongs to this execution context');
        const nodeInfo = await __classPrivateFieldGet(this, _IsolatedWorld_instances, "a", _IsolatedWorld_client_get).send('DOM.describeNode', {
            objectId: handle.remoteObject().objectId,
        });
        return (await this.adoptBackendNode(nodeInfo.node.backendNodeId));
    }
    async transferHandle(handle) {
        const result = await this.adoptHandle(handle);
        await handle.dispose();
        return result;
    }
}
exports.IsolatedWorld = IsolatedWorld;
_a = IsolatedWorld, _IsolatedWorld_frame = new WeakMap(), _IsolatedWorld_document = new WeakMap(), _IsolatedWorld_context = new WeakMap(), _IsolatedWorld_detached = new WeakMap(), _IsolatedWorld_ctxBindings = new WeakMap(), _IsolatedWorld_boundFunctions = new WeakMap(), _IsolatedWorld_taskManager = new WeakMap(), _IsolatedWorld_settingUpBinding = new WeakMap(), _IsolatedWorld_onBindingCalled = new WeakMap(), _IsolatedWorld_instances = new WeakSet(), _IsolatedWorld_client_get = function _IsolatedWorld_client_get() {
    return __classPrivateFieldGet(this, _IsolatedWorld_frame, "f")._client();
}, _IsolatedWorld_frameManager_get = function _IsolatedWorld_frameManager_get() {
    return __classPrivateFieldGet(this, _IsolatedWorld_frame, "f")._frameManager;
}, _IsolatedWorld_timeoutSettings_get = function _IsolatedWorld_timeoutSettings_get() {
    return __classPrivateFieldGet(this, _IsolatedWorld_instances, "a", _IsolatedWorld_frameManager_get).timeoutSettings;
};
_IsolatedWorld_bindingIdentifier = { value: (name, contextId) => {
        return `${name}_${contextId}`;
    } };
//# sourceMappingURL=IsolatedWorld.js.map