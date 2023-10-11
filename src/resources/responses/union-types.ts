// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as UnionTypesAPI from 'sink-npm/resources/responses/union-types';
import * as Shared from 'sink-npm/resources/shared';

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

  /**
   * Endpoint with a top level union response of different types.
   */
  superMixedTypes(options?: Core.RequestOptions): Core.APIPromise<UnionTypeSuperMixedTypesResponse> {
    return this.post('/responses/unions/super_mixed_types', options);
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

export type UnionTypeSuperMixedTypesResponse =
  | Shared.SimpleObject
  | UnionTypeSuperMixedTypesResponse.BasicObject
  | boolean
  | unknown
  | string
  | unknown;

export namespace UnionTypeSuperMixedTypesResponse {
  export interface BasicObject {
    item?: string;
  }
}

export namespace UnionTypes {
  export type UnionTypeMixedTypesResponse = UnionTypesAPI.UnionTypeMixedTypesResponse;
  export type UnionTypeNumbersResponse = UnionTypesAPI.UnionTypeNumbersResponse;
  export type UnionTypeObjectsResponse = UnionTypesAPI.UnionTypeObjectsResponse;
  export type UnionTypeSuperMixedTypesResponse = UnionTypesAPI.UnionTypeSuperMixedTypesResponse;
}
