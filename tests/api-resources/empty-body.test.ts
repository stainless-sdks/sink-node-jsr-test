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

describe('resource emptyBody', () => {
  test('stainlessEmptyObject: only required params', async () => {
    const responsePromise = client.emptyBody.stainlessEmptyObject('path_param', { body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('stainlessEmptyObject: required and optional params', async () => {
    const response = await client.emptyBody.stainlessEmptyObject('path_param', {
      body: {},
      query_param: 'query_param',
      second_query_param: 'second_query_param',
    });
  });

  test('typedParams: only required params', async () => {
    const responsePromise = client.emptyBody.typedParams('path_param', { body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('typedParams: required and optional params', async () => {
    const response = await client.emptyBody.typedParams('path_param', {
      body: {},
      query_param: 'query_param',
      second_query_param: 'second_query_param',
    });
  });
});
