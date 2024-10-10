---
title: MetricsManagement

version: next
layout: default
sdk: ripple
---

# MetricsManagement Module

---

Version MetricsManagement 1.1.0-next.1

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Usage](#usage)
- [Overview](#overview)
- [Methods](#methods)
  - [addContext](#addcontext)
  - [removeContext](#removecontext)
- [Types](#types)
  - [MetricsContext](#metricscontext)

## Usage

To use the MetricsManagement module, you can import it into your project from the Firebolt SDK:

```javascript
import { MetricsManagement } from "@firebolt-extn-js/ripple-sdk";
```

## Overview

Methods for managing the metrics integrations

## Methods

### addContext

Add context that can be applied to all metrics reporting

```typescript
function addContext(context: MetricsContext): Promise<null>;
```

Parameters:

| Param     | Type                                | Required | Description                    |
| --------- | ----------------------------------- | -------- | ------------------------------ |
| `context` | [`MetricsContext`](#metricscontext) | true     | The context to add for metrics |

Promise resolution:

Capabilities:

| Role    | Capability                              |
| ------- | --------------------------------------- |
| manages | xrn:firebolt:capability:metrics:context |

#### Examples

Set the deviceSessionId

JavaScript:

```javascript
import { MetricsManagement } from "@firebolt-extn-js/ripple-sdk";

let results = await MetricsManagement.addContext({
  deviceSessionId: "ccccc-cccc-cccc-cccc-cccccccc",
});
console.log(results);
```

Value of `results`:

```javascript
null;
```

<details markdown="1" >
<summary>JSON-RPC:</summary>
Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "MetricsManagement.addContext",
  "params": {
    "context": {
      "deviceSessionId": "ccccc-cccc-cccc-cccc-cccccccc"
    }
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": null
}
```

</details>

---

### removeContext

Remove context that was previously added by Metrics.addContext

```typescript
function removeContext(keys: string[]): Promise<null>;
```

Parameters:

| Param  | Type       | Required | Description                                                            |
| ------ | ---------- | -------- | ---------------------------------------------------------------------- |
| `keys` | `string[]` | true     | The list of keys to clear context for <br/>values: `'deviceSessionId'` |

Promise resolution:

Capabilities:

| Role    | Capability                              |
| ------- | --------------------------------------- |
| manages | xrn:firebolt:capability:metrics:context |

#### Examples

Remove the override for deviceSessionId

JavaScript:

```javascript
import { MetricsManagement } from "@firebolt-extn-js/ripple-sdk";

let result = await MetricsManagement.removeContext(["deviceSessionId"]);
console.log(result);
```

Value of `result`:

```javascript
null;
```

<details markdown="1" >
<summary>JSON-RPC:</summary>
Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "MetricsManagement.removeContext",
  "params": {
    "keys": ["deviceSessionId"]
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": null
}
```

</details>

---

## Types

### MetricsContext

Context that is used when the platform sends any metrics

```typescript
type MetricsContext = {
  deviceSessionId?: string; // A unique id that identifies a sessionId correlating to the scope of when the user has interacted with the device. This sessionId should be reset any time the device goes to the active power state
};
```

---
