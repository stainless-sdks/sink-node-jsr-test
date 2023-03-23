// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234',baseURL: 'http://127.0.0.1:4010',username: 'Robert' });

describe('resource sta_569', () => {
  test('one_entry', async () => {
    const response = await sink.sta_569.oneEntry({ enable_debug_logging: true })

  })

  test('one_entry_with_null: only required params', async () => {
    const response = await sink.sta_569.oneEntryWithNull()

  })

  test('one_entry_with_null: required and optional params', async () => {
    const response = await sink.sta_569.oneEntryWithNull({ enable_debug_logging: true })
  })

  test('one_entry_with_null: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.sta_569.oneEntryWithNull({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })

  test('one_entry_with_null: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.sta_569.oneEntryWithNull({ enable_debug_logging: true }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })
})