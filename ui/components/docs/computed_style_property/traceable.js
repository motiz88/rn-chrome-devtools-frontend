// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Elements from '../../../../panels/elements/components/components.js';
const component = new Elements.ComputedStyleProperty.ComputedStyleProperty();
document.getElementById('container')?.appendChild(component);
component.innerHTML = `
<span slot="name">display</span>
<span slot="value">grid</span>
  `;
component.traceable = true;
component.inherited = false;
//# sourceMappingURL=traceable.js.map