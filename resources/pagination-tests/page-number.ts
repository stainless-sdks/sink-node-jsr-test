// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { MyModelsPagePageNumber } from '~/resources/body-params';
import { PagePageNumberParams } from '~/pagination';

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

export { MyModelsPagePageNumber };
