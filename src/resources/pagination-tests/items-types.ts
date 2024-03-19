// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as ItemsTypesAPI from 'sink-npm/resources/pagination-tests/items-types';
import { PagePageNumber, type PagePageNumberParams } from 'sink-npm/pagination';

export class ItemsTypes extends APIResource {
  /**
   * Test case for paginated items of `unknown` types with page_number pagination
   */
  listUnknown(
    query?: ItemsTypeListUnknownParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemsTypeListUnknownResponsesPagePageNumber, ItemsTypeListUnknownResponse>;
  listUnknown(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemsTypeListUnknownResponsesPagePageNumber, ItemsTypeListUnknownResponse>;
  listUnknown(
    query: ItemsTypeListUnknownParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemsTypeListUnknownResponsesPagePageNumber, ItemsTypeListUnknownResponse> {
    if (isRequestOptions(query)) {
      return this.listUnknown({}, query);
    }
    return this._client.getAPIList(
      '/paginated/items_types/unknown',
      ItemsTypeListUnknownResponsesPagePageNumber,
      { query, ...options },
    );
  }
}

export class ItemsTypeListUnknownResponsesPagePageNumber extends PagePageNumber<ItemsTypeListUnknownResponse> {}

export type ItemsTypeListUnknownResponse = unknown;

export interface ItemsTypeListUnknownParams extends PagePageNumberParams {}

export namespace ItemsTypes {
  export import ItemsTypeListUnknownResponse = ItemsTypesAPI.ItemsTypeListUnknownResponse;
  export import ItemsTypeListUnknownResponsesPagePageNumber = ItemsTypesAPI.ItemsTypeListUnknownResponsesPagePageNumber;
  export import ItemsTypeListUnknownParams = ItemsTypesAPI.ItemsTypeListUnknownParams;
}
