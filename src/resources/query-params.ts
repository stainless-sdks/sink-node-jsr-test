// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as API from './index';

export class QueryParams extends APIResource {
  /**
   * Endpoint with allOf query params
   */
  allOf(query?: QueryParamAllOfParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  allOf(options?: Core.RequestOptions): Core.APIPromise<void>;
  allOf(
    query: QueryParamAllOfParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.allOf({}, query);
    }
    return this.get('/query_params/allOf', {
      query,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with anyOf query params
   */
  anyOf(query?: QueryParamAnyOfParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  anyOf(options?: Core.RequestOptions): Core.APIPromise<void>;
  anyOf(
    query: QueryParamAnyOfParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
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
  array(query?: QueryParamArrayParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  array(options?: Core.RequestOptions): Core.APIPromise<void>;
  array(
    query: QueryParamArrayParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
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
  enum(query?: QueryParamEnumParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  enum(options?: Core.RequestOptions): Core.APIPromise<void>;
  enum(
    query: QueryParamEnumParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
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
  object(query?: QueryParamObjectParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  object(options?: Core.RequestOptions): Core.APIPromise<void>;
  object(
    query: QueryParamObjectParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
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
  oneOf(query?: QueryParamOneOfParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  oneOf(options?: Core.RequestOptions): Core.APIPromise<void>;
  oneOf(
    query: QueryParamOneOfParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
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
  primitives(query?: QueryParamPrimitivesParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  primitives(options?: Core.RequestOptions): Core.APIPromise<void>;
  primitives(
    query: QueryParamPrimitivesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
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

export interface QueryParamAllOfParams {
  foo_and_bar?: QueryParamAllOfParams.FooAndBar;
}

export namespace QueryParamAllOfParams {
  export interface FooAndBar {
    bar?: number;

    foo?: string;
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

export namespace QueryParams {
  export import QueryParamAllOfParams = API.QueryParamAllOfParams;
  export import QueryParamAnyOfParams = API.QueryParamAnyOfParams;
  export import QueryParamArrayParams = API.QueryParamArrayParams;
  export import QueryParamEnumParams = API.QueryParamEnumParams;
  export import QueryParamObjectParams = API.QueryParamObjectParams;
  export import QueryParamOneOfParams = API.QueryParamOneOfParams;
  export import QueryParamPrimitivesParams = API.QueryParamPrimitivesParams;
}
