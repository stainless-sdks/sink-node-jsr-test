// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as WriteOnlyResponsesAPI from './write-only-responses';

export class WriteOnlyResponses extends APIResource {
  /**
   * Endpoint with a response schema object that contains a `writeOnly` property.
   */
  simple(options?: Core.RequestOptions): Core.APIPromise<WriteOnlyResponseSimpleResponse> {
    return this._client.get('/types/write_only_responses/simple', options);
  }
}

export interface WriteOnlyResponseSimpleResponse {}

export namespace WriteOnlyResponses {
  export import WriteOnlyResponseSimpleResponse = WriteOnlyResponsesAPI.WriteOnlyResponseSimpleResponse;
}
