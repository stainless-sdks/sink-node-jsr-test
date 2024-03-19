// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as NestedItemsAPI from 'sink-npm/resources/pagination-tests/nested-items';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import { MyModelsPageCursorNestedItems } from 'sink-npm/resources/body-params/body-params';
import { type PageCursorNestedItemsParams } from 'sink-npm/pagination';

export class NestedItems extends APIResource {
  /**
   * Test case for response headers with cursor pagination
   */
  list(
    query?: NestedItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorNestedItems, BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorNestedItems, BodyParamsAPI.MyModel>;
  list(
    query: NestedItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorNestedItems, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/paginated/nested_items', MyModelsPageCursorNestedItems, {
      query,
      ...options,
    });
  }
}

export interface NestedItemListParams extends PageCursorNestedItemsParams {
  limit?: number;
}

export namespace NestedItems {
  export import NestedItemListParams = NestedItemsAPI.NestedItemListParams;
}

export { MyModelsPageCursorNestedItems };
