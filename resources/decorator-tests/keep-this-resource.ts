// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class KeepThisResourceResource extends APIResource {

  /**
   * Nested method that should render because it is not skipped nor are its
   * ancestors.
   */
  keepThisMethod(options?: Core.RequestOptions): Promise<Core.APIResponse<KeepThisResourceKeepThisMethodResponse>>{
         return this.get('/decorator_tests/nested/keep/this/method', options)
       };
}

export interface KeepThisResourceKeepThisMethodResponse  {

foo?: string
}