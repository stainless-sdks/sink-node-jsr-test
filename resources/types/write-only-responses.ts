// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class WriteOnlyResponses extends APIResource {
  /**
   * Endpoint with a response schema object that contains a `writeOnly` property.
   */
  simple(options?: Core.RequestOptions): Promise<Core.APIResponse<WriteOnlyResponseSimpleResponse>> {
    return this.get('/types/write_only_responses/simple', options);
  }
}

export interface WriteOnlyResponseSimpleResponse {}