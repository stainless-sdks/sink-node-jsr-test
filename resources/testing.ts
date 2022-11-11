// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class TestingResource extends APIResource {

  root(options?: Core.RequestOptions): Promise<Core.APIResponse<TestingRootResponse>>{
         return this.get('/', options)
       };
}

export interface TestingRootResponse  {

message?: string
}