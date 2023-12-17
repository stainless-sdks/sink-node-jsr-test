// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as EnumsAPI from 'sink-npm/resources/types/enums';
import * as Shared from 'sink-npm/resources/shared';

export class Enums extends APIResource {
  /**
   * Endpoint that has an array of enum that should generate a valid test with
   * non-repeating values in the array.
   */
  arrayUniqueValues(body: EnumArrayUniqueValuesParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/types/enum_tests_array_unique_values', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint that has an array of enum that should generate a valid test with 2
   * non-repeating values in the array.
   */
  arrayUniqueValues2Values(
    body: EnumArrayUniqueValues2ValuesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/types/enum_tests_array_unique_values_2_values', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint that has an array of enum that should generate a valid test with 2
   * non-repeating values in the array.
   */
  arrayUniqueValuesNumbers(
    body: EnumArrayUniqueValuesNumbersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/types/enum_tests_array_unique_values_numbers', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint that has a `$ref`d enum type in the request body and the response body.
   */
  basic(body: EnumBasicParams, options?: Core.RequestOptions): Core.APIPromise<EnumBasicResponse> {
    return this._client.post('/types/enums', { body, ...options });
  }
}

export interface EnumBasicResponse {
  /**
   * This is my description for the Currency enum
   */
  currency: Shared.Currency | null;

  my_problematic_enum: '123_FOO' | '30%' | '*' | '';

  number_enum: 200 | 201 | 404 | 403;
}

export type EnumArrayUniqueValuesParams = Array<'USD' | 'GBP' | 'PAB' | 'AED'>;

export type EnumArrayUniqueValues2ValuesParams = Array<'USD' | 'GBP'>;

export type EnumArrayUniqueValuesNumbersParams = Array<5 | 6 | 7 | 8 | 9>;

export interface EnumBasicParams {
  /**
   * This is my description for the Currency enum
   */
  input_currency?: Shared.Currency | null;

  problematic_enum?: '123_FOO' | '30%' | '*' | '';
}

export namespace Enums {
  export import EnumBasicResponse = EnumsAPI.EnumBasicResponse;
  export import EnumArrayUniqueValuesParams = EnumsAPI.EnumArrayUniqueValuesParams;
  export import EnumArrayUniqueValues2ValuesParams = EnumsAPI.EnumArrayUniqueValues2ValuesParams;
  export import EnumArrayUniqueValuesNumbersParams = EnumsAPI.EnumArrayUniqueValuesNumbersParams;
  export import EnumBasicParams = EnumsAPI.EnumBasicParams;
}