// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234',baseURL: 'http://127.0.0.1:4010',username: 'Robert' });

describe('resource params', () => {
  test('top_level_allOf: only required params', async () => {
    const response = await sink.params.topLevelAllOf({ kind: 'VIRTUAL',is_foo: true })

  })

  test('top_level_allOf: required and optional params', async () => {
    const response = await sink.params.topLevelAllOf({ kind: 'VIRTUAL',is_foo: true })
  })

  test('top_level_allOf_nested_object: only required params', async () => {
    const response = await sink.params.topLevelAllOfNestedObject({ kind: 'VIRTUAL',nested_obj: { is_foo: true } })

  })

  test('top_level_allOf_nested_object: required and optional params', async () => {
    const response = await sink.params.topLevelAllOfNestedObject({ kind: 'VIRTUAL',nested_obj: { is_foo: true } })
  })

  test('top_level_anyOf: only required params', async () => {
    const response = await sink.params.topLevelAnyOf({ kind: 'VIRTUAL' })

  })

  test('top_level_anyOf: required and optional params', async () => {
    const response = await sink.params.topLevelAnyOf({ kind: 'VIRTUAL' })
  })

  test('top_level_oneOf: only required params', async () => {
    const response = await sink.params.topLevelOneOf({ kind: 'VIRTUAL' })

  })

  test('top_level_oneOf: required and optional params', async () => {
    const response = await sink.params.topLevelOneOf({ kind: 'VIRTUAL' })
  })

  test('union_overlapping_prop: only required params', async () => {
    const response = await sink.params.unionOverlappingProp()

  })

  test('union_overlapping_prop: required and optional params', async () => {
    const response = await sink.params.unionOverlappingProp({ foo: 'string' })
  })

  test('union_overlapping_prop: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.params.unionOverlappingProp({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('union_overlapping_prop: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.params.unionOverlappingProp({ foo: 'string' }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })
})