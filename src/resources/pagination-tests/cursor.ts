// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as CursorAPI from './cursor';
import * as BodyParamsAPI from '../body-params/body-params';
import { MyModelsPageCursor, MyModelsPageCursorWithReverse } from '../body-params/body-params';
import { PageCursor, type PageCursorParams, PageCursorWithReverse, type PageCursorWithReverseParams } from '../../pagination';

export class Cursor extends APIResource {
  /**
   * Test case for cursor pagination
   */
  list(query?: CursorListParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>
  list(query: CursorListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/paginated/cursor', MyModelsPageCursor, { query, ...options });
  }

  /**
   * Test case for cursor pagination with reverse support
   */
  listReverse(query?: CursorListReverseParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorWithReverse, BodyParamsAPI.MyModel>
  listReverse(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorWithReverse, BodyParamsAPI.MyModel>
  listReverse(query: CursorListReverseParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorWithReverse, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.listReverse({}, query);
    }
    return this._client.getAPIList('/paginated/cursor_with_reverse', MyModelsPageCursorWithReverse, { query, ...options });
  }
}

export interface CursorListParams extends PageCursorParams {
  limit?: number;
}

export interface CursorListReverseParams extends PageCursorWithReverseParams {
}

export namespace Cursor {
  export import CursorListParams = CursorAPI.CursorListParams;
  export import CursorListReverseParams = CursorAPI.CursorListReverseParams;
}

export { MyModelsPageCursor, MyModelsPageCursorWithReverse }
