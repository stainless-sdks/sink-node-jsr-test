// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'My User Token',
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource headerParams', () => {
  test('allTypes: only required params', async () => {
    const responsePromise = sink.headerParams.allTypes({
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
    const response = await sink.headerParams.allTypes({
      'X-Required-Boolean': true,
      'X-Required-Integer': 0,
      'X-Required-Number': 0,
      'X-Required-String': 'X-Required-String',
      body_argument: 'body_argument',
      'X-Optional-Boolean': true,
      'X-Optional-Integer': 0,
      'X-Optional-Number': 0,
      'X-Optional-String': 'X-Optional-String',
    });
  });

  test('clientArgument', async () => {
    const responsePromise = sink.headerParams.clientArgument({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
