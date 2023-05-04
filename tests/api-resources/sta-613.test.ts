// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource sta613', () => {
  test('globalWithStandard', async () => {
    const response = await sink.sta613.globalWithStandard('string', 'string');
  });

  test('globalWithStandard: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.sta613.globalWithStandard('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('onlyGlobal', async () => {
    const response = await sink.sta613.onlyGlobal('string');
  });

  test('onlyGlobal: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.sta613.onlyGlobal('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });
});
