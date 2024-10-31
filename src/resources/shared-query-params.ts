// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class SharedQueryParams extends APIResource {
  retrieve(query?: SharedQueryParamRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<string>;
  retrieve(
    query: SharedQueryParamRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/shared-query-params', {
      query,
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  del(params?: SharedQueryParamDelParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  del(options?: Core.RequestOptions): Core.APIPromise<string>;
  del(
    params: SharedQueryParamDelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(params)) {
      return this.del({}, params);
    }
    const { get1, shared1, shared2 } = params;
    return this._client.delete('/shared-query-params', {
      query: { get1, shared1, shared2 },
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }
}

export type SharedQueryParamRetrieveResponse = string;

export type SharedQueryParamDelResponse = string;

export interface SharedQueryParamRetrieveParams {
  get1?: string;

  shared1?: string;

  shared2?: string;
}

export interface SharedQueryParamDelParams {
  get1?: string;

  shared1?: string;

  shared2?: string;
}

export declare namespace SharedQueryParams {
  export {
    type SharedQueryParamRetrieveResponse as SharedQueryParamRetrieveResponse,
    type SharedQueryParamDelResponse as SharedQueryParamDelResponse,
    type SharedQueryParamRetrieveParams as SharedQueryParamRetrieveParams,
    type SharedQueryParamDelParams as SharedQueryParamDelParams,
  };
}
