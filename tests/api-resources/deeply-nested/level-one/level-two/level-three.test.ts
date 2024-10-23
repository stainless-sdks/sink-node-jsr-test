// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink, { toFile } from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({ userToken: 'My User Token', username: 'Robert', someNumberArgRequiredNoDefault: 0, someNumberArgRequiredNoDefaultNoEnv: 0, requiredArgNoEnv: '<example>', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource levelThree', () => {
  test('methodLevel3', async () => {
    const responsePromise = client.deeplyNested.levelOne.levelTwo.levelThree.methodLevel3('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('methodLevel3: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.deeplyNested.levelOne.levelTwo.levelThree.methodLevel3('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });
});
