// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { MyModelsPageCursorURL } from '~/resources/body-params';
import * as API from './';
import { PageCursorURLParams } from '~/pagination';

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

export interface CursorURLListParams extends PageCursorURLParams {}

export namespace CursorURL {
  export import CursorURLListParams = API.CursorURLListParams;
}

export { MyModelsPageCursorURL };
