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

describe('resource headerParams', () => {
  test('allTypes: only required params', async () => {
    const responsePromise = client.headerParams.allTypes({
      'X-Required-Boolean': true,
      'X-Required-Integer': 0,
      'X-Required-Number': 0,
      'X-Required-String': 'X-Required-String',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('allTypes: required and optional params', async () => {
    const response = await client.headerParams.allTypes({
      'X-Required-Boolean': true,
      'X-Required-Integer': 0,
      'X-Required-Number': 0,
      'X-Required-String': 'X-Required-String',
      body_argument: 'body_argument',
      'X-Nullable-Integer': 0,
      'X-Optional-Boolean': true,
      'X-Optional-Integer': 0,
      'X-Optional-Number': 0,
      'X-Optional-String': 'X-Optional-String',
    });
  });

  // prism doesn't support array headers
  test.skip('arrays: only required params', async () => {
    const responsePromise = client.headerParams.arrays({
      'X-Required-Int-Array': [0, 0, 0],
      'X-Required-String-Array': ['string', 'string', 'string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism doesn't support array headers
  test.skip('arrays: required and optional params', async () => {
    const response = await client.headerParams.arrays({
      'X-Required-Int-Array': [0, 0, 0],
      'X-Required-String-Array': ['string', 'string', 'string'],
      body_argument: 'body_argument',
      'X-Optional-Int-Array': [0, 0, 0],
      'X-Optional-String-Array': ['string', 'string', 'string'],
    });
  });

  test('clientArgument', async () => {
    const responsePromise = client.headerParams.clientArgument({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism doesn't like us changing the header to a string
  test.skip('nullableType', async () => {
    const responsePromise = client.headerParams.nullableType({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
