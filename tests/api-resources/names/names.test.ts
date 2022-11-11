// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234',baseURL: 'http://127.0.0.1:4010',username: 'Robert' });

describe('resource names', () => {
  test('response_shadows_pydantic', async () => {
    const response = await sink.names.responseShadowsPydantic()

  })

  test('response_shadows_pydantic: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.names.responseShadowsPydantic({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Sink.NotFoundError)
  })
})