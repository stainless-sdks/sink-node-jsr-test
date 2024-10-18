// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink from 'sink-npm';
import { APIUserAbortError } from 'sink-npm';
import { Headers } from 'sink-npm/core';
import defaultFetch, { Response, type RequestInit, type RequestInfo } from 'node-fetch';

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  describe('defaultHeaders', () => {
    const client = new Sink({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect((req.headers as Headers)['x-my-default-header']).toEqual('2');
    });

    test('can ignore `undefined` and leave the default', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect((req.headers as Headers)['x-my-default-header']).toEqual('2');
    });

    test('can be removed with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect(req.headers as Headers).not.toHaveProperty('x-my-default-header');
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new Sink({
      baseURL: 'http://localhost:5000/',
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
  });

  test('custom signal', async () => {
    const client = new Sink({
      baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      fetch: (...args) => {
        return new Promise((resolve, reject) =>
          setTimeout(
            () =>
              defaultFetch(...args)
                .then(resolve)
                .catch(reject),
            300,
          ),
        );
      },
    });

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 200);

    const spy = jest.spyOn(client, 'request');

    await expect(client.get('/foo', { signal: controller.signal })).rejects.toThrowError(APIUserAbortError);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/custom/path/',
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/custom/path',
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    afterEach(() => {
      process.env['SINK_BASE_URL'] = undefined;
    });

    test('explicit option', () => {
      const client = new Sink({
        baseURL: 'https://example.com',
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.baseURL).toEqual('https://example.com');
    });

    test('env variable', () => {
      process.env['SINK_BASE_URL'] = 'https://example.com/from_env';
      const client = new Sink({
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.baseURL).toEqual('https://example.com/from_env');
    });

    test('empty env variable', () => {
      process.env['SINK_BASE_URL'] = ''; // empty
      const client = new Sink({
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.baseURL).toEqual('https://demo.stainlessapi.com/');
    });

    test('blank env variable', () => {
      process.env['SINK_BASE_URL'] = '  '; // blank
      const client = new Sink({
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.baseURL).toEqual('https://demo.stainlessapi.com/');
    });

    test('env variable with environment', () => {
      process.env['SINK_BASE_URL'] = 'https://example.com/from_env';

      expect(
        () =>
          new Sink({
            userToken: 'My User Token',
            username: 'Robert',
            someNumberArgRequiredNoDefault: 0,
            someNumberArgRequiredNoDefaultNoEnv: 0,
            requiredArgNoEnv: '<example>',
            environment: 'production',
          }),
      ).toThrowErrorMatchingInlineSnapshot(
        `"Ambiguous URL; The \`baseURL\` option (or SINK_BASE_URL env var) and the \`environment\` option are given. If you want to use the environment you must pass baseURL: null"`,
      );

      const client = new Sink({
        userToken: 'My User Token',
        username: 'Robert',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
        baseURL: null,
        environment: 'production',
      });
      expect(client.baseURL).toEqual('https://demo.stainlessapi.com/');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Sink({
      maxRetries: 2,
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });
    expect(client.maxRetries).toEqual(2);

    // default
    const client2 = new Sink({
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });
    expect(client2.maxRetries).toEqual(1);
  });

  test('with environment variable arguments', () => {
    // set options via env var
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'My User Token';
    process.env['SINK_USER'] = 'Robert';
    process.env['SINK_SOME_NUMBER_ARG'] = JSON.stringify(0);
    const client = new Sink({ someNumberArgRequiredNoDefaultNoEnv: 0, requiredArgNoEnv: '<example>' });
    expect(client.userToken).toBe('My User Token');
    expect(client.username).toBe('Robert');
    expect(client.someNumberArgRequiredNoDefault).toBe(0);
    expect(client.someNumberArgRequiredNoDefaultNoEnv).toBe(0);
    expect(client.requiredArgNoEnv).toBe('<example>');
  });

  test('with overriden environment variable arguments', () => {
    // set options via env var
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'another My User Token';
    process.env['SINK_USER'] = 'another Robert';
    process.env['SINK_SOME_NUMBER_ARG'] = JSON.stringify(0);
    const client = new Sink({
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });
    expect(client.userToken).toBe('My User Token');
    expect(client.username).toBe('Robert');
    expect(client.someNumberArgRequiredNoDefault).toBe(0);
    expect(client.someNumberArgRequiredNoDefaultNoEnv).toBe(0);
    expect(client.requiredArgNoEnv).toBe('<example>');
  });
});

describe('idempotency', () => {
  test('key can be set per-request', async () => {
    const client = new Sink({
      baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });
    await client.createNoResponse({ idempotencyKey: 'my-idempotency-key' });
  });
});

describe('request building', () => {
  const client = new Sink({
    userToken: 'My User Token',
    username: 'Robert',
    someNumberArgRequiredNoDefault: 0,
    someNumberArgRequiredNoDefaultNoEnv: 0,
    requiredArgNoEnv: '<example>',
  });

  describe('Content-Length', () => {
    test('handles multi-byte characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: '—' } });
      expect((req.headers as Record<string, string>)['content-length']).toEqual('20');
    });

    test('handles standard characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: 'hello' } });
      expect((req.headers as Record<string, string>)['content-length']).toEqual('22');
    });
  });

  describe('custom headers', () => {
    test('handles undefined', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        body: { value: 'hello' },
        headers: { 'X-Foo': 'baz', 'x-foo': 'bar', 'x-Foo': undefined, 'x-baz': 'bam', 'X-Baz': null },
      });
      expect((req.headers as Record<string, string>)['x-foo']).toEqual('bar');
      expect((req.headers as Record<string, string>)['x-Foo']).toEqual(undefined);
      expect((req.headers as Record<string, string>)['X-Foo']).toEqual(undefined);
      expect((req.headers as Record<string, string>)['x-baz']).toEqual(undefined);
    });
  });
});

describe('retries', () => {
  test('retry on timeout', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Promise(
          (resolve, reject) => signal?.addEventListener('abort', () => reject(new Error('timed out'))),
        );
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Sink({
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      timeout: 10,
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: RequestInfo, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Sink({
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      fetch: testFetch,
      maxRetries: 4,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers)['x-stainless-retry-count']).toEqual('2');
    expect(count).toEqual(3);
  });

  test('omit retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: RequestInfo, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new Sink({
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      fetch: testFetch,
      maxRetries: 4,
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': null },
      }),
    ).toEqual({ a: 1 });

    expect(capturedRequest!.headers as Headers).not.toHaveProperty('x-stainless-retry-count');
  });

  test('omit retry count header by default', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: RequestInfo, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new Sink({
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      fetch: testFetch,
      maxRetries: 4,
      defaultHeaders: { 'X-Stainless-Retry-Count': null },
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
      }),
    ).toEqual({ a: 1 });

    expect(capturedRequest!.headers as Headers).not.toHaveProperty('x-stainless-retry-count');
  });

  test('overwrite retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: RequestInfo, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new Sink({
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      fetch: testFetch,
      maxRetries: 4,
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': '42' },
      }),
    ).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers)['x-stainless-retry-count']).toBe('42');
  });

  test('retry on 429 with retry-after', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Sink({
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry on 429 with retry-after-ms', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After-Ms': '10',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Sink({
      userToken: 'My User Token',
      username: 'Robert',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });
});
