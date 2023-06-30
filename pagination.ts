// File generated from our OpenAPI spec by Stainless.

import { AbstractPage, APIResponse, APIClient, FinalRequestOptions, PageInfo } from './core';
import * as PaginationTests from './resources/pagination-tests';

export interface CardPageResponse<Item> {
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

export interface CardPageParams {
  /**
   * Page (for pagination).
   */
  page?: number;

  /**
   * Page size (for pagination).
   */
  page_size?: number;
}

/**
 * Test description for card pages.
 */
export class CardPage<Item> extends AbstractPage<Item> implements CardPageResponse<Item> {
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

  constructor(
    client: APIClient,
    response: APIResponse<CardPageResponse<Item>>,
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
  nextPageParams(): Partial<CardPageParams> | null {
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

export interface MyConcretePageResponse {
  /**
   * The cursor for the next page
   */
  cursor: string | null;

  data: Array<PaginationTests.MyConcretePageItem>;
}

export interface MyConcretePageParams {
  my_cursor: string;

  limit?: number;
}

export class MyConcretePage
  extends AbstractPage<PaginationTests.MyConcretePageItem>
  implements MyConcretePageResponse
{
  data: Array<PaginationTests.MyConcretePageItem>;

  /**
   * The cursor for the next page
   */
  cursor: string | null;

  constructor(
    client: APIClient,
    response: APIResponse<MyConcretePageResponse>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.data = response.data;
    this.cursor = response.cursor;
  }

  getPaginatedItems(): PaginationTests.MyConcretePageItem[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<MyConcretePageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    if (!this.cursor) return null;

    return { params: { my_cursor: this.cursor } };
  }
}

export interface PagePageNumberResponse<Item> {
  data: Array<Item>;

  /**
   * The last page number
   */
  last_page: number;

  /**
   * The page number
   */
  page: number;
}

export interface PagePageNumberParams {
  page?: number;

  page_size?: number;
}

export class PagePageNumber<Item> extends AbstractPage<Item> implements PagePageNumberResponse<Item> {
  data: Array<Item>;

  /**
   * The last page number
   */
  last_page: number;

  /**
   * The page number
   */
  page: number;

  constructor(
    client: APIClient,
    response: APIResponse<PagePageNumberResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.data = response.data;
    this.last_page = response.last_page;
    this.page = response.page;
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PagePageNumberParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const currentPage = this.page;
    if (currentPage >= this.last_page) return null;

    return { params: { page: currentPage + 1 } };
  }
}

export interface PageCursorResponse<Item> {
  /**
   * The cursor for the next page
   */
  cursor: string | null;

  data?: Array<Item>;
}

export interface PageCursorParams {
  cursor?: string | null;

  limit?: number;
}

export class PageCursor<Item> extends AbstractPage<Item> implements PageCursorResponse<Item> {
  /**
   * The cursor for the next page
   */
  cursor: string | null;

  data: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<PageCursorResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.cursor = response.cursor;
    this.data = response.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageCursorParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    if (!this.cursor) return null;

    return { params: { cursor: this.cursor } };
  }
}

export interface PageCursorURLResponse<Item> {
  /**
   * The URL for the next page
   */
  next_page: string;

  data?: Array<Item>;
}

export interface PageCursorURLParams {
  cursor?: string;

  limit?: number;
}

export class PageCursorURL<Item> extends AbstractPage<Item> implements PageCursorURLResponse<Item> {
  /**
   * The URL for the next page
   */
  next_page: string;

  data: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<PageCursorURLResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.next_page = response.next_page;
    this.data = response.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageCursorURLParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    if (!this.next_page) return null;
    return { url: new URL(this.next_page) };
  }
}

export interface PageOffsetResponse<Item> {
  /**
   * The total number of elements for the entire query (not just the given page)
   */
  count: number;

  /**
   * The current start index of the returned list of elements
   */
  offset: number;

  data?: Array<Item>;
}

export interface PageOffsetParams {
  limit?: number;

  offset?: number;
}

export class PageOffset<Item> extends AbstractPage<Item> implements PageOffsetResponse<Item> {
  /**
   * The total number of elements for the entire query (not just the given page)
   */
  count: number;

  /**
   * The current start index of the returned list of elements
   */
  offset: number;

  data: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<PageOffsetResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.count = response.count;
    this.offset = response.offset;
    this.data = response.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageOffsetParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.offset;
    if (!offset) return null;

    const length = this.data.length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}

export interface PageHypermediaResponse<Item> {
  /**
   * Set of links associated with the page
   */
  links: Array<PageHypermediaResponse.Link>;

  data?: Array<Item>;
}

export namespace PageHypermediaResponse {
  /**
   * A link object
   */
  export interface Link {
    href: string;

    rel: string;
  }
}

export interface PageHypermediaParams {
  page?: number;
}

export class PageHypermedia<Item> extends AbstractPage<Item> implements PageHypermediaResponse<Item> {
  /**
   * Set of links associated with the page
   */
  links: Array<PageHypermediaResponse.Link>;

  data: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<PageHypermediaResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.links = response.links;
    this.data = response.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageHypermediaParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const nextLink = this.links.find((link) => link.rel === 'next');
    if (!nextLink) return null;

    const href = nextLink.href;
    if (!href) return null;
    return { url: new URL(href) };
  }
}

export interface PageHypermediaRawResponse<Item> {
  data: Array<Item>;
}

export interface PageHypermediaRawParams {
  page?: number;
}

export class PageHypermediaRaw<Item> extends AbstractPage<Item> implements PageHypermediaRawResponse<Item> {
  data: Array<Item>;

  next_page_link: string | null;

  constructor(
    client: APIClient,
    response: APIResponse<PageHypermediaRawResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.data = response.data;
    this.next_page_link = response.responseHeaders['nextpage'] || null;
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageHypermediaRawParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    if (!this.next_page_link) return null;

    const links: Record<string, string> = {};
    for (const match of this.next_page_link.matchAll(/<(?<url>[^,]*)>; rel="(?<rel>\w+)"/g)) {
      const { rel, url } = match.groups || {};
      if (!rel || !url) continue;
      links[rel] = url;
    }

    const nextUrl = links['next'];
    if (!nextUrl) return null;

    return { url: new URL(nextUrl) };
  }
}

export type FakePageResponse<Item> = Item[];

export interface FakePageParams {
  my_fake_page_param: string;
}

export class FakePage<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: APIResponse<FakePageResponse<Item>>,
    options: FinalRequestOptions,
  ) {
    super(client, response, options);

    this.items = response || [];
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
