// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as BodyParamsAPI from '../body-params/body-params';
import {
  MyModelsPageOffset,
  MyModelsPageOffsetNoStartField,
  MyModelsPageOffsetTotalCount,
} from '../body-params/body-params';
import {
  type PageOffsetNoStartFieldParams,
  type PageOffsetParams,
  type PageOffsetTotalCountParams,
} from '../../pagination';

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
   * Test case for offset pagination with no start response field
   */
  listNoStartField(
    query?: OffsetListNoStartFieldParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageOffsetNoStartField, BodyParamsAPI.MyModel>;
  listNoStartField(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageOffsetNoStartField, BodyParamsAPI.MyModel>;
  listNoStartField(
    query: OffsetListNoStartFieldParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageOffsetNoStartField, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.listNoStartField({}, query);
    }
    return this._client.getAPIList('/paginated/offset/no_start_field', MyModelsPageOffsetNoStartField, {
      query,
      ...options,
    });
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

export interface OffsetListNoStartFieldParams extends PageOffsetNoStartFieldParams {}

export interface OffsetWithTotalCountParams extends PageOffsetTotalCountParams {}

export declare namespace Offset {
  export {
    type OffsetListParams as OffsetListParams,
    type OffsetListNoStartFieldParams as OffsetListNoStartFieldParams,
    type OffsetWithTotalCountParams as OffsetWithTotalCountParams,
  };
}

export { MyModelsPageOffset, MyModelsPageOffsetNoStartField, MyModelsPageOffsetTotalCount };
