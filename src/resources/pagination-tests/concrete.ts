// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ConcreteAPI from 'sink-npm/resources/pagination-tests/concrete';
import {
  ConcretePageWithExtraParamsAndFields,
  type ConcretePageWithExtraParamsAndFieldsParams,
  MyConcretePage,
  type MyConcretePageParams,
} from 'sink-npm/pagination';

export class Concrete extends APIResource {
  /**
   * Test case for concrete page types using cursor based pagination.
   */
  list(
    query: ConcreteListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyConcretePage, MyConcretePageItem> {
    return this.getAPIList('/paginated/concrete/cursor', MyConcretePage, { query, ...options });
  }

  /**
   * Test case for concrete page types using cursor based pagination, with more
   * params
   */
  listExtraParamsAndFields(
    params: ConcreteListExtraParamsAndFieldsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConcretePageWithExtraParamsAndFields, MyConcretePageItem> {
    const { my_cursor, limit, ...body } = params;
    return this.getAPIList('/paginated/concrete/more_params', ConcretePageWithExtraParamsAndFields, {
      query: { my_cursor, limit },
      body,
      method: 'post',
      ...options,
    });
  }
}

export interface MyConcretePageItem {
  bar?: boolean;
}

export interface ConcreteListParams extends MyConcretePageParams {}

export interface ConcreteListExtraParamsAndFieldsParams extends ConcretePageWithExtraParamsAndFieldsParams {
  /**
   * Body param:
   */
  foo?: unknown;
}

export namespace Concrete {
  export import MyConcretePageItem = ConcreteAPI.MyConcretePageItem;
  export import ConcreteListParams = ConcreteAPI.ConcreteListParams;
  export import ConcreteListExtraParamsAndFieldsParams = ConcreteAPI.ConcreteListExtraParamsAndFieldsParams;
}
