# Sink Custom Node Title API Library

[![NPM version](https://img.shields.io/npm/v/sink-npm.svg)](https://npmjs.org/package/sink-npm)

This library provides convenient access to the Sink Custom Node Title REST API from server-side TypeScript or JavaScript.

The API documentation can be found [here](https://stainlessapi.com).

## Installation

```sh
npm install --save sink-npm
# or
yarn add sink-npm
```

## Usage

The full API of this library can be found in [api.md](https://www.github.com/stainless-sdks/sink-node-public/blob/main/api.md).

```js
import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'my user token', // defaults to process.env["SINK_CUSTOM_API_KEY_ENV"]
  environment: 'sandbox', // defaults to 'production'
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

async function main() {
  const card = await sink.cards.create({ type: 'SINGLE_USE', not: 'TEST' });

  console.log(card.token);
}

main();
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

```ts
import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'my user token', // defaults to process.env["SINK_CUSTOM_API_KEY_ENV"]
  environment: 'sandbox', // defaults to 'production'
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

async function main() {
  const params: Sink.CardCreateParams = { type: 'SINGLE_USE', not: 'TEST' };
  const card: Sink.Card = await sink.cards.create(params);
}

main();
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## File Uploads

Request parameters that correspond to file uploads can be passed in many different forms:

- `File` (or an object with the same structure)
- a `fetch` `Response` (or an object with the same structure)
- an `fs.ReadStream`
- the return value of our `toFile` helper

```ts
import fs from 'fs';
import fetch from 'node-fetch';
import Sink, { toFile } from 'sink-npm';

const sink = new Sink();

// If you have access to Node `fs` we recommend using `fs.createReadStream()`:
await sink.files.createMultipart({ file: fs.createReadStream('foo/bar.txt'), purpose: 'string' });

// Or if you have the web `File` API you can pass a `File` instance:
await sink.files.createMultipart({ file: new File(['my bytes'], 'bar.txt'), purpose: 'string' });

// You can also pass a `fetch` `Response`:
await sink.files.createMultipart({ file: await fetch('https://somesite/bar.txt'), purpose: 'string' });

// Finally, if none of the above are convenient, you can use our `toFile` helper:
await sink.files.createMultipart({
  file: await toFile(Buffer.from('my bytes'), 'bar.txt'),
  purpose: 'string',
});
await sink.files.createMultipart({
  file: await toFile(new Uint8Array([0, 1, 2]), 'bar.txt'),
  purpose: 'string',
});
```

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

```ts
async function main() {
  const card = await sink.cards.create({ type: 'an_incorrect_type' }).catch((err) => {
    if (err instanceof Sink.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError
      console.log(err.error?.message); // Invalid parameter(s): type
      console.log(err.error?.debugging_request_id); // 94d5e915-xxxx-4cee-a4f5-2xd6ebd279ac
      console.log(err.headers); // {server: 'nginx', ...}
    } else {
      throw err;
    }
  });
}

main();
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const sink = new Sink({
  maxRetries: 0, // default is 2
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

// Or, configure per-request:
await sink.cards.list({ page_size: 10 }, {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const sink = new Sink({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

// Override per-request:
await sink.cards.list({ page_size: 10 }, {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the Sink API are paginated.
You can use `for await … of` syntax to iterate through items across all pages:

```ts
async function fetchAllPaginationTestsOffsets(params) {
  const allPaginationTestsOffsets = [];
  // Automatically fetches more pages as needed.
  for await (const offset of sink.paginationTests.offset.list()) {
    allPaginationTestsOffsets.push(offset);
  }
  return allPaginationTestsOffsets;
}
```

Alternatively, you can make request a single page at a time:

```ts
let page = await sink.paginationTests.offset.list();
for (const offset of page.data) {
  console.log(offset);
}

// Convenience methods are provided for manually paginating:
while (page.hasNextPage()) {
  page = page.getNextPage();
  // ...
}
```

## Default Headers

We automatically send the following headers with all requests.

| Header             | Value |
| ------------------ | ----- |
| `My-Api-Version`   | `11`  |
| `X-Enable-Metrics` | `1`   |

If you need to, you can override these headers by setting default headers on a per-request basis.

```ts
import Sink from 'sink-npm';

const sink = new Sink();

const card = await sink.cards.create(
  { type: 'SINGLE_USE', not: 'TEST' },
  { headers: { 'My-Api-Version': 'My-Custom-Value' } },
);
```

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.

```ts
const sink = new Sink();

const response = await sink.cards.create({ type: 'SINGLE_USE', not: 'TEST' }).asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: cards, response: raw } = await sink.cards
  .create({ type: 'SINGLE_USE', not: 'TEST' })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(cards.token);
```

## Configuring an HTTP(S) Agent (e.g., for proxies)

By default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:

<!-- prettier-ignore -->
```ts
import http from 'http';
import HttpsProxyAgent from 'https-proxy-agent';

// Configure the default for all requests:
const sink = new Sink({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

// Override per-request:
await sink.cards.list({
  baseURL: 'http://localhost:8080/test-api',
  httpAgent: new http.Agent({ keepAlive: false }),
})
```

## Semantic Versioning

This package generally attempts to follow [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals)_.
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/sink-node-public/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.5 is supported.

The following runtimes are supported:

- Node.js 16 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher, using `import Sink from "npm:sink-npm"`.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.
