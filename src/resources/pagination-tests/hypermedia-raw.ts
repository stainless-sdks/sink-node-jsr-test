// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as HypermediaRawAPI from 'sink-npm/resources/pagination-tests/hypermedia-raw';
import * as BodyParamsAPI from 'sink-npm/resources/body-params';
import { MyModelsPageHypermediaRaw } from 'sink-npm/resources/body-params';
import { type PageHypermediaRawParams } from 'sink-npm/pagination';

export class HypermediaRaw extends APIResource {
  /**
   * Test case for hypermedia_raw pagination
   */
  list(
    query?: HypermediaRawListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageHypermediaRaw, BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageHypermediaRaw, BodyParamsAPI.MyModel>;
  list(
    query: HypermediaRawListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageHypermediaRaw, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/paginated/hypermedia_raw', MyModelsPageHypermediaRaw, { query, ...options });
  }
}

export interface HypermediaRawListParams extends PageHypermediaRawParams {}

export namespace HypermediaRaw {
  export import HypermediaRawListParams = HypermediaRawAPI.HypermediaRawListParams;
}

export { MyModelsPageHypermediaRaw };
