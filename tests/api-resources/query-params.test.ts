// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource queryParams', () => {
  test('anyOf', async () => {
    const response = await sink.queryParams.anyOf();
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

  test('array', async () => {
    const response = await sink.queryParams.array();
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
    const response = await sink.queryParams.enum();
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
    const response = await sink.queryParams.object();
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
    const response = await sink.queryParams.oneOf();
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
    const response = await sink.queryParams.primitives();
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
