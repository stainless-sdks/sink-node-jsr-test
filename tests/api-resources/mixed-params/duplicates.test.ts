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

describe('resource duplicates', () => {
  test('bodyAndPath: only required params', async () => {
    const responsePromise = client.mixedParams.duplicates.bodyAndPath('id', { body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bodyAndPath: required and optional params', async () => {
    const response = await client.mixedParams.duplicates.bodyAndPath('id', { body_id: 'id' });
  });

  test('queryAndBody: only required params', async () => {
    const responsePromise = client.mixedParams.duplicates.queryAndBody({ query_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryAndBody: required and optional params', async () => {
    const response = await client.mixedParams.duplicates.queryAndBody({ query_id: 'id', body_id: 'id' });
  });

  test('queryAndPath: only required params', async () => {
    const responsePromise = client.mixedParams.duplicates.queryAndPath('id', { query_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryAndPath: required and optional params', async () => {
    const response = await client.mixedParams.duplicates.queryAndPath('id', { query_id: 'id' });
  });
});
