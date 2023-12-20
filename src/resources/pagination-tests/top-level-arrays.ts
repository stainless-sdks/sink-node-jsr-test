// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as TopLevelArraysAPI from 'sink-npm/resources/pagination-tests/top-level-arrays';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import { MyModelsPageCursorTopLevelArray } from 'sink-npm/resources/body-params/body-params';

export class TopLevelArrays extends APIResource {
  /**
   * Test case for top level arrays with cursor pagination
   */
  basicCursor(
    query?: TopLevelArrayBasicCursorParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorTopLevelArray, BodyParamsAPI.MyModel>;
  basicCursor(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorTopLevelArray, BodyParamsAPI.MyModel>;
  basicCursor(
    query: TopLevelArrayBasicCursorParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorTopLevelArray, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.basicCursor({}, query);
    }
    return this._client.getAPIList(
      '/paginated/top_level_arrays/basic_cursor',
      MyModelsPageCursorTopLevelArray,
      { query, ...options },
    );
  }
}

export interface TopLevelArrayBasicCursorParams {
  cursor?: string | null;

  limit?: number;
}

export namespace TopLevelArrays {
  export import TopLevelArrayBasicCursorParams = TopLevelArraysAPI.TopLevelArrayBasicCursorParams;
}

export { MyModelsPageCursorTopLevelArray };
