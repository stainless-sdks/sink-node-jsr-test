// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({
  userToken: 'My User Token',
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource defaultReqOptions', () => {
  test('exampleMethod', async () => {
    const responsePromise = client.defaultReqOptions.exampleMethod();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('exampleMethod: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.defaultReqOptions.exampleMethod({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
