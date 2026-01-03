# Error

<p align="center">
  <img
    src="https://github.com/frontier-sanctuary/error/blob/main/assets/logo.webp"
    alt="error"
    width="260"
  />
</p>

A structured, class-based error system for Node.js applications.
Designed to **standardize error creation**, **eliminate manual error metadata**, and **guarantee consistent formatting** across your entire stack.

## 🎯 Philosophy

This package is built around a simple idea:

> **Errors should be created through dedicated classes, not assembled manually.**

Each error:

* carries its own **HTTP code**
* exposes a deterministic **error type**
* automatically derives its **severity level**
* can be reliably **identified and serialized**
* always follows the same structure

No more ad-hoc objects.
No more inconsistent error payloads.
No more guessing what kind of error you’re handling.

## ✨ Features

* Central `CoreError` base class
* Ready-to-use error subclasses (`BadRequest`, `ContentTooLarge`, `PaymentRequired`, …)
* Automatic error level inference
* Symbol-based error identification (bundle-safe)
* Unified JSON serialization
* Optional Express HTTP middleware
* No runtime dependency on Express

## 📦 Installation

```bash
npm install @alexis-piquet/error
```

## 🧠 Core Concept: Error Classes

Instead of doing this ❌

```ts
throw new CoreError('Payload too large', {
  code: 413,
  type: 'content-too-large',
})
```

You **always** do this ✅

```ts
import { ContentTooLarge } from '@alexis-piquet/error'

throw new ContentTooLarge('Payload too large')
```

### Why this matters

* No duplicated constants
* No forgotten fields
* No mismatched code/type pairs
* Errors are **self-describing**

## 🚨 CoreError

`CoreError` is the foundation of all errors.

It handles:

* message normalization
* error wrapping
* stack preservation
* level inference
* JSON serialization

You rarely instantiate it directly —
you extend it.

## 🧩 Built-in Error Classes

Each error class encapsulates:

* a single **error type**
* a single **HTTP-compatible code**
* a predictable **severity level**

Example:

```ts
import { ContentTooLarge } from '@alexis-piquet/error'

throw new ContentTooLarge('File exceeds maximum allowed size', {
  store: 'uploads',
  reason: 'Max size is 10MB',
})
```

Another one:

```ts
import { PaymentRequired } from '@alexis-piquet/error'

throw new PaymentRequired('Subscription required')
```

You never manually set `code`, `type`, or `level`.

## 🔁 Creating Custom Errors

Defining a new error is trivial and explicit:

```ts
import {
  CLIENT_ERROR_CODE_CONTENT_TOO_LARGE,
  CLIENT_ERROR_TYPE_CONTENT_TOO_LARGE,
} from '@alexis-piquet/error'
import { CoreError } from '@alexis-piquet/error'
import type { CoreErrorParams } from '@alexis-piquet/error'

export class ContentTooLarge extends CoreError {
  constructor(message: string | Error, params?: CoreErrorParams) {
    super(message, {
      ...params,
      code: CLIENT_ERROR_CODE_CONTENT_TOO_LARGE,
      type: CLIENT_ERROR_TYPE_CONTENT_TOO_LARGE,
    })
  }
}
```

Once created, this error is:

* reusable everywhere
* automatically formatted
* impossible to misconfigure

## 🔎 Error Identification

Errors are tagged internally using a symbol.

```ts
import { isCoreError } from '@alexis-piquet/error'

catch (error) {
  if (isCoreError(error)) {
    console.error(error.code, error.type, error.level)
  }
}
```

This works reliably across:

* packages
* bundles
* workers
* duplicated dependencies

No `instanceof`, no string checks.

## 📤 JSON Serialization

All errors serialize consistently:

```ts
error.toJSON()
```

Output:

```json
{
  "code": 413,
  "level": "warn",
  "message": "File exceeds maximum allowed size",
  "reason": "Max size is 10MB",
  "status_message": "nok",
  "store": "uploads",
  "type": "content-too-large"
}
```

## 🌐 Express HTTP Middleware (Optional)

If you use Express, a ready-to-use error handler is provided.

```ts
import { handleErrors } from '@alexis-piquet/error'

app.use(handleErrors)
```

The middleware:

* recognizes known error codes
* falls back to `500` for unknown errors
* guarantees a stable response format

## 🔌 Express as a Peer Dependency

This package does **not** install Express.

If you use the middleware:

```bash
npm install express
```

For TypeScript:

```bash
npm install -D @types/express-serve-static-core
```

## 🛠 Development

```bash
npm ci
```

## 🚀 Publishing

```bash
npm run major-release
npm run minor-release
npm run patch-release
```

## 📄 License

ISC
