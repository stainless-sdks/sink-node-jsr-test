// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class EmptyBody extends APIResource {
  /**
   * Endpoint with x-stainless-empty-object should still have types for params
   */
  stainlessEmptyObject(
    pathParam: string,
    params: EmptyBodyStainlessEmptyObjectParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    const { body, query_param, second_query_param } = params;
    return this._client.post(`/mixed_params/with_empty_body/${pathParam}/x_stainless_empty_object`, {
      query: { query_param, second_query_param },
      body: body,
      ...options,
    });
  }

  /**
   * Endpoint with an empty `requestBody` should still have types for params
   */
  typedParams(
    pathParam: string,
    params: EmptyBodyTypedParamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    const { body, query_param, second_query_param } = params;
    return this._client.post(`/mixed_params/with_empty_body/${pathParam}`, {
      query: { query_param, second_query_param },
      body: body,
      ...options,
    });
  }
}

export interface EmptyBodyStainlessEmptyObjectParams {
  /**
   * Body param:
   */
  body: EmptyBodyStainlessEmptyObjectParams.Body;

  /**
   * Query param: Query param description
   */
  query_param?: string;

  /**
   * Query param: Query param description
   */
  second_query_param?: string;
}

export namespace EmptyBodyStainlessEmptyObjectParams {
  export interface Body {}
}

export interface EmptyBodyTypedParamsParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param: Query param description
   */
  query_param?: string;

  /**
   * Query param: Query param description
   */
  second_query_param?: string;
}

export declare namespace EmptyBody {
  export {
    type EmptyBodyStainlessEmptyObjectParams as EmptyBodyStainlessEmptyObjectParams,
    type EmptyBodyTypedParamsParams as EmptyBodyTypedParamsParams,
  };
}
