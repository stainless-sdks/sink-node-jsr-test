// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TypesAPI from './types';
import * as AllofsAPI from './allofs';
import * as ArraysAPI from './arrays';
import * as EnumsAPI from './enums';
import * as MapsAPI from './maps';
import * as ObjectsAPI from './objects';
import * as PrimitivesAPI from './primitives';
import * as ReadOnlyParamsAPI from './read-only-params';
import * as UnionsAPI from './unions';
import * as WriteOnlyResponsesAPI from './write-only-responses';

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

export namespace Types {
  export type TypeDatesResponse = TypesAPI.TypeDatesResponse;
  export type TypeDatetimesResponse = TypesAPI.TypeDatetimesResponse;
  export type TypeDatesParams = TypesAPI.TypeDatesParams;
  export type TypeDatetimesParams = TypesAPI.TypeDatetimesParams;
  export import Primitives = PrimitivesAPI.Primitives;
  export type ModelString = PrimitivesAPI.ModelString;
  export type PrimitiveStringsResponse = PrimitivesAPI.PrimitiveStringsResponse;
  export type PrimitiveStringsParams = PrimitivesAPI.PrimitiveStringsParams;
  export import ReadOnlyParams = ReadOnlyParamsAPI.ReadOnlyParams;
  export type ReadOnlyParamSimpleResponse = ReadOnlyParamsAPI.ReadOnlyParamSimpleResponse;
  export type ReadOnlyParamSimpleParams = ReadOnlyParamsAPI.ReadOnlyParamSimpleParams;
  export import WriteOnlyResponses = WriteOnlyResponsesAPI.WriteOnlyResponses;
  export type WriteOnlyResponseSimpleResponse = WriteOnlyResponsesAPI.WriteOnlyResponseSimpleResponse;
  export import Maps = MapsAPI.Maps;
  export type MapNullableItemsResponse = MapsAPI.MapNullableItemsResponse;
  export import Enums = EnumsAPI.Enums;
  export type EnumBasicResponse = EnumsAPI.EnumBasicResponse;
  export type EnumArrayUniqueValuesParams = EnumsAPI.EnumArrayUniqueValuesParams;
  export type EnumArrayUniqueValues2ValuesParams = EnumsAPI.EnumArrayUniqueValues2ValuesParams;
  export type EnumArrayUniqueValuesNumbersParams = EnumsAPI.EnumArrayUniqueValuesNumbersParams;
  export type EnumBasicParams = EnumsAPI.EnumBasicParams;
  export import Allofs = AllofsAPI.Allofs;
  export type AllofBaseParent = AllofsAPI.AllofBaseParent;
  export type AllofMultipleInlineEntries = AllofsAPI.AllofMultipleInlineEntries;
  export import Unions = UnionsAPI.Unions;
  export type UnionDiscriminatedVariantA = UnionsAPI.UnionDiscriminatedVariantA;
  export type UnionDiscriminatedVariantB = UnionsAPI.UnionDiscriminatedVariantB;
  export type UnionArrayParamDiscriminatedByPropertyNameResponse =
    UnionsAPI.UnionArrayParamDiscriminatedByPropertyNameResponse;
  export type UnionArrayParamDiscriminatedWithBasicMappingResponse =
    UnionsAPI.UnionArrayParamDiscriminatedWithBasicMappingResponse;
  export type UnionParamDiscriminatedByPropertyNameResponse =
    UnionsAPI.UnionParamDiscriminatedByPropertyNameResponse;
  export type UnionParamDiscriminatedWithBasicMappingResponse =
    UnionsAPI.UnionParamDiscriminatedWithBasicMappingResponse;
  export type UnionResponseDiscriminatedByPropertyNameResponse =
    UnionsAPI.UnionResponseDiscriminatedByPropertyNameResponse;
  export type UnionResponseDiscriminatedWithBasicMappingResponse =
    UnionsAPI.UnionResponseDiscriminatedWithBasicMappingResponse;
  export type UnionArrayParamDiscriminatedByPropertyNameParams =
    UnionsAPI.UnionArrayParamDiscriminatedByPropertyNameParams;
  export type UnionArrayParamDiscriminatedWithBasicMappingParams =
    UnionsAPI.UnionArrayParamDiscriminatedWithBasicMappingParams;
  export type UnionParamDiscriminatedByPropertyNameParams =
    UnionsAPI.UnionParamDiscriminatedByPropertyNameParams;
  export type UnionParamDiscriminatedWithBasicMappingParams =
    UnionsAPI.UnionParamDiscriminatedWithBasicMappingParams;
  export import Objects = ObjectsAPI.Objects;
  export type UnknownObjectType = ObjectsAPI.UnknownObjectType;
  export type ObjectMixedKnownAndUnknownResponse = ObjectsAPI.ObjectMixedKnownAndUnknownResponse;
  export type ObjectMultipleArrayPropertiesSameRefResponse =
    ObjectsAPI.ObjectMultipleArrayPropertiesSameRefResponse;
  export type ObjectMultiplePropertiesSameModelResponse =
    ObjectsAPI.ObjectMultiplePropertiesSameModelResponse;
  export type ObjectMultiplePropertiesSameRefResponse = ObjectsAPI.ObjectMultiplePropertiesSameRefResponse;
  export type ObjectTwoDimensionalArrayPrimitivePropertyResponse =
    ObjectsAPI.ObjectTwoDimensionalArrayPrimitivePropertyResponse;
  export import Arrays = ArraysAPI.Arrays;
  export type ArrayObjectItems = ArraysAPI.ArrayObjectItems;
  export type ArrayFloatItemsResponse = ArraysAPI.ArrayFloatItemsResponse;
  export type ArrayObjectItemsResponse = ArraysAPI.ArrayObjectItemsResponse;
  export type ArrayNestedInParamsParams = ArraysAPI.ArrayNestedInParamsParams;
}
