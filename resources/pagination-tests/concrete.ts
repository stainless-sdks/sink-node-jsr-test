// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';
import { MyConcretePage, MyConcretePageParams } from '~/pagination';

export class Concrete extends APIResource {
  /**
   * Test case for concrete page types using cursor based pagination.
   */
  list(query: ConcreteListParams, options?: Core.RequestOptions): Core.PagePromise<MyConcretePage> {
    return this.getAPIList('/paginated/concrete_cursor', MyConcretePage, { query, ...options });
  }
}

export interface MyConcretePageItem {
  bar?: boolean;
}

export interface ConcreteListParams extends MyConcretePageParams {}

export namespace Concrete {
  export import MyConcretePageItem = API.MyConcretePageItem;
  export import ConcreteListParams = API.ConcreteListParams;
}
