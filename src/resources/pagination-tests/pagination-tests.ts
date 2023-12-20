// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as CursorAPI from 'sink-npm/resources/pagination-tests/cursor';
import * as FakePagesAPI from 'sink-npm/resources/pagination-tests/fake-pages';
import * as OffsetAPI from 'sink-npm/resources/pagination-tests/offset';
import * as PageNumberAPI from 'sink-npm/resources/pagination-tests/page-number';
import * as RefsAPI from 'sink-npm/resources/pagination-tests/refs';
import * as ResponseHeadersAPI from 'sink-npm/resources/pagination-tests/response-headers';
import * as TopLevelArraysAPI from 'sink-npm/resources/pagination-tests/top-level-arrays';

export class PaginationTests extends APIResource {
  pageNumber: PageNumberAPI.PageNumber = new PageNumberAPI.PageNumber(this._client);
  refs: RefsAPI.Refs = new RefsAPI.Refs(this._client);
  responseHeaders: ResponseHeadersAPI.ResponseHeaders = new ResponseHeadersAPI.ResponseHeaders(this._client);
  topLevelArrays: TopLevelArraysAPI.TopLevelArrays = new TopLevelArraysAPI.TopLevelArrays(this._client);
  cursor: CursorAPI.Cursor = new CursorAPI.Cursor(this._client);
  offset: OffsetAPI.Offset = new OffsetAPI.Offset(this._client);
  fakePages: FakePagesAPI.FakePages = new FakePagesAPI.FakePages(this._client);
}

export namespace PaginationTests {
  export import PageNumber = PageNumberAPI.PageNumber;
  export import PageNumberListParams = PageNumberAPI.PageNumberListParams;
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
  export import OffsetWithTotalCountParams = OffsetAPI.OffsetWithTotalCountParams;
  export import FakePages = FakePagesAPI.FakePages;
  export import FakePageListParams = FakePagesAPI.FakePageListParams;
}
