// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Sta_606Resource extends APIResource {

  /**
   * The response body being set to a $ref that is a shared type in the stainless
   * config correctly references it.
   */
  withSharedModel(options?: Core.RequestOptions): Promise<Core.APIResponse<Shared.ObjectWithChildRef>>{
         return this.post('/sta_606_shared_types/response', options)
       };

  /**
   * The request body being set to a $ref that is a shared type in the stainless
   * config correctly references it.
   */
  withSharedParams(body?: Sta_606WithSharedParamsParams, options?: Core.RequestOptions): Promise<void>;
  withSharedParams(options?: Core.RequestOptions): Promise<void>;
  withSharedParams(body: Sta_606WithSharedParamsParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Promise<void>{
         if (isRequestOptions(body)) {
           return this.withSharedParams({}, body);
         }

         return this.post('/sta_606_shared_types/request_params', { body, ...options, headers: { Accept: '', ...options?.headers } })
       };
}

export interface Sta_606WithSharedParamsParams  {

bar?: Shared.SimpleObject

foo?: string
}