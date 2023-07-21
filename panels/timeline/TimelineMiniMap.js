// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Common from '../../core/common/common.js';
import * as TraceEngine from '../../models/trace/trace.js';
import * as PerfUI from '../../ui/legacy/components/perf_ui/perf_ui.js';
import * as UI from '../../ui/legacy/legacy.js';
import { TimelineEventOverviewCPUActivity, TimelineEventOverviewNetwork, TimelineEventOverviewResponsiveness, TimelineFilmStripOverview, TimelineEventOverviewMemory, } from './TimelineEventOverview.js';
import miniMapStyles from './timelineMiniMap.css.js';
/**
 * This component wraps the generic PerfUI Overview component and configures it
 * specifically for the Performance Panel, including injecting the CSS we use
 * to customise how the components render within the Performance Panel.
 */
export class TimelineMiniMap extends Common.ObjectWrapper.eventMixin(UI.Widget.VBox) {
    #overviewComponent = new PerfUI.TimelineOverviewPane.TimelineOverviewPane('timeline');
    #controls = [];
    constructor() {
        super();
        this.element.classList.add('timeline-minimap');
        this.#overviewComponent.show(this.element);
        // Push the event up into the parent component so the panel knows when the window is changed.
        this.#overviewComponent.addEventListener(PerfUI.TimelineOverviewPane.Events.WindowChanged, event => {
            this.dispatchEventToListeners(PerfUI.TimelineOverviewPane.Events.WindowChanged, event.data);
        });
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([miniMapStyles]);
    }
    reset() {
        this.#overviewComponent.reset();
    }
    setNavStartTimes(navStartTimes) {
        this.#overviewComponent.setNavStartTimes(navStartTimes);
    }
    setBounds(min, max) {
        this.#overviewComponent.setBounds(min, max);
    }
    setWindowTimes(left, right) {
        this.#overviewComponent.setWindowTimes(left, right);
    }
    setMarkers(markers) {
        this.#overviewComponent.setMarkers(markers);
    }
    updateControls(data) {
        this.#controls = [];
        if (data.traceParsedData) {
            this.#controls.push(new TimelineEventOverviewResponsiveness(data.traceParsedData));
        }
        this.#controls.push(new TimelineEventOverviewCPUActivity());
        if (data.traceParsedData) {
            this.#controls.push(new TimelineEventOverviewNetwork(data.traceParsedData));
        }
        if (data.settings.showScreenshots && data.traceParsedData) {
            const filmStrip = TraceEngine.Extras.FilmStrip.fromTraceData(data.traceParsedData);
            if (filmStrip.frames.length) {
                this.#controls.push(new TimelineFilmStripOverview(filmStrip));
            }
        }
        if (data.settings.showMemory) {
            this.#controls.push(new TimelineEventOverviewMemory());
        }
        for (const control of this.#controls) {
            control.setModel(data.performanceModel);
        }
        this.#overviewComponent.setOverviewControls(this.#controls);
    }
}
//# sourceMappingURL=TimelineMiniMap.js.map