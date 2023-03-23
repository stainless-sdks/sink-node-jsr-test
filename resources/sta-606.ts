// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Sta_606 extends APIResource {

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
  withSharedParams(body: Sta_606WithSharedParamsParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>>{
    return this.post('/sta_606_shared_types/request_params', { body, ...options, headers: { Accept: '', ...options?.headers } })
  };
}

export interface Sta_606WithSharedParamsParams  {
  bar: Shared.SimpleObject

foo: string
}