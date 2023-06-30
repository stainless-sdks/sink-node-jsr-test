// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource docstrings', () => {
  test('leadingDoubleQuote', async () => {
    const response = await sink.docstrings.leadingDoubleQuote();
  });

  test('leadingDoubleQuote: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.docstrings.leadingDoubleQuote({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('trailingDoubleQuote', async () => {
    const response = await sink.docstrings.trailingDoubleQuote();
  });

  test('trailingDoubleQuote: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.docstrings.trailingDoubleQuote({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });
});
