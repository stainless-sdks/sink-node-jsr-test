// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AllofsAPI from './allofs';
import { AllofBaseParent, AllofMultipleInlineEntries, Allofs } from './allofs';
import * as ArraysAPI from './arrays';
import {
  ArrayFloatItemsResponse,
  ArrayNestedInParamsParams,
  ArrayObjectItems,
  ArrayObjectItemsResponse,
  Arrays,
} from './arrays';
import * as EnumsAPI from './enums';
import {
  EnumArrayUniqueValues2ValuesParams,
  EnumArrayUniqueValuesNumbersParams,
  EnumArrayUniqueValuesParams,
  EnumBasicParams,
  EnumBasicResponse,
  Enums,
} from './enums';
import * as MapsAPI from './maps';
import { MapNullableItemsResponse, Maps } from './maps';
import * as ObjectsAPI from './objects';
import {
  ObjectMixedKnownAndUnknownResponse,
  ObjectMultipleArrayPropertiesSameRefResponse,
  ObjectMultiplePropertiesSameModelResponse,
  ObjectMultiplePropertiesSameRefResponse,
  ObjectTwoDimensionalArrayPrimitivePropertyResponse,
  Objects,
  UnknownObjectType,
} from './objects';
import * as PrimitivesAPI from './primitives';
import { ModelString, PrimitiveStringsParams, PrimitiveStringsResponse, Primitives } from './primitives';
import * as ReadOnlyParamsAPI from './read-only-params';
import { ReadOnlyParamSimpleParams, ReadOnlyParamSimpleResponse, ReadOnlyParams } from './read-only-params';
import * as UnionsAPI from './unions';
import {
  UnionArrayParamDiscriminatedByPropertyNameParams,
  UnionArrayParamDiscriminatedByPropertyNameResponse,
  UnionArrayParamDiscriminatedWithBasicMappingParams,
  UnionArrayParamDiscriminatedWithBasicMappingResponse,
  UnionDiscriminatedVariantA,
  UnionDiscriminatedVariantB,
  UnionParamDiscriminatedByPropertyNameParams,
  UnionParamDiscriminatedByPropertyNameResponse,
  UnionParamDiscriminatedWithBasicMappingParams,
  UnionParamDiscriminatedWithBasicMappingResponse,
  UnionResponseDiscriminatedByPropertyNameResponse,
  UnionResponseDiscriminatedWithBasicMappingResponse,
  Unions,
} from './unions';
import * as WriteOnlyResponsesAPI from './write-only-responses';
import { WriteOnlyResponseSimpleResponse, WriteOnlyResponses } from './write-only-responses';

export class Types extends APIResource {
  primitives: PrimitivesAPI.Primitives = new PrimitivesAPI.Primitives(this._client);
  readOnlyParams: ReadOnlyParamsAPI.ReadOnlyParams = new ReadOnlyParamsAPI.ReadOnlyParams(this._client);
  writeOnlyResponses: WriteOnlyResponsesAPI.WriteOnlyResponses = new WriteOnlyResponsesAPI.WriteOnlyResponses(
    this._client,
  );
  maps: MapsAPI.Maps = new MapsAPI.Maps(this._client);
  enums: EnumsAPI.Enums = new EnumsAPI.Enums(this._client);
  allofs: AllofsAPI.Allofs = new AllofsAPI.Allofs(this._client);
  unions: UnionsAPI.Unions = new UnionsAPI.Unions(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  arrays: ArraysAPI.Arrays = new ArraysAPI.Arrays(this._client);

  /**
   * Endpoint that has date types should generate params/responses with rich date
   * types.
   */
  dates(body: TypeDatesParams, options?: Core.RequestOptions): Core.APIPromise<TypeDatesResponse> {
    return this._client.post('/types/dates', { body, ...options });
  }

  /**
   * Endpoint that has date-time types.
   */
  datetimes(
    body: TypeDatetimesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TypeDatetimesResponse> {
    return this._client.post('/types/datetimes', { body, ...options });
  }
}

export interface TypeDatesResponse {
  required_date: string;

  required_nullable_date: string | null;

  list_date?: Array<string>;

  oneof_date?: string | number;

  optional_date?: string;
}

export interface TypeDatetimesResponse {
  required_datetime: string;

  required_nullable_datetime: string | null;

  list_datetime?: Array<string>;

  oneof_datetime?: string | number;

  optional_datetime?: string;
}

export interface TypeDatesParams {
  required_date: string;

  required_nullable_date: string | null;

  list_date?: Array<string>;

  oneof_date?: string | number;

  optional_date?: string;
}

export interface TypeDatetimesParams {
  required_datetime: string;

  required_nullable_datetime: string | null;

  list_datetime?: Array<string>;

  /**
   * union type coming from the `oneof_datetime` property
   */
  oneof_datetime?: string | number;

  optional_datetime?: string;
}

Types.Primitives = Primitives;
Types.ReadOnlyParams = ReadOnlyParams;
Types.WriteOnlyResponses = WriteOnlyResponses;
Types.Maps = Maps;
Types.Enums = Enums;
Types.Allofs = Allofs;
Types.Unions = Unions;
Types.Objects = Objects;
Types.Arrays = Arrays;

export declare namespace Types {
  export {
    type TypeDatesResponse as TypeDatesResponse,
    type TypeDatetimesResponse as TypeDatetimesResponse,
    type TypeDatesParams as TypeDatesParams,
    type TypeDatetimesParams as TypeDatetimesParams,
  };

  export {
    Primitives as Primitives,
    type ModelString as ModelString,
    type PrimitiveStringsResponse as PrimitiveStringsResponse,
    type PrimitiveStringsParams as PrimitiveStringsParams,
  };

  export {
    ReadOnlyParams as ReadOnlyParams,
    type ReadOnlyParamSimpleResponse as ReadOnlyParamSimpleResponse,
    type ReadOnlyParamSimpleParams as ReadOnlyParamSimpleParams,
  };

  export {
    WriteOnlyResponses as WriteOnlyResponses,
    type WriteOnlyResponseSimpleResponse as WriteOnlyResponseSimpleResponse,
  };

  export { Maps as Maps, type MapNullableItemsResponse as MapNullableItemsResponse };

  export {
    Enums as Enums,
    type EnumBasicResponse as EnumBasicResponse,
    type EnumArrayUniqueValuesParams as EnumArrayUniqueValuesParams,
    type EnumArrayUniqueValues2ValuesParams as EnumArrayUniqueValues2ValuesParams,
    type EnumArrayUniqueValuesNumbersParams as EnumArrayUniqueValuesNumbersParams,
    type EnumBasicParams as EnumBasicParams,
  };

  export {
    Allofs as Allofs,
    type AllofBaseParent as AllofBaseParent,
    type AllofMultipleInlineEntries as AllofMultipleInlineEntries,
  };

  export {
    Unions as Unions,
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

  export {
    Objects as Objects,
    type UnknownObjectType as UnknownObjectType,
    type ObjectMixedKnownAndUnknownResponse as ObjectMixedKnownAndUnknownResponse,
    type ObjectMultipleArrayPropertiesSameRefResponse as ObjectMultipleArrayPropertiesSameRefResponse,
    type ObjectMultiplePropertiesSameModelResponse as ObjectMultiplePropertiesSameModelResponse,
    type ObjectMultiplePropertiesSameRefResponse as ObjectMultiplePropertiesSameRefResponse,
    type ObjectTwoDimensionalArrayPrimitivePropertyResponse as ObjectTwoDimensionalArrayPrimitivePropertyResponse,
  };

  export {
    Arrays as Arrays,
    type ArrayObjectItems as ArrayObjectItems,
    type ArrayFloatItemsResponse as ArrayFloatItemsResponse,
    type ArrayObjectItemsResponse as ArrayObjectItemsResponse,
    type ArrayNestedInParamsParams as ArrayNestedInParamsParams,
  };
}
