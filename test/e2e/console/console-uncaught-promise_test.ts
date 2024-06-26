// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import {assert} from 'chai';

import {getBrowserAndPages, getTestServerPort, goToResource} from '../../shared/helper.js';
import {describe, it} from '../../shared/mocha-extensions.js';
import {
  checkCommandStacktrace,
  getLastConsoleMessages,
  navigateToConsoleTab,
  typeIntoConsoleAndWaitForResult,
} from '../helpers/console-helpers.js';

describe('The Console Tab', async () => {
  // Flaky test
  it.skipOnPlatforms(['win32'], '[crbug.com/1443426]: is able to log uncaught promise rejections into console', async () => {
    await goToResource('../resources/console/console-uncaught-promise.html');
    await navigateToConsoleTab();

    await checkCommandStacktrace(
        'await promiseTest1();',
        `
        promiseTest1 @ console-uncaught-promise.html:3
        (anonymous) @ VM26:1
        Promise.then (async)
        promiseTest1 @ console-uncaught-promise.html:6
        (anonymous) @ VM26:1
      `,
    );

    await checkCommandStacktrace(
        'await promiseTest2();',
        `
        promiseTest2 @ console-uncaught-promise.html:23
        (anonymous) @ VM44:1
        Promise.then (async)
        (anonymous) @ console-uncaught-promise.html:19
        Promise.catch (async)
        (anonymous) @ console-uncaught-promise.html:18
        Promise.catch (async)
        (anonymous) @ console-uncaught-promise.html:17
        Promise.catch (async)
        promiseTest2 @ console-uncaught-promise.html:16
        (anonymous) @ VM44:1
      `,
    );

    await checkCommandStacktrace(
        'await promiseTest3();',
        `
        throwDOMException	@	console-uncaught-promise.html:39
        catcher	@	console-uncaught-promise.html:32
        Promise.catch (async)
        promiseTest3	@	console-uncaught-promise.html:31
        (anonymous)	@	VM66:1
      `,
    );

    await checkCommandStacktrace(
        'await promiseTest4();',
        `
        promiseTest4	@	console-uncaught-promise.html:44
        (anonymous)	@	VM86:1
      `,
    );

    await checkCommandStacktrace(
        'await promiseTest5();',
        `
        promiseTest5	@	console-uncaught-promise.html:48
        (anonymous)	@	VM104:1
      `,
    );

    await checkCommandStacktrace(
        'await promiseTest6();',
        `
        promiseTest6	@	console-uncaught-promise.html:52
        (anonymous)	@	VM122:1
      `,
    );

    await checkCommandStacktrace(
        'await promiseTest7();',
        `
        promiseTest7	@	console-uncaught-promise.html:56
        (anonymous)	@	VM138:1
      `,
    );

    await checkCommandStacktrace(
        'await promiseTest8();',
        `
        promiseTest8	@	console-uncaught-promise.html:60
        (anonymous)	@	VM150:1
      `,
    );

    await typeIntoConsoleAndWaitForResult(getBrowserAndPages().frontend, 'await promiseTest9();');
    assert.strictEqual(
        await getLastConsoleMessages(1),
        'A bad HTTP response code (404) was received when fetching the script.',
        'Error message was not displayed correctly for promiseTest9',
    );
    assert.strictEqual(
        await getLastConsoleMessages(0),
        `Uncaught (in promise) TypeError: Failed to register a ServiceWorker for scope (\'https://localhost:${
            getTestServerPort()}/test/e2e/resources/console/\') with script (\'https://localhost:${
            getTestServerPort()}/test/e2e/resources/console/404\'): A bad HTTP response code (404) was received when fetching the script.`,
        'Error message was not displayed correctly for promiseTest9',
    );
  });
});
