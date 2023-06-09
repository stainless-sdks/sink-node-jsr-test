// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource mixedParams', () => {
  test('queryAndBody', async () => {
    const response = await sink.mixedParams.queryAndBody();
  });

  test('queryAndBody: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.mixedParams.queryAndBody({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('queryAndBody: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.mixedParams.queryAndBody(
        { query_param: 'string', body_param: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('queryBodyAndPath', async () => {
    const response = await sink.mixedParams.queryBodyAndPath('string');
  });

  test('queryBodyAndPath: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.mixedParams.queryBodyAndPath('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('queryBodyAndPath: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.mixedParams.queryBodyAndPath(
        'string',
        { query_param: 'string', body_param: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
