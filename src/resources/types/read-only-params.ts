// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ReadOnlyParams extends APIResource {
  /**
   * Endpoint with a request params schema object that contains a `readOnly`
   * property.
   */
  simple(
    body: ReadOnlyParamSimpleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReadOnlyParamSimpleResponse> {
    return this._client.post('/types/read_only_params/simple', { body, ...options });
  }
}

export type ReadOnlyParamSimpleResponse = Record<string, unknown>;

export interface ReadOnlyParamSimpleParams {
  /**
   * This should be generated in the request params type.
   */
  should_show_up?: string;
}

export declare namespace ReadOnlyParams {
  export {
    type ReadOnlyParamSimpleResponse as ReadOnlyParamSimpleResponse,
    type ReadOnlyParamSimpleParams as ReadOnlyParamSimpleParams,
  };
}
