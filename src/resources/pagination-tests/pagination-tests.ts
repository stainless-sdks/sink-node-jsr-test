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
  export import SchemaTypeAllofsParams = SchemaTypesAPI.SchemaTypeAllofsParams;
  export import SchemaTypeUnionsParams = SchemaTypesAPI.SchemaTypeUnionsParams;
  export import ItemsTypes = ItemsTypesAPI.ItemsTypes;
  export import ItemsTypeListUnknownResponse = ItemsTypesAPI.ItemsTypeListUnknownResponse;
  export import ItemsTypeListUnknownResponsesPagePageNumber = ItemsTypesAPI.ItemsTypeListUnknownResponsesPagePageNumber;
  export import ItemsTypeListUnknownParams = ItemsTypesAPI.ItemsTypeListUnknownParams;
  export import PageNumber = PageNumberAPI.PageNumber;
  export import PageNumberListParams = PageNumberAPI.PageNumberListParams;
  export import PageNumberListWithoutCurrentPageResponseParams = PageNumberAPI.PageNumberListWithoutCurrentPageResponseParams;
  export import PageNumberWithoutCurrentPageResponse = PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponse;
  export import PageNumberWithoutCurrentPageResponseListParams = PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponseListParams;
  export import PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams = PageNumberWithoutCurrentPageResponseAPI.PageNumberWithoutCurrentPageResponseListWithoutCurrentPageResponseParams;
  export import Refs = RefsAPI.Refs;
  export import RefNestedObjectRefParams = RefsAPI.RefNestedObjectRefParams;
  export import RefWithSharedModelRefParams = RefsAPI.RefWithSharedModelRefParams;
  export import ResponseHeaders = ResponseHeadersAPI.ResponseHeaders;
  export import ResponseHeaderBasicCursorParams = ResponseHeadersAPI.ResponseHeaderBasicCursorParams;
  export import TopLevelArrays = TopLevelArraysAPI.TopLevelArrays;
  export import TopLevelArrayBasicCursorParams = TopLevelArraysAPI.TopLevelArrayBasicCursorParams;
  export import Cursor = CursorAPI.Cursor;
  export import CursorListParams = CursorAPI.CursorListParams;
  export import Offset = OffsetAPI.Offset;
  export import OffsetListParams = OffsetAPI.OffsetListParams;
  export import OffsetListNoStartFieldParams = OffsetAPI.OffsetListNoStartFieldParams;
  export import OffsetWithTotalCountParams = OffsetAPI.OffsetWithTotalCountParams;
  export import FakePages = FakePagesAPI.FakePages;
  export import FakePageListParams = FakePagesAPI.FakePageListParams;
  export import NestedItems = NestedItemsAPI.NestedItems;
  export import NestedItemListParams = NestedItemsAPI.NestedItemListParams;
}
