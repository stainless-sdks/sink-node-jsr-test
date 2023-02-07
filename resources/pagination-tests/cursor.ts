// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as BodyParams from '~/resources/body-params';
import { PageCursor, PageCursorParams } from '~/pagination';

export class Cursor extends APIResource {
  /**
   * Test case for cursor pagination
   */
  list(query?: CursorListParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor>;
  list(
    query: CursorListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/paginated/cursor', MyModelsPageCursor, { query, ...options });
  }
}

export class MyModelsPageCursor extends PageCursor<BodyParams.MyModel> {}

export interface CursorListParams extends PageCursorParams {}
