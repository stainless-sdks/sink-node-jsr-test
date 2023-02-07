// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as BodyParams from '~/resources/body-params';
import { PageHypermedia, PageHypermediaParams } from '~/pagination';

export class Hypermedia extends APIResource {
  /**
   * Test case for hypermedia pagination
   */
  list(query?: HypermediaListParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageHypermedia>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageHypermedia>;
  list(
    query: HypermediaListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageHypermedia> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/paginated/hypermedia', MyModelsPageHypermedia, { query, ...options });
  }
}

export class MyModelsPageHypermedia extends PageHypermedia<BodyParams.MyModel> {}

export interface HypermediaListParams extends PageHypermediaParams {}
