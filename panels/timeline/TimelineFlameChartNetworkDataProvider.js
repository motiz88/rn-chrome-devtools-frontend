// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Common from '../../core/common/common.js';
import * as i18n from '../../core/i18n/i18n.js';
import * as Platform from '../../core/platform/platform.js';
import * as TraceEngine from '../../models/trace/trace.js';
import * as PerfUI from '../../ui/legacy/components/perf_ui/perf_ui.js';
import * as UI from '../../ui/legacy/legacy.js';
import * as ThemeSupport from '../../ui/legacy/theme_support/theme_support.js';
import { NetworkTrackAppender } from './NetworkTrackAppender.js';
import timelineFlamechartPopoverStyles from './timelineFlamechartPopover.css.js';
import { FlameChartStyle, Selection } from './TimelineFlameChartView.js';
import { TimelineSelection } from './TimelineSelection.js';
export class TimelineFlameChartNetworkDataProvider {
    #minimumBoundaryInternal;
    #timeSpan;
    #events;
    #maxLevel;
    #networkTrackAppender;
    #timelineDataInternal;
    #lastSelection;
    #priorityToValue;
    #traceEngineData;
    constructor() {
        this.#minimumBoundaryInternal = 0;
        this.#timeSpan = 0;
        this.#events = [];
        this.#maxLevel = 0;
        this.#networkTrackAppender = null;
        this.#traceEngineData = null;
    }
    setModel(traceEngineData) {
        this.#timelineDataInternal = null;
        this.#traceEngineData = traceEngineData;
        this.#events = traceEngineData?.NetworkRequests.byTime || [];
        if (this.#traceEngineData) {
            this.#setTimingBoundsData(this.#traceEngineData);
        }
    }
    isEmpty() {
        this.timelineData();
        return !this.#events.length;
    }
    maxStackDepth() {
        return this.#maxLevel;
    }
    timelineData() {
        if (this.#timelineDataInternal && this.#timelineDataInternal.entryLevels.length !== 0) {
            // The flame chart data is built already, so return the cached data.
            return this.#timelineDataInternal;
        }
        this.#timelineDataInternal = PerfUI.FlameChart.FlameChartTimelineData.createEmpty();
        if (!this.#traceEngineData) {
            return this.#timelineDataInternal;
        }
        this.#events = this.#traceEngineData.NetworkRequests.byTime;
        this.#networkTrackAppender = new NetworkTrackAppender(this.#traceEngineData, this.#timelineDataInternal);
        this.#maxLevel = this.#networkTrackAppender.appendTrackAtLevel(0);
        return this.#timelineDataInternal;
    }
    minimumBoundary() {
        return this.#minimumBoundaryInternal;
    }
    totalTime() {
        return this.#timeSpan;
    }
    setWindowTimes(startTime, endTime) {
        this.#updateTimelineData(startTime, endTime);
    }
    createSelection(index) {
        if (index === -1) {
            return null;
        }
        const event = this.#events[index];
        this.#lastSelection = new Selection(TimelineSelection.fromTraceEvent(event), index);
        return this.#lastSelection.timelineSelection;
    }
    entryIndexForSelection(selection) {
        if (!selection) {
            return -1;
        }
        if (this.#lastSelection && this.#lastSelection.timelineSelection.object === selection.object) {
            return this.#lastSelection.entryIndex;
        }
        if (!TimelineSelection.isSyntheticNetworkRequestDetailsEventSelection(selection.object)) {
            return -1;
        }
        const index = this.#events.indexOf(selection.object);
        if (index !== -1) {
            this.#lastSelection = new Selection(TimelineSelection.fromTraceEvent(selection.object), index);
        }
        return index;
    }
    entryColor(index) {
        if (!this.#networkTrackAppender) {
            throw new Error('networkTrackAppender should not be empty');
        }
        return this.#networkTrackAppender.colorForEvent(this.#events[index]);
    }
    textColor(_index) {
        return FlameChartStyle.textColor;
    }
    entryTitle(index) {
        const event = this.#events[index];
        const parsedURL = new Common.ParsedURL.ParsedURL(event.args.data.url);
        return parsedURL.isValid ? `${parsedURL.displayName} (${parsedURL.host})` : event.args.data.url || null;
    }
    entryFont(_index) {
        return this.#networkTrackAppender?.font() || null;
    }
    /**
     * Returns the pixels needed to decorate the event.
     * The pixels compare to the start of the earliest event of the request.
     *
     * Request.beginTime(), which is used in FlameChart to calculate the unclippedBarX
     * v
     *    |----------------[ (URL text)    waiting time   |   request  ]--------|
     *    ^start           ^sendStart                     ^headersEnd  ^Finish  ^end
     * @param request
     * @param unclippedBarX The start pixel of the request. It is calculated with request.beginTime() in FlameChart.
     * @param timeToPixelRatio
     * @returns the pixels to draw waiting time and left and right whiskers and url text
     */
    getDecorationPixels(event, unclippedBarX, timeToPixelRatio) {
        const beginTime = TraceEngine.Helpers.Timing.microSecondsToMilliseconds(event.ts);
        const timeToPixel = (time) => Math.floor(unclippedBarX + (time - beginTime) * timeToPixelRatio);
        const minBarWidthPx = 2;
        const startTime = TraceEngine.Helpers.Timing.microSecondsToMilliseconds(event.ts);
        const endTime = TraceEngine.Helpers.Timing.microSecondsToMilliseconds((event.ts + event.dur));
        const sendStartTime = TraceEngine.Helpers.Timing.microSecondsToMilliseconds(event.args.data.syntheticData.sendStartTime);
        const headersEndTime = TraceEngine.Helpers.Timing.microSecondsToMilliseconds(event.args.data.syntheticData.downloadStart);
        const sendStart = Math.max(timeToPixel(sendStartTime), unclippedBarX);
        const headersEnd = Math.max(timeToPixel(headersEndTime), sendStart);
        const finish = Math.max(timeToPixel(TraceEngine.Helpers.Timing.microSecondsToMilliseconds(event.args.data.syntheticData.finishTime)), headersEnd + minBarWidthPx);
        const start = timeToPixel(startTime);
        const end = Math.max(timeToPixel(endTime), finish);
        return { sendStart, headersEnd, finish, start, end };
    }
    /**
     * Decorates the entry:
     *   Draw a waiting time between |sendStart| and |headersEnd|
     *     By adding a extra transparent white layer
     *   Draw a whisk between |start| and |sendStart|
     *   Draw a whisk between |finish| and |end|
     *     By draw another layer of background color to "clear" the area
     *     Then draw the whisk
     *   Draw the URL after the |sendStart|
     *
     *   |----------------[ (URL text)    waiting time   |   request  ]--------|
     *   ^start           ^sendStart                     ^headersEnd  ^Finish  ^end
     * @param index
     * @param context
     * @param barX The x pixel of the visible part request
     * @param barY The y pixel of the visible part request
     * @param barWidth The width of the visible part request
     * @param barHeight The height of the visible part request
     * @param unclippedBarX The start pixel of the request compare to the visible area. It is calculated with request.beginTime() in FlameChart.
     * @param timeToPixelRatio
     * @returns if the entry needs to be decorate, which is alway true if the request has "timing" field
     */
    decorateEntry(index, context, _text, barX, barY, barWidth, barHeight, unclippedBarX, timeToPixelRatio) {
        const event = this.#events[index];
        const { sendStart, headersEnd, finish, start, end } = this.getDecorationPixels(event, unclippedBarX, timeToPixelRatio);
        // Draw waiting time.
        context.fillStyle = 'hsla(0, 100%, 100%, 0.8)';
        context.fillRect(sendStart + 0.5, barY + 0.5, headersEnd - sendStart - 0.5, barHeight - 2);
        // Clear portions of initial rect to prepare for the ticks.
        context.fillStyle = ThemeSupport.ThemeSupport.instance().getComputedValue('--color-background');
        context.fillRect(barX, barY - 0.5, sendStart - barX, barHeight);
        context.fillRect(finish, barY - 0.5, barX + barWidth - finish, barHeight);
        // Draws left and right whiskers
        function drawTick(begin, end, y) {
            const /** @const */ tickHeightPx = 6;
            context.moveTo(begin, y - tickHeightPx / 2);
            context.lineTo(begin, y + tickHeightPx / 2);
            context.moveTo(begin, y);
            context.lineTo(end, y);
        }
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = '#ccc';
        const lineY = Math.floor(barY + barHeight / 2) + 0.5;
        const leftTick = start + 0.5;
        const rightTick = end - 0.5;
        drawTick(leftTick, sendStart, lineY);
        drawTick(rightTick, finish, lineY);
        context.stroke();
        const color = this.#colorForPriority(event.args.data.priority);
        if (color) {
            context.fillStyle = color;
            context.fillRect(sendStart + 0.5, barY + 0.5, 3.5, 3.5);
        }
        // Draw request URL as text
        const textStart = Math.max(sendStart, 0);
        const textWidth = finish - textStart;
        const /** @const */ minTextWidthPx = 20;
        if (textWidth >= minTextWidthPx) {
            let title = this.entryTitle(index) || '';
            if (event.args.data.fromServiceWorker) {
                title = '⚙ ' + title;
            }
            if (title) {
                const /** @const */ textPadding = 4;
                const /** @const */ textBaseline = 5;
                const textBaseHeight = barHeight - textBaseline;
                const trimmedText = UI.UIUtils.trimTextEnd(context, title, textWidth - 2 * textPadding);
                context.fillStyle = '#333';
                context.fillText(trimmedText, textStart + textPadding, barY + textBaseHeight);
            }
        }
        return true;
    }
    forceDecoration(_index) {
        return true;
    }
    prepareHighlightedEntryInfo(index) {
        const /** @const */ maxURLChars = 80;
        const event = this.#events[index];
        const element = document.createElement('div');
        const root = UI.Utils.createShadowRootWithCoreStyles(element, {
            cssFile: [timelineFlamechartPopoverStyles],
            delegatesFocus: undefined,
        });
        const contents = root.createChild('div', 'timeline-flamechart-popover');
        const startTime = TraceEngine.Helpers.Timing.microSecondsToMilliseconds(event.ts);
        const duration = TraceEngine.Helpers.Timing.microSecondsToMilliseconds(event.dur);
        if (startTime && isFinite(duration)) {
            contents.createChild('span', 'timeline-info-network-time').textContent =
                i18n.TimeUtilities.millisToString(duration, true);
        }
        const div = contents.createChild('span');
        div.textContent = PerfUI.NetworkPriorities.uiLabelForNetworkPriority(event.args.data.priority);
        div.style.color = this.#colorForPriority(event.args.data.priority) || 'black';
        contents.createChild('span').textContent = Platform.StringUtilities.trimMiddle(event.args.data.url, maxURLChars);
        return element;
    }
    #colorForPriority(priority) {
        if (!this.#priorityToValue) {
            this.#priorityToValue = new Map([
                ["VeryLow" /* Protocol.Network.ResourcePriority.VeryLow */, 1],
                ["Low" /* Protocol.Network.ResourcePriority.Low */, 2],
                ["Medium" /* Protocol.Network.ResourcePriority.Medium */, 3],
                ["High" /* Protocol.Network.ResourcePriority.High */, 4],
                ["VeryHigh" /* Protocol.Network.ResourcePriority.VeryHigh */, 5],
            ]);
        }
        const value = this.#priorityToValue.get(priority);
        return value ? `hsla(214, 80%, 50%, ${value / 5})` : null;
    }
    /**
     * Sets the minimum time and total time span of a trace using the
     * new engine data.
     */
    #setTimingBoundsData(newTraceEngineData) {
        const { traceBounds } = newTraceEngineData.Meta;
        const minTime = TraceEngine.Helpers.Timing.microSecondsToMilliseconds(traceBounds.min);
        const maxTime = TraceEngine.Helpers.Timing.microSecondsToMilliseconds(traceBounds.max);
        this.#minimumBoundaryInternal = minTime;
        this.#timeSpan = minTime === maxTime ? 1000 : maxTime - this.#minimumBoundaryInternal;
    }
    /**
     * When users zoom in the flamechart, we only want to show them the network
     * requests between startTime and endTime. This function will call the
     * trackAppender to update the timeline data, and then force to create a new
     * PerfUI.FlameChart.FlameChartTimelineData instance to force the flamechart
     * to re-render.
     */
    #updateTimelineData(startTime, endTime) {
        if (!this.#networkTrackAppender || !this.#timelineDataInternal) {
            return;
        }
        this.#maxLevel = this.#networkTrackAppender.filterTimelineDataBetweenTimes(TraceEngine.Types.Timing.MilliSeconds(startTime), TraceEngine.Types.Timing.MilliSeconds(endTime));
        // TODO(crbug.com/1459225): Remove this recreating code.
        // Force to create a new PerfUI.FlameChart.FlameChartTimelineData instance
        // to force the flamechart to re-render. This also causes crbug.com/1459225.
        this.#timelineDataInternal = PerfUI.FlameChart.FlameChartTimelineData.create({
            entryLevels: this.#timelineDataInternal?.entryLevels,
            entryTotalTimes: this.#timelineDataInternal?.entryTotalTimes,
            entryStartTimes: this.#timelineDataInternal?.entryStartTimes,
            groups: this.#timelineDataInternal?.groups,
        });
    }
    preferredHeight() {
        if (!this.#networkTrackAppender || this.#maxLevel === 0) {
            return 0;
        }
        const group = this.#networkTrackAppender.group();
        if (!group) {
            return 0;
        }
        return group.style.height * (this.isExpanded() ? Platform.NumberUtilities.clamp(this.#maxLevel + 1, 4, 8.5) : 1);
    }
    isExpanded() {
        return Boolean(this.#networkTrackAppender?.group()?.expanded);
    }
    formatValue(value, precision) {
        return i18n.TimeUtilities.preciseMillisToString(value, precision);
    }
    canJumpToEntry(_entryIndex) {
        return false;
    }
    navStartTimes() {
        return this.#traceEngineData?.Meta.navigationsByNavigationId || new Map();
    }
}
//# sourceMappingURL=TimelineFlameChartNetworkDataProvider.js.map