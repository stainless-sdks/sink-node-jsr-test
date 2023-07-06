// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './';

export class PositionalParams extends APIResource {
  /**
   * Endpoint with no positional params and a body param.
   */
  basicBody(
    body: PositionalParamBasicBodyParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    return this.post('/positional_params/basic_body', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with no positional params and a query object.
   */
  basicQuery(
    query: PositionalParamBasicQueryParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    return this.get('/positional_params/basic_query', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with no positional params and a body object.
   */
  body(body: PositionalParamBodyParams, options?: Core.RequestOptions): Promise<Core.APIResponse<void>> {
    return this.post('/positional_params/body', {
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
  ): Promise<Core.APIResponse<void>> {
    return this.post('/positional_params/body_extra_param', {
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
    camelCase: string,
    params: PositionalParamKitchenSinkParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    const {
      key,
      imACamel,
      option1,
      option2,
      really_cool_snake: reallyCoolSnake,
      'X-Custom-Header': xCustomHeader,
      ...body
    } = params;
    return this.post(`/positional_params/query/${id}/kitchen_sink/${key}`, {
      query: { imACamel, option1, option2, really_cool_snake: reallyCoolSnake },
      body: { camel_case: camelCase, ...body },
      ...options,
      headers: { Accept: '', 'X-Custom-Header': xCustomHeader || '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a positional path parameter in the middle.
   */
  multiplePathParams(
    second: string,
    name: string,
    params: PositionalParamMultiplePathParamsParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    const { first, last, ...body } = params;
    return this.post(`/positional_params/${first}/${second}/${last}`, {
      body: { name, ...body },
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a positional query parameter.
   */
  query(foo: string, options?: Core.RequestOptions): Promise<Core.APIResponse<void>> {
    return this.get('/positional_params/query', {
      query: { foo },
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a positional path parameter and a query parameter.
   */
  queryAndPath(bar: number, id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<void>> {
    return this.post(`/positional_params/query/${id}`, {
      query: { bar },
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a positional query parameter.
   */
  queryMultiple(
    foo: string,
    query: PositionalParamQueryMultipleParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    return this.get('/positional_params/query_multiple', {
      query: { foo, ...query },
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a single positional path parameter.
   */
  single(single: string, options?: Core.RequestOptions): Promise<Core.APIResponse<void>> {
    return this.get(`/positional_params/${single}`, {
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
  ): Promise<Core.APIResponse<void>> {
    return this.post(`/positional_params/body/union/${id}`, {
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
  options?: string;
}

export interface PositionalParamQueryMultipleParams {
  /**
   * Query param: Some description about bar.
   */
  bar: string;
}

export interface PositionalParamUnionBodyAndPathParams {
  kind: 'VIRTUAL' | 'PHYSICAL';
}

export namespace PositionalParams {
  export import PositionalParamBasicBodyParams = API.PositionalParamBasicBodyParams;
  export import PositionalParamBasicQueryParams = API.PositionalParamBasicQueryParams;
  export import PositionalParamBodyParams = API.PositionalParamBodyParams;
  export import PositionalParamBodyExtraParamParams = API.PositionalParamBodyExtraParamParams;
  export import PositionalParamKitchenSinkParams = API.PositionalParamKitchenSinkParams;
  export import PositionalParamMultiplePathParamsParams = API.PositionalParamMultiplePathParamsParams;
  export import PositionalParamQueryMultipleParams = API.PositionalParamQueryMultipleParams;
  export import PositionalParamUnionBodyAndPathParams = API.PositionalParamUnionBodyAndPathParams;
}
