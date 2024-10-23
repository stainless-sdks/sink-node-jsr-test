// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink, { toFile } from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({ userToken: 'My User Token', username: 'Robert', someNumberArgRequiredNoDefault: 0, someNumberArgRequiredNoDefaultNoEnv: 0, requiredArgNoEnv: '<example>', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource reservedNames', () => {
  test('commonReservedParams: only required params', async () => {
    const responsePromise = client.names.reservedNames.commonReservedParams({ from: 'from' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('commonReservedParams: required and optional params', async () => {
    const response = await client.names.reservedNames.commonReservedParams({ from: 'from' });
  });
});
