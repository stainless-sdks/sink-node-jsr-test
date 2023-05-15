// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource makeAmbiguousSchemasLooser', () => {
  test('makeAmbiguousSchemasLooser', async () => {
    const response = await sink.makeAmbiguousSchemasLooser.makeAmbiguousSchemasLooser();
  });

  test('makeAmbiguousSchemasLooser: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.makeAmbiguousSchemasLooser.makeAmbiguousSchemasLooser({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
