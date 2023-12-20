// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as PageNumberAPI from 'sink-npm/resources/pagination-tests/page-number';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import { MyModelsPagePageNumber } from 'sink-npm/resources/body-params/body-params';

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

export interface PageNumberListParams {
  page?: number;

  page_size?: number;
}

export namespace PageNumber {
  export import PageNumberListParams = PageNumberAPI.PageNumberListParams;
}

export { MyModelsPagePageNumber };
