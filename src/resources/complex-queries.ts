// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class ComplexQueries extends APIResource {
  arrayQuery(
    query?: ComplexQueryArrayQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComplexQueryArrayQueryResponse>;
  arrayQuery(options?: Core.RequestOptions): Core.APIPromise<ComplexQueryArrayQueryResponse>;
  arrayQuery(
    query: ComplexQueryArrayQueryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComplexQueryArrayQueryResponse> {
    if (isRequestOptions(query)) {
      return this.arrayQuery({}, query);
    }
    return this._client.get('/array_query', { query, ...options });
  }

  objectQuery(
    query?: ComplexQueryObjectQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComplexQueryObjectQueryResponse>;
  objectQuery(options?: Core.RequestOptions): Core.APIPromise<ComplexQueryObjectQueryResponse>;
  objectQuery(
    query: ComplexQueryObjectQueryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComplexQueryObjectQueryResponse> {
    if (isRequestOptions(query)) {
      return this.objectQuery({}, query);
    }
    return this._client.get('/object_query', { query, ...options });
  }

  unionQuery(
    query?: ComplexQueryUnionQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComplexQueryUnionQueryResponse>;
  unionQuery(options?: Core.RequestOptions): Core.APIPromise<ComplexQueryUnionQueryResponse>;
  unionQuery(
    query: ComplexQueryUnionQueryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComplexQueryUnionQueryResponse> {
    if (isRequestOptions(query)) {
      return this.unionQuery({}, query);
    }
    return this._client.get('/union_query', { query, ...options });
  }
}

export interface ComplexQueryArrayQueryResponse {
  include: Array<'users' | 'users.comments' | 'users.posts'>;
}

export type ComplexQueryObjectQueryResponse = Record<string, string>;

export type ComplexQueryUnionQueryResponse = Record<string, string>;

export interface ComplexQueryArrayQueryParams {
  include?: Array<'users' | 'users.comments' | 'users.posts'>;
}

export interface ComplexQueryObjectQueryParams {
  include?: Record<string, string>;
}

export interface ComplexQueryUnionQueryParams {
  include?: string | number | Array<string>;
}

export declare namespace ComplexQueries {
  export {
    type ComplexQueryArrayQueryResponse as ComplexQueryArrayQueryResponse,
    type ComplexQueryObjectQueryResponse as ComplexQueryObjectQueryResponse,
    type ComplexQueryUnionQueryResponse as ComplexQueryUnionQueryResponse,
    type ComplexQueryArrayQueryParams as ComplexQueryArrayQueryParams,
    type ComplexQueryObjectQueryParams as ComplexQueryObjectQueryParams,
    type ComplexQueryUnionQueryParams as ComplexQueryUnionQueryParams,
  };
}
