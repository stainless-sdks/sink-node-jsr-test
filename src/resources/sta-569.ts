// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as API from './index';

export class Sta569 extends APIResource {
  /**
   * See https://linear.app/stainless/issue/STA-569/support-for-type-[object-null]
   */
  oneEntry(
    body: Sta569OneEntryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Sta569OneEntryResponse> {
    return this.post('/sta_569_array_types/one_entry', { body, ...options });
  }

  /**
   * The `type` property being set to [T, null] should result in an optional response
   * return type in generated SDKs.
   *
   * See https://linear.app/stainless/issue/STA-569/support-for-type-[object-null]
   */
  oneEntryWithNull(
    body?: Sta569OneEntryWithNullParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Sta569OneEntryWithNullResponse | null>;
  oneEntryWithNull(options?: Core.RequestOptions): Core.APIPromise<Sta569OneEntryWithNullResponse | null>;
  oneEntryWithNull(
    body: Sta569OneEntryWithNullParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Sta569OneEntryWithNullResponse | null> {
    if (isRequestOptions(body)) {
      return this.oneEntryWithNull({}, body);
    }
    return this.post('/sta_569_array_types/one_entry_with_null', { body, ...options });
  }
}

export interface Sta569OneEntryResponse {
  foo?: string;
}

export interface Sta569OneEntryWithNullResponse {
  foo?: string;
}

export interface Sta569OneEntryParams {
  enable_debug_logging: boolean;
}

export interface Sta569OneEntryWithNullParams {
  enable_debug_logging?: boolean;
}

export namespace Sta569 {
  export import Sta569OneEntryResponse = API.Sta569OneEntryResponse;
  export import Sta569OneEntryWithNullResponse = API.Sta569OneEntryWithNullResponse;
  export import Sta569OneEntryParams = API.Sta569OneEntryParams;
  export import Sta569OneEntryWithNullParams = API.Sta569OneEntryWithNullParams;
}
