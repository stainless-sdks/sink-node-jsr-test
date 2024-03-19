// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'My User Token',
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource positionalParams', () => {
  test('basicBody: only required params', async () => {
    const responsePromise = sink.positionalParams.basicBody({ key1: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('basicBody: required and optional params', async () => {
    const response = await sink.positionalParams.basicBody({ key1: 'string', options: 'string' });
  });

  test('basicQuery: only required params', async () => {
    const responsePromise = sink.positionalParams.basicQuery({ key1: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('basicQuery: required and optional params', async () => {
    const response = await sink.positionalParams.basicQuery({ key1: 'string' });
  });

  test('body', async () => {
    const responsePromise = sink.positionalParams.body({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bodyExtraParam: only required params', async () => {
    const responsePromise = sink.positionalParams.bodyExtraParam({ extra_key: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bodyExtraParam: required and optional params', async () => {
    const response = await sink.positionalParams.bodyExtraParam({ extra_key: 'string', foo: 'string' });
  });

  test('kitchenSink: only required params', async () => {
    const responsePromise = sink.positionalParams.kitchenSink('string', {
      key: 'string',
      imACamel: 'string',
      option1: true,
      camel_case: 'string',
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
    const response = await sink.positionalParams.kitchenSink('string', {
      key: 'string',
      imACamel: 'string',
      option1: true,
      camel_case: 'string',
      option2: 'string',
      really_cool_snake: 'string',
      bar: 0,
      options: 'string',
      'X-Custom-Header': 'string',
    });
  });

  test('multiplePathParams: only required params', async () => {
    const responsePromise = sink.positionalParams.multiplePathParams('string', {
      first: 'string',
      last: 'string',
      name: 'string',
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
    const response = await sink.positionalParams.multiplePathParams('string', {
      first: 'string',
      last: 'string',
      name: 'string',
      options: 'string',
    });
  });

  test('query: only required params', async () => {
    const responsePromise = sink.positionalParams.query({ foo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await sink.positionalParams.query({ foo: 'string' });
  });

  test('queryAndPath: only required params', async () => {
    const responsePromise = sink.positionalParams.queryAndPath('string', { bar: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryAndPath: required and optional params', async () => {
    const response = await sink.positionalParams.queryAndPath('string', { bar: 0 });
  });

  test('queryMultiple: only required params', async () => {
    const responsePromise = sink.positionalParams.queryMultiple({ bar: 'string', foo: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryMultiple: required and optional params', async () => {
    const response = await sink.positionalParams.queryMultiple({ bar: 'string', foo: 'string' });
  });

  test('single', async () => {
    const responsePromise = sink.positionalParams.single('string');
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
      sink.positionalParams.single('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('unionBodyAndPath: only required params', async () => {
    const responsePromise = sink.positionalParams.unionBodyAndPath('string', { kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unionBodyAndPath: required and optional params', async () => {
    const response = await sink.positionalParams.unionBodyAndPath('string', { kind: 'VIRTUAL' });
  });
});
