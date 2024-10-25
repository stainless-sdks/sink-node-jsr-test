// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TopLevelArraysAPI from './top-level-arrays';
import * as BodyParamsAPI from '../body-params/body-params';
import { MyModelsPageCursorTopLevelArray } from '../body-params/body-params';
import { type PageCursorTopLevelArrayParams } from '../../pagination';

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

export interface TopLevelArrayBasicCursorParams extends PageCursorTopLevelArrayParams {
  limit?: number;
}

export namespace TopLevelArrays {
  export type TopLevelArrayBasicCursorParams = TopLevelArraysAPI.TopLevelArrayBasicCursorParams;
}

export { MyModelsPageCursorTopLevelArray };
