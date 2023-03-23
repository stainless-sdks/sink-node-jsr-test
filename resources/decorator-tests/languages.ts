// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Languages extends APIResource {

  /**
   * Endpoint that returns a $ref to SimpleObject. This is used to test shared
   * response models.
   */
  skippedForPython(options?: Core.RequestOptions): Promise<Core.APIResponse<Shared.SimpleObject>>{
    return this.get('/responses/simple_object', options)
  };
}