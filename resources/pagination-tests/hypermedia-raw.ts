// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { PageHypermediaRaw, PageHypermediaRawParams } from '~/pagination';
import * as BodyParams from '~/resources/body-params';

export class HypermediaRaw extends APIResource {
  /**
   * Test case for hypermedia_raw pagination
   */
  list(
    query?: HypermediaRawListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageHypermediaRaw>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageHypermediaRaw>;
  list(
    query: HypermediaRawListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageHypermediaRaw> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/paginated/hypermedia_raw', MyModelsPageHypermediaRaw, { query, ...options });
  }
}

export class MyModelsPageHypermediaRaw extends PageHypermediaRaw<BodyParams.MyModel> {}

export interface HypermediaRawListParams extends PageHypermediaRawParams {}
