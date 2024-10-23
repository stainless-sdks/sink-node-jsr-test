// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink, { toFile } from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({ userToken: 'My User Token', username: 'Robert', someNumberArgRequiredNoDefault: 0, someNumberArgRequiredNoDefaultNoEnv: 0, requiredArgNoEnv: '<example>', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource pathParams', () => {
  test('colonSuffix', async () => {
    const responsePromise = client.pathParams.colonSuffix(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('colonSuffix: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.colonSuffix(0, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('dashedParam', async () => {
    const responsePromise = client.pathParams.dashedParam('dashed-param');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('dashedParam: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.dashedParam('dashed-param', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('dateParam', async () => {
    const responsePromise = client.pathParams.dateParam('2023-09-01');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('dateParam: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.dateParam('2023-09-01', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('datetimeParam', async () => {
    const responsePromise = client.pathParams.datetimeParam('2021-06-28T22:53:15Z');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('datetimeParam: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.datetimeParam('2021-06-28T22:53:15Z', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('enumParam', async () => {
    const responsePromise = client.pathParams.enumParam('A');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enumParam: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.enumParam('A', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('fileExtension', async () => {
    const responsePromise = client.pathParams.fileExtension(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fileExtension: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.fileExtension(0, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('integerParam', async () => {
    const responsePromise = client.pathParams.integerParam(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('integerParam: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.integerParam(0, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('multiple', async () => {
    const responsePromise = client.pathParams.multiple('first', 'second', 'last');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('multiple: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.multiple('first', 'second', 'last', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('nullableParams', async () => {
    const responsePromise = client.pathParams.nullableParams('nullable_param_1', 'nullable_param_2', 'foo', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('paramsMixedTypes', async () => {
    const responsePromise = client.pathParams.paramsMixedTypes(0, 'string_param');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('paramsMixedTypes: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.paramsMixedTypes(0, 'string_param', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('queryParam', async () => {
    const responsePromise = client.pathParams.queryParam(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryParam: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.queryParam(0, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('singular', async () => {
    const responsePromise = client.pathParams.singular('singular');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('singular: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pathParams.singular('singular', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });
});
