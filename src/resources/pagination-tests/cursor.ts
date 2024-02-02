// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as CursorAPI from 'sink-npm/resources/pagination-tests/cursor';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import { MyModelsPageCursor } from 'sink-npm/resources/body-params/body-params';
import { type PageCursorParams } from 'sink-npm/pagination';

export class Cursor extends APIResource {
  /**
   * Test case for cursor pagination
   */
  list(
    query?: CursorListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>;
  list(
    query: CursorListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/paginated/cursor', MyModelsPageCursor, { query, ...options });
  }
}

export interface CursorListParams extends PageCursorParams {
  limit?: number;
}

export namespace Cursor {
  export import CursorListParams = CursorAPI.CursorListParams;
}

export { MyModelsPageCursor };
