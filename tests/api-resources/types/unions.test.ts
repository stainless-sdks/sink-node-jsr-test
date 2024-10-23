// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink, { toFile } from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({ userToken: 'My User Token', username: 'Robert', someNumberArgRequiredNoDefault: 0, someNumberArgRequiredNoDefaultNoEnv: 0, requiredArgNoEnv: '<example>', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource unions', () => {
  test('arrayParamDiscriminatedByPropertyName: only required params', async () => {
    const responsePromise = client.types.unions.arrayParamDiscriminatedByPropertyName([{ value: 'value' }, { value: 'value' }, { value: 'value' }]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('arrayParamDiscriminatedByPropertyName: required and optional params', async () => {
    const response = await client.types.unions.arrayParamDiscriminatedByPropertyName([{ value: 'value', type: 'a' }, { value: 'value', type: 'a' }, { value: 'value', type: 'a' }]);
  });

  test('arrayParamDiscriminatedWithBasicMapping: only required params', async () => {
    const responsePromise = client.types.unions.arrayParamDiscriminatedWithBasicMapping([{ value: 'value' }, { value: 'value' }, { value: 'value' }]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('arrayParamDiscriminatedWithBasicMapping: required and optional params', async () => {
    const response = await client.types.unions.arrayParamDiscriminatedWithBasicMapping([{ value: 'value', type: 'a' }, { value: 'value', type: 'a' }, { value: 'value', type: 'a' }]);
  });

  test('paramDiscriminatedByPropertyName: only required params', async () => {
    const responsePromise = client.types.unions.paramDiscriminatedByPropertyName({ value: 'value' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('paramDiscriminatedByPropertyName: required and optional params', async () => {
    const response = await client.types.unions.paramDiscriminatedByPropertyName({ value: 'value', type: 'a' });
  });

  test('paramDiscriminatedWithBasicMapping: only required params', async () => {
    const responsePromise = client.types.unions.paramDiscriminatedWithBasicMapping({ value: 'value' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('paramDiscriminatedWithBasicMapping: required and optional params', async () => {
    const response = await client.types.unions.paramDiscriminatedWithBasicMapping({ value: 'value', type: 'a' });
  });

  test('responseDiscriminatedByPropertyName', async () => {
    const responsePromise = client.types.unions.responseDiscriminatedByPropertyName();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('responseDiscriminatedByPropertyName: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.types.unions.responseDiscriminatedByPropertyName({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('responseDiscriminatedWithBasicMapping', async () => {
    const responsePromise = client.types.unions.responseDiscriminatedWithBasicMapping();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('responseDiscriminatedWithBasicMapping: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.types.unions.responseDiscriminatedWithBasicMapping({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });
});
