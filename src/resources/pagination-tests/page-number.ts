// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as PageNumberAPI from './page-number';
import * as BodyParamsAPI from '../body-params/body-params';
import { MyModelsPagePageNumber } from '../body-params/body-params';
import { type PagePageNumberParams } from '../../pagination';

export class PageNumber extends APIResource {
  /**
   * Test case for page_number pagination
   */
  list(
    query?: PageNumberListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumber, BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPagePageNumber, BodyParamsAPI.MyModel>;
  list(
    query: PageNumberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumber, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/paginated/page_number', MyModelsPagePageNumber, { query, ...options });
  }
}

export interface PageNumberListParams extends PagePageNumberParams {}

export namespace PageNumber {
  export import PageNumberListParams = PageNumberAPI.PageNumberListParams;
}

export { MyModelsPagePageNumber };
