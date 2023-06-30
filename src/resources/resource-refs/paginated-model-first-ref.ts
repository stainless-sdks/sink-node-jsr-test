// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import { CardsPageCursor } from 'sink-npm/resources/cards';
import * as API from './';
import { PageCursorParams } from 'sink-npm/pagination';

export class PaginatedModelFirstRef extends APIResource {
  /**
   * used to test a paginated method whose items type is defined in a separate
   * resource in the config
   */
  list(
    query?: PaginatedModelFirstRefListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardsPageCursor>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardsPageCursor>;
  list(
    query: PaginatedModelFirstRefListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardsPageCursor> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/resource_refs/paginated_model_separate_resource', CardsPageCursor, {
      query,
      ...options,
    });
  }
}

export interface PaginatedModelFirstRefListParams extends PageCursorParams {}

export namespace PaginatedModelFirstRef {
  export import PaginatedModelFirstRefListParams = API.PaginatedModelFirstRefListParams;
}

export { CardsPageCursor };
