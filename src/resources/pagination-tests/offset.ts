// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import { MyModelsPageOffset } from 'sink-npm/resources/body-params';
import * as API from './';
import { PageOffsetParams } from 'sink-npm/pagination';

export class Offset extends APIResource {
  /**
   * Test case for offset pagination
   */
  list(query?: OffsetListParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageOffset>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageOffset>;
  list(
    query: OffsetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageOffset> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/paginated/offset', MyModelsPageOffset, { query, ...options });
  }
}

export interface OffsetListParams extends PageOffsetParams {}

export namespace Offset {
  export import OffsetListParams = API.OffsetListParams;
}

export { MyModelsPageOffset };
