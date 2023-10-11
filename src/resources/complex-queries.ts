// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as ComplexQueriesAPI from 'sink-npm/resources/complex-queries';

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
    return this.get('/array_query', { query, ...options });
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
    return this.get('/object_query', { query, ...options });
  }
}

export interface ComplexQueryArrayQueryResponse {
  include: Array<'users' | 'users.comments' | 'users.posts'>;
}

export type ComplexQueryObjectQueryResponse = Record<string, string>;

export interface ComplexQueryArrayQueryParams {
  include?: Array<'users' | 'users.comments' | 'users.posts'>;
}

export interface ComplexQueryObjectQueryParams {
  include?: Record<string, string>;
}

export namespace ComplexQueries {
  export type ComplexQueryArrayQueryResponse = ComplexQueriesAPI.ComplexQueryArrayQueryResponse;
  export type ComplexQueryObjectQueryResponse = ComplexQueriesAPI.ComplexQueryObjectQueryResponse;
  export type ComplexQueryArrayQueryParams = ComplexQueriesAPI.ComplexQueryArrayQueryParams;
  export type ComplexQueryObjectQueryParams = ComplexQueriesAPI.ComplexQueryObjectQueryParams;
}
