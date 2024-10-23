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

describe('resource clientParams', () => {
  test('withPathParam: only required params', async () => {
    const responsePromise = client.clientParams.withPathParam({
      client_path_param: 'client_path_param',
      client_path_or_query_param: 'client_path_or_query_param',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('withPathParam: required and optional params', async () => {
    const response = await client.clientParams.withPathParam({
      client_path_param: 'client_path_param',
      client_path_or_query_param: 'client_path_or_query_param',
    });
  });

  test('withPathParamAndStandard: only required params', async () => {
    const responsePromise = client.clientParams.withPathParamAndStandard('id', {
      camelCasedPath: 'camelCasedPath',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('withPathParamAndStandard: required and optional params', async () => {
    const response = await client.clientParams.withPathParamAndStandard('id', {
      camelCasedPath: 'camelCasedPath',
    });
  });

  test('withQueryParam: only required params', async () => {
    const responsePromise = client.clientParams.withQueryParam({
      client_path_or_query_param: 'client_path_or_query_param',
      client_query_param: 'client_query_param',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('withQueryParam: required and optional params', async () => {
    const response = await client.clientParams.withQueryParam({
      client_path_or_query_param: 'client_path_or_query_param',
      client_query_param: 'client_query_param',
    });
  });
});
