// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as HypermediaAPI from 'sink-npm/resources/pagination-tests/hypermedia';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import { MyModelsPageHypermedia } from 'sink-npm/resources/body-params/body-params';
import { type PageHypermediaParams } from 'sink-npm/pagination';

export class Hypermedia extends APIResource {
  /**
   * Test case for hypermedia pagination
   */
  list(
    query?: HypermediaListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageHypermedia, BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageHypermedia, BodyParamsAPI.MyModel>;
  list(
    query: HypermediaListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageHypermedia, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/paginated/hypermedia', MyModelsPageHypermedia, { query, ...options });
  }
}

export interface HypermediaListParams extends PageHypermediaParams {}

export namespace Hypermedia {
  export import HypermediaListParams = HypermediaAPI.HypermediaListParams;
}

export { MyModelsPageHypermedia };
