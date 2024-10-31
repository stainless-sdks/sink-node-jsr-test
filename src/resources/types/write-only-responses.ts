// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class WriteOnlyResponses extends APIResource {
  /**
   * Endpoint with a response schema object that contains a `writeOnly` property.
   */
  simple(options?: Core.RequestOptions): Core.APIPromise<WriteOnlyResponseSimpleResponse> {
    return this._client.get('/types/write_only_responses/simple', options);
  }
}

export interface WriteOnlyResponseSimpleResponse {}

export declare namespace WriteOnlyResponses {
  export { type WriteOnlyResponseSimpleResponse as WriteOnlyResponseSimpleResponse };
}
