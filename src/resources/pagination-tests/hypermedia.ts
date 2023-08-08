// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as BodyParams from 'sink-npm/resources/body-params';
import { MyModelsPageHypermedia } from 'sink-npm/resources/body-params';
import * as API from './index';
import { PageHypermediaParams } from 'sink-npm/pagination';

export class Hypermedia extends APIResource {
  /**
   * Test case for hypermedia pagination
   */
  list(
    query?: HypermediaListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageHypermedia, BodyParams.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageHypermedia, BodyParams.MyModel>;
  list(
    query: HypermediaListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageHypermedia, BodyParams.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/paginated/hypermedia', MyModelsPageHypermedia, { query, ...options });
  }
}

export interface HypermediaListParams extends PageHypermediaParams {}

export namespace Hypermedia {
  export import HypermediaListParams = API.HypermediaListParams;
}

export { MyModelsPageHypermedia };
