// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { ReadOnlyParams } from './read-only-params';
import { WriteOnlyResponses } from './write-only-responses';
import { Maps } from './maps';
import { Objects } from './objects';
import * as Shared from '~/resources/shared';

export class Types extends APIResource {
  readOnlyParams: ReadOnlyParams = new ReadOnlyParams(this.client);
  writeOnlyResponses: WriteOnlyResponses = new WriteOnlyResponses(this.client);
  maps: Maps = new Maps(this.client);
  objects: Objects = new Objects(this.client);

  /**
   * Endpoint that has date types should generate params/responses with rich date
   * types.
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
   * Endpoint that has a `$ref`d enum type in the request body and the response body.
   */
  enums(body: TypeEnumsParams, options?: Core.RequestOptions): Promise<Core.APIResponse<TypeEnumsResponse>> {
    return this.post('/types/enums', { body, ...options });
  }
}

export interface TypeEnumsResponse {
  /**
   * This is my description for the Currency enum
   */
  currency: Shared.Currency | null;

  my_problematic_enum: '123_FOO' | '30%';

  number_enum: 200 | 201 | 404 | 403;
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

export interface TypeEnumsParams {
  /**
   * This is my description for the Currency enum
   */
  input_currency?: Shared.Currency | null;

  problematic_enum?: '123_FOO' | '30%';
}
