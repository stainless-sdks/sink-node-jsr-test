// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';

export class Sta_569Resource extends APIResource {
  /**
   * See https://linear.app/stainless/issue/STA-569/support-for-type-[object-null]
   */
  oneEntry(
    body: Sta_569OneEntryParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Sta_569OneEntryResponse>> {
    return this.post('/sta_569_array_types/one_entry', { body, ...options });
  }

  /**
   * The `type` property being set to [T, null] should result in an optional response
   * return type in generated SDKs.
   *
   * See https://linear.app/stainless/issue/STA-569/support-for-type-[object-null]
   */
  oneEntryWithNull(
    body?: Sta_569OneEntryWithNullParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Sta_569OneEntryWithNullResponse | null>>;
  oneEntryWithNull(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Sta_569OneEntryWithNullResponse | null>>;
  oneEntryWithNull(
    body: Sta_569OneEntryWithNullParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Sta_569OneEntryWithNullResponse | null>> {
    if (isRequestOptions(body)) {
      return this.oneEntryWithNull({}, body);
    }

    return this.post('/sta_569_array_types/one_entry_with_null', { body, ...options });
  }
}

export interface Sta_569OneEntryResponse {
  foo?: string;
}

export interface Sta_569OneEntryWithNullResponse {
  foo?: string;
}

export interface Sta_569OneEntryParams {
  enable_debug_logging: boolean;
}

export interface Sta_569OneEntryWithNullParams {
  enable_debug_logging?: boolean;
}
