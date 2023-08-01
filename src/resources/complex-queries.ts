// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as API from './index';

export class ComplexQueries extends APIResource {
  arrayQuery(
    query?: ComplexQueryArrayQueryParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ComplexQueryArrayQueryResponse>>;
  arrayQuery(options?: Core.RequestOptions): Promise<Core.APIResponse<ComplexQueryArrayQueryResponse>>;
  arrayQuery(
    query: ComplexQueryArrayQueryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ComplexQueryArrayQueryResponse>> {
    if (isRequestOptions(query)) {
      return this.arrayQuery({}, query);
    }
    return this.get('/array_query', { query, ...options });
  }

  objectQuery(
    query?: ComplexQueryObjectQueryParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ComplexQueryObjectQueryResponse>>;
  objectQuery(options?: Core.RequestOptions): Promise<Core.APIResponse<ComplexQueryObjectQueryResponse>>;
  objectQuery(
    query: ComplexQueryObjectQueryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ComplexQueryObjectQueryResponse>> {
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
  export import ComplexQueryArrayQueryResponse = API.ComplexQueryArrayQueryResponse;
  export import ComplexQueryObjectQueryResponse = API.ComplexQueryObjectQueryResponse;
  export import ComplexQueryArrayQueryParams = API.ComplexQueryArrayQueryParams;
  export import ComplexQueryObjectQueryParams = API.ComplexQueryObjectQueryParams;
}
