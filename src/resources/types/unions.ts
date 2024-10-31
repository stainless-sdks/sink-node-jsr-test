// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Unions extends APIResource {
  /**
   * Endpoint with an array request param schema with items discriminated union that
   * just defines the `propertyName` config
   */
  arrayParamDiscriminatedByPropertyName(
    body: UnionArrayParamDiscriminatedByPropertyNameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post('/types/unions/array_param_discriminated_by_property_name', {
      body,
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Endpoint with an array request param schema with items discriminated union that
   * also defines the `mapping` config
   */
  arrayParamDiscriminatedWithBasicMapping(
    body: UnionArrayParamDiscriminatedWithBasicMappingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post('/types/unions/array_param_discriminated_with_basic_mapping', {
      body,
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Endpoint with a request param schema that is a discriminated union that just
   * defines the `propertyName` config
   */
  paramDiscriminatedByPropertyName(
    body: UnionParamDiscriminatedByPropertyNameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post('/types/unions/param_discriminated_by_property_name', {
      body,
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Endpoint with a request param schema that is a discriminated union that also
   * defines the `mapping` config
   */
  paramDiscriminatedWithBasicMapping(
    body: UnionParamDiscriminatedWithBasicMappingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post('/types/unions/param_discriminated_with_basic_mapping', {
      body,
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Endpoint with a response schema that is a discriminated union that just defines
   * the `propertyName` config
   */
  responseDiscriminatedByPropertyName(
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnionResponseDiscriminatedByPropertyNameResponse> {
    return this._client.get('/types/unions/response_discriminated_by_property_name', options);
  }

  /**
   * Endpoint with a response schema that is a discriminated union that also defines
   * the `mapping` config
   */
  responseDiscriminatedWithBasicMapping(
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnionResponseDiscriminatedWithBasicMappingResponse> {
    return this._client.get('/types/unions/response_discriminated_with_basic_mapping', options);
  }
}

export interface UnionDiscriminatedVariantA {
  value: string;

  type?: 'a';
}

export interface UnionDiscriminatedVariantB {
  value: string;

  type?: 'b';
}

export type UnionArrayParamDiscriminatedByPropertyNameResponse = string;

export type UnionArrayParamDiscriminatedWithBasicMappingResponse = string;

export type UnionParamDiscriminatedByPropertyNameResponse = string;

export type UnionParamDiscriminatedWithBasicMappingResponse = string;

export type UnionResponseDiscriminatedByPropertyNameResponse =
  | UnionDiscriminatedVariantA
  | UnionDiscriminatedVariantB;

export type UnionResponseDiscriminatedWithBasicMappingResponse =
  | UnionDiscriminatedVariantA
  | UnionDiscriminatedVariantB;

export type UnionArrayParamDiscriminatedByPropertyNameParams = Array<
  UnionDiscriminatedVariantA | UnionDiscriminatedVariantB
>;

export type UnionArrayParamDiscriminatedWithBasicMappingParams = Array<
  UnionDiscriminatedVariantA | UnionDiscriminatedVariantB
>;

export type UnionParamDiscriminatedByPropertyNameParams =
  | UnionParamDiscriminatedByPropertyNameParams.UnionDiscriminatedVariantA
  | UnionParamDiscriminatedByPropertyNameParams.UnionDiscriminatedVariantB;

export namespace UnionParamDiscriminatedByPropertyNameParams {
  export interface UnionDiscriminatedVariantA {
    value: string;

    type?: 'a';
  }

  export interface UnionDiscriminatedVariantB {
    value: string;

    type?: 'b';
  }
}

export type UnionParamDiscriminatedWithBasicMappingParams =
  | UnionParamDiscriminatedWithBasicMappingParams.UnionDiscriminatedVariantA
  | UnionParamDiscriminatedWithBasicMappingParams.UnionDiscriminatedVariantB;

export namespace UnionParamDiscriminatedWithBasicMappingParams {
  export interface UnionDiscriminatedVariantA {
    value: string;

    type?: 'a';
  }

  export interface UnionDiscriminatedVariantB {
    value: string;

    type?: 'b';
  }
}

export declare namespace Unions {
  export {
    type UnionDiscriminatedVariantA as UnionDiscriminatedVariantA,
    type UnionDiscriminatedVariantB as UnionDiscriminatedVariantB,
    type UnionArrayParamDiscriminatedByPropertyNameResponse as UnionArrayParamDiscriminatedByPropertyNameResponse,
    type UnionArrayParamDiscriminatedWithBasicMappingResponse as UnionArrayParamDiscriminatedWithBasicMappingResponse,
    type UnionParamDiscriminatedByPropertyNameResponse as UnionParamDiscriminatedByPropertyNameResponse,
    type UnionParamDiscriminatedWithBasicMappingResponse as UnionParamDiscriminatedWithBasicMappingResponse,
    type UnionResponseDiscriminatedByPropertyNameResponse as UnionResponseDiscriminatedByPropertyNameResponse,
    type UnionResponseDiscriminatedWithBasicMappingResponse as UnionResponseDiscriminatedWithBasicMappingResponse,
    type UnionArrayParamDiscriminatedByPropertyNameParams as UnionArrayParamDiscriminatedByPropertyNameParams,
    type UnionArrayParamDiscriminatedWithBasicMappingParams as UnionArrayParamDiscriminatedWithBasicMappingParams,
    type UnionParamDiscriminatedByPropertyNameParams as UnionParamDiscriminatedByPropertyNameParams,
    type UnionParamDiscriminatedWithBasicMappingParams as UnionParamDiscriminatedWithBasicMappingParams,
  };
}
