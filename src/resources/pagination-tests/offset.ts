// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as OffsetAPI from 'sink-npm/resources/pagination-tests/offset';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import { MyModelsPageOffset, MyModelsPageOffsetTotalCount } from 'sink-npm/resources/body-params/body-params';
import { type PageOffsetParams, type PageOffsetTotalCountParams } from 'sink-npm/pagination';

export class Offset extends APIResource {
  /**
   * Test case for offset pagination
   */
  list(
    query?: OffsetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageOffset, BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageOffset, BodyParamsAPI.MyModel>;
  list(
    query: OffsetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageOffset, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/paginated/offset', MyModelsPageOffset, { query, ...options });
  }

  /**
   * Test case for offset pagination with a total count response property
   */
  withTotalCount(
    query?: OffsetWithTotalCountParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageOffsetTotalCount, BodyParamsAPI.MyModel>;
  withTotalCount(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageOffsetTotalCount, BodyParamsAPI.MyModel>;
  withTotalCount(
    query: OffsetWithTotalCountParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageOffsetTotalCount, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.withTotalCount({}, query);
    }
    return this._client.getAPIList('/paginated/offset/with_total_count', MyModelsPageOffsetTotalCount, {
      query,
      ...options,
    });
  }
}

export interface OffsetListParams extends PageOffsetParams {}

export interface OffsetWithTotalCountParams extends PageOffsetTotalCountParams {}

export namespace Offset {
  export import OffsetListParams = OffsetAPI.OffsetListParams;
  export import OffsetWithTotalCountParams = OffsetAPI.OffsetWithTotalCountParams;
}

export { MyModelsPageOffset, MyModelsPageOffsetTotalCount };
