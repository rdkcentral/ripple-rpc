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
import { Accessory } from '../../dist/lib/firebolt-manage'
import { test, expect } from '@jest/globals';

test('Method attribute promise resolves', () => {
    let done: Function

    const p:Promise<void> = new Promise( (a:Function, b:Function) => { done = a; })

    Accessory.find(Accessory.AccessoryType.REMOTE, (remote:Accessory.AccessoryInfo) => {
        expect(remote.type).toBe(Accessory.AccessoryType.REMOTE)
        expect(typeof remote.pair).toBe('function')

        remote.pair(10000).then(() => {
            const msg:Object = sent.find((o:Object) => o['method'] === "pair")
            expect(msg).not.toBe(null)

            const timeout:Number = msg['params']['timeout']
            expect(timeout).not.toBe(null)
            expect(timeout).toBe(10000)

            done()
        })
    })

    return p
})