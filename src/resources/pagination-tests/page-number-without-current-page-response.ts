// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PageNumberWithoutCurrentPageResponseAPI from './page-number-without-current-page-response';
import * as BodyParamsAPI from '../body-params/body-params';
import {
  MyModelsPagePageNumber,
  MyModelsPagePageNumberWithoutCurrentPageResponse,
} from '../body-params/body-params';
import {
  type PagePageNumberParams,
  type PagePageNumberWithoutCurrentPageResponseParams,
} from '../../pagination';

export class PageNumberWithoutCurrentPageResponse extends APIResource {
  /**
   * Test case for page_number pagination
   */
  list(
    query?: PageNumberWithoutCurrentPageResponseListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumber, BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPagePageNumber, BodyParamsAPI.MyModel>;
  list(
    query: PageNumberWithoutCurrentPageResponseListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumber, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/paginated/page_number', MyModelsPagePageNumber, { query, ...options });
  }

  /**
   * Test case for page_number pagination without a `page` response property
   */
  listWithoutCurrentPageResponse(
    query?: PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumberWithoutCurrentPageResponse, BodyParamsAPI.MyModel>;
  listWithoutCurrentPageResponse(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumberWithoutCurrentPageResponse, BodyParamsAPI.MyModel>;
  listWithoutCurrentPageResponse(
    query:
      | PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams
      | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumberWithoutCurrentPageResponse, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.listWithoutCurrentPageResponse({}, query);
    }
    return this._client.getAPIList(
      '/paginated/page_number_without_current_page_response',
      MyModelsPagePageNumberWithoutCurrentPageResponse,
      { query, ...options },
    );
  }
}

export interface PageNumberWithoutCurrentPageResponseListParams extends PagePageNumberParams {}

export interface PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams
  extends PagePageNumberWithoutCurrentPageResponseParams {}

export namespace PageNumberWithoutCurrentPageResponse {
  export import PageNumberWithoutCurrentPageResponseListParams = PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponseListParams;
  export import PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams = PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams;
}

export { MyModelsPagePageNumber, MyModelsPagePageNumberWithoutCurrentPageResponse };
