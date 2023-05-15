// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource sharedResponses', () => {
  test('createMutualA', async () => {
    const response = await sink.recursion.sharedResponses.createMutualA();
  });

  test('createMutualA: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.recursion.sharedResponses.createMutualA({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('createMutualB', async () => {
    const response = await sink.recursion.sharedResponses.createMutualB();
  });

  test('createMutualB: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.recursion.sharedResponses.createMutualB({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('createSelf', async () => {
    const response = await sink.recursion.sharedResponses.createSelf();
  });

  test('createSelf: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.recursion.sharedResponses.createSelf({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
