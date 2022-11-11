// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234',baseURL: 'http://127.0.0.1:4010',username: 'Robert' });

describe('resource responses', () => {
  test('anyof_null', async () => {
    const response = await sink.responses.anyofNull()

  })

  test('anyof_null: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.anyofNull({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('oneofof_null', async () => {
    const response = await sink.responses.oneofofNull()

  })

  test('oneofof_null: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.oneofofNull({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('shared_response_object', async () => {
    const response = await sink.responses.sharedResponseObject()

  })

  test('shared_response_object: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.sharedResponseObject({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })
})