// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class HeaderParams extends APIResource {
  /**
   * The `X-Client-Secret` header shouldn't be included in params definitions as it
   * is already sent as a client argument.
   *
   * Whereas the `X-Custom-Endpoint-Header` should be included as it is only used
   * here.
   */
  clientArgument(
    params: HeaderParamClientArgumentParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    const { 'X-Custom-Endpoint-Header': xCustomEndpointHeader, ...body } = params;
    return this.post('/header_params/client_argument', {
      body,
      ...options,
      headers: { Accept: '', 'X-Custom-Endpoint-Header': xCustomEndpointHeader || '', ...options?.headers },
    });
  }
}

export interface HeaderParamClientArgumentParams {
  /**
   * Body param:
   */
  foo?: string;

  /**
   * Header param:
   */
  'X-Custom-Endpoint-Header'?: string;
}