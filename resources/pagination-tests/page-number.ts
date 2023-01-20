// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { PagePageNumber, PagePageNumberParams } from '~/pagination';
import * as BodyParams from '~/resources/body-params';

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

export class MyModelsPagePageNumber extends PagePageNumber<BodyParams.MyModel> {}

export interface PageNumberListParams extends PagePageNumberParams {}
