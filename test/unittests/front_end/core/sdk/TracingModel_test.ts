// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const {assert} = chai;

import * as SDK from '../../../../../front_end/core/sdk/sdk.js';
import * as TraceEngine from '../../../../../front_end/models/trace/trace.js';
import {describeWithEnvironment} from '../../helpers/EnvironmentHelpers.js';
import {loadTraceEventsLegacyEventPayload, allModelsFromFile} from '../../helpers/TraceHelpers.js';
import {StubbedThread, makeFakeEventPayload} from '../../helpers/TimelineHelpers.js';

describeWithEnvironment('TracingModel', () => {
  it('can create events from an EventPayload[] and finds the correct number of processes', async () => {
    const events = await loadTraceEventsLegacyEventPayload('basic.json.gz');
    const model = new SDK.TracingModel.TracingModel();
    model.addEvents(events);
    assert.strictEqual(model.sortedProcesses().length, 4);
  });

  describe('parsing trace events with unusual characters and large snapshots', () => {
    function setupAndReturnMainThread(): SDK.TracingModel.Thread {
      const testEvents = [
        makeFakeEventPayload({
          name: 'NonAscii',
          categories: ['devtools.timeline'],
          ts: 1,
          ph: TraceEngine.Types.TraceEvents.Phase.COMPLETE,
          args: {
            'nonascii':
                '\u043b\u0435\u0442 \u043c\u0438 \u0441\u043f\u0438\u043a \u0444\u0440\u043e\u043c \u043c\u0430\u0439 \u0445\u0430\u0440\u0442',
          },
        }),
        makeFakeEventPayload({
          name: 'NonAsciiSnapshot',
          categories: ['devtools.timeline'],
          args: {'snapshot': '\u0442\u0435\u0441\u0442'},
          ts: 1,
          ph: TraceEngine.Types.TraceEvents.Phase.OBJECT_SNAPSHOT,
        }),
        makeFakeEventPayload({
          name: 'ShortSnapshot',
          categories: ['devtools.timeline'],
          ts: 1,
          args: {'snapshot': 'short snapshot data'},
          ph: TraceEngine.Types.TraceEvents.Phase.OBJECT_SNAPSHOT,
        }),
        makeFakeEventPayload({
          name: 'LongSnapshot',
          categories: ['devtools.timeline'],
          args: {'snapshot': 'abcdef'.repeat(10_000)},
          ts: 1,
          ph: TraceEngine.Types.TraceEvents.Phase.OBJECT_SNAPSHOT,
        }),
      ];

      const model = new SDK.TracingModel.TracingModel();
      model.addEvents(testEvents);
      const process = model.sortedProcesses()[0];
      const thread = process.sortedThreads()[0];
      return thread;
    }

    it('can parse trace events with non ascii characters', async () => {
      const mainThread = setupAndReturnMainThread();
      const nonAsciiEvent = mainThread.events().find(event => event.name === 'NonAscii');
      if (!nonAsciiEvent) {
        throw new Error('Could not find expected NonAscii event');
      }
      assert.strictEqual(
          nonAsciiEvent.args.nonascii,
          '\u043b\u0435\u0442 \u043c\u0438 \u0441\u043f\u0438\u043a \u0444\u0440\u043e\u043c \u043c\u0430\u0439 \u0445\u0430\u0440\u0442');
    });

    it('can parse an event with a non ascii snapshot', async () => {
      const mainThread = setupAndReturnMainThread();
      const nonAsciiEvent =
          mainThread.events().find(event => event.name === 'NonAsciiSnapshot') as SDK.TracingModel.ObjectSnapshot;
      if (!nonAsciiEvent) {
        throw new Error('Could not find expected NonAscii event');
      }
      assert.isTrue(nonAsciiEvent instanceof SDK.TracingModel.ObjectSnapshot);
      const data = nonAsciiEvent.getSnapshot() as unknown as string;
      if (!data) {
        throw new Error('Could not get object from snapshot event');
      }
      assert.strictEqual(data, '\u0442\u0435\u0441\u0442');
    });

    it('can parse an event with a short snapshot', async () => {
      const mainThread = setupAndReturnMainThread();
      const snapshotEvent =
          mainThread.events().find(event => event.name === 'ShortSnapshot') as SDK.TracingModel.ObjectSnapshot;
      if (!snapshotEvent) {
        throw new Error('Could not find expected snapshot event');
      }
      assert.isTrue(snapshotEvent instanceof SDK.TracingModel.ObjectSnapshot);
      const data = snapshotEvent.getSnapshot() as unknown as string;
      if (!data) {
        throw new Error('Could not get object from snapshot event');
      }
      assert.strictEqual(data, 'short snapshot data');
    });
    it('can parse an event with a long snapshot', async () => {
      const mainThread = setupAndReturnMainThread();
      const snapshotEvent =
          mainThread.events().find(event => event.name === 'LongSnapshot') as SDK.TracingModel.ObjectSnapshot;
      if (!snapshotEvent) {
        throw new Error('Could not find expected snapshot event');
      }
      assert.isTrue(snapshotEvent instanceof SDK.TracingModel.ObjectSnapshot);
      const data = snapshotEvent.getSnapshot() as unknown as string;
      if (!data) {
        throw new Error('Could not get object from snapshot event');
      }
      assert.strictEqual(data, 'abcdef'.repeat(10_000));
    });
  });

  describe('fromPayload', () => {
    it('can create an event from a payload for an LCP candidate event', async () => {
      const rawEvents = await loadTraceEventsLegacyEventPayload('lcp-images.json.gz');
      // Find an event to test with; pick the first LCP event so it is an event
      // we understand and we get the same event each time.
      const firstLCPEventPayload = rawEvents.find(event => {
        return event.name === 'largestContentfulPaint::Candidate';
      });
      if (!firstLCPEventPayload) {
        throw new Error('Could not find LCP event');
      }
      const fakeThread = StubbedThread.make(firstLCPEventPayload.tid);
      const event = SDK.TracingModel.PayloadEvent.fromPayload(firstLCPEventPayload, fakeThread);
      assert.deepEqual(event.args, firstLCPEventPayload.args);
      assert.deepEqual(event.name, firstLCPEventPayload.name);
      assert.strictEqual(event.startTime, firstLCPEventPayload.ts / 1000);
    });

    it('stores the event ID if it has one', async () => {
      const rawEvents = await loadTraceEventsLegacyEventPayload('lcp-images.json.gz');
      // Find an event to test with; pick the first LCP event so it is an event
      // we understand and we get the same event each time.
      const firstLCPEventPayload = rawEvents.find(event => {
        return event.name === 'largestContentfulPaint::Candidate';
      });
      if (!firstLCPEventPayload) {
        throw new Error('Could not find LCP event');
      }
      // Set an ID property to test the behaviour, even though LCP Candidate
      // events do not have an ID field.
      firstLCPEventPayload.id = 'test-id';
      const fakeThread = StubbedThread.make(firstLCPEventPayload.tid);
      const event = SDK.TracingModel.PayloadEvent.fromPayload(firstLCPEventPayload, fakeThread);
      assert.deepEqual(event.id, firstLCPEventPayload.id);
    });

    it('stores the raw payload and you can retrieve it', async () => {
      const rawEvents = await loadTraceEventsLegacyEventPayload('lcp-images.json.gz');
      // Find an event to test with; pick the first LCP event so it is an event
      // we understand and we get the same event each time.
      const firstLCPEventPayload = rawEvents.find(event => {
        return event.name === 'largestContentfulPaint::Candidate';
      });
      if (!firstLCPEventPayload) {
        throw new Error('Could not find LCP event');
      }
      const fakeThread = StubbedThread.make(firstLCPEventPayload.tid);
      const event = SDK.TracingModel.PayloadEvent.fromPayload(firstLCPEventPayload, fakeThread);
      assert.strictEqual(event.rawLegacyPayload(), firstLCPEventPayload);
    });

    it('sets the begin and end time correctly for an event with a duration', async () => {
      const rawEvents = await loadTraceEventsLegacyEventPayload('animation.json.gz');
      // Use a RunTask which will always have a ts (start) and dur.
      const firstRunTask = rawEvents.find(event => {
        return event.name === 'RunTask';
      });
      if (!firstRunTask) {
        throw new Error('Could not find run task');
      }
      const fakeThread = StubbedThread.make(firstRunTask.tid);
      const event = SDK.TracingModel.PayloadEvent.fromPayload(firstRunTask, fakeThread);
      assert.strictEqual(event.startTime, firstRunTask.ts / 1000);
      assert.strictEqual(event.endTime, (firstRunTask.ts + firstRunTask.dur) / 1000);
    });
  });

  describe('extractID', () => {
    it('can extract the ID from the id field if it exists', async () => {
      const fakePayload = {
        id: '123',
      } as unknown as SDK.TracingManager.EventPayload;
      assert.strictEqual(SDK.TracingModel.TracingModel.extractId(fakePayload), '123');
    });

    it('prepends the scope to the id if it is present', async () => {
      const fakePayload = {
        id: '123',
        scope: 'test-scope',
      } as unknown as SDK.TracingManager.EventPayload;
      assert.strictEqual(SDK.TracingModel.TracingModel.extractId(fakePayload), 'test-scope@123');
    });

    it('prioritises the id2 global field over id if they are both present', async () => {
      const fakePayload = {
        id: '123',
        id2: {
          global: 'global-id',
        },
        scope: 'test-scope',
      } as unknown as SDK.TracingManager.EventPayload;
      assert.strictEqual(SDK.TracingModel.TracingModel.extractId(fakePayload), ':test-scope:global-id');
    });

    it('prioritises the id2 local field over id if they are both present, and includes the PID of the event',
       async () => {
         const fakePayload = {
           id: '123',
           id2: {
             local: 'local-id',
           },
           pid: 'test-pid',
           scope: 'test-scope',
         } as unknown as SDK.TracingManager.EventPayload;
         assert.strictEqual(SDK.TracingModel.TracingModel.extractId(fakePayload), ':test-scope:test-pid:local-id');
       });

    it('logs an error and returns undefined if the id2 object has both global and local keys', async () => {
      const fakePayload = {
        id: '123',
        id2: {
          local: 'local-id',
          global: 'global-id',
        },
        pid: 'test-pid',
        scope: 'test-scope',
        ts: 1000,
      } as unknown as SDK.TracingManager.EventPayload;
      const consoleErrorStub = sinon.stub(console, 'error');
      assert.isUndefined(SDK.TracingModel.TracingModel.extractId(fakePayload));
      assert(consoleErrorStub.calledWithExactly(
          // The number 1 here is the timestamp divided by 1000.
          'Unexpected id2 field at 1, one and only one of \'local\' and \'global\' should be present.'));
    });
  });

  it('finds the browser main thread from the tracing model', async () => {
    const {tracingModel} = await allModelsFromFile('web-dev.json.gz');
    const mainThread = SDK.TracingModel.TracingModel.browserMainThread(tracingModel);
    assert.strictEqual(mainThread?.id(), 775);
    assert.strictEqual(mainThread?.name(), 'CrBrowserMain');
  });
});
