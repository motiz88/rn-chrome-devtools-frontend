// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './shell.js';
import './panels/browser_debugger/browser_debugger-meta.js';
import './panels/developer_resources/developer_resources-meta.js';
import './panels/elements/elements-meta.js';
import './panels/help/help-meta.js';
import './issues/issues-meta.js';
import './panels/layer_viewer/layer_viewer-meta.js';
import './panels/mobile_throttling/mobile_throttling-meta.js';
import './network/network-meta.js';
import './resources/resources-meta.js';
import './timeline/timeline-meta.js';
import * as Startup from './startup/startup.js';  // eslint-disable-line rulesdir/es_modules_import

Startup.RuntimeInstantiator.startApplication('worker_app');
