// File generated from our OpenAPI spec by Stainless.

import { Headers } from 'sink-npm/core';
import Sink from 'sink-npm';

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
      username: 'Robert',
      requiredArgNoEnv: '<example>',
      userToken: 'my user token',
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
        username: 'Robert',
        requiredArgNoEnv: '<example>',
        userToken: 'my user token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        username: 'Robert',
        requiredArgNoEnv: '<example>',
        userToken: 'my user token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        username: 'Robert',
        requiredArgNoEnv: '<example>',
        userToken: 'my user token',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/custom/path/',
        username: 'Robert',
        requiredArgNoEnv: '<example>',
        userToken: 'my user token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Sink({
        baseURL: 'http://localhost:5000/custom/path',
        username: 'Robert',
        requiredArgNoEnv: '<example>',
        userToken: 'my user token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Sink({
      maxRetries: 1,
      username: 'Robert',
      requiredArgNoEnv: '<example>',
      userToken: 'my user token',
    });
    expect(client.maxRetries).toEqual(1);

    // default
    const client2 = new Sink({
      username: 'Robert',
      requiredArgNoEnv: '<example>',
      userToken: 'my user token',
    });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with minimal arguments', () => {
    // set user token via env var
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'env var user token';
    const client = new Sink({ username: 'Robert', requiredArgNoEnv: '<example>' });
    expect(client.userToken).toBe('env var user token');
    expect(client.username).toBe('Robert');
    expect(client.requiredArgNoEnv).toBe('<example>');
  });

  test('with userToken argument', () => {
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'env var user token';

    const client = new Sink({
      userToken: 'another user token',
      username: 'Robert',
      requiredArgNoEnv: '<example>',
    });
    expect(client.userToken).toBe('another user token');
  });

  test('with options argument', () => {
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'env var user token';

    // userToken and custom options
    const client = new Sink({
      userToken: 'my user token',
      username: 'Robert',
      requiredArgNoEnv: '<example>',
    });
    expect(client.userToken).toBe('my user token');
  });

  test('with disabled authentication', () => {
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'env var user token';
    const client = new Sink({ userToken: null, username: 'Robert', requiredArgNoEnv: '<example>' });
    expect(client.userToken).toBeNull();
  });
});

describe('idempotency', () => {
  test('key can be set per-request', async () => {
    const client = new Sink({
      userToken: 'my user token',
      username: 'Robert',
      requiredArgNoEnv: '<example>',
      baseURL: 'http://127.0.0.1:4010',
    });
    await client.createNoResponse({ idempotencyKey: 'my-idempotency-key' });
  });
});
