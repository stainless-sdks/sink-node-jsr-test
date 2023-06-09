// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as Shared from '~/resources/shared';

export class MixedParams extends APIResource {
  /**
   * Endpoint with a `requestBody` that defines both query and body params
   */
  queryAndBody(
    params?: MixedParamQueryAndBodyParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.BasicSharedModelObject>>;
  queryAndBody(options?: Core.RequestOptions): Promise<Core.APIResponse<Shared.BasicSharedModelObject>>;
  queryAndBody(
    params: MixedParamQueryAndBodyParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.BasicSharedModelObject>> {
    if (isRequestOptions(params)) {
      return this.queryAndBody({}, params);
    }
    const { query_param: queryParam, ...body } = params;
    return this.post('/mixed_params/query_and_body', {
      query: { query_param: queryParam },
      body,
      ...options,
    });
  }

  /**
   * Endpoint with a `requestBody` that defines query, body and path params
   */
  queryBodyAndPath(
    pathParam: string,
    params?: MixedParamQueryBodyAndPathParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.BasicSharedModelObject>>;
  queryBodyAndPath(
    pathParam: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.BasicSharedModelObject>>;
  queryBodyAndPath(
    pathParam: string,
    params: MixedParamQueryBodyAndPathParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.BasicSharedModelObject>> {
    if (isRequestOptions(params)) {
      return this.queryBodyAndPath(pathParam, {}, params);
    }
    const { query_param: queryParam, ...body } = params;
    return this.post(`/mixed_params/query_body_and_path/${pathParam}`, {
      query: { query_param: queryParam },
      body,
      ...options,
    });
  }
}

export interface MixedParamQueryAndBodyParams {
  /**
   * Query param: Query param description
   */
  query_param?: string;

  /**
   * Body param: Body param description
   */
  body_param?: string;
}

export interface MixedParamQueryBodyAndPathParams {
  /**
   * Query param: Query param description
   */
  query_param?: string;

  /**
   * Body param: Body param description
   */
  body_param?: string;
}
