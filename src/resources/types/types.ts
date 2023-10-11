// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as TypesAPI from 'sink-npm/resources/types/types';
import * as Shared from 'sink-npm/resources/shared';
import * as ArraysAPI from 'sink-npm/resources/types/arrays';
import * as MapsAPI from 'sink-npm/resources/types/maps';
import * as ObjectsAPI from 'sink-npm/resources/types/objects';
import * as ReadOnlyParamsAPI from 'sink-npm/resources/types/read-only-params';
import * as WriteOnlyResponsesAPI from 'sink-npm/resources/types/write-only-responses';

export class Types extends APIResource {
  readOnlyParams: ReadOnlyParamsAPI.ReadOnlyParams = new ReadOnlyParamsAPI.ReadOnlyParams(this.client);
  writeOnlyResponses: WriteOnlyResponsesAPI.WriteOnlyResponses = new WriteOnlyResponsesAPI.WriteOnlyResponses(
    this.client,
  );
  maps: MapsAPI.Maps = new MapsAPI.Maps(this.client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this.client);
  arrays: ArraysAPI.Arrays = new ArraysAPI.Arrays(this.client);

  /**
   * Endpoint that has date types should generate params/responses with rich date
   * types.
   */
  dates(body: TypeDatesParams, options?: Core.RequestOptions): Core.APIPromise<TypeDatesResponse> {
    return this.post('/types/dates', { body, ...options });
  }

  /**
   * Endpoint that has date-time types.
   */
  datetimes(
    body: TypeDatetimesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TypeDatetimesResponse> {
    return this.post('/types/datetimes', { body, ...options });
  }

  /**
   * Endpoint that has an array of enum that should generate a valid test with
   * non-repeating values in the array.
   */
  enumTestsArrayUniqueValues(
    body: TypeEnumTestsArrayUniqueValuesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this.post('/types/enum_tests_array_unique_values', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint that has an array of enum that should generate a valid test with 2
   * non-repeating values in the array.
   */
  enumTestsArrayUniqueValues2Values(
    body: TypeEnumTestsArrayUniqueValues2ValuesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this.post('/types/enum_tests_array_unique_values_2_values', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint that has an array of enum that should generate a valid test with 2
   * non-repeating values in the array.
   */
  enumTestsArrayUniqueValuesNumbers(
    body: TypeEnumTestsArrayUniqueValuesNumbersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this.post('/types/enum_tests_array_unique_values_numbers', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint that has a `$ref`d enum type in the request body and the response body.
   */
  enums(body: TypeEnumsParams, options?: Core.RequestOptions): Core.APIPromise<TypeEnumsResponse> {
    return this.post('/types/enums', { body, ...options });
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

export interface TypeEnumsResponse {
  /**
   * This is my description for the Currency enum
   */
  currency: Shared.Currency | null;

  my_problematic_enum: '123_FOO' | '30%';

  number_enum: 200 | 201 | 404 | 403;
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

export type TypeEnumTestsArrayUniqueValuesParams = Array<'USD' | 'GBP' | 'PAB' | 'AED'>;

export type TypeEnumTestsArrayUniqueValues2ValuesParams = Array<'USD' | 'GBP'>;

export type TypeEnumTestsArrayUniqueValuesNumbersParams = Array<5 | 6 | 7 | 8 | 9>;

export interface TypeEnumsParams {
  /**
   * This is my description for the Currency enum
   */
  input_currency?: Shared.Currency | null;

  problematic_enum?: '123_FOO' | '30%';
}

export namespace Types {
  export type TypeDatesResponse = TypesAPI.TypeDatesResponse;
  export type TypeDatetimesResponse = TypesAPI.TypeDatetimesResponse;
  export type TypeEnumsResponse = TypesAPI.TypeEnumsResponse;
  export type TypeDatesParams = TypesAPI.TypeDatesParams;
  export type TypeDatetimesParams = TypesAPI.TypeDatetimesParams;
  export type TypeEnumTestsArrayUniqueValuesParams = TypesAPI.TypeEnumTestsArrayUniqueValuesParams;
  export type TypeEnumTestsArrayUniqueValues2ValuesParams =
    TypesAPI.TypeEnumTestsArrayUniqueValues2ValuesParams;
  export type TypeEnumTestsArrayUniqueValuesNumbersParams =
    TypesAPI.TypeEnumTestsArrayUniqueValuesNumbersParams;
  export type TypeEnumsParams = TypesAPI.TypeEnumsParams;
  export import ReadOnlyParams = ReadOnlyParamsAPI.ReadOnlyParams;
  export type ReadOnlyParamSimpleResponse = ReadOnlyParamsAPI.ReadOnlyParamSimpleResponse;
  export type ReadOnlyParamSimpleParams = ReadOnlyParamsAPI.ReadOnlyParamSimpleParams;
  export import WriteOnlyResponses = WriteOnlyResponsesAPI.WriteOnlyResponses;
  export type WriteOnlyResponseSimpleResponse = WriteOnlyResponsesAPI.WriteOnlyResponseSimpleResponse;
  export import Maps = MapsAPI.Maps;
  export type MapNullableItemsResponse = MapsAPI.MapNullableItemsResponse;
  export import Objects = ObjectsAPI.Objects;
  export type ObjectMixedKnownAndUnknownResponse = ObjectsAPI.ObjectMixedKnownAndUnknownResponse;
  export type ObjectMultipleArrayPropertiesSameRefResponse =
    ObjectsAPI.ObjectMultipleArrayPropertiesSameRefResponse;
  export type ObjectMultiplePropertiesSameModelResponse =
    ObjectsAPI.ObjectMultiplePropertiesSameModelResponse;
  export type ObjectMultiplePropertiesSameRefResponse = ObjectsAPI.ObjectMultiplePropertiesSameRefResponse;
  export type ObjectTwoDimensionalArrayPrimitivePropertyResponse =
    ObjectsAPI.ObjectTwoDimensionalArrayPrimitivePropertyResponse;
  export import Arrays = ArraysAPI.Arrays;
  export type ArrayFloatItemsResponse = ArraysAPI.ArrayFloatItemsResponse;
  export type ArrayObjectItemsResponse = ArraysAPI.ArrayObjectItemsResponse;
}
