// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource queryParams', () => {
  test('allOf', async () => {
    const responsePromise = sink.queryParams.allOf();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('allOf: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.allOf({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('allOf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.queryParams.allOf(
        { foo_and_bar: { foo: 'string', bar: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('anyOf', async () => {
    const responsePromise = sink.queryParams.anyOf();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('anyOf: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.anyOf({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('anyOf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.queryParams.anyOf({ string_or_integer: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('anyOfStringOrArray', async () => {
    const responsePromise = sink.queryParams.anyOfStringOrArray();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('anyOfStringOrArray: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.anyOfStringOrArray({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('anyOfStringOrArray: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.queryParams.anyOfStringOrArray({ ids: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('array', async () => {
    const responsePromise = sink.queryParams.array();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('array: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.array({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('array: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.queryParams.array(
        { integer_array_param: [0, 0, 0], string_array_param: ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('enum', async () => {
    const responsePromise = sink.queryParams.enum();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enum: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.enum({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('enum: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.queryParams.enum(
        {
          integer_enum_param: 100,
          nullable_integer_enum_param: 100,
          nullable_number_enum_param: 100,
          nullable_string_enum_param: 'foo',
          number_enum_param: 100,
          string_enum_param: 'foo',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('object', async () => {
    const responsePromise = sink.queryParams.object();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('object: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.object({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('object: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.queryParams.object(
        { object_param: { foo: 'string' }, object_ref_param: { item: 'string' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('oneOf', async () => {
    const responsePromise = sink.queryParams.oneOf();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('oneOf: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.oneOf({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('oneOf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.queryParams.oneOf({ string_or_integer: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('primitives', async () => {
    const responsePromise = sink.queryParams.primitives();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('primitives: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.primitives({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('primitives: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.queryParams.primitives(
        { boolean_param: true, integer_param: 0, number_param: 0, string_param: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
