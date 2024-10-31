// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CursorAPI from './cursor';
import { Cursor, CursorListParams, CursorListReverseParams } from './cursor';
import * as FakePagesAPI from './fake-pages';
import { FakePageListParams, FakePages } from './fake-pages';
import * as ItemsTypesAPI from './items-types';
import {
  ItemsTypeListUnknownParams,
  ItemsTypeListUnknownResponse,
  ItemsTypeListUnknownResponsesPagePageNumber,
  ItemsTypes,
} from './items-types';
import * as NestedItemsAPI from './nested-items';
import { NestedItemListParams, NestedItems } from './nested-items';
import * as OffsetAPI from './offset';
import { Offset, OffsetListNoStartFieldParams, OffsetListParams, OffsetWithTotalCountParams } from './offset';
import * as PageNumberAPI from './page-number';
import {
  PageNumber,
  PageNumberListParams,
  PageNumberListWithoutCurrentPageResponseParams,
} from './page-number';
import * as PageNumberWithoutCurrentPageResponseAPI from './page-number-without-current-page-response';
import {
  PageNumberWithoutCurrentPageResponse,
  PageNumberWithoutCurrentPageResponseListParams,
  PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams,
} from './page-number-without-current-page-response';
import * as RefsAPI from './refs';
import { RefNestedObjectRefParams, RefWithSharedModelRefParams, Refs } from './refs';
import * as ResponseHeadersAPI from './response-headers';
import { ResponseHeaderBasicCursorParams, ResponseHeaders } from './response-headers';
import * as SchemaTypesAPI from './schema-types';
import { SchemaTypeAllofsParams, SchemaTypeUnionsParams, SchemaTypes } from './schema-types';
import * as TopLevelArraysAPI from './top-level-arrays';
import { TopLevelArrayBasicCursorParams, TopLevelArrays } from './top-level-arrays';

export class PaginationTests extends APIResource {
  schemaTypes: SchemaTypesAPI.SchemaTypes = new SchemaTypesAPI.SchemaTypes(this._client);
  itemsTypes: ItemsTypesAPI.ItemsTypes = new ItemsTypesAPI.ItemsTypes(this._client);
  pageNumber: PageNumberAPI.PageNumber = new PageNumberAPI.PageNumber(this._client);
  pageNumberWithoutCurrentPageResponse: PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponse =
    new PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponse(this._client);
  refs: RefsAPI.Refs = new RefsAPI.Refs(this._client);
  responseHeaders: ResponseHeadersAPI.ResponseHeaders = new ResponseHeadersAPI.ResponseHeaders(this._client);
  topLevelArrays: TopLevelArraysAPI.TopLevelArrays = new TopLevelArraysAPI.TopLevelArrays(this._client);
  cursor: CursorAPI.Cursor = new CursorAPI.Cursor(this._client);
  offset: OffsetAPI.Offset = new OffsetAPI.Offset(this._client);
  fakePages: FakePagesAPI.FakePages = new FakePagesAPI.FakePages(this._client);
  nestedItems: NestedItemsAPI.NestedItems = new NestedItemsAPI.NestedItems(this._client);
}

PaginationTests.SchemaTypes = SchemaTypes;
PaginationTests.ItemsTypes = ItemsTypes;
PaginationTests.ItemsTypeListUnknownResponsesPagePageNumber = ItemsTypeListUnknownResponsesPagePageNumber;
PaginationTests.PageNumber = PageNumber;
PaginationTests.PageNumberWithoutCurrentPageResponse = PageNumberWithoutCurrentPageResponse;
PaginationTests.Refs = Refs;
PaginationTests.ResponseHeaders = ResponseHeaders;
PaginationTests.TopLevelArrays = TopLevelArrays;
PaginationTests.Cursor = Cursor;
PaginationTests.Offset = Offset;
PaginationTests.FakePages = FakePages;
PaginationTests.NestedItems = NestedItems;

export declare namespace PaginationTests {
  export {
    SchemaTypes as SchemaTypes,
    type SchemaTypeAllofsParams as SchemaTypeAllofsParams,
    type SchemaTypeUnionsParams as SchemaTypeUnionsParams,
  };

  export {
    ItemsTypes as ItemsTypes,
    type ItemsTypeListUnknownResponse as ItemsTypeListUnknownResponse,
    ItemsTypeListUnknownResponsesPagePageNumber as ItemsTypeListUnknownResponsesPagePageNumber,
    type ItemsTypeListUnknownParams as ItemsTypeListUnknownParams,
  };

  export {
    PageNumber as PageNumber,
    type PageNumberListParams as PageNumberListParams,
    type PageNumberListWithoutCurrentPageResponseParams as PageNumberListWithoutCurrentPageResponseParams,
  };

  export {
    PageNumberWithoutCurrentPageResponse as PageNumberWithoutCurrentPageResponse,
    type PageNumberWithoutCurrentPageResponseListParams as PageNumberWithoutCurrentPageResponseListParams,
    type PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams as PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams,
  };

  export {
    Refs as Refs,
    type RefNestedObjectRefParams as RefNestedObjectRefParams,
    type RefWithSharedModelRefParams as RefWithSharedModelRefParams,
  };

  export {
    ResponseHeaders as ResponseHeaders,
    type ResponseHeaderBasicCursorParams as ResponseHeaderBasicCursorParams,
  };

  export {
    TopLevelArrays as TopLevelArrays,
    type TopLevelArrayBasicCursorParams as TopLevelArrayBasicCursorParams,
  };

  export {
    Cursor as Cursor,
    type CursorListParams as CursorListParams,
    type CursorListReverseParams as CursorListReverseParams,
  };

  export {
    Offset as Offset,
    type OffsetListParams as OffsetListParams,
    type OffsetListNoStartFieldParams as OffsetListNoStartFieldParams,
    type OffsetWithTotalCountParams as OffsetWithTotalCountParams,
  };

  export { FakePages as FakePages, type FakePageListParams as FakePageListParams };

  export { NestedItems as NestedItems, type NestedItemListParams as NestedItemListParams };
}
