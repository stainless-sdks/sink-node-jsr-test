// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ArraysAPI from './arrays';

export class Arrays extends APIResource {
  /**
   * Endpoint with a response schema that is an array of number types.
   */
  floatItems(options?: Core.RequestOptions): Core.APIPromise<ArrayFloatItemsResponse> {
    return this._client.get('/types/array/float_items', options);
  }

  /**
   * Endpoint with a request schema that has a property that points to an array
   * model.
   */
  nestedInParams(body?: ArrayNestedInParamsParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  nestedInParams(options?: Core.RequestOptions): Core.APIPromise<void>;
  nestedInParams(
    body: ArrayNestedInParamsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.nestedInParams({}, body);
    }
    return this._client.post('/types/array/model_nested_in_params', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a response schema that is an array of in-line object types.
   */
  objectItems(options?: Core.RequestOptions): Core.APIPromise<ArrayObjectItemsResponse> {
    return this._client.get('/types/array/object_items', options);
  }
}

export type ArrayObjectItems = Array<ArrayObjectItems.ArrayObjectItemItem>;

export namespace ArrayObjectItems {
  export interface ArrayObjectItemItem {
    bar: string;
  }
}

export type ArrayFloatItemsResponse = Array<number>;

export type ArrayObjectItemsResponse = Array<ArrayObjectItemsResponse.ArrayObjectItemsResponseItem>;

export namespace ArrayObjectItemsResponse {
  export interface ArrayObjectItemsResponseItem {
    nice_foo?: string;
  }
}

export interface ArrayNestedInParamsParams {
  array_param?: unknown;
}

export namespace Arrays {
  export type ArrayObjectItems = ArraysAPI.ArrayObjectItems;
  export type ArrayFloatItemsResponse = ArraysAPI.ArrayFloatItemsResponse;
  export type ArrayObjectItemsResponse = ArraysAPI.ArrayObjectItemsResponse;
  export type ArrayNestedInParamsParams = ArraysAPI.ArrayNestedInParamsParams;
}
