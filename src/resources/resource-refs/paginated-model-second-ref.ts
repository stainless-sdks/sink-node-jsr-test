// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as Cards from 'sink-npm/resources/cards';
import { CardsPageCursor } from 'sink-npm/resources/cards';
import * as API from './index';
import { PageCursorParams } from 'sink-npm/pagination';

export class PaginatedModelSecondRef extends APIResource {
  /**
   * used to test a paginated method whose items type is defined in a separate
   * resource in the config
   */
  list(
    query?: PaginatedModelSecondRefListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardsPageCursor, Cards.Card>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardsPageCursor, Cards.Card>;
  list(
    query: PaginatedModelSecondRefListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardsPageCursor, Cards.Card> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/resource_refs/paginated_model_separate_resource', CardsPageCursor, {
      query,
      ...options,
    });
  }
}

export interface PaginatedModelSecondRefListParams extends PageCursorParams {}

export namespace PaginatedModelSecondRef {
  export import PaginatedModelSecondRefListParams = API.PaginatedModelSecondRefListParams;
}

export { CardsPageCursor };
