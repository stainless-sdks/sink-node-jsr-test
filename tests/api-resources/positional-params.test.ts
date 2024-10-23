// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({
  userToken: 'My User Token',
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource positionalParams', () => {
  test('basicBody: only required params', async () => {
    const responsePromise = client.positionalParams.basicBody({ key1: 'key1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('basicBody: required and optional params', async () => {
    const response = await client.positionalParams.basicBody({ key1: 'key1', options: 'options' });
  });

  test('basicQuery: only required params', async () => {
    const responsePromise = client.positionalParams.basicQuery({ key1: 'key1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('basicQuery: required and optional params', async () => {
    const response = await client.positionalParams.basicQuery({ key1: 'key1' });
  });

  test('body', async () => {
    const responsePromise = client.positionalParams.body({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bodyExtraParam: only required params', async () => {
    const responsePromise = client.positionalParams.bodyExtraParam({ extra_key: 'extra_key' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bodyExtraParam: required and optional params', async () => {
    const response = await client.positionalParams.bodyExtraParam({ extra_key: 'extra_key', foo: 'foo' });
  });

  test('kitchenSink: only required params', async () => {
    const responsePromise = client.positionalParams.kitchenSink('id', {
      key: 'key',
      imACamel: 'imACamel',
      option1: true,
      camel_case: 'camel_case',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('kitchenSink: required and optional params', async () => {
    const response = await client.positionalParams.kitchenSink('id', {
      key: 'key',
      imACamel: 'imACamel',
      option1: true,
      camel_case: 'camel_case',
      option2: 'option2',
      really_cool_snake: 'really_cool_snake',
      bar: 0,
      options: 'options',
      'X-Custom-Header': 'X-Custom-Header',
    });
  });

  test('multiplePathParams: only required params', async () => {
    const responsePromise = client.positionalParams.multiplePathParams('second', {
      first: 'first',
      last: 'last',
      name: 'name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('multiplePathParams: required and optional params', async () => {
    const response = await client.positionalParams.multiplePathParams('second', {
      first: 'first',
      last: 'last',
      name: 'name',
      options: 'options',
    });
  });

  test('query: only required params', async () => {
    const responsePromise = client.positionalParams.query({ foo: 'foo' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.positionalParams.query({ foo: 'foo' });
  });

  test('queryAndPath: only required params', async () => {
    const responsePromise = client.positionalParams.queryAndPath('id', { bar: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryAndPath: required and optional params', async () => {
    const response = await client.positionalParams.queryAndPath('id', { bar: 0 });
  });

  test('queryMultiple: only required params', async () => {
    const responsePromise = client.positionalParams.queryMultiple({ bar: 'bar', foo: 'foo' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryMultiple: required and optional params', async () => {
    const response = await client.positionalParams.queryMultiple({ bar: 'bar', foo: 'foo' });
  });

  test('single', async () => {
    const responsePromise = client.positionalParams.single('single');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('single: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.positionalParams.single('single', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('unionBodyAndPath: only required params', async () => {
    const responsePromise = client.positionalParams.unionBodyAndPath('id', { kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unionBodyAndPath: required and optional params', async () => {
    const response = await client.positionalParams.unionBodyAndPath('id', { kind: 'VIRTUAL' });
  });
});
