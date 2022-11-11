// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class PathParams extends APIResource {
  /**
   * Endpoint with multiple path parameters.
   */
  multiple(
    first: string,
    second: string,
    last: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PathParamMultipleResponse>> {
    return this.post(`/path_params/${first}/${second}/${last}`, options);
  }

  /**
   * Endpoint with a singular path parameter.
   */
  singular(
    singular: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PathParamSingularResponse>> {
    return this.post(`/path_params/${singular}`, options);
  }
}

export interface PathParamMultipleResponse {
  foo?: string;
}

export interface PathParamSingularResponse {
  foo?: string;
}
