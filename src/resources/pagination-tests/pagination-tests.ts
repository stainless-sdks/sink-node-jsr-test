// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as ConcreteAPI from 'sink-npm/resources/pagination-tests/concrete';
import * as CursorAPI from 'sink-npm/resources/pagination-tests/cursor';
import * as CursorURLAPI from 'sink-npm/resources/pagination-tests/cursor-url';
import * as ExtraParamsAndFieldsAPI from 'sink-npm/resources/pagination-tests/extra-params-and-fields';
import * as FakePagesAPI from 'sink-npm/resources/pagination-tests/fake-pages';
import * as HypermediaAPI from 'sink-npm/resources/pagination-tests/hypermedia';
import * as HypermediaRawAPI from 'sink-npm/resources/pagination-tests/hypermedia-raw';
import * as OffsetAPI from 'sink-npm/resources/pagination-tests/offset';
import * as PageNumberAPI from 'sink-npm/resources/pagination-tests/page-number';

export class PaginationTests extends APIResource {
  concrete: ConcreteAPI.Concrete = new ConcreteAPI.Concrete(this._client);
  pageNumber: PageNumberAPI.PageNumber = new PageNumberAPI.PageNumber(this._client);
  cursor: CursorAPI.Cursor = new CursorAPI.Cursor(this._client);
  cursorURL: CursorURLAPI.CursorURL = new CursorURLAPI.CursorURL(this._client);
  offset: OffsetAPI.Offset = new OffsetAPI.Offset(this._client);
  fakePages: FakePagesAPI.FakePages = new FakePagesAPI.FakePages(this._client);
  hypermedia: HypermediaAPI.Hypermedia = new HypermediaAPI.Hypermedia(this._client);
  extraParamsAndFields: ExtraParamsAndFieldsAPI.ExtraParamsAndFields =
    new ExtraParamsAndFieldsAPI.ExtraParamsAndFields(this._client);
  hypermediaRaw: HypermediaRawAPI.HypermediaRaw = new HypermediaRawAPI.HypermediaRaw(this._client);
}

export namespace PaginationTests {
  export import Concrete = ConcreteAPI.Concrete;
  export import MyConcretePageItem = ConcreteAPI.MyConcretePageItem;
  export import ConcreteListParams = ConcreteAPI.ConcreteListParams;
  export import ConcreteListExtraParamsAndFieldsParams = ConcreteAPI.ConcreteListExtraParamsAndFieldsParams;
  export import PageNumber = PageNumberAPI.PageNumber;
  export import PageNumberListParams = PageNumberAPI.PageNumberListParams;
  export import Cursor = CursorAPI.Cursor;
  export import CursorListParams = CursorAPI.CursorListParams;
  export import CursorListNestedResponsePropParams = CursorAPI.CursorListNestedResponsePropParams;
  export import CursorURL = CursorURLAPI.CursorURL;
  export import CursorURLListParams = CursorURLAPI.CursorURLListParams;
  export import Offset = OffsetAPI.Offset;
  export import OffsetListParams = OffsetAPI.OffsetListParams;
  export import FakePages = FakePagesAPI.FakePages;
  export import FakePageListParams = FakePagesAPI.FakePageListParams;
  export import Hypermedia = HypermediaAPI.Hypermedia;
  export import HypermediaListParams = HypermediaAPI.HypermediaListParams;
  export import ExtraParamsAndFields = ExtraParamsAndFieldsAPI.ExtraParamsAndFields;
  export import ExtraParamsAndFieldListParams = ExtraParamsAndFieldsAPI.ExtraParamsAndFieldListParams;
  export import HypermediaRaw = HypermediaRawAPI.HypermediaRaw;
  export import HypermediaRawListParams = HypermediaRawAPI.HypermediaRawListParams;
}
