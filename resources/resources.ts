// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Resources extends APIResource {

  foo(options?: Core.RequestOptions): Promise<void>{
         return this.post('/no_response', { ...options, headers: { Accept: '', ...options?.headers } })
       };
}