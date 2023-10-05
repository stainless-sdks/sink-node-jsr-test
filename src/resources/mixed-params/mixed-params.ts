// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as Shared from 'sink-npm/resources/shared';
import { Duplicates } from './duplicates';
import * as API from './index';

export class MixedParams extends APIResource {
  duplicates: Duplicates = new Duplicates(this.client);

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
  export import MixedParamQueryAndBodyParams = API.MixedParamQueryAndBodyParams;
  export import MixedParamQueryBodyAndPathParams = API.MixedParamQueryBodyAndPathParams;

  export import Duplicates = API.Duplicates;
  export import DuplicateBodyAndPathParams = API.DuplicateBodyAndPathParams;
  export import DuplicateQueryAndBodyParams = API.DuplicateQueryAndBodyParams;
  export import DuplicateQueryAndPathParams = API.DuplicateQueryAndPathParams;
}
