// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234',baseURL: 'http://127.0.0.1:4010',username: 'Robert' });

describe('resource query_params', () => {
  test('anyOf: only required params', async () => {
    const response = await sink.queryParams.anyOf()

  })

  test('anyOf: required and optional params', async () => {
    const response = await sink.queryParams.anyOf({ string_or_integer: 'string' })
  })

  test('anyOf: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.anyOf({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('anyOf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.anyOf({ string_or_integer: 'string' }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('array: only required params', async () => {
    const response = await sink.queryParams.array()

  })

  test('array: required and optional params', async () => {
    const response = await sink.queryParams.array({ string_array_param: ['string', 'string', 'string'],integer_array_param: [0, 0, 0] })
  })

  test('array: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.array({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('array: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.array({ string_array_param: ['string', 'string', 'string'],integer_array_param: [0, 0, 0] }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('enum: only required params', async () => {
    const response = await sink.queryParams.enum()

  })

  test('enum: required and optional params', async () => {
    const response = await sink.queryParams.enum({ string_enum_param: 'foo',integer_enum_param: 100,number_enum_param: 100,nullable_string_enum_param: 'foo',nullable_integer_enum_param: 100,nullable_number_enum_param: 100 })
  })

  test('enum: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.enum({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('enum: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.enum({ string_enum_param: 'foo',integer_enum_param: 100,number_enum_param: 100,nullable_string_enum_param: 'foo',nullable_integer_enum_param: 100,nullable_number_enum_param: 100 }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('object: only required params', async () => {
    const response = await sink.queryParams.object()

  })

  test('object: required and optional params', async () => {
    const response = await sink.queryParams.object({ object_param: { foo: 'string' },object_ref_param: { item: 'string' } })
  })

  test('object: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.object({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('object: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.object({ object_param: { foo: 'string' },object_ref_param: { item: 'string' } }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('oneOf: only required params', async () => {
    const response = await sink.queryParams.oneOf()

  })

  test('oneOf: required and optional params', async () => {
    const response = await sink.queryParams.oneOf({ string_or_integer: 'string' })
  })

  test('oneOf: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.oneOf({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('oneOf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.oneOf({ string_or_integer: 'string' }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('primitives: only required params', async () => {
    const response = await sink.queryParams.primitives()

  })

  test('primitives: required and optional params', async () => {
    const response = await sink.queryParams.primitives({ string_param: 'string',boolean_param: true,number_param: 0,integer_param: 0 })
  })

  test('primitives: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.primitives({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('primitives: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.queryParams.primitives({ string_param: 'string',boolean_param: true,number_param: 0,integer_param: 0 }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })
})