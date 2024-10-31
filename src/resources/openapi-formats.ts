// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class OpenAPIFormats extends APIResource {
  /**
   * See https://linear.app/stainless/issue/STA-569/support-for-type-[object-null]
   */
  arrayTypeOneEntry(
    body: OpenAPIFormatArrayTypeOneEntryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpenAPIFormatArrayTypeOneEntryResponse> {
    return this._client.post('/openapi_formats/array_type_one_entry', { body, ...options });
  }

  /**
   * The `type` property being set to [T, null] should result in an optional response
   * return type in generated SDKs.
   *
   * See https://linear.app/stainless/issue/STA-569/support-for-type-[object-null]
   */
  arrayTypeOneEntryWithNull(
    body?: OpenAPIFormatArrayTypeOneEntryWithNullParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpenAPIFormatArrayTypeOneEntryWithNullResponse | null>;
  arrayTypeOneEntryWithNull(
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpenAPIFormatArrayTypeOneEntryWithNullResponse | null>;
  arrayTypeOneEntryWithNull(
    body: OpenAPIFormatArrayTypeOneEntryWithNullParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpenAPIFormatArrayTypeOneEntryWithNullResponse | null> {
    if (isRequestOptions(body)) {
      return this.arrayTypeOneEntryWithNull({}, body);
    }
    return this._client.post('/openapi_formats/array_type_one_entry_with_null', { body, ...options });
  }
}

export interface OpenAPIFormatArrayTypeOneEntryResponse {
  foo?: string;
}

export interface OpenAPIFormatArrayTypeOneEntryWithNullResponse {
  foo?: string;
}

export interface OpenAPIFormatArrayTypeOneEntryParams {
  enable_debug_logging: boolean;
}

export interface OpenAPIFormatArrayTypeOneEntryWithNullParams {
  enable_debug_logging?: boolean;
}

export declare namespace OpenAPIFormats {
  export {
    type OpenAPIFormatArrayTypeOneEntryResponse as OpenAPIFormatArrayTypeOneEntryResponse,
    type OpenAPIFormatArrayTypeOneEntryWithNullResponse as OpenAPIFormatArrayTypeOneEntryWithNullResponse,
    type OpenAPIFormatArrayTypeOneEntryParams as OpenAPIFormatArrayTypeOneEntryParams,
    type OpenAPIFormatArrayTypeOneEntryWithNullParams as OpenAPIFormatArrayTypeOneEntryWithNullParams,
  };
}
