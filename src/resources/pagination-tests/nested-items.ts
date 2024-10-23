// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as NestedItemsAPI from './nested-items';
import * as BodyParamsAPI from '../body-params/body-params';
import { MyModelsPageCursorNestedItems } from '../body-params/body-params';
import { PageCursorNestedItems, type PageCursorNestedItemsParams } from '../../pagination';

export class NestedItems extends APIResource {
  /**
   * Test case for response headers with cursor pagination
   */
  list(query?: NestedItemListParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorNestedItems, BodyParamsAPI.MyModel>
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorNestedItems, BodyParamsAPI.MyModel>
  list(query: NestedItemListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorNestedItems, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/paginated/nested_items', MyModelsPageCursorNestedItems, { query, ...options });
  }
}

export interface NestedItemListParams extends PageCursorNestedItemsParams {
  limit?: number;
}

export namespace NestedItems {
  export import NestedItemListParams = NestedItemsAPI.NestedItemListParams;
}

export { MyModelsPageCursorNestedItems }
