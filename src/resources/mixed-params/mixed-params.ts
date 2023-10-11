// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as MixedParamsAPI from 'sink-npm/resources/mixed-params/mixed-params';
import * as Shared from 'sink-npm/resources/shared';
import * as DuplicatesAPI from 'sink-npm/resources/mixed-params/duplicates';

export class MixedParams extends APIResource {
  duplicates: DuplicatesAPI.Duplicates = new DuplicatesAPI.Duplicates(this.client);

  /**
   * Endpoint with a `requestBody` that defines both query and body params
   */
  queryAndBody(
    params?: MixedParamQueryAndBodyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject>;
  queryAndBody(options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject>;
  queryAndBody(
    params: MixedParamQueryAndBodyParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    if (isRequestOptions(params)) {
      return this.queryAndBody({}, params);
    }
    const { query_param, ...body } = params;
    return this.post('/mixed_params/query_and_body', { query: { query_param }, body, ...options });
  }

  /**
   * Endpoint with a `requestBody` that defines query, body and path params
   */
  queryBodyAndPath(
    pathParam: string,
    params?: MixedParamQueryBodyAndPathParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject>;
  queryBodyAndPath(
    pathParam: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject>;
  queryBodyAndPath(
    pathParam: string,
    params: MixedParamQueryBodyAndPathParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    if (isRequestOptions(params)) {
      return this.queryBodyAndPath(pathParam, {}, params);
    }
    const { query_param, ...body } = params;
    return this.post(`/mixed_params/query_body_and_path/${pathParam}`, {
      query: { query_param },
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

export namespace MixedParams {
  export type MixedParamQueryAndBodyParams = MixedParamsAPI.MixedParamQueryAndBodyParams;
  export type MixedParamQueryBodyAndPathParams = MixedParamsAPI.MixedParamQueryBodyAndPathParams;
  export import Duplicates = DuplicatesAPI.Duplicates;
  export type DuplicateBodyAndPathParams = DuplicatesAPI.DuplicateBodyAndPathParams;
  export type DuplicateQueryAndBodyParams = DuplicatesAPI.DuplicateQueryAndBodyParams;
  export type DuplicateQueryAndPathParams = DuplicatesAPI.DuplicateQueryAndPathParams;
}
