// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink, { toFile } from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({ userToken: 'My User Token', username: 'Robert', someNumberArgRequiredNoDefault: 0, someNumberArgRequiredNoDefaultNoEnv: 0, requiredArgNoEnv: '<example>', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource pageNumber', () => {
  test('list', async () => {
    const responsePromise = client.paginationTests.pageNumber.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.paginationTests.pageNumber.list({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.paginationTests.pageNumber.list({ page: 0, page_size: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('listWithoutCurrentPageResponse', async () => {
    const responsePromise = client.paginationTests.pageNumber.listWithoutCurrentPageResponse();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listWithoutCurrentPageResponse: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.paginationTests.pageNumber.listWithoutCurrentPageResponse({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('listWithoutCurrentPageResponse: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.paginationTests.pageNumber.listWithoutCurrentPageResponse({ page: 0, page_size: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });
});
