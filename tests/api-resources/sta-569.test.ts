// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource sta569', () => {
  test('oneEntry: only required params', async () => {
    const response = await sink.sta569.oneEntry({ enable_debug_logging: true });
  });

  test('oneEntry: required and optional params', async () => {
    const response = await sink.sta569.oneEntry({ enable_debug_logging: true });
  });

  test('oneEntryWithNull', async () => {
    const response = await sink.sta569.oneEntryWithNull();
  });

  test('oneEntryWithNull: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.sta569.oneEntryWithNull({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('oneEntryWithNull: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.sta569.oneEntryWithNull({ enable_debug_logging: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
