// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { CardsPageCursor } from '~/resources/cards';
import { PageCursorParams } from '~/pagination';

export class PaginatedModelSecondRef extends APIResource {
  /**
   * used to test a paginated method whose items type is defined in a separate
   * resource in the config
   */
  list(
    query?: PaginatedModelSecondRefListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardsPageCursor>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardsPageCursor>;
  list(
    query: PaginatedModelSecondRefListParams | Core.RequestOptions = {},
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

export interface PaginatedModelSecondRefListParams extends PageCursorParams {}

export { CardsPageCursor };
