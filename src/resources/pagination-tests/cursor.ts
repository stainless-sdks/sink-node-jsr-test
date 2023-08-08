// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as BodyParams from 'sink-npm/resources/body-params';
import { MyModelsPageCursor } from 'sink-npm/resources/body-params';
import * as API from './index';
import { PageCursorParams } from 'sink-npm/pagination';

export class Cursor extends APIResource {
  /**
   * Test case for cursor pagination
   */
  list(
    query?: CursorListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParams.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor, BodyParams.MyModel>;
  list(
    query: CursorListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParams.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/paginated/cursor', MyModelsPageCursor, { query, ...options });
  }
}

export interface CursorListParams extends PageCursorParams {}

export namespace Cursor {
  export import CursorListParams = API.CursorListParams;
}

export { MyModelsPageCursor };
