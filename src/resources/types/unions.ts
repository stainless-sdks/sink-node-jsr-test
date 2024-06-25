// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UnionsAPI from './unions';

export class Unions extends APIResource {
  /**
   * Endpoint with a response schema that is a discriminated union that just defines
   * the `propertyName` config
   */
  discriminatedByPropertyName(
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnionDiscriminatedByPropertyNameResponse> {
    return this._client.get('/types/unions/discriminated_by_property_name', options);
  }

  /**
   * Endpoint with a response schema that is a discriminated union that also defines
   * the `mapping` config
   */
  discriminatedWithBasicMapping(
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnionDiscriminatedWithBasicMappingResponse> {
    return this._client.get('/types/unions/discriminated_with_basic_mapping', options);
  }
}

export interface UnionDiscriminatedVariantA {
  type: 'a';

  value_from_a: boolean;
}

export interface UnionDiscriminatedVariantB {
  type: 'b';

  value_from_b: string;
}

export type UnionDiscriminatedByPropertyNameResponse =
  | UnionDiscriminatedVariantA
  | UnionDiscriminatedVariantB;

export type UnionDiscriminatedWithBasicMappingResponse =
  | UnionDiscriminatedVariantA
  | UnionDiscriminatedVariantB;

export namespace Unions {
  export import UnionDiscriminatedVariantA = UnionsAPI.UnionDiscriminatedVariantA;
  export import UnionDiscriminatedVariantB = UnionsAPI.UnionDiscriminatedVariantB;
  export import UnionDiscriminatedByPropertyNameResponse = UnionsAPI.UnionDiscriminatedByPropertyNameResponse;
  export import UnionDiscriminatedWithBasicMappingResponse = UnionsAPI.UnionDiscriminatedWithBasicMappingResponse;
}
