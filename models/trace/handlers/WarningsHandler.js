// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Platform from '../../../core/platform/platform.js';
import * as Helpers from '../helpers/helpers.js';
import * as Types from '../types/types.js';
const warningsPerEvent = new Map();
const eventsPerWarning = new Map();
export function reset() {
    warningsPerEvent.clear();
}
function storeWarning(event, warning) {
    const existingWarnings = Platform.MapUtilities.getWithDefault(warningsPerEvent, event, () => []);
    existingWarnings.push(warning);
    warningsPerEvent.set(event, existingWarnings);
    const existingEvents = Platform.MapUtilities.getWithDefault(eventsPerWarning, warning, () => []);
    existingEvents.push(event);
    eventsPerWarning.set(warning, existingEvents);
}
export function handleEvent(event) {
    if (event.name === "RunTask" /* Types.TraceEvents.KnownEventName.RunTask */) {
        const longTaskThreshold = Helpers.Timing.millisecondsToMicroseconds(Types.Timing.MilliSeconds(50));
        const { duration } = Helpers.Timing.eventTimingsMicroSeconds(event);
        if (duration > longTaskThreshold) {
            storeWarning(event, 'LONG_TASK');
        }
        return;
    }
    if (Types.TraceEvents.isTraceEventFireIdleCallback(event)) {
        const { duration } = Helpers.Timing.eventTimingsMilliSeconds(event);
        if (duration > event.args.data.allottedMilliseconds) {
            storeWarning(event, 'IDLE_CALLBACK_OVER_TIME');
        }
    }
}
export function data() {
    return {
        perEvent: new Map(warningsPerEvent),
        perWarning: new Map(eventsPerWarning),
    };
}
//# sourceMappingURL=WarningsHandler.js.map