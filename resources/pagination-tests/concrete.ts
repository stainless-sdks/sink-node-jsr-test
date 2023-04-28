// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { MyConcretePage, MyConcretePageParams } from '~/pagination';

export class Concrete extends APIResource {
  /**
   * Test case for concrete page types using cursor based pagination.
   */
  list(query?: ConcreteListParams, options?: Core.RequestOptions): Core.PagePromise<MyConcretePage>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyConcretePage>;
  list(
    query: ConcreteListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyConcretePage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/paginated/concrete_cursor', MyConcretePage, { query, ...options });
  }
}

export interface MyConcretePageItem {
  bar?: boolean;
}

export interface ConcreteListParams extends MyConcretePageParams {}
