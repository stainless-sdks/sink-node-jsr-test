// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import { MyModelsPagePageNumber } from 'sink-npm/resources/body-params';
import * as API from './index';
import { PagePageNumberParams } from 'sink-npm/pagination';

export class PageNumber extends APIResource {
  /**
   * Test case for page_number pagination
   */
  list(query?: PageNumberListParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPagePageNumber>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPagePageNumber>;
  list(
    query: PageNumberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPagePageNumber> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/paginated/page_number', MyModelsPagePageNumber, { query, ...options });
  }
}

export interface PageNumberListParams extends PagePageNumberParams {}

export namespace PageNumber {
  export import PageNumberListParams = API.PageNumberListParams;
}

export { MyModelsPagePageNumber };
