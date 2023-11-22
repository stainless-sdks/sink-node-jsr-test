// File generated from our OpenAPI spec by Stainless.

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
      username: 'Sam',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect((req.headers as Headers)['X-My-Default-Header']).toEqual('2');
    });

    test('can be overriden with `undefined`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });

    test('can be overriden with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        userToken: 'My User Token',
        username: 'Sam',
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
        username: 'Sam',
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
        username: 'Sam',
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
      username: 'Sam',
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
      username: 'Sam',
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
        username: 'Sam',
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
        username: 'Sam',
        someNumberArgRequiredNoDefault: 0,
        someNumberArgRequiredNoDefaultNoEnv: 0,
        requiredArgNoEnv: '<example>',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Sink({
      maxRetries: 2,
      userToken: 'My User Token',
      username: 'Sam',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });
    expect(client.maxRetries).toEqual(2);

    // default
    const client2 = new Sink({
      userToken: 'My User Token',
      username: 'Sam',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });
    expect(client2.maxRetries).toEqual(1);
  });

  test('with environment variable arguments', () => {
    // set options via env var
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'My User Token';
    process.env['SINK_USER'] = 'Sam';
    process.env['SINK_SOME_NUMBER_ARG'] = JSON.stringify(0);
    const client = new Sink({ someNumberArgRequiredNoDefaultNoEnv: 0, requiredArgNoEnv: '<example>' });
    expect(client.userToken).toBe('My User Token');
    expect(client.username).toBe('Sam');
    expect(client.someNumberArgRequiredNoDefault).toBe(0);
    expect(client.someNumberArgRequiredNoDefaultNoEnv).toBe(0);
    expect(client.requiredArgNoEnv).toBe('<example>');
  });

  test('with overriden environment variable arguments', () => {
    // set options via env var
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'another My User Token';
    process.env['SINK_USER'] = 'another Sam';
    process.env['SINK_SOME_NUMBER_ARG'] = JSON.stringify(0);
    const client = new Sink({
      userToken: 'My User Token',
      username: 'Sam',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });
    expect(client.userToken).toBe('My User Token');
    expect(client.username).toBe('Sam');
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
      username: 'Sam',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
    });
    await client.tools.skippedParams({}, { idempotencyKey: 'my-idempotency-key' });
  });
});

describe('request building', () => {
  const client = new Sink({
    userToken: 'My User Token',
    username: 'Sam',
    someNumberArgRequiredNoDefault: 0,
    someNumberArgRequiredNoDefaultNoEnv: 0,
    requiredArgNoEnv: '<example>',
  });

  describe('Content-Length', () => {
    test('handles multi-byte characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: '—' } });
      expect((req.headers as Record<string, string>)['Content-Length']).toEqual('20');
    });

    test('handles standard characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: 'hello' } });
      expect((req.headers as Record<string, string>)['Content-Length']).toEqual('22');
    });
  });
});

describe('retries', () => {
  test('single retry', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (!count++)
        return new Promise((resolve, reject) =>
          signal?.addEventListener('abort', () => reject(new Error('timed out'))),
        );
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Sink({
      userToken: 'My User Token',
      username: 'Sam',
      someNumberArgRequiredNoDefault: 0,
      someNumberArgRequiredNoDefaultNoEnv: 0,
      requiredArgNoEnv: '<example>',
      timeout: 2000,
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
  }, 10000);
});
