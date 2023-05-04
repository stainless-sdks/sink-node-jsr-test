// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource envelopes', () => {
  test('explicit', async () => {
    const response = await sink.envelopes.explicit();
  });

  test('explicit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.envelopes.explicit({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('implicit', async () => {
    const response = await sink.envelopes.implicit();
  });

  test('implicit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.envelopes.implicit({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('inlineResponse', async () => {
    const response = await sink.envelopes.inlineResponse();
  });

  test('inlineResponse: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.envelopes.inlineResponse({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });
});
