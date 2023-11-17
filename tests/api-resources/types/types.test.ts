// File generated from our OpenAPI spec by Stainless.

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

describe('resource types', () => {
  test('dates: only required params', async () => {
    const responsePromise = sink.types.dates({
      required_date: '2019-12-27',
      required_nullable_date: '2019-12-27',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('dates: required and optional params', async () => {
    const response = await sink.types.dates({
      required_date: '2019-12-27',
      required_nullable_date: '2019-12-27',
      list_date: ['2019-12-27', '2019-12-27', '2019-12-27'],
      oneof_date: '2019-12-27',
      optional_date: '2019-12-27',
    });
  });

  test('datetimes: only required params', async () => {
    const responsePromise = sink.types.datetimes({
      required_datetime: '2019-12-27T18:11:19.117Z',
      required_nullable_datetime: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('datetimes: required and optional params', async () => {
    const response = await sink.types.datetimes({
      required_datetime: '2019-12-27T18:11:19.117Z',
      required_nullable_datetime: '2019-12-27T18:11:19.117Z',
      list_datetime: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
      oneof_datetime: '2019-12-27T18:11:19.117Z',
      optional_datetime: '2019-12-27T18:11:19.117Z',
    });
  });
});
