// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Params extends APIResource {

  /**
   * Endpoint with a `requestBody` that has a property named `options`.
   */
  optionsParam(body: ParamOptionsParamParams, options?: Core.RequestOptions): Promise<void>{
         return this.post('/names/params/options', { body, ...options, headers: { Accept: '', ...options?.headers } })
       };
}

export interface ParamOptionsParamParams  {

options?: string
}