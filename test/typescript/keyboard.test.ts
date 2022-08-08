/*
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { test, expect } from "@jest/globals";
import { Keyboard } from "../../dist/lib/firebolt-manage";

class KBProvider implements Keyboard.KeyboardInputProvider {
  standard(
    parameters: Keyboard.KeyboardParameters,
    session: Keyboard.FocusableProviderSession
  ): Promise<Keyboard.KeyboardResult> {
    return Promise.resolve(null);
  }
  password(
    parameters: Keyboard.KeyboardParameters,
    session: Keyboard.FocusableProviderSession
  ): Promise<Keyboard.KeyboardResult> {
    return Promise.resolve(null);
  }
  email(
    parameters: Keyboard.KeyboardParameters,
    session: Keyboard.FocusableProviderSession
  ): Promise<Keyboard.KeyboardResult> {
    return Promise.resolve(null);
  }
}

test("Keyboard.provide() declarations", () => {
  Keyboard.provide("xrn:firebolt:capability:input:keyboard", new KBProvider());
  expect(1).toBe(1);
});

test("Keyboard.provide() with blank object", () => {
  expect(() => {
    Keyboard.provide("xrn:firebolt:capability:input:keyboard", {});
  }).toThrow();
});
