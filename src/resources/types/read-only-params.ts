// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ReadOnlyParamsAPI from 'sink-npm/resources/types/read-only-params';

export class ReadOnlyParams extends APIResource {
  /**
   * Endpoint with a request params schema object that contains a `readOnly`
   * property.
   */
  simple(
    body: ReadOnlyParamSimpleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReadOnlyParamSimpleResponse> {
    return this.post('/types/read_only_params/simple', { body, ...options });
  }
}

export type ReadOnlyParamSimpleResponse = Record<string, unknown>;

export interface ReadOnlyParamSimpleParams {
  /**
   * This should be generated in the request params type.
   */
  should_show_up?: string;
}

export namespace ReadOnlyParams {
  export import ReadOnlyParamSimpleResponse = ReadOnlyParamsAPI.ReadOnlyParamSimpleResponse;
  export import ReadOnlyParamSimpleParams = ReadOnlyParamsAPI.ReadOnlyParamSimpleParams;
}
