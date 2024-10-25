// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CursorAPI from './cursor';
import * as FakePagesAPI from './fake-pages';
import * as ItemsTypesAPI from './items-types';
import * as NestedItemsAPI from './nested-items';
import * as OffsetAPI from './offset';
import * as PageNumberAPI from './page-number';
import * as PageNumberWithoutCurrentPageResponseAPI from './page-number-without-current-page-response';
import * as RefsAPI from './refs';
import * as ResponseHeadersAPI from './response-headers';
import * as SchemaTypesAPI from './schema-types';
import * as TopLevelArraysAPI from './top-level-arrays';

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

export namespace PaginationTests {
  export import SchemaTypes = SchemaTypesAPI.SchemaTypes;
  export type SchemaTypeAllofsParams = SchemaTypesAPI.SchemaTypeAllofsParams;
  export type SchemaTypeUnionsParams = SchemaTypesAPI.SchemaTypeUnionsParams;
  export import ItemsTypes = ItemsTypesAPI.ItemsTypes;
  export type ItemsTypeListUnknownResponse = ItemsTypesAPI.ItemsTypeListUnknownResponse;
  export import ItemsTypeListUnknownResponsesPagePageNumber = ItemsTypesAPI.ItemsTypeListUnknownResponsesPagePageNumber;
  export type ItemsTypeListUnknownParams = ItemsTypesAPI.ItemsTypeListUnknownParams;
  export import PageNumber = PageNumberAPI.PageNumber;
  export type PageNumberListParams = PageNumberAPI.PageNumberListParams;
  export type PageNumberListWithoutCurrentPageResponseParams =
    PageNumberAPI.PageNumberListWithoutCurrentPageResponseParams;
  export import PageNumberWithoutCurrentPageResponse = PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponse;
  export type PageNumberWithoutCurrentPageResponseListParams =
    PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponseListParams;
  export type PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams =
    PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams;
  export import Refs = RefsAPI.Refs;
  export type RefNestedObjectRefParams = RefsAPI.RefNestedObjectRefParams;
  export type RefWithSharedModelRefParams = RefsAPI.RefWithSharedModelRefParams;
  export import ResponseHeaders = ResponseHeadersAPI.ResponseHeaders;
  export type ResponseHeaderBasicCursorParams = ResponseHeadersAPI.ResponseHeaderBasicCursorParams;
  export import TopLevelArrays = TopLevelArraysAPI.TopLevelArrays;
  export type TopLevelArrayBasicCursorParams = TopLevelArraysAPI.TopLevelArrayBasicCursorParams;
  export import Cursor = CursorAPI.Cursor;
  export type CursorListParams = CursorAPI.CursorListParams;
  export type CursorListReverseParams = CursorAPI.CursorListReverseParams;
  export import Offset = OffsetAPI.Offset;
  export type OffsetListParams = OffsetAPI.OffsetListParams;
  export type OffsetListNoStartFieldParams = OffsetAPI.OffsetListNoStartFieldParams;
  export type OffsetWithTotalCountParams = OffsetAPI.OffsetWithTotalCountParams;
  export import FakePages = FakePagesAPI.FakePages;
  export type FakePageListParams = FakePagesAPI.FakePageListParams;
  export import NestedItems = NestedItemsAPI.NestedItems;
  export type NestedItemListParams = NestedItemsAPI.NestedItemListParams;
}
