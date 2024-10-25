// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
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

  /**
   * Test case for page_number pagination
   */
  listWithoutCurrentPageResponse(
    query?: PageNumberListWithoutCurrentPageResponseParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumber, BodyParamsAPI.MyModel>;
  listWithoutCurrentPageResponse(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumber, BodyParamsAPI.MyModel>;
  listWithoutCurrentPageResponse(
    query: PageNumberListWithoutCurrentPageResponseParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumber, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.listWithoutCurrentPageResponse({}, query);
    }
    return this._client.getAPIList('/paginated/page_number', MyModelsPagePageNumber, { query, ...options });
  }
}

export interface PageNumberListParams extends PagePageNumberParams {}

export interface PageNumberListWithoutCurrentPageResponseParams extends PagePageNumberParams {}

export namespace PageNumber {
  export import PageNumberListParams = PageNumberAPI.PageNumberListParams;
  export import PageNumberListWithoutCurrentPageResponseParams = PageNumberAPI.PageNumberListWithoutCurrentPageResponseParams;
}

export { MyModelsPagePageNumber };
