// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource languages', () => {
  test('skippedForPython', async () => {
    const responsePromise = sink.decoratorTests.languages.skippedForPython();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('skippedForPython: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.decoratorTests.languages.skippedForPython({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
