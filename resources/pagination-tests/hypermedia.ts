// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { MyModelsPageHypermedia } from '~/resources/body-params';
import { PageHypermediaParams } from '~/pagination';

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

export interface HypermediaListParams extends PageHypermediaParams {}

export { MyModelsPageHypermedia };
