// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink, { toFile } from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({ userToken: 'My User Token', username: 'Robert', someNumberArgRequiredNoDefault: 0, someNumberArgRequiredNoDefaultNoEnv: 0, requiredArgNoEnv: '<example>', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource unionTypes', () => {
  test('mixedTypes', async () => {
    const responsePromise = client.responses.unionTypes.mixedTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('mixedTypes: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.responses.unionTypes.mixedTypes({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('nullableUnion', async () => {
    const responsePromise = client.responses.unionTypes.nullableUnion();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('nullableUnion: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.responses.unionTypes.nullableUnion({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('numbers', async () => {
    const responsePromise = client.responses.unionTypes.numbers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('numbers: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.responses.unionTypes.numbers({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('objects', async () => {
    const responsePromise = client.responses.unionTypes.objects();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('objects: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.responses.unionTypes.objects({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('superMixedTypes', async () => {
    const responsePromise = client.responses.unionTypes.superMixedTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('superMixedTypes: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.responses.unionTypes.superMixedTypes({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('unknownVariant', async () => {
    const responsePromise = client.responses.unionTypes.unknownVariant();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unknownVariant: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.responses.unionTypes.unknownVariant({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });
});
