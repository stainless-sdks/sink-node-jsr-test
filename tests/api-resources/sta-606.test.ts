// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource sta606', () => {
  test('withSharedModel', async () => {
    const response = await sink.sta606.withSharedModel();
  });

  test('withSharedModel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.sta606.withSharedModel({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('withSharedParams: only required params', async () => {
    const response = await sink.sta606.withSharedParams({ bar: { bar: 0 }, foo: 'string' });
  });

  test('withSharedParams: required and optional params', async () => {
    const response = await sink.sta606.withSharedParams({ bar: { bar: 0 }, foo: 'string' });
  });
});
