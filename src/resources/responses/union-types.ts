// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as Shared from 'sink-npm/resources/shared';
import * as API from './index';

export class UnionTypes extends APIResource {
  /**
   * Endpoint with a top level union response of different types.
   */
  mixedTypes(options?: Core.RequestOptions): Core.APIPromise<UnionTypeMixedTypesResponse> {
    return this.post('/responses/unions/mixed_types', options);
  }

  /**
   * Endpoint with a top level union response of floats and integers.
   */
  numbers(options?: Core.RequestOptions): Core.APIPromise<UnionTypeNumbersResponse> {
    return this.post('/responses/unions/numbers', options);
  }

  /**
   * Endpoint with a top level union response of just object variants.
   */
  objects(options?: Core.RequestOptions): Core.APIPromise<UnionTypeObjectsResponse> {
    return this.post('/responses/unions/objects', options);
  }
}

export type UnionTypeMixedTypesResponse =
  | Shared.SimpleObject
  | UnionTypeMixedTypesResponse.BasicObject
  | boolean;

export namespace UnionTypeMixedTypesResponse {
  export interface BasicObject {
    item?: string;
  }
}

export type UnionTypeNumbersResponse = number | number;

export type UnionTypeObjectsResponse = Shared.SimpleObject | UnionTypeObjectsResponse.BasicObject;

export namespace UnionTypeObjectsResponse {
  export interface BasicObject {
    item?: string;
  }
}

export namespace UnionTypes {
  export import UnionTypeMixedTypesResponse = API.UnionTypeMixedTypesResponse;
  export import UnionTypeNumbersResponse = API.UnionTypeNumbersResponse;
  export import UnionTypeObjectsResponse = API.UnionTypeObjectsResponse;
}
