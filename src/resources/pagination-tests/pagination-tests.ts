// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as ConcreteAPI from 'sink-npm/resources/pagination-tests/concrete';
import * as CursorAPI from 'sink-npm/resources/pagination-tests/cursor';
import * as CursorURLAPI from 'sink-npm/resources/pagination-tests/cursor-url';
import * as FakePagesAPI from 'sink-npm/resources/pagination-tests/fake-pages';
import * as HypermediaAPI from 'sink-npm/resources/pagination-tests/hypermedia';
import * as HypermediaRawAPI from 'sink-npm/resources/pagination-tests/hypermedia-raw';
import * as OffsetAPI from 'sink-npm/resources/pagination-tests/offset';
import * as PageNumberAPI from 'sink-npm/resources/pagination-tests/page-number';

export class PaginationTests extends APIResource {
  concrete: ConcreteAPI.Concrete = new ConcreteAPI.Concrete(this.client);
  pageNumber: PageNumberAPI.PageNumber = new PageNumberAPI.PageNumber(this.client);
  cursor: CursorAPI.Cursor = new CursorAPI.Cursor(this.client);
  cursorURL: CursorURLAPI.CursorURL = new CursorURLAPI.CursorURL(this.client);
  offset: OffsetAPI.Offset = new OffsetAPI.Offset(this.client);
  fakePages: FakePagesAPI.FakePages = new FakePagesAPI.FakePages(this.client);
  hypermedia: HypermediaAPI.Hypermedia = new HypermediaAPI.Hypermedia(this.client);
  hypermediaRaw: HypermediaRawAPI.HypermediaRaw = new HypermediaRawAPI.HypermediaRaw(this.client);
}

export namespace PaginationTests {
  export import Concrete = ConcreteAPI.Concrete;
  export type MyConcretePageItem = ConcreteAPI.MyConcretePageItem;
  export type ConcreteListParams = ConcreteAPI.ConcreteListParams;
  export import PageNumber = PageNumberAPI.PageNumber;
  export type PageNumberListParams = PageNumberAPI.PageNumberListParams;
  export import Cursor = CursorAPI.Cursor;
  export type CursorListParams = CursorAPI.CursorListParams;
  export type CursorListNestedResponsePropParams = CursorAPI.CursorListNestedResponsePropParams;
  export import CursorURL = CursorURLAPI.CursorURL;
  export type CursorURLListParams = CursorURLAPI.CursorURLListParams;
  export import Offset = OffsetAPI.Offset;
  export type OffsetListParams = OffsetAPI.OffsetListParams;
  export import FakePages = FakePagesAPI.FakePages;
  export type FakePageListParams = FakePagesAPI.FakePageListParams;
  export import Hypermedia = HypermediaAPI.Hypermedia;
  export type HypermediaListParams = HypermediaAPI.HypermediaListParams;
  export import HypermediaRaw = HypermediaRawAPI.HypermediaRaw;
  export type HypermediaRawListParams = HypermediaRawAPI.HypermediaRawListParams;
}
