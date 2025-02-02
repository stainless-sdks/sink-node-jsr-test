# Sink Custom Node Title 1 API Library

[![NPM version](https://img.shields.io/npm/v/sink-npm.svg)](https://npmjs.org/package/sink-npm) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/sink-npm) [![JSR Version](https://jsr.io/badges/@stainless-api/sink-npm)](https://jsr.io/@stainless-api/sink-npm)

This library provides convenient access to the Sink REST API from server-side TypeScript or JavaScript.

The REST API documentation can be found on [stainlessapi.com](https://stainlessapi.com). The full API of this library can be found in [api.md](api.md).

It is generated with [Stainless](https://www.stainlessapi.com/).

## Installation

```sh
npm install sink-npm
```

## Usage

The full API of this library can be found in [api.md](api.md).

<!-- prettier-ignore -->
```js
import Sink from 'sink-npm';

const client = new Sink({
  userToken: process.env['SINK_CUSTOM_API_KEY_ENV'], // This is the default and can be omitted
  environment: 'sandbox', // defaults to 'production'
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
});

async function main() {
  const customAssignTo = await client.cards.create({
    type: 'SINGLE_USE',
    exp_month: '08',
    not: 'TEST',
    shippingAddress: {
      address1: '180 Varick St',
      city: 'New York',
      country: 'USA',
      first_name: 'Jason',
      last_name: 'Mimosa',
      state: 'NY',
      postal_code: 'H0H0H0',
    },
  });

  console.log(customAssignTo.token);
}

main();
```

## Streaming responses

We provide support for streaming responses using Server Sent Events (SSE).

```ts
import Sink from 'sink-npm';

const client = new Sink();

const stream = await client.streaming.basic({ model: 'model', prompt: 'prompt', stream: true });
for await (const streamingBasicResponse of stream) {
  console.log(streamingBasicResponse.completion);
}
```

If you need to cancel a stream, you can `break` from the loop
or call `stream.controller.abort()`.

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import Sink from 'sink-npm';

const client = new Sink({
  userToken: process.env['SINK_CUSTOM_API_KEY_ENV'], // This is the default and can be omitted
  environment: 'sandbox', // defaults to 'production'
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
});

async function main() {
  const params: Sink.CardCreateParams = { type: 'SINGLE_USE', not: 'TEST' };
  const customAssignTo: Sink.Card = await client.cards.create(params);
}

main();
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## File uploads

Request parameters that correspond to file uploads can be passed in many different forms:

- `File` (or an object with the same structure)
- a `fetch` `Response` (or an object with the same structure)
- an `fs.ReadStream`
- the return value of our `toFile` helper

```ts
import fs from 'fs';
import fetch from 'node-fetch';
import Sink, { toFile } from 'sink-npm';

const client = new Sink();

// If you have access to Node `fs` we recommend using `fs.createReadStream()`:
await client.files.createMultipart({ file: fs.createReadStream('foo/bar.txt'), purpose: 'purpose' });

// Or if you have the web `File` API you can pass a `File` instance:
await client.files.createMultipart({ file: new File(['my bytes'], 'bar.txt'), purpose: 'purpose' });

// You can also pass a `fetch` `Response`:
await client.files.createMultipart({ file: await fetch('https://somesite/bar.txt'), purpose: 'purpose' });

// Finally, if none of the above are convenient, you can use our `toFile` helper:
await client.files.createMultipart({
  file: await toFile(Buffer.from('my bytes'), 'bar.txt'),
  purpose: 'purpose',
});
await client.files.createMultipart({
  file: await toFile(new Uint8Array([0, 1, 2]), 'bar.txt'),
  purpose: 'purpose',
});
```

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
async function main() {
  const card = await client.cards.create({ type: 'an_incorrect_type' }).catch(async (err) => {
    if (err instanceof Sink.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError
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

Certain errors will be automatically retried 1 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const client = new Sink({
  maxRetries: 0, // default is 2
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
});

// Or, configure per-request:
await client.cards.provisionFoo('my card token', { digital_wallet: 'GOOGLE_PAY' }, {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const client = new Sink({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
});

// Override per-request:
await client.cards.create({ type: 'DIGITAL' }, {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the Sink API are paginated.
You can use `for await … of` syntax to iterate through items across all pages:

```ts
async function fetchAllPaginationTestsCursors(params) {
  const allPaginationTestsCursors = [];
  // Automatically fetches more pages as needed.
  for await (const myModel of client.paginationTests.cursor.list()) {
    allPaginationTestsCursors.push(myModel);
  }
  return allPaginationTestsCursors;
}
```

Alternatively, you can make request a single page at a time:

```ts
let page = await client.paginationTests.cursor.list();
for (const myModel of page.data) {
  console.log(myModel);
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

const client = new Sink();

const customAssignTo = await client.cards.create(
  { type: 'SINGLE_USE', not: 'TEST' },
  { headers: { 'My-Api-Version': 'My-Custom-Value' } },
);
```

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.

<!-- prettier-ignore -->
```ts
const client = new Sink();

const response = await client.cards.create({ type: 'SINGLE_USE', not: 'TEST' }).asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: customAssignTo, response: raw } = await client.cards
  .create({ type: 'SINGLE_USE', not: 'TEST' })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(customAssignTo.token);
```

### Making custom/undocumented requests

This library is typed for convenient access to the documented API. If you need to access undocumented
endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.
Options on the client, such as retries, will be respected when making these requests.

```ts
await client.post('/some/path', {
  body: { some_prop: 'foo' },
  query: { some_query_arg: 'bar' },
});
```

#### Undocumented request params

To make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented
parameter. This library doesn't validate at runtime that the request matches the type, so any extra values you
send will be sent as-is.

```ts
client.foo.create({
  foo: 'my_param',
  bar: 12,
  // @ts-expect-error baz is not yet public
  baz: 'undocumented option',
});
```

For requests with the `GET` verb, any extra params will be in the query, all other requests will send the
extra param in the body.

If you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request
options.

#### Undocumented response properties

To access undocumented response properties, you may access the response object with `// @ts-expect-error` on
the response object, or cast the response object to the requisite type. Like the request params, we do not
validate or strip extra properties from the response from the API.

### Customizing the fetch client

By default, this library uses `node-fetch` in Node, and expects a global `fetch` function in other environments.

If you would prefer to use a global, web-standards-compliant `fetch` function even in a Node environment,
(for example, if you are running Node with `--experimental-fetch` or using NextJS which polyfills with `undici`),
add the following import before your first import `from "Sink"`:

```ts
// Tell TypeScript and the package to use the global web fetch instead of node-fetch.
// Note, despite the name, this does not add any polyfills, but expects them to be provided if needed.
import 'sink-npm/shims/web';
import Sink from 'sink-npm';
```

To do the inverse, add `import "sink-npm/shims/node"` (which does import polyfills).
This can also be useful if you are getting the wrong TypeScript types for `Response` ([more details](https://github.com/stainless-sdks/sink-node-public/tree/main/src/_shims#readme)).

### Logging and middleware

You may also provide a custom `fetch` function when instantiating the client,
which can be used to inspect or alter the `Request` or `Response` before/after each request:

```ts
import { fetch } from 'undici'; // as one example
import Sink from 'sink-npm';

const client = new Sink({
  fetch: async (url: RequestInfo, init?: RequestInit): Promise<Response> => {
    console.log('About to make a request', url, init);
    const response = await fetch(url, init);
    console.log('Got response', response);
    return response;
  },
});
```

Note that if given a `DEBUG=true` environment variable, this library will log all requests and responses automatically.
This is intended for debugging purposes only and may change in the future without notice.

### Configuring an HTTP(S) Agent (e.g., for proxies)

By default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:

<!-- prettier-ignore -->
```ts
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new Sink({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
});

// Override per-request:
await client.cards.create(
  { type: 'DIGITAL' },
  {
    httpAgent: new http.Agent({ keepAlive: false }),
  },
);
```

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals)_.
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/sink-node-public/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.5 is supported.

The following runtimes are supported:

- Node.js 18 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher, using `import Sink from "npm:sink-npm"`.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.
- Web browsers: disabled by default to avoid exposing your secret API credentials. Enable browser support by explicitly setting `dangerouslyAllowBrowser` to true'.
  <details>
    <summary>More explanation</summary>

  ### Why is this dangerous?

  Enabling the `dangerouslyAllowBrowser` option can be dangerous because it exposes your secret API credentials in the client-side code. Web browsers are inherently less secure than server environments,
  any user with access to the browser can potentially inspect, extract, and misuse these credentials. This could lead to unauthorized access using your credentials and potentially compromise sensitive data or functionality.

  ### When might this not be dangerous?

  In certain scenarios where enabling browser support might not pose significant risks:

  - Internal Tools: If the application is used solely within a controlled internal environment where the users are trusted, the risk of credential exposure can be mitigated.
  - Public APIs with Limited Scope: If your API has very limited scope and the exposed credentials do not grant access to sensitive data or critical operations, the potential impact of exposure is reduced.
  - Development or debugging purpose: Enabling this feature temporarily might be acceptable, provided the credentials are short-lived, aren't also used in production environments, or are frequently rotated.

</details>

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.

## Contributing

See [the contributing documentation](./CONTRIBUTING.md).
