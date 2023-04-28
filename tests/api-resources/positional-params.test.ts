// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource positional_params', () => {
  test('basic_body: only required params', async () => {
    const response = await sink.positionalParams.basicBody({ key1: 'string', options: 'string' });
  });

  test('basic_body: required and optional params', async () => {
    const response = await sink.positionalParams.basicBody({ key1: 'string', options: 'string' });
  });

  test('basic_query: only required params', async () => {
    const response = await sink.positionalParams.basicQuery({ key1: 'string' });
  });

  test('basic_query: required and optional params', async () => {
    const response = await sink.positionalParams.basicQuery({ key1: 'string' });
  });

  test('body', async () => {
    const response = await sink.positionalParams.body({ foo: 'string' });
  });

  test('body_extra_param: only required params', async () => {
    const response = await sink.positionalParams.bodyExtraParam({ extra_key: 'string', foo: 'string' });
  });

  test('body_extra_param: required and optional params', async () => {
    const response = await sink.positionalParams.bodyExtraParam({ extra_key: 'string', foo: 'string' });
  });

  test('kitchen_sink: only required params', async () => {
    const response = await sink.positionalParams.kitchenSink('string', 'string', {
      key: 'string',
      imACamel: 'string',
      option1: true,
      option2: 'string',
      really_cool_snake: 'string',
      bar: 0,
      options: 'string',
      'X-Custom-Header': 'string',
    });
  });

  test('kitchen_sink: required and optional params', async () => {
    const response = await sink.positionalParams.kitchenSink('string', 'string', {
      key: 'string',
      imACamel: 'string',
      option1: true,
      option2: 'string',
      really_cool_snake: 'string',
      bar: 0,
      options: 'string',
      'X-Custom-Header': 'string',
    });
  });

  test('multiple_path_params: only required params', async () => {
    const response = await sink.positionalParams.multiplePathParams('string', 'string', {
      first: 'string',
      last: 'string',
      options: 'string',
    });
  });

  test('multiple_path_params: required and optional params', async () => {
    const response = await sink.positionalParams.multiplePathParams('string', 'string', {
      first: 'string',
      last: 'string',
      options: 'string',
    });
  });

  test('query', async () => {
    const response = await sink.positionalParams.query('string');
  });

  test('query: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.positionalParams.query('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('query_and_path', async () => {
    const response = await sink.positionalParams.queryAndPath(0, 'string');
  });

  test('query_and_path: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.positionalParams.queryAndPath(0, 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('query_multiple: only required params', async () => {
    const response = await sink.positionalParams.queryMultiple('string', { bar: 'string' });
  });

  test('query_multiple: required and optional params', async () => {
    const response = await sink.positionalParams.queryMultiple('string', { bar: 'string' });
  });

  test('single', async () => {
    const response = await sink.positionalParams.single('string');
  });

  test('single: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.positionalParams.single('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
