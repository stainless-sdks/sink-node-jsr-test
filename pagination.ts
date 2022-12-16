// File generated from our OpenAPI spec by Stainless.
import { AbstractPage, APIResponse, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageNumberResponse<Item> {
  data: Array<Item>;

  /**
   * Page number.
   */
  page: number;

  /**
   * Total number of entries.
   */
  total_entries: number;

  /**
   * Total number of pages.
   */
  total_pages: number;
}

export interface PageNumberParams {
  /**
   * Page (for pagination).
   */
  page?: number;

  /**
   * Page size (for pagination).
   */
  page_size?: number;
}

export class PageNumber<Item> extends AbstractPage<Item> implements PageNumberResponse<Item> {
  data: Array<Item>;
  /** Page number. */
  page: number;
  /** Total number of entries. */
  total_entries: number;
  /** Total number of pages. */
  total_pages: number;

  constructor(
    client: APIClient,
    response: APIResponse<PageNumberResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.data = response.data;
    this.page = response.page;
    this.total_entries = response.total_entries;
    this.total_pages = response.total_pages;
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageNumberParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const currentPage = this.page;
    if (currentPage >= this.total_pages) return null;

    return { params: { page: currentPage + 1 } };
  }
}

export type MyFakePageResponse<Item> = Item[];

export class MyFakePage<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<MyFakePageResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.items = response;
  }

  getPaginatedItems(): Item[] {
    return this.items;
  }

  // @deprecated Please use `nextPageInfo()` instead
  /**
   * This page represents a response that isn't actually paginated at the API level
   * so there will never be any next page params.
   */
  nextPageParams(): null {
    return null;
  }

  nextPageInfo(): null {
    return null;
  }
}
