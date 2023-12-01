// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as CursorAPI from 'sink-npm/resources/pagination-tests/cursor';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';

export class Cursor extends APIResource {
  /**
   * Test case for cursor pagination
   */
  list(query?: CursorListParams, options?: Core.RequestOptions): Core.APIPromise<BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.APIPromise<BodyParamsAPI.MyModel>;
  list(
    query: CursorListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/paginated/cursor', { query, ...options });
  }
}

export interface CursorListParams {
  cursor?: string | null;

  limit?: number;
}

export namespace Cursor {
  export import CursorListParams = CursorAPI.CursorListParams;
}
