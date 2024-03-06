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
    return this._client.post('/responses/unions/mixed_types', options);
  }

  /**
   * Endpoint with a top level union response of floats and integers.
   */
  nullableUnion(options?: Core.RequestOptions): Core.APIPromise<UnionTypeNullableUnionResponse | null> {
    return this._client.post('/responses/unions/nullable', options);
  }

  /**
   * Endpoint with a top level union response of floats and integers.
   */
  numbers(options?: Core.RequestOptions): Core.APIPromise<UnionTypeNumbersResponse> {
    return this._client.post('/responses/unions/numbers', options);
  }

  /**
   * Endpoint with a top level union response of just object variants.
   */
  objects(options?: Core.RequestOptions): Core.APIPromise<UnionTypeObjectsResponse> {
    return this._client.post('/responses/unions/objects', options);
  }

  /**
   * Endpoint with a top level union response of different types.
   */
  superMixedTypes(options?: Core.RequestOptions): Core.APIPromise<UnionTypeSuperMixedTypesResponse> {
    return this._client.post('/responses/unions/super_mixed_types', options);
  }

  /**
   * Endpoint with a top level union response with a variant that is `type: unknown`
   */
  unknownVariant(options?: Core.RequestOptions): Core.APIPromise<UnionTypeUnknownVariantResponse> {
    return this._client.post('/responses/unions/unknown_variant', options);
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

export type UnionTypeNullableUnionResponse = Shared.SimpleObject | UnionTypeNullableUnionResponse.BasicObject;

export namespace UnionTypeNullableUnionResponse {
  export interface BasicObject {
    item?: string;
  }
}

export type UnionTypeNumbersResponse = number;

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

export type UnionTypeUnknownVariantResponse = Shared.SimpleObject | unknown;

export namespace UnionTypes {
  export import UnionTypeMixedTypesResponse = UnionTypesAPI.UnionTypeMixedTypesResponse;
  export import UnionTypeNullableUnionResponse = UnionTypesAPI.UnionTypeNullableUnionResponse;
  export import UnionTypeNumbersResponse = UnionTypesAPI.UnionTypeNumbersResponse;
  export import UnionTypeObjectsResponse = UnionTypesAPI.UnionTypeObjectsResponse;
  export import UnionTypeSuperMixedTypesResponse = UnionTypesAPI.UnionTypeSuperMixedTypesResponse;
  export import UnionTypeUnknownVariantResponse = UnionTypesAPI.UnionTypeUnknownVariantResponse;
}
