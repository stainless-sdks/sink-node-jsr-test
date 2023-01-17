// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource offset_case', () => {
  test('list: only required params', async () => {
    const response = await sink.paginationTests.offsetCase.list();
  });

  test('list: required and optional params', async () => {
    const response = await sink.paginationTests.offsetCase.list({ limit: 0, offset: 0 });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.paginationTests.offsetCase.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.paginationTests.offsetCase.list({ limit: 0, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
