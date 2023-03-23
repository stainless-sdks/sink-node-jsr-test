// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Resources extends APIResource {

  /**
   * Endpoint returning no response
   */
  foo(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>>{
    return this.post('/no_response', { ...options, headers: { Accept: '', ...options?.headers } })
  };
}