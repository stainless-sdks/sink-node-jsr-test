// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as CursorAPI from './cursor';
import * as BodyParamsAPI from '../body-params/body-params';
import { MyModelsPageCursor } from '../body-params/body-params';
import { type PageCursorParams } from '../../pagination';

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
