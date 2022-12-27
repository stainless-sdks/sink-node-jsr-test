// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource top_level', () => {
  test('status', async () => {
    const response = await sink.status();
  });

  test('status: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.status({ path: '/_stainless_unknown_path' })).rejects.toThrow(Sink.NotFoundError);
  });

  test('create_no_response', async () => {
    const response = await sink.createNoResponse();
  });

  test('create_no_response: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.createNoResponse({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('sta_563_post_empty_object', async () => {
    const response = await sink.sta_563PostEmptyObject();
  });

  test('sta_563_post_empty_object: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.sta_563PostEmptyObject({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('getAuthURL', () => {
    const url = sink.getAuthURL({
      clientId: '<client_id>',
      redirectUri: 'http://localhost:8000/auth/success',
    });
    expect(url).toEqual(
      'http://localhost:8000/auth?client_id=%3Cclient_id%3E&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fsuccess',
    );
  });
});
