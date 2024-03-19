// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as ResponseHeadersAPI from 'sink-npm/resources/pagination-tests/response-headers';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import { MyModelsPageCursorFromHeaders } from 'sink-npm/resources/body-params/body-params';
import { type PageCursorFromHeadersParams } from 'sink-npm/pagination';

export class ResponseHeaders extends APIResource {
  /**
   * Test case for response headers with cursor pagination
   */
  basicCursor(
    query?: ResponseHeaderBasicCursorParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorFromHeaders, BodyParamsAPI.MyModel>;
  basicCursor(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorFromHeaders, BodyParamsAPI.MyModel>;
  basicCursor(
    query: ResponseHeaderBasicCursorParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorFromHeaders, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.basicCursor({}, query);
    }
    return this._client.getAPIList(
      '/paginated/response_headers/basic_cursor',
      MyModelsPageCursorFromHeaders,
      { query, ...options },
    );
  }
}

export interface ResponseHeaderBasicCursorParams extends PageCursorFromHeadersParams {
  limit?: number;
}

export namespace ResponseHeaders {
  export import ResponseHeaderBasicCursorParams = ResponseHeadersAPI.ResponseHeaderBasicCursorParams;
}

export { MyModelsPageCursorFromHeaders };
