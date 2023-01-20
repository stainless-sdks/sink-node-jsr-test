// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { PageCursorURL, PageCursorURLParams } from '~/pagination';
import * as BodyParams from '~/resources/body-params';

export class CursorURL extends APIResource {
  /**
   * Test case for cursor_url pagination
   */
  list(query?: CursorURLListParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorURL>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorURL>;
  list(
    query: CursorURLListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorURL> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/paginated/cursor_url', MyModelsPageCursorURL, { query, ...options });
  }
}

export class MyModelsPageCursorURL extends PageCursorURL<BodyParams.MyModel> {}

export interface CursorURLListParams extends PageCursorURLParams {}
