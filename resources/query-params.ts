// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';

export class QueryParams extends APIResource {
  /**
   * Endpoint with anyOf query params
   */
  anyOf(
    query?: QueryParamAnyOfParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>>;
  anyOf(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>>;
  anyOf(
    query: QueryParamAnyOfParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    if (isRequestOptions(query)) {
      return this.anyOf({}, query);
    }

    return this.get('/query_params/anyOf', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with array query params
   */
  array(
    query?: QueryParamArrayParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>>;
  array(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>>;
  array(
    query: QueryParamArrayParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    if (isRequestOptions(query)) {
      return this.array({}, query);
    }

    return this.get('/query_params/array', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with enum query params
   */
  enum(query?: QueryParamEnumParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>>;
  enum(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>>;
  enum(
    query: QueryParamEnumParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    if (isRequestOptions(query)) {
      return this.enum({}, query);
    }

    return this.get('/query_params/enum', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with object query params
   */
  object(
    query?: QueryParamObjectParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>>;
  object(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>>;
  object(
    query: QueryParamObjectParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    if (isRequestOptions(query)) {
      return this.object({}, query);
    }

    return this.get('/query_params/object', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with oneOf query params
   */
  oneOf(
    query?: QueryParamOneOfParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>>;
  oneOf(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>>;
  oneOf(
    query: QueryParamOneOfParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    if (isRequestOptions(query)) {
      return this.oneOf({}, query);
    }

    return this.get('/query_params/oneOf', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a set of primitive type query params
   */
  primitives(
    query?: QueryParamPrimitivesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>>;
  primitives(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>>;
  primitives(
    query: QueryParamPrimitivesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    if (isRequestOptions(query)) {
      return this.primitives({}, query);
    }

    return this.get('/query_params/primitives', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export interface QueryParamAnyOfParams {
  string_or_integer?: string | number;
}

export interface QueryParamArrayParams {
  integer_array_param?: Array<number>;

  string_array_param?: Array<string>;
}

export interface QueryParamEnumParams {
  integer_enum_param?: 100 | 200;

  nullable_integer_enum_param?: 100 | 200 | null;

  nullable_number_enum_param?: 100 | 200 | null;

  nullable_string_enum_param?: 'foo' | 'bar' | null;

  number_enum_param?: 100 | 200;

  string_enum_param?: 'foo' | 'bar';
}

export interface QueryParamObjectParams {
  object_param?: QueryParamObjectParams.ObjectParam;

  object_ref_param?: QueryParamObjectParams.ObjectRefParam;
}

export namespace QueryParamObjectParams {
  export interface ObjectParam {
    foo?: string;
  }

  export interface ObjectRefParam {
    item?: string;
  }
}

export interface QueryParamOneOfParams {
  string_or_integer?: string | number;
}

export interface QueryParamPrimitivesParams {
  boolean_param?: boolean;

  integer_param?: number;

  number_param?: number;

  string_param?: string;
}
