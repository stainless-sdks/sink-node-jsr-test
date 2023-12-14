// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as EmptyBodyAPI from 'sink-npm/resources/empty-body';
import * as Shared from 'sink-npm/resources/shared';

export class EmptyBody extends APIResource {
  /**
   * Endpoint with an empty `requestBody` should still have types for params
   */
  typedParams(
    pathParam: string,
    params: EmptyBodyTypedParamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    const { query_param, second_query_param, ...body } = params;
    return this._client.post(`/mixed_params/with_empty_body/${pathParam}`, {
      query: { query_param, second_query_param },
      body,
      ...options,
    });
  }
}

export interface EmptyBodyTypedParamsParams {
  /**
   * Query param: Query param description
   */
  query_param?: string;

  /**
   * Query param: Query param description
   */
  second_query_param?: string;
}

export namespace EmptyBody {
  export import EmptyBodyTypedParamsParams = EmptyBodyAPI.EmptyBodyTypedParamsParams;
}
