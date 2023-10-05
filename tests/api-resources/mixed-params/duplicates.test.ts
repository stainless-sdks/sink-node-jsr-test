// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource duplicates', () => {
  test('bodyAndPath: only required params', async () => {
    const responsePromise = sink.mixedParams.duplicates.bodyAndPath('string', { body_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bodyAndPath: required and optional params', async () => {
    const response = await sink.mixedParams.duplicates.bodyAndPath('string', { body_id: 'string' });
  });

  test('queryAndBody: only required params', async () => {
    const responsePromise = sink.mixedParams.duplicates.queryAndBody({
      query_id: 'string',
      body_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryAndBody: required and optional params', async () => {
    const response = await sink.mixedParams.duplicates.queryAndBody({
      query_id: 'string',
      body_id: 'string',
    });
  });

  test('queryAndPath: only required params', async () => {
    const responsePromise = sink.mixedParams.duplicates.queryAndPath('string', { query_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryAndPath: required and optional params', async () => {
    const response = await sink.mixedParams.duplicates.queryAndPath('string', { query_id: 'string' });
  });
});
