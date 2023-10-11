// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as WriteOnlyResponsesAPI from 'sink-npm/resources/types/write-only-responses';

export class WriteOnlyResponses extends APIResource {
  /**
   * Endpoint with a response schema object that contains a `writeOnly` property.
   */
  simple(options?: Core.RequestOptions): Core.APIPromise<WriteOnlyResponseSimpleResponse> {
    return this.get('/types/write_only_responses/simple', options);
  }
}

export interface WriteOnlyResponseSimpleResponse {}

export namespace WriteOnlyResponses {
  export import WriteOnlyResponseSimpleResponse = WriteOnlyResponsesAPI.WriteOnlyResponseSimpleResponse;
}
