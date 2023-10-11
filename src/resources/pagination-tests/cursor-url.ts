// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as CursorURLAPI from 'sink-npm/resources/pagination-tests/cursor-url';
import * as BodyParamsAPI from 'sink-npm/resources/body-params';
import { MyModelsPageCursorURL } from 'sink-npm/resources/body-params';
import { type PageCursorURLParams } from 'sink-npm/pagination';

export class CursorURL extends APIResource {
  /**
   * Test case for cursor_url pagination
   */
  list(
    query?: CursorURLListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorURL, BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorURL, BodyParamsAPI.MyModel>;
  list(
    query: CursorURLListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorURL, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/paginated/cursor_url', MyModelsPageCursorURL, { query, ...options });
  }
}

export interface CursorURLListParams extends PageCursorURLParams {}

export namespace CursorURL {
  export type CursorURLListParams = CursorURLAPI.CursorURLListParams;
}

export { MyModelsPageCursorURL };
