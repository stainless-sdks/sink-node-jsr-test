// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ClientParamsAPI from 'sink-npm/resources/client-params';

export class ClientParams extends APIResource {
  /**
   * The operation takes a path param that is able to be set at the client level.
   */
  withPathParam(
    params: ClientParamWithPathParamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientParamWithPathParamResponse> {
    const {
      client_path_param = this._client.clientPathParam,
      client_path_or_query_param = this._client.clientPathOrQueryParam,
    } = params;
    return this._client.post(
      `/client_params/path_params/${client_path_param}/${client_path_or_query_param}`,
      options,
    );
  }

  /**
   * The operation takes a path param that is able to be set at the client level
   * alongside a standard path param.
   */
  withPathParamAndStandard(
    id: string,
    params: ClientParamWithPathParamAndStandardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientParamWithPathParamAndStandardResponse> {
    const { camelCasedPath = this._client.camelCasePath } = params;
    return this._client.post(`/client_params/path_params/${camelCasedPath}/${id}`, options);
  }

  /**
   * The operation takes a query param that is able to be set at the client level.
   */
  withQueryParam(
    params: ClientParamWithQueryParamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientParamWithQueryParamResponse> {
    const {
      client_path_or_query_param = this._client.clientPathOrQueryParam,
      client_query_param = this._client.clientQueryParam,
    } = params;
    return this._client.post('/client_params/query_params', {
      query: { client_path_or_query_param, client_query_param },
      ...options,
    });
  }
}

export interface ClientParamWithPathParamResponse {
  foo: string;
}

export interface ClientParamWithPathParamAndStandardResponse {
  foo: string;
}

export interface ClientParamWithQueryParamResponse {
  foo: string;
}

export interface ClientParamWithPathParamParams {
  /**
   * Path param that can be defined on the client.
   */
  client_path_param?: string;

  /**
   * Path/Query param that can defined on the client.
   */
  client_path_or_query_param?: string;
}

export interface ClientParamWithPathParamAndStandardParams {
  /**
   * Path param that can be defined on the client.
   */
  camelCasedPath?: string;
}

export interface ClientParamWithQueryParamParams {
  /**
   * Path/Query param that can defined on the client.
   */
  client_path_or_query_param?: string;

  /**
   * Query param that can be defined on the client.
   */
  client_query_param?: string;
}

export namespace ClientParams {
  export import ClientParamWithPathParamResponse = ClientParamsAPI.ClientParamWithPathParamResponse;
  export import ClientParamWithPathParamAndStandardResponse = ClientParamsAPI.ClientParamWithPathParamAndStandardResponse;
  export import ClientParamWithQueryParamResponse = ClientParamsAPI.ClientParamWithQueryParamResponse;
  export import ClientParamWithPathParamParams = ClientParamsAPI.ClientParamWithPathParamParams;
  export import ClientParamWithPathParamAndStandardParams = ClientParamsAPI.ClientParamWithPathParamAndStandardParams;
  export import ClientParamWithQueryParamParams = ClientParamsAPI.ClientParamWithQueryParamParams;
}
