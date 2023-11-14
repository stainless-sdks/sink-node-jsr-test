// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as PositionalParamsAPI from 'sink-npm/resources/positional-params';

export class PositionalParams extends APIResource {
  /**
   * Endpoint with no positional params and a body param.
   */
  basicBody(body: PositionalParamBasicBodyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/positional_params/basic_body', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with no positional params and a query object.
   */
  basicQuery(query: PositionalParamBasicQueryParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/positional_params/basic_query', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with no positional params and a body object.
   */
  body(body: PositionalParamBodyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/positional_params/body', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with no positional params and a body object.
   */
  bodyExtraParam(
    body: PositionalParamBodyExtraParamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/positional_params/body_extra_param', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with everything under the sun (to excercise positional params).
   */
  kitchenSink(
    id: string,
    params: PositionalParamKitchenSinkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const {
      key,
      imACamel,
      option1,
      option2,
      really_cool_snake,
      'X-Custom-Header': xCustomHeader,
      ...body
    } = params;
    return this._client.post(`/positional_params/query/${id}/kitchen_sink/${key}`, {
      query: { imACamel, option1, option2, really_cool_snake },
      body,
      ...options,
      headers: { Accept: '', 'X-Custom-Header': xCustomHeader || '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a positional path parameter in the middle.
   */
  multiplePathParams(
    second: string,
    params: PositionalParamMultiplePathParamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { first, last, ...body } = params;
    return this._client.post(`/positional_params/${first}/${second}/${last}`, {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a positional query parameter.
   */
  query(query: PositionalParamQueryParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/positional_params/query', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a positional path parameter and a query parameter.
   */
  queryAndPath(
    id: string,
    params: PositionalParamQueryAndPathParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { bar } = params;
    return this._client.post(`/positional_params/query/${id}`, {
      query: { bar },
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a positional query parameter.
   */
  queryMultiple(
    query: PositionalParamQueryMultipleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get('/positional_params/query_multiple', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a single positional path parameter.
   */
  single(single: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/positional_params/${single}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with no positional params and a body object.
   */
  unionBodyAndPath(
    id: string,
    body: PositionalParamUnionBodyAndPathParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/positional_params/body/union/${id}`, {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export interface PositionalParamBasicBodyParams {
  key1: string;

  options?: string;
}

export interface PositionalParamBasicQueryParams {
  key1: string;
}

export interface PositionalParamBodyParams {
  foo?: string;
}

export interface PositionalParamBodyExtraParamParams {
  extra_key: string;

  foo?: string;
}

export interface PositionalParamKitchenSinkParams {
  /**
   * Path param:
   */
  key: string;

  /**
   * Query param:
   */
  imACamel: string;

  /**
   * Query param:
   */
  option1: boolean;

  /**
   * Body param:
   */
  camel_case: string;

  /**
   * Query param:
   */
  option2?: string;

  /**
   * Query param:
   */
  really_cool_snake?: string;

  /**
   * Body param: Some cool description.
   */
  bar?: number;

  /**
   * Body param:
   */
  options?: string;

  /**
   * Header param:
   */
  'X-Custom-Header'?: string;
}

export interface PositionalParamMultiplePathParamsParams {
  /**
   * Path param: Something first.
   */
  first: string;

  /**
   * Path param: Something Last.
   */
  last: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  options?: string;
}

export interface PositionalParamQueryParams {
  foo: string;
}

export interface PositionalParamQueryAndPathParams {
  bar: number;
}

export interface PositionalParamQueryMultipleParams {
  /**
   * Some description about bar.
   */
  bar: string;

  /**
   * Some description about foo.
   */
  foo: string;
}

export interface PositionalParamUnionBodyAndPathParams {
  kind: 'VIRTUAL' | 'PHYSICAL';
}

export namespace PositionalParams {
  export import PositionalParamBasicBodyParams = PositionalParamsAPI.PositionalParamBasicBodyParams;
  export import PositionalParamBasicQueryParams = PositionalParamsAPI.PositionalParamBasicQueryParams;
  export import PositionalParamBodyParams = PositionalParamsAPI.PositionalParamBodyParams;
  export import PositionalParamBodyExtraParamParams = PositionalParamsAPI.PositionalParamBodyExtraParamParams;
  export import PositionalParamKitchenSinkParams = PositionalParamsAPI.PositionalParamKitchenSinkParams;
  export import PositionalParamMultiplePathParamsParams = PositionalParamsAPI.PositionalParamMultiplePathParamsParams;
  export import PositionalParamQueryParams = PositionalParamsAPI.PositionalParamQueryParams;
  export import PositionalParamQueryAndPathParams = PositionalParamsAPI.PositionalParamQueryAndPathParams;
  export import PositionalParamQueryMultipleParams = PositionalParamsAPI.PositionalParamQueryMultipleParams;
  export import PositionalParamUnionBodyAndPathParams = PositionalParamsAPI.PositionalParamUnionBodyAndPathParams;
}
