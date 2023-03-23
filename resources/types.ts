// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Shared from '~/resources/shared';

export class Types extends APIResource {
  /**
   * Endpoint that has date types.
   */
  dates(body: TypeDatesParams, options?: Core.RequestOptions): Promise<Core.APIResponse<TypeDatesResponse>> {
    return this.post('/types/dates', { body, ...options });
  }

  /**
   * Endpoint that has date-time types.
   */
  datetimes(
    body: TypeDatetimesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<TypeDatetimesResponse>> {
    return this.post('/types/datetimes', { body, ...options });
  }

  /**
   * Endpoint that has a `$ref`d enum type in the request body and the response body
   */
  enums(body: TypeEnumsParams, options?: Core.RequestOptions): Promise<Core.APIResponse<TypeEnumsResponse>> {
    return this.post('/types/enums', { body, ...options });
  }
}

export interface TypeEnumsResponse {
  currency: Shared.Currency;

  number_enum: 200 | 201 | 404 | 403;

  problematic_enum: '123_FOO' | '30%';
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

  oneof_datetime?: string | number;

  optional_datetime?: string;
}

export interface TypeEnumsParams {
  input_currency?: Shared.Currency;

  problematic_enum?: '123_FOO' | '30%';
}
