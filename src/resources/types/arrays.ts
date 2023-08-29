// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Arrays extends APIResource {
  /**
   * Endpoint with a response schema that is an array of number types.
   */
  floatItems(options?: Core.RequestOptions): Core.APIPromise<ArrayFloatItemsResponse> {
    return this.get('/types/array/float_items', options);
  }

  /**
   * Endpoint with a response schema that is an array of in-line object types.
   */
  objectItems(options?: Core.RequestOptions): Core.APIPromise<ArrayObjectItemsResponse> {
    return this.get('/types/array/object_items', options);
  }
}

export type ArrayFloatItemsResponse = Array<number>;

export type ArrayObjectItemsResponse = Array<ArrayObjectItemsResponse.ArrayObjectItemsResponseItem>;

export namespace ArrayObjectItemsResponse {
  export interface ArrayObjectItemsResponseItem {
    nice_foo?: string;
  }
}

export namespace Arrays {
  export import ArrayFloatItemsResponse = API.ArrayFloatItemsResponse;
  export import ArrayObjectItemsResponse = API.ArrayObjectItemsResponse;
}
