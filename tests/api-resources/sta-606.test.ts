// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource sta_606', () => {
  test('with_shared_model', async () => {
    const response = await sink.sta_606.withSharedModel();
  });

  test('with_shared_model: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.sta_606.withSharedModel({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('with_shared_params: only required params', async () => {
    const response = await sink.sta_606.withSharedParams();
  });

  test('with_shared_params: required and optional params', async () => {
    const response = await sink.sta_606.withSharedParams({ foo: 'string', bar: { bar: 0 } });
  });

  test('with_shared_params: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.sta_606.withSharedParams({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('with_shared_params: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.sta_606.withSharedParams({ foo: 'string', bar: { bar: 0 } }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});