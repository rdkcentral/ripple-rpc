---
title: LifecycleManagement

version: next
layout: default
sdk: ripple
---

# LifecycleManagement Module

---

Version LifecycleManagement 1.1.0-next.1

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Usage](#usage)
- [Overview](#overview)
- [Methods](#methods)
  - [closeError](#closeerror)
  - [closeResponse](#closeresponse)
  - [finishedError](#finishederror)
  - [finishedResponse](#finishedresponse)
  - [launchError](#launcherror)
  - [launchResponse](#launchresponse)
  - [listen](#listen)
  - [once](#once)
  - [provide](#provide)
  - [readyError](#readyerror)
  - [readyResponse](#readyresponse)
  - [session](#session)
  - [setState](#setstate)
- [Events](#events)
  - [onRequestClose](#onrequestclose)
  - [onRequestFinished](#onrequestfinished)
  - [onRequestLaunch](#onrequestlaunch)
  - [onRequestReady](#onrequestready)
  - [sessionTransitionCanceled](#sessiontransitioncanceled)
  - [sessionTransitionCompleted](#sessiontransitioncompleted)
- [Provider Interfaces](#provider-interfaces)
  - [LaunchProvider](#launchprovider)
  - [StateLifecycleProvider](#statelifecycleprovider)
- [Types](#types)
  - [AppDescription](#appdescription)
  - [AppSession](#appsession)
  - [LifecycleLaunchResponse](#lifecyclelaunchresponse)
  - [LifecycleLaunchParameters](#lifecyclelaunchparameters)
  - [LifecycleReadyParameters](#lifecyclereadyparameters)
  - [LifecycleCloseParameters](#lifecyclecloseparameters)
  - [LifecycleFinishedParameters](#lifecyclefinishedparameters)
  - [Runtime](#runtime)
  - [SecondScreenEvent](#secondscreenevent)
  - [AppLaunch](#applaunch)
  - [LifecycleLaunchRequest](#lifecyclelaunchrequest)
  - [LifecycleReadyRequest](#lifecyclereadyrequest)
  - [LifecycleCloseRequest](#lifecyclecloserequest)
  - [LifecycleFinishedRequest](#lifecyclefinishedrequest)
  - [AppSessionRequest](#appsessionrequest)

## Usage

To use the LifecycleManagement module, you can import it into your project from the Firebolt SDK:

```javascript
import { LifecycleManagement } from "@firebolt-extn-js/ripple-sdk";
```

## Overview

A module for managing application lifecycle.

## Methods

### closeError

_This is an private RPC method._

Internal API for Close Provider to send back error.

Parameters:

| Param           | Type     | Required | Description |
| --------------- | -------- | -------- | ----------- |
| `correlationId` | `string` | true     |             |
| `error`         | `object` | true     |             |

Result:

Capabilities:

| Role     | Capability                              |
| -------- | --------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:state |

#### Examples

Example 1

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.closeError",
  "params": {
    "correlationId": "123",
    "error": {
      "code": 1,
      "message": "Error"
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

---

### closeResponse

_This is an private RPC method._

Internal API for Close Provider to send back response.

Parameters:

| Param           | Type     | Required | Description |
| --------------- | -------- | -------- | ----------- |
| `correlationId` | `string` | true     |             |
| `result`        | `void`   | true     |             |

Result:

Capabilities:

| Role     | Capability                              |
| -------- | --------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:state |

#### Examples

Example

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.closeResponse",
  "params": {
    "correlationId": "123",
    "result": null
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

---

### finishedError

_This is an private RPC method._

Internal API for Finished Provider to send back error.

Parameters:

| Param           | Type     | Required | Description |
| --------------- | -------- | -------- | ----------- |
| `correlationId` | `string` | true     |             |
| `error`         | `object` | true     |             |

Result:

Capabilities:

| Role     | Capability                              |
| -------- | --------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:state |

#### Examples

Example 1

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.finishedError",
  "params": {
    "correlationId": "123",
    "error": {
      "code": 1,
      "message": "Error"
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

---

### finishedResponse

_This is an private RPC method._

Internal API for Finished Provider to send back response.

Parameters:

| Param           | Type     | Required | Description |
| --------------- | -------- | -------- | ----------- |
| `correlationId` | `string` | true     |             |
| `result`        | `void`   | true     |             |

Result:

Capabilities:

| Role     | Capability                              |
| -------- | --------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:state |

#### Examples

Example

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.finishedResponse",
  "params": {
    "correlationId": "123",
    "result": null
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

---

### launchError

_This is an private RPC method._

Internal API for Launch Provider to send back error.

Parameters:

| Param           | Type     | Required | Description |
| --------------- | -------- | -------- | ----------- |
| `correlationId` | `string` | true     |             |
| `error`         | `object` | true     |             |

Result:

Capabilities:

| Role     | Capability                               |
| -------- | ---------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:launch |

#### Examples

Example 1

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.launchError",
  "params": {
    "correlationId": "123",
    "error": {
      "code": 1,
      "message": "Error"
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

---

### launchResponse

_This is an private RPC method._

Internal API for Launch Provider to send back response.

Parameters:

| Param           | Type                                                  | Required | Description |
| --------------- | ----------------------------------------------------- | -------- | ----------- |
| `correlationId` | `string`                                              | true     |             |
| `result`        | [`LifecycleLaunchResponse`](#lifecyclelaunchresponse) | true     |             |

Result:

Capabilities:

| Role     | Capability                               |
| -------- | ---------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:launch |

#### Examples

Example #1

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.launchResponse",
  "params": {
    "correlationId": "123",
    "result": {
      "success": true
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

Example #2

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.launchResponse",
  "params": {
    "correlationId": "123",
    "result": {
      "success": false
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

---

### listen

To listen to a specific event pass the event name as the first parameter:

```typescript
listen(event: string, callback: (data: any) => void): Promise<number>
```

Parameters:

| Param      | Type       | Required | Summary                                                |
| ---------- | ---------- | -------- | ------------------------------------------------------ |
| `event`    | `string`   | Yes      | The event to listen for, see [Events](#events).        |
| _callback_ | `function` | Yes      | A function that will be invoked when the event occurs. |

Promise resolution:

| Type     | Description                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| `number` | Listener ID to clear the callback method and stop receiving the event, e.g. `LifecycleManagement.clear(id)` |

Callback parameters:

| Param  | Type  | Required | Summary                                                                        |
| ------ | ----- | -------- | ------------------------------------------------------------------------------ |
| `data` | `any` | Yes      | The event data, which depends on which event is firing, see [Events](#events). |

To listen to all events from this module pass only a callback, without specifying an event name:

```typescript
listen(callback: (event: string, data: any) => void): Promise<number>
```

Parameters:

| Param      | Type       | Required | Summary                                                                                                                        |
| ---------- | ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| _callback_ | `function` | Yes      | A function that will be invoked when the event occurs. The event data depends on which event is firing, see [Events](#events). |

Callback parameters:

| Param   | Type     | Required | Summary                                                                        |
| ------- | -------- | -------- | ------------------------------------------------------------------------------ |
| `event` | `string` | Yes      | The event that has occured listen for, see [Events](#events).                  |
| `data`  | `any`    | Yes      | The event data, which depends on which event is firing, see [Events](#events). |

Promise resolution:

| Type     | Description                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| `number` | Listener ID to clear the callback method and stop receiving the event, e.g. `LifecycleManagement.clear(id)` |

See [Listening for events](../../docs/listening-for-events/) for more information and examples.

### once

To listen to a single instance of a specific event pass the event name as the first parameter:

```typescript
once(event: string, callback: (data: any) => void): Promise<number>
```

The `once` method will only pass the next instance of this event, and then dicard the listener you provided.

Parameters:

| Param      | Type       | Required | Summary                                                |
| ---------- | ---------- | -------- | ------------------------------------------------------ |
| `event`    | `string`   | Yes      | The event to listen for, see [Events](#events).        |
| _callback_ | `function` | Yes      | A function that will be invoked when the event occurs. |

Promise resolution:

| Type     | Description                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| `number` | Listener ID to clear the callback method and stop receiving the event, e.g. `LifecycleManagement.clear(id)` |

Callback parameters:

| Param  | Type  | Required | Summary                                                                        |
| ------ | ----- | -------- | ------------------------------------------------------------------------------ |
| `data` | `any` | Yes      | The event data, which depends on which event is firing, see [Events](#events). |

To listen to the next instance only of any events from this module pass only a callback, without specifying an event name:

```typescript
once(callback: (event: string, data: any) => void): Promise<number>
```

Parameters:

| Param      | Type       | Required | Summary                                                                                                                        |
| ---------- | ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| _callback_ | `function` | Yes      | A function that will be invoked when the event occurs. The event data depends on which event is firing, see [Events](#events). |

Callback parameters:

| Param   | Type     | Required | Summary                                                                        |
| ------- | -------- | -------- | ------------------------------------------------------------------------------ |
| `event` | `string` | Yes      | The event that has occured listen for, see [Events](#events).                  |
| `data`  | `any`    | Yes      | The event data, which depends on which event is firing, see [Events](#events). |

Promise resolution:

| Type     | Description                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| `number` | Listener ID to clear the callback method and stop receiving the event, e.g. `LifecycleManagement.clear(id)` |

See [Listening for events](../../docs/listening-for-events/) for more information and examples.

### provide

To provide a specific capability to the platform. See [Provider Interfaces](#provider-interfaces) for a list of interfaces available to provide in this module.

```typescript
provide(capability: string, provider: any): void
```

Parameters:

| Param        | Type     | Required | Summary                                      |
| ------------ | -------- | -------- | -------------------------------------------- |
| `capability` | `string` | Yes      | The capability that is being provided.       |
| `provider`   | `any`    | Yes      | An implementation of the required interface. |

See [Provider Interfaces](#provider-interfaces) for each capabilities interface definition.

### readyError

_This is an private RPC method._

Internal API for Ready Provider to send back error.

Parameters:

| Param           | Type     | Required | Description |
| --------------- | -------- | -------- | ----------- |
| `correlationId` | `string` | true     |             |
| `error`         | `object` | true     |             |

Result:

Capabilities:

| Role     | Capability                              |
| -------- | --------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:state |

#### Examples

Example 1

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.readyError",
  "params": {
    "correlationId": "123",
    "error": {
      "code": 1,
      "message": "Error"
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

---

### readyResponse

_This is an private RPC method._

Internal API for Ready Provider to send back response.

Parameters:

| Param           | Type     | Required | Description |
| --------------- | -------- | -------- | ----------- |
| `correlationId` | `string` | true     |             |
| `result`        | `void`   | true     |             |

Result:

Capabilities:

| Role     | Capability                              |
| -------- | --------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:state |

#### Examples

Example

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.readyResponse",
  "params": {
    "correlationId": "123",
    "result": null
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

---

### session

Called before an app is launched in order to set up the lifecycle session. The session should be given an intent that will be passed to the application. This will behave differently depending on the current state of the application. If the application is already loaded but not active then a new active session is started. The intent is given to the application via the onNavigateTo event. If the app is not loaded, then it is considered a 'cold start'. A new loaded session will be created and the intent will be stored for the app to access via Parameters.initialization. Before a session is created for the application some checks may take place. For instance, if a user grant is required for the application then the user grant will be resolved before the session is transitions to the active status. In this case, this API will return immediately with a transitionPending=true flag. The updated session will then be sent as an event in the LifecycleManagement.onSessionTransitionCompleted event. If the pre-session checks fail, such as a user deferring a grant, then the LifecycleManagement.onSessionTransitionCanceled event will be emitted.

```typescript
function session(session: AppSessionRequest): Promise<AppSession>;
```

Parameters:

| Param     | Type                                      | Required | Description |
| --------- | ----------------------------------------- | -------- | ----------- |
| `session` | [`AppSessionRequest`](#appsessionrequest) | true     |             |

Promise resolution:

[AppSession](#appsession)

Capabilities:

| Role    | Capability                              |
| ------- | --------------------------------------- |
| manages | xrn:firebolt:capability:lifecycle:state |

#### Examples

Starts or updates an app session

JavaScript:

```javascript
import { LifecycleManagement } from "@firebolt-extn-js/ripple-sdk";

let result = await LifecycleManagement.session({
  app: {
    id: "SomeApp",
    url: "https://some-app.firebolt.rdkcentral.com",
  },
  runtime: {
    id: "WebBrowser-1",
  },
  launch: {
    intent: {
      action: "search",
      data: {
        query: "Dog videos",
      },
      context: {
        source: "voice",
      },
    },
  },
});
console.log(result);
```

Value of `result`:

```javascript
{
	"appId": "SomeApp",
	"sessionId": "c0d012b4-0854-4bbc-82d5-ab52ac29dd94",
	"loadedSessionId": "612f307e-8b32-412e-bcec-831779bc07ae",
	"activeSessionId": "05b6f6af-c2f8-4761-beeb-6029590b8e8c",
	"transitionPending": false
}
```

<details markdown="1" >
<summary>JSON-RPC:</summary>
Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.session",
  "params": {
    "session": {
      "app": {
        "id": "SomeApp",
        "url": "https://some-app.firebolt.rdkcentral.com"
      },
      "runtime": {
        "id": "WebBrowser-1"
      },
      "launch": {
        "intent": {
          "action": "search",
          "data": {
            "query": "Dog videos"
          },
          "context": {
            "source": "voice"
          }
        }
      }
    }
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "appId": "SomeApp",
    "sessionId": "c0d012b4-0854-4bbc-82d5-ab52ac29dd94",
    "loadedSessionId": "612f307e-8b32-412e-bcec-831779bc07ae",
    "activeSessionId": "05b6f6af-c2f8-4761-beeb-6029590b8e8c",
    "transitionPending": false
  }
}
```

</details>

Starts an inactive app session

JavaScript:

```javascript
import { LifecycleManagement } from "@firebolt-extn-js/ripple-sdk";

let result = await LifecycleManagement.session({
  app: {
    id: "SomeApp",
    url: "https://some-app.firebolt.rdkcentral.com",
  },
  runtime: {
    id: "WebBrowser-1",
  },
  launch: {
    inactive: true,
  },
});
console.log(result);
```

Value of `result`:

```javascript
{
	"appId": "SomeApp",
	"sessionId": "c0d012b4-0854-4bbc-82d5-ab52ac29dd94",
	"loadedSessionId": "612f307e-8b32-412e-bcec-831779bc07ae",
	"activeSessionId": "05b6f6af-c2f8-4761-beeb-6029590b8e8c",
	"transitionPending": false
}
```

<details markdown="1" >
<summary>JSON-RPC:</summary>
Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.session",
  "params": {
    "session": {
      "app": {
        "id": "SomeApp",
        "url": "https://some-app.firebolt.rdkcentral.com"
      },
      "runtime": {
        "id": "WebBrowser-1"
      },
      "launch": {
        "inactive": true
      }
    }
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "appId": "SomeApp",
    "sessionId": "c0d012b4-0854-4bbc-82d5-ab52ac29dd94",
    "loadedSessionId": "612f307e-8b32-412e-bcec-831779bc07ae",
    "transitionPending": false
  }
}
```

</details>

Start a session that results in a pending session

JavaScript:

```javascript
import { LifecycleManagement } from "@firebolt-extn-js/ripple-sdk";

let result = await LifecycleManagement.session({
  app: {
    id: "SomeApp",
    url: "https://some-app.firebolt.rdkcentral.com",
  },
  runtime: {
    id: "WebBrowser-1",
  },
  launch: {
    inactive: false,
  },
});
console.log(result);
```

Value of `result`:

```javascript
{
	"appId": "SomeApp",
	"sessionId": "c0d012b4-0854-4bbc-82d5-ab52ac29dd94",
	"loadedSessionId": "612f307e-8b32-412e-bcec-831779bc07ae",
	"activeSessionId": "05b6f6af-c2f8-4761-beeb-6029590b8e8c",
	"transitionPending": false
}
```

<details markdown="1" >
<summary>JSON-RPC:</summary>
Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.session",
  "params": {
    "session": {
      "app": {
        "id": "SomeApp",
        "url": "https://some-app.firebolt.rdkcentral.com"
      },
      "runtime": {
        "id": "WebBrowser-1"
      },
      "launch": {
        "inactive": false
      }
    }
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "appId": "SomeApp",
    "transitionPending": true
  }
}
```

</details>

---

### setState

Used by provider to update the state of an application so that the state can be emitted to apps.

```typescript
function setState(appId: string, state: LifecycleState): Promise<void>;
```

Parameters:

| Param   | Type                                                     | Required | Description                                                                                               |
| ------- | -------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `appId` | `string`                                                 | true     |                                                                                                           |
| `state` | [`LifecycleState`](../Lifecycle/schemas/#LifecycleState) | true     | <br/>values: `'initializing' \| 'inactive' \| 'foreground' \| 'background' \| 'unloading' \| 'suspended'` |

Promise resolution:

Capabilities:

| Role    | Capability                              |
| ------- | --------------------------------------- |
| manages | xrn:firebolt:capability:lifecycle:state |

#### Examples

Set application lifecycle state to inactive

JavaScript:

```javascript
import { LifecycleManagement } from "@firebolt-extn-js/ripple-sdk";

let result = await LifecycleManagement.setState("SomeAppId", "inactive");
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
  "method": "LifecycleManagement.setState",
  "params": {
    "state": "inactive",
    "appId": "SomeAppId"
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

## Events

### onRequestClose

_This is an private RPC method._

Tells the provider that an app has requested closing itself

Parameters:

| Param    | Type      | Required | Description |
| -------- | --------- | -------- | ----------- |
| `listen` | `boolean` | true     |             |

Result:

[LifecycleCloseRequest](#lifecyclecloserequest)

Capabilities:

| Role     | Capability                              |
| -------- | --------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:state |

#### Examples

Default Example

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.onRequestClose",
  "params": {
    "listen": true
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "correlationId": "123",
    "parameters": {
      "appId": "SomeAppId",
      "reason": "userExit"
    }
  }
}
```

---

### onRequestFinished

_This is an private RPC method._

Tells the provider that an app has said they are finished cleaning up while unloading

Parameters:

| Param    | Type      | Required | Description |
| -------- | --------- | -------- | ----------- |
| `listen` | `boolean` | true     |             |

Result:

[LifecycleFinishedRequest](#lifecyclefinishedrequest)

Capabilities:

| Role     | Capability                              |
| -------- | --------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:state |

#### Examples

Default Example

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.onRequestFinished",
  "params": {
    "listen": true
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "correlationId": "123",
    "parameters": {
      "appId": "SomeAppId"
    }
  }
}
```

---

### onRequestLaunch

_This is an private RPC method._

Tells the provider that an app should be launched

Parameters:

| Param    | Type      | Required | Description |
| -------- | --------- | -------- | ----------- |
| `listen` | `boolean` | true     |             |

Result:

[LifecycleLaunchRequest](#lifecyclelaunchrequest)

Capabilities:

| Role     | Capability                               |
| -------- | ---------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:launch |

#### Examples

Default Example

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.onRequestLaunch",
  "params": {
    "listen": true
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "correlationId": "123",
    "parameters": {
      "appId": "SomeAppId",
      "intent": {
        "action": "home",
        "context": {
          "source": "voice"
        }
      }
    }
  }
}
```

---

### onRequestReady

_This is an private RPC method._

Tells the provider that an app has said they are ready

Parameters:

| Param    | Type      | Required | Description |
| -------- | --------- | -------- | ----------- |
| `listen` | `boolean` | true     |             |

Result:

[LifecycleReadyRequest](#lifecyclereadyrequest)

Capabilities:

| Role     | Capability                              |
| -------- | --------------------------------------- |
| provides | xrn:firebolt:capability:lifecycle:state |

#### Examples

Default Example

JSON-RPC:

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.onRequestReady",
  "params": {
    "listen": true
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "correlationId": "123",
    "parameters": {
      "appId": "SomeAppId"
    }
  }
}
```

---

### sessionTransitionCanceled

```typescript
function listen('sessionTransitionCanceled', () => void): Promise<number>
```

See also: [listen()](#listen), [once()](#listen), [clear()](#listen).

Event value:

Capabilities:

| Role    | Capability                              |
| ------- | --------------------------------------- |
| manages | xrn:firebolt:capability:lifecycle:state |

#### Examples

Default Example

JavaScript:

```javascript
import { LifecycleManagement } from "@firebolt-extn-js/ripple-sdk";

LifecycleManagement.listen("sessionTransitionCanceled", (canceled) => {
  console.log(canceled);
});
```

Value of `canceled`:

```javascript
{
	"appId": "SomeApp"
}
```

<details markdown="1" >
<summary>JSON-RPC:</summary>
Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.onSessionTransitionCanceled",
  "params": {
    "listen": true
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "appId": "SomeApp"
  }
}
```

</details>

---

### sessionTransitionCompleted

```typescript
function listen('sessionTransitionCompleted', () => void): Promise<number>
```

See also: [listen()](#listen), [once()](#listen), [clear()](#listen).

Event value:

[AppSession](#appsession)

Capabilities:

| Role    | Capability                              |
| ------- | --------------------------------------- |
| manages | xrn:firebolt:capability:lifecycle:state |

#### Examples

Default Example

JavaScript:

```javascript
import { LifecycleManagement } from "@firebolt-extn-js/ripple-sdk";

LifecycleManagement.listen("sessionTransitionCompleted", (completed) => {
  console.log(completed);
});
```

Value of `completed`:

```javascript
{
	"appId": "SomeAppId",
	"sessionId": "c0d012b4-0854-4bbc-82d5-ab52ac29dd94",
	"loadedSessionId": "612f307e-8b32-412e-bcec-831779bc07ae",
	"activeSessionId": "05b6f6af-c2f8-4761-beeb-6029590b8e8c",
	"transitionPending": false
}
```

<details markdown="1" >
<summary>JSON-RPC:</summary>
Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "LifecycleManagement.onSessionTransitionCompleted",
  "params": {
    "listen": true
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "appId": "SomeAppId",
    "sessionId": "c0d012b4-0854-4bbc-82d5-ab52ac29dd94",
    "loadedSessionId": "612f307e-8b32-412e-bcec-831779bc07ae",
    "activeSessionId": "05b6f6af-c2f8-4761-beeb-6029590b8e8c",
    "transitionPending": false
  }
}
```

</details>

---

## Provider Interfaces

### LaunchProvider

The provider interface for the `xrn:firebolt:capability:lifecycle:launch` capability.

```typescript
interface LaunchProvider {
  launch(
    parameters: LifecycleLaunchParameters,
    session: ProviderSession,
  ): Promise<LifecycleLaunchResponse>;
}
```

Usage:

```typescript
LifecycleManagement.provide('xrn:firebolt:capability:lifecycle:launch', provider: LaunchProvider | object)
```

#### Examples

**Register your app to provide the `xrn:firebolt:capability:lifecycle:launch` capability.**

```javascript
import { LifecycleManagement } from "@firebolt-extn-js/ripple-sdk";

class MyLaunchProvider {
  async launch(parameters, session) {
    return {
      success: true,
    };
  }
}

LifecycleManagement.provide(
  "xrn:firebolt:capability:lifecycle:launch",
  new MyLaunchProvider(),
);
```

<details markdown="1" >
    <summary>JSON-RPC</summary>

**Register to recieve each provider API**

Request:

```json
{
  "id": 1,
  "method": "LifecycleManagement.onRequestLaunch",
  "params": {
    "listen": true
  }
}
```

Response:

```json
{
  "id": 1,
  "result": {
    "listening": true,
    "event": "LifecycleManagement.onRequestLaunch"
  }
}
```

**Asynchronous event to initiate launch()**

Event Response:

```json
{
  "id": 1,
  "result": {
    "correlationId": undefined,
    "parameters": {
      "appId": "SomeAppId",
      "intent": {
        "action": "home",
        "context": {
          "source": "voice"
        }
      }
    }
  }
}
```

**App initiated response to event**

Request:

```json
{
  "id": 2,
  "method": "LifecycleManagement.launchResponse",
  "params": {
    "correlationId": undefined,
    "result": {
      "success": true
    }
  }
}
```

Response:

```json
{
  "id": 2,
  "result": true
}
```

</details>

### StateLifecycleProvider

The provider interface for the `xrn:firebolt:capability:lifecycle:state` capability.

```typescript
interface StateLifecycleProvider {
  ready(
    parameters: LifecycleReadyParameters,
    session: ProviderSession,
  ): Promise<void>;
  close(
    parameters: LifecycleCloseParameters,
    session: ProviderSession,
  ): Promise<void>;
  finished(
    parameters: LifecycleFinishedParameters,
    session: ProviderSession,
  ): Promise<void>;
}
```

Usage:

```typescript
LifecycleManagement.provide('xrn:firebolt:capability:lifecycle:state', provider: StateLifecycleProvider | object)
```

#### Examples

**Register your app to provide the `xrn:firebolt:capability:lifecycle:state` capability.**

```javascript
import { LifecycleManagement } from "@firebolt-extn-js/ripple-sdk";

class MyStateLifecycleProvider {
  async ready(parameters, session) {
    return null;
  }

  async close(parameters, session) {
    return null;
  }

  async finished(parameters, session) {
    return null;
  }
}

LifecycleManagement.provide(
  "xrn:firebolt:capability:lifecycle:state",
  new MyStateLifecycleProvider(),
);
```

<details markdown="1" >
    <summary>JSON-RPC</summary>

**Register to recieve each provider API**

Request:

```json

{
    "id": 1,
    "method": "LifecycleManagement.onRequestReady",
    "params": {
        "listen": true
    }
}

{
    "id": 2,
    "method": "LifecycleManagement.onRequestClose",
    "params": {
        "listen": true
    }
}

{
    "id": 3,
    "method": "LifecycleManagement.onRequestFinished",
    "params": {
        "listen": true
    }
}

```

Response:

```json

{
    "id": 1,
    "result": {
        "listening": true,
        "event": "LifecycleManagement.onRequestReady"
    }

}

{
    "id": 2,
    "result": {
        "listening": true,
        "event": "LifecycleManagement.onRequestClose"
    }

}

{
    "id": 3,
    "result": {
        "listening": true,
        "event": "LifecycleManagement.onRequestFinished"
    }

}

```

**Asynchronous event to initiate ready()**

Event Response:

```json
{
  "id": 1,
  "result": {
    "correlationId": undefined,
    "parameters": {
      "appId": "SomeAppId"
    }
  }
}
```

**App initiated response to event**

Request:

```json
{
  "id": 4,
  "method": "LifecycleManagement.readyResponse",
  "params": {
    "correlationId": undefined,
    "result": null
  }
}
```

Response:

```json
{
  "id": 4,
  "result": true
}
```

**Asynchronous event to initiate close()**

Event Response:

```json
{
  "id": 2,
  "result": {
    "correlationId": undefined,
    "parameters": {
      "appId": "SomeAppId",
      "reason": "userExit"
    }
  }
}
```

**App initiated response to event**

Request:

```json
{
  "id": 5,
  "method": "LifecycleManagement.closeResponse",
  "params": {
    "correlationId": undefined,
    "result": null
  }
}
```

Response:

```json
{
  "id": 5,
  "result": true
}
```

**Asynchronous event to initiate finished()**

Event Response:

```json
{
  "id": 3,
  "result": {
    "correlationId": undefined,
    "parameters": {
      "appId": "SomeAppId"
    }
  }
}
```

**App initiated response to event**

Request:

```json
{
  "id": 6,
  "method": "LifecycleManagement.finishedResponse",
  "params": {
    "correlationId": undefined,
    "result": null
  }
}
```

Response:

```json
{
  "id": 6,
  "result": true
}
```

</details>

## Types

### AppDescription

Information about the application

```typescript
type AppDescription = {
  id: string; // The identifier for the app
  url?: string; // The url that the app will be launched with
  title?: string; // The display title of the app
  catalog?: string; // The catalog id that this app's content metadata comes from
};
```

---

### AppSession

```typescript
type AppSession = {
  appId: string; // The id of the app that this session is for
  sessionId?: string; // An id representing the the app's gateway access to Firebolt for this loaded session. This sessionId can be used by the application to connect via websocket to Firebolt.
  loadedSessionId?: string; // The sessionId scoped to the app loaded in any state. Firebolt should clear this sessionId whenever the app moves to unloading state.
  activeSessionId?: string; // The sessionId scoped to the current active session. Firebolt should clear this sessionId whenever the app moves to the inactive state. Firebolt should generate a new one anytime the app moves from inactive to active. This may be undefined for any inactive sessions.
  transitionPending: boolean; // Set to true if the session is currently pending a transition to a new status. A status can be before a session exists, an inactive session, or an active session. If this session is currently pending transition clients can subscribe to onSessionTransitionCompleted to know when the transition is complete. That event will give the new session ids that are associated with this session status. Clients should also subscribe to onSessionTransitionCanceled to know that the transition will never complete and was canceled.
};
```

---

### LifecycleLaunchResponse

```typescript
type LifecycleLaunchResponse = {
  success: boolean; // Whether the launch succeeded
};
```

---

### LifecycleLaunchParameters

```typescript
type LifecycleLaunchParameters = {
  appId: string; // The application ID
  intent?: NavigationIntent; // A Firebolt compliant representation of a user intention to navigate to a specific place in an app.
};
```

See also:

[NavigationIntent](../Intents/schemas/#NavigationIntent)

---

### LifecycleReadyParameters

```typescript
type LifecycleReadyParameters = {
  appId: string; // The application ID
};
```

---

### LifecycleCloseParameters

```typescript
type LifecycleCloseParameters = {
  appId: string; // The application ID
  reason: CloseReason; // The application close reason
};
```

See also:

[CloseReason](../Lifecycle/schemas/#CloseReason)

---

### LifecycleFinishedParameters

```typescript
type LifecycleFinishedParameters = {
  appId: string; // The application ID
};
```

---

### Runtime

Information about the runtime that the application is running in

```typescript
type Runtime = {
  id?: string; // The identifier for the runtime
  transport?: "bridge" | "websocket"; // The type of transport the application container will use to communicate to Firebolt
};
```

---

### SecondScreenEvent

An a message notification from a second screen device

```typescript
type SecondScreenEvent = {
  type: "dial";
  version?: string;
  data?: string;
};
```

---

### AppLaunch

Launch information for this app that will be loaded

```typescript
type AppLaunch = {
  intent?: NavigationIntent; // A Firebolt compliant representation of a user intention to navigate to a specific place in an app.
  secondScreen?: SecondScreenEvent; // An a message notification from a second screen device
  inactive?: boolean; // Flag on whether or not the session is meant to remain in the inactive state for this session. This will instruct Firebolt on whether to start an activeSession. Default is false.
};
```

See also:

[NavigationIntent](../Intents/schemas/#NavigationIntent)
[SecondScreenEvent](#secondscreenevent)

---

### LifecycleLaunchRequest

```typescript
type LifecycleLaunchRequest = {
  parameters: LifecycleLaunchParameters; // The associated launch parameters
};
```

See also:

[LifecycleLaunchParameters](#lifecyclelaunchparameters)

---

### LifecycleReadyRequest

```typescript
type LifecycleReadyRequest = {
  parameters: LifecycleReadyParameters; // The associated lifecycle parameters
};
```

See also:

[LifecycleReadyParameters](#lifecyclereadyparameters)

---

### LifecycleCloseRequest

```typescript
type LifecycleCloseRequest = {
  parameters: LifecycleCloseParameters; // The associated lifecycle parameters
};
```

See also:

[LifecycleCloseParameters](#lifecyclecloseparameters)

---

### LifecycleFinishedRequest

```typescript
type LifecycleFinishedRequest = {
  parameters: LifecycleFinishedParameters; // The associated lifecycle parameters
};
```

See also:

[LifecycleFinishedParameters](#lifecyclefinishedparameters)

---

### AppSessionRequest

```typescript
type AppSessionRequest = {
  app: AppDescription; // Information about the application
  runtime?: Runtime; // Information about the runtime that the application is running in
  launch?: AppLaunch; // Launch information for this app that will be loaded
};
```

See also:

[AppDescription](#appdescription)
[Runtime](#runtime)
[AppLaunch](#applaunch)

---
