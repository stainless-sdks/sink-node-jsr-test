// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as HeaderParamsAPI from './header-params';

export class HeaderParams extends APIResource {
  /**
   * Endpoint with all supported header param types.
   */
  allTypes(params: HeaderParamAllTypesParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const {
      'X-Required-Boolean': xRequiredBoolean,
      'X-Required-Integer': xRequiredInteger,
      'X-Required-Number': xRequiredNumber,
      'X-Required-String': xRequiredString,
      'X-Nullable-Integer': xNullableInteger,
      'X-Optional-Boolean': xOptionalBoolean,
      'X-Optional-Integer': xOptionalInteger,
      'X-Optional-Number': xOptionalNumber,
      'X-Optional-String': xOptionalString,
      ...body
    } = params;
    return this._client.post('/header_params/all_types', {
      body,
      ...options,
      headers: {
        Accept: '*/*',
        'X-Required-Boolean': xRequiredBoolean.toString(),
        'X-Required-Integer': xRequiredInteger.toString(),
        'X-Required-Number': xRequiredNumber.toString(),
        'X-Required-String': xRequiredString,
        ...(xNullableInteger?.toString() != null ?
          { 'X-Nullable-Integer': xNullableInteger?.toString() }
        : undefined),
        ...(xOptionalBoolean?.toString() != null ?
          { 'X-Optional-Boolean': xOptionalBoolean?.toString() }
        : undefined),
        ...(xOptionalInteger?.toString() != null ?
          { 'X-Optional-Integer': xOptionalInteger?.toString() }
        : undefined),
        ...(xOptionalNumber?.toString() != null ?
          { 'X-Optional-Number': xOptionalNumber?.toString() }
        : undefined),
        ...(xOptionalString != null ? { 'X-Optional-String': xOptionalString } : undefined),
        ...options?.headers,
      },
    });
  }

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
      headers: {
        Accept: '*/*',
        ...(xCustomEndpointHeader != null ?
          { 'X-Custom-Endpoint-Header': xCustomEndpointHeader }
        : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Endpoint with a `type: null` header param, which we should turn into a string
   * type.
   */
  nullableType(params: HeaderParamNullableTypeParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-Null': xNull, ...body } = params;
    return this._client.post('/header_params/nullable_type', {
      body,
      ...options,
      headers: { Accept: '*/*', ...(xNull != null ? { 'X-Null': xNull } : undefined), ...options?.headers },
    });
  }
}

export interface HeaderParamAllTypesParams {
  /**
   * Header param:
   */
  'X-Required-Boolean': boolean;

  /**
   * Header param:
   */
  'X-Required-Integer': number;

  /**
   * Header param:
   */
  'X-Required-Number': number;

  /**
   * Header param:
   */
  'X-Required-String': string;

  /**
   * Body param:
   */
  body_argument?: string;

  /**
   * Header param:
   */
  'X-Nullable-Integer'?: number;

  /**
   * Header param:
   */
  'X-Optional-Boolean'?: boolean;

  /**
   * Header param:
   */
  'X-Optional-Integer'?: number;

  /**
   * Header param:
   */
  'X-Optional-Number'?: number;

  /**
   * Header param:
   */
  'X-Optional-String'?: string;
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

export interface HeaderParamNullableTypeParams {
  /**
   * Body param:
   */
  body_argument?: string;

  /**
   * Header param:
   */
  'X-Null'?: string;
}

export namespace HeaderParams {
  export import HeaderParamAllTypesParams = HeaderParamsAPI.HeaderParamAllTypesParams;
  export import HeaderParamClientArgumentParams = HeaderParamsAPI.HeaderParamClientArgumentParams;
  export import HeaderParamNullableTypeParams = HeaderParamsAPI.HeaderParamNullableTypeParams;
}
