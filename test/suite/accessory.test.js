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

import { sent } from '../Setup'
import { Accessory } from '../../dist/lib/firebolt-manage.mjs'
import { expect } from '@jest/globals';

test('Method attribute promise resolves', () => {
    let resolver
    const p = new Promise( (a, b) => { resolver = a; })

    Accessory.find("remote", accessory => {
        expect(accessory.type).toBe('remote')
        expect(typeof accessory.pair).toBe('function')
        accessory.pair(10000).then(result => {
            expect(1).toBe(1)

            const msg = sent.find(msg => msg.method === "pair")
            expect(msg).not.toBe(null)

            const timeout = msg.params.timeout
            expect(timeout).not.toBe(null)
            expect(timeout).toBe(10000)

            setTimeout(resolver, 1000)
        })
        // TODO: add test to assert that accessory.pair(1000) passes 1000 to the timeout parameter of Accessory.pair
    })

    return p
})