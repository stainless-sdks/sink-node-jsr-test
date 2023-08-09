// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource names', () => {
  test('propertiesCommonConflicts: only required params', async () => {
    const responsePromise = sink.names.propertiesCommonConflicts({
      bool: true,
      bool_2: true,
      date: '2019-12-27',
      date_2: '2019-12-27',
      float: 0,
      float_2: 0,
      int: 0,
      int_2: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('propertiesCommonConflicts: required and optional params', async () => {
    const response = await sink.names.propertiesCommonConflicts({
      bool: true,
      bool_2: true,
      date: '2019-12-27',
      date_2: '2019-12-27',
      float: 0,
      float_2: 0,
      int: 0,
      int_2: 0,
    });
  });

  test('responsePropertyClashesModelImport', async () => {
    const responsePromise = sink.names.responsePropertyClashesModelImport();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('responsePropertyClashesModelImport: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.names.responsePropertyClashesModelImport({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('responseShadowsPydantic', async () => {
    const responsePromise = sink.names.responseShadowsPydantic();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('responseShadowsPydantic: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.names.responseShadowsPydantic({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });
});
