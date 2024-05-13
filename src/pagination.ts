// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';
import * as Shared from './resources/shared';

export interface PageCursorResponse<Item> {
  data: Array<Item>;

  cursor: string | null;
}

export interface PageCursorParams {
  cursor?: string;
}

export class PageCursor<Item> extends AbstractPage<Item> implements PageCursorResponse<Item> {
  data: Array<Item>;

  cursor: string | null;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.cursor = body.cursor || '';
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
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
    const cursor = this.cursor;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor,
      },
    };
  }
}

export interface PageCursorFromHeadersResponse<Item> {
  data: Array<Item>;
}

export interface PageCursorFromHeadersParams {
  cursor?: string;
}

export class PageCursorFromHeaders<Item>
  extends AbstractPage<Item>
  implements PageCursorFromHeadersResponse<Item>
{
  data: Array<Item>;

  my_cursor: string | null | null;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorFromHeadersResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.my_cursor = this.response.headers.get('x-my-cursor') ?? null;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageCursorFromHeadersParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.my_cursor;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor,
      },
    };
  }
}

export type PageCursorTopLevelArrayResponse<Item> = Item[];

export interface PageCursorTopLevelArrayParams {
  cursor?: string;
}

export class PageCursorTopLevelArray<Item> extends AbstractPage<Item> {
  data: Array<Item>;

  my_cursor: string | null | null;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorTopLevelArrayResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body || [];
    this.my_cursor = this.response.headers.get('x-my-cursor') ?? null;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageCursorTopLevelArrayParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.my_cursor;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor,
      },
    };
  }
}

export interface PageCursorSharedRefResponse<Item> {
  data: Array<Item>;

  pagination: Shared.PageCursorSharedRefPagination;
}

export interface PageCursorSharedRefParams {
  cursor?: string;
}

export class PageCursorSharedRef<Item>
  extends AbstractPage<Item>
  implements PageCursorSharedRefResponse<Item>
{
  data: Array<Item>;

  pagination: Shared.PageCursorSharedRefPagination;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorSharedRefResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageCursorSharedRefParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.pagination?.cursor;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor,
      },
    };
  }
}

export interface PageCursorNestedObjectRefResponse<Item> {
  data: Array<Item>;

  nested_object_cursor: string | null;

  object_prop: PageCursorNestedObjectRefResponse.ObjectProp;
}

export namespace PageCursorNestedObjectRefResponse {
  export interface ObjectProp {
    foo?: string;
  }
}

export interface PageCursorNestedObjectRefParams {
  cursor?: string;

  object_param?: PageCursorNestedObjectRefParams.ObjectParam;
}

export namespace PageCursorNestedObjectRefParams {
  export interface ObjectParam {
    foo?: string;
  }
}

export class PageCursorNestedObjectRef<Item>
  extends AbstractPage<Item>
  implements PageCursorNestedObjectRefResponse<Item>
{
  data: Array<Item>;

  nested_object_cursor: string | null;

  object_prop: PageCursorNestedObjectRefResponse.ObjectProp;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorNestedObjectRefResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.nested_object_cursor = body.nested_object_cursor || '';
    this.object_prop = body.object_prop || {};
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageCursorNestedObjectRefParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.nested_object_cursor;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor,
      },
    };
  }
}

export interface PageCursorNestedItemsResponse<Item> {
  data: PageCursorNestedItemsResponse.Data<Item>;

  cursor: string | null;

  object_prop: PageCursorNestedItemsResponse.ObjectProp;
}

export namespace PageCursorNestedItemsResponse {
  export interface Data<Item> {
    items?: Array<Item>;
  }

  export interface ObjectProp {
    foo?: string;
  }
}

export interface PageCursorNestedItemsParams {
  cursor?: string;
}

export class PageCursorNestedItems<Item>
  extends AbstractPage<Item>
  implements PageCursorNestedItemsResponse<Item>
{
  data: PageCursorNestedItemsResponse.Data<Item>;

  cursor: string | null;

  object_prop: PageCursorNestedItemsResponse.ObjectProp;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorNestedItemsResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || {};
    this.cursor = body.cursor || '';
    this.object_prop = body.object_prop || {};
  }

  getPaginatedItems(): Item[] {
    return this.data?.items ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageCursorNestedItemsParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.cursor;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor,
      },
    };
  }
}

export interface PagePageNumberResponse<Item> {
  data: Array<Item>;

  page: number;

  last_page: number;
}

export interface PagePageNumberParams {
  page?: number;

  page_size?: number;
}

export class PagePageNumber<Item> extends AbstractPage<Item> implements PagePageNumberResponse<Item> {
  data: Array<Item>;

  page: number;

  last_page: number;

  constructor(
    client: APIClient,
    response: Response,
    body: PagePageNumberResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.page = body.page || 0;
    this.last_page = body.last_page || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
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

    if (currentPage >= this.last_page) {
      return null;
    }

    return { params: { page: currentPage + 1 } };
  }
}

export interface PageOffsetTotalCountResponse<Item> {
  data: Array<Item>;

  total_count: number;

  offset: number;
}

export interface PageOffsetTotalCountParams {
  limit?: number;

  offset?: number;
}

export class PageOffsetTotalCount<Item>
  extends AbstractPage<Item>
  implements PageOffsetTotalCountResponse<Item>
{
  data: Array<Item>;

  total_count: number;

  offset: number;

  constructor(
    client: APIClient,
    response: Response,
    body: PageOffsetTotalCountResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.total_count = body.total_count || 0;
    this.offset = body.offset || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageOffsetTotalCountParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.offset;
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    const totalCount = this.total_count;
    if (!totalCount) {
      return null;
    }

    if (currentCount < totalCount) {
      return { params: { offset: currentCount } };
    }

    return null;
  }
}

export interface PageOffsetResponse<Item> {
  data: Array<Item>;

  offset: number;
}

export interface PageOffsetParams {
  limit?: number;

  offset?: number;
}

export class PageOffset<Item> extends AbstractPage<Item> implements PageOffsetResponse<Item> {
  data: Array<Item>;

  offset: number;

  constructor(
    client: APIClient,
    response: Response,
    body: PageOffsetResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.offset = body.offset || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
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
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}

export interface PageCursorURLResponse<Item> {
  data: Array<Item>;

  next_page: string;
}

export interface PageCursorURLParams {
  limit?: number;

  cursor?: string;
}

export class PageCursorURL<Item> extends AbstractPage<Item> implements PageCursorURLResponse<Item> {
  data: Array<Item>;

  next_page: string;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorURLResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.next_page = body.next_page || '';
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
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
    const url = this.next_page;
    if (!url) return null;

    return { url: new URL(url) };
  }
}

export interface PageCursorIDResponse<Item> {
  data: Array<Item>;
}

export interface PageCursorIDParams {
  next_id?: string;
}

export class PageCursorID<Item extends { id: string }>
  extends AbstractPage<Item>
  implements PageCursorIDResponse<Item>
{
  data: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorIDResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageCursorIDParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const data = this.getPaginatedItems();
    if (!data.length) {
      return null;
    }

    const id = data[data.length - 1]?.id;
    if (!id) {
      return null;
    }

    return { params: { next_id: id } };
  }
}

export type FakePageResponse<Item> = Item[];

export interface FakePageParams {
  my_fake_page_param?: string;
}

export class FakePage<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: FakePageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body || [];
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
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
