// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as OpenapiFormatsAPI from 'sink-npm/resources/openapi-formats';

export class OpenapiFormats extends APIResource {
  /**
   * See https://linear.app/stainless/issue/STA-569/support-for-type-[object-null]
   */
  arrayTypeOneEntry(
    body: OpenapiFormatArrayTypeOneEntryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpenapiFormatArrayTypeOneEntryResponse> {
    return this.post('/openapi_formats/array_type_one_entry', { body, ...options });
  }

  /**
   * The `type` property being set to [T, null] should result in an optional response
   * return type in generated SDKs.
   *
   * See https://linear.app/stainless/issue/STA-569/support-for-type-[object-null]
   */
  arrayTypeOneEntryWithNull(
    body?: OpenapiFormatArrayTypeOneEntryWithNullParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpenapiFormatArrayTypeOneEntryWithNullResponse | null>;
  arrayTypeOneEntryWithNull(
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpenapiFormatArrayTypeOneEntryWithNullResponse | null>;
  arrayTypeOneEntryWithNull(
    body: OpenapiFormatArrayTypeOneEntryWithNullParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpenapiFormatArrayTypeOneEntryWithNullResponse | null> {
    if (isRequestOptions(body)) {
      return this.arrayTypeOneEntryWithNull({}, body);
    }
    return this.post('/openapi_formats/array_type_one_entry_with_null', { body, ...options });
  }
}

export interface OpenapiFormatArrayTypeOneEntryResponse {
  foo?: string;
}

export interface OpenapiFormatArrayTypeOneEntryWithNullResponse {
  foo?: string;
}

export interface OpenapiFormatArrayTypeOneEntryParams {
  enable_debug_logging: boolean;
}

export interface OpenapiFormatArrayTypeOneEntryWithNullParams {
  enable_debug_logging?: boolean;
}

export namespace OpenapiFormats {
  export type OpenapiFormatArrayTypeOneEntryResponse =
    OpenapiFormatsAPI.OpenapiFormatArrayTypeOneEntryResponse;
  export type OpenapiFormatArrayTypeOneEntryWithNullResponse =
    OpenapiFormatsAPI.OpenapiFormatArrayTypeOneEntryWithNullResponse;
  export type OpenapiFormatArrayTypeOneEntryParams = OpenapiFormatsAPI.OpenapiFormatArrayTypeOneEntryParams;
  export type OpenapiFormatArrayTypeOneEntryWithNullParams =
    OpenapiFormatsAPI.OpenapiFormatArrayTypeOneEntryWithNullParams;
}
