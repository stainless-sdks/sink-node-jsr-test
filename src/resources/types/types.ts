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
  export import TypeDatesResponse = TypesAPI.TypeDatesResponse;
  export import TypeDatetimesResponse = TypesAPI.TypeDatetimesResponse;
  export import TypeDatesParams = TypesAPI.TypeDatesParams;
  export import TypeDatetimesParams = TypesAPI.TypeDatetimesParams;
  export import Primitives = PrimitivesAPI.Primitives;
  export import ModelString = PrimitivesAPI.ModelString;
  export import PrimitiveStringsResponse = PrimitivesAPI.PrimitiveStringsResponse;
  export import PrimitiveStringsParams = PrimitivesAPI.PrimitiveStringsParams;
  export import ReadOnlyParams = ReadOnlyParamsAPI.ReadOnlyParams;
  export import ReadOnlyParamSimpleResponse = ReadOnlyParamsAPI.ReadOnlyParamSimpleResponse;
  export import ReadOnlyParamSimpleParams = ReadOnlyParamsAPI.ReadOnlyParamSimpleParams;
  export import WriteOnlyResponses = WriteOnlyResponsesAPI.WriteOnlyResponses;
  export import WriteOnlyResponseSimpleResponse = WriteOnlyResponsesAPI.WriteOnlyResponseSimpleResponse;
  export import Maps = MapsAPI.Maps;
  export import MapNullableItemsResponse = MapsAPI.MapNullableItemsResponse;
  export import Enums = EnumsAPI.Enums;
  export import EnumBasicResponse = EnumsAPI.EnumBasicResponse;
  export import EnumArrayUniqueValuesParams = EnumsAPI.EnumArrayUniqueValuesParams;
  export import EnumArrayUniqueValues2ValuesParams = EnumsAPI.EnumArrayUniqueValues2ValuesParams;
  export import EnumArrayUniqueValuesNumbersParams = EnumsAPI.EnumArrayUniqueValuesNumbersParams;
  export import EnumBasicParams = EnumsAPI.EnumBasicParams;
  export import Allofs = AllofsAPI.Allofs;
  export import AllofBaseParent = AllofsAPI.AllofBaseParent;
  export import AllofMultipleInlineEntries = AllofsAPI.AllofMultipleInlineEntries;
  export import Unions = UnionsAPI.Unions;
  export import UnionDiscriminatedVariantA = UnionsAPI.UnionDiscriminatedVariantA;
  export import UnionDiscriminatedVariantB = UnionsAPI.UnionDiscriminatedVariantB;
  export import UnionArrayParamDiscriminatedByPropertyNameResponse = UnionsAPI.UnionArrayParamDiscriminatedByPropertyNameResponse;
  export import UnionArrayParamDiscriminatedWithBasicMappingResponse = UnionsAPI.UnionArrayParamDiscriminatedWithBasicMappingResponse;
  export import UnionParamDiscriminatedByPropertyNameResponse = UnionsAPI.UnionParamDiscriminatedByPropertyNameResponse;
  export import UnionParamDiscriminatedWithBasicMappingResponse = UnionsAPI.UnionParamDiscriminatedWithBasicMappingResponse;
  export import UnionResponseDiscriminatedByPropertyNameResponse = UnionsAPI.UnionResponseDiscriminatedByPropertyNameResponse;
  export import UnionResponseDiscriminatedWithBasicMappingResponse = UnionsAPI.UnionResponseDiscriminatedWithBasicMappingResponse;
  export import UnionArrayParamDiscriminatedByPropertyNameParams = UnionsAPI.UnionArrayParamDiscriminatedByPropertyNameParams;
  export import UnionArrayParamDiscriminatedWithBasicMappingParams = UnionsAPI.UnionArrayParamDiscriminatedWithBasicMappingParams;
  export import UnionParamDiscriminatedByPropertyNameParams = UnionsAPI.UnionParamDiscriminatedByPropertyNameParams;
  export import UnionParamDiscriminatedWithBasicMappingParams = UnionsAPI.UnionParamDiscriminatedWithBasicMappingParams;
  export import Objects = ObjectsAPI.Objects;
  export import UnknownObjectType = ObjectsAPI.UnknownObjectType;
  export import ObjectMixedKnownAndUnknownResponse = ObjectsAPI.ObjectMixedKnownAndUnknownResponse;
  export import ObjectMultipleArrayPropertiesSameRefResponse = ObjectsAPI.ObjectMultipleArrayPropertiesSameRefResponse;
  export import ObjectMultiplePropertiesSameModelResponse = ObjectsAPI.ObjectMultiplePropertiesSameModelResponse;
  export import ObjectMultiplePropertiesSameRefResponse = ObjectsAPI.ObjectMultiplePropertiesSameRefResponse;
  export import ObjectTwoDimensionalArrayPrimitivePropertyResponse = ObjectsAPI.ObjectTwoDimensionalArrayPrimitivePropertyResponse;
  export import Arrays = ArraysAPI.Arrays;
  export import ArrayObjectItems = ArraysAPI.ArrayObjectItems;
  export import ArrayFloatItemsResponse = ArraysAPI.ArrayFloatItemsResponse;
  export import ArrayObjectItemsResponse = ArraysAPI.ArrayObjectItemsResponse;
  export import ArrayNestedInParamsParams = ArraysAPI.ArrayNestedInParamsParams;
}
