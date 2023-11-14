// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as HeaderParamsAPI from 'sink-npm/resources/header-params';

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
  ): Core.APIPromise<void> {
    const { 'X-Custom-Endpoint-Header': xCustomEndpointHeader, ...body } = params;
    return this._client.post('/header_params/client_argument', {
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

export namespace HeaderParams {
  export import HeaderParamClientArgumentParams = HeaderParamsAPI.HeaderParamClientArgumentParams;
}
