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
import { Privacy } from "../../dist/lib/firebolt-manage";

test("privacy.shareWatchHistory()", () => {
  return Privacy.shareWatchHistory(String).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("privacy.enableRecommendations()", () => {
  return Privacy.enableRecommendations(String).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("privacy.rememberWatchedPrograms()", () => {
  return Privacy.rememberWatchedPrograms(String).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("privacy.listen()", () => {
  Privacy.once;
  return Privacy.listen("requestContentPolicy", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("privacy.once()", () => {
  Privacy.once;
  return Privacy.once("requestContentPolicy", () => {}).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("privacy.clear()", () => {
  const result = Privacy.clear(2);
  expect(result).toBeFalsy();
});

test("privacy.provide() with blank object", () => {
  expect(() => {
    Privacy.provide("xrn:firebolt:capability:privacy:content", {});
  }).toThrow();
});
