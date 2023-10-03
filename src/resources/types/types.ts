// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as Shared from 'sink-npm/resources/shared';
import { ReadOnlyParams } from './read-only-params';
import { WriteOnlyResponses } from './write-only-responses';
import { Maps } from './maps';
import { Objects } from './objects';
import { Arrays } from './arrays';
import * as API from './index';

export class Types extends APIResource {
  readOnlyParams: ReadOnlyParams = new ReadOnlyParams(this.client);
  writeOnlyResponses: WriteOnlyResponses = new WriteOnlyResponses(this.client);
  maps: Maps = new Maps(this.client);
  objects: Objects = new Objects(this.client);
  arrays: Arrays = new Arrays(this.client);

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
  export import TypeDatesResponse = API.TypeDatesResponse;
  export import TypeDatetimesResponse = API.TypeDatetimesResponse;
  export import TypeEnumsResponse = API.TypeEnumsResponse;
  export import TypeDatesParams = API.TypeDatesParams;
  export import TypeDatetimesParams = API.TypeDatetimesParams;
  export import TypeEnumTestsArrayUniqueValuesParams = API.TypeEnumTestsArrayUniqueValuesParams;
  export import TypeEnumTestsArrayUniqueValues2ValuesParams = API.TypeEnumTestsArrayUniqueValues2ValuesParams;
  export import TypeEnumTestsArrayUniqueValuesNumbersParams = API.TypeEnumTestsArrayUniqueValuesNumbersParams;
  export import TypeEnumsParams = API.TypeEnumsParams;

  export import ReadOnlyParams = API.ReadOnlyParams;
  export import ReadOnlyParamSimpleResponse = API.ReadOnlyParamSimpleResponse;
  export import ReadOnlyParamSimpleParams = API.ReadOnlyParamSimpleParams;

  export import WriteOnlyResponses = API.WriteOnlyResponses;
  export import WriteOnlyResponseSimpleResponse = API.WriteOnlyResponseSimpleResponse;

  export import Maps = API.Maps;
  export import MapNullableItemsResponse = API.MapNullableItemsResponse;

  export import Objects = API.Objects;
  export import ObjectMixedKnownAndUnknownResponse = API.ObjectMixedKnownAndUnknownResponse;
  export import ObjectMultipleArrayPropertiesSameRefResponse = API.ObjectMultipleArrayPropertiesSameRefResponse;
  export import ObjectMultiplePropertiesSameModelResponse = API.ObjectMultiplePropertiesSameModelResponse;
  export import ObjectMultiplePropertiesSameRefResponse = API.ObjectMultiplePropertiesSameRefResponse;
  export import ObjectTwoDimensionalArrayPrimitivePropertyResponse = API.ObjectTwoDimensionalArrayPrimitivePropertyResponse;

  export import Arrays = API.Arrays;
  export import ArrayFloatItemsResponse = API.ArrayFloatItemsResponse;
  export import ArrayObjectItemsResponse = API.ArrayObjectItemsResponse;
}
