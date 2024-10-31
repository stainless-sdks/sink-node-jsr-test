// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as DuplicatesAPI from './duplicates';
import {
  DuplicateBodyAndPathParams,
  DuplicateQueryAndBodyParams,
  DuplicateQueryAndPathParams,
  Duplicates,
} from './duplicates';

export class MixedParams extends APIResource {
  duplicates: DuplicatesAPI.Duplicates = new DuplicatesAPI.Duplicates(this._client);

  /**
   * Endpoint with a `requestBody` making use of oneOf, and a path param.
   *
   * See
   * https://linear.app/stainless/issue/STA-4902/orb-java-unresolved-reference-customerid-externalcustomerid
   */
  bodyWithTopLevelOneOfAndPath(
    pathParam: string,
    body: MixedParamBodyWithTopLevelOneOfAndPathParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/mixed_params/body_with_top_level_one_of_and_path/${pathParam}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

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
    return this._client.post('/mixed_params/query_and_body', { query: { query_param }, body, ...options });
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
    return this._client.post(`/mixed_params/query_body_and_path/${pathParam}`, {
      query: { query_param },
      body,
      ...options,
    });
  }
}

export type MixedParamBodyWithTopLevelOneOfAndPathParams =
  | MixedParamBodyWithTopLevelOneOfAndPathParams.ObjectWithRequiredEnum
  | MixedParamBodyWithTopLevelOneOfAndPathParams.BasicSharedModelObject;

export namespace MixedParamBodyWithTopLevelOneOfAndPathParams {
  export interface ObjectWithRequiredEnum {
    kind: 'VIRTUAL' | 'PHYSICAL';
  }

  export interface BasicSharedModelObject {
    bar: string;

    foo: string;
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

MixedParams.Duplicates = Duplicates;

export declare namespace MixedParams {
  export {
    type MixedParamBodyWithTopLevelOneOfAndPathParams as MixedParamBodyWithTopLevelOneOfAndPathParams,
    type MixedParamQueryAndBodyParams as MixedParamQueryAndBodyParams,
    type MixedParamQueryBodyAndPathParams as MixedParamQueryBodyAndPathParams,
  };

  export {
    Duplicates as Duplicates,
    type DuplicateBodyAndPathParams as DuplicateBodyAndPathParams,
    type DuplicateQueryAndBodyParams as DuplicateQueryAndBodyParams,
    type DuplicateQueryAndPathParams as DuplicateQueryAndPathParams,
  };
}
