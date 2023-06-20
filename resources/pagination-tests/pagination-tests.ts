// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { Concrete } from './concrete';
import { PageNumber } from './page-number';
import { Cursor } from './cursor';
import { CursorURL } from './cursor-url';
import { Offset } from './offset';
import { FakePages } from './fake-pages';
import { Hypermedia } from './hypermedia';
import { HypermediaRaw } from './hypermedia-raw';
import * as API from './';

export class PaginationTests extends APIResource {
  concrete: Concrete = new Concrete(this.client);
  pageNumber: PageNumber = new PageNumber(this.client);
  cursor: Cursor = new Cursor(this.client);
  cursorURL: CursorURL = new CursorURL(this.client);
  offset: Offset = new Offset(this.client);
  fakePages: FakePages = new FakePages(this.client);
  hypermedia: Hypermedia = new Hypermedia(this.client);
  hypermediaRaw: HypermediaRaw = new HypermediaRaw(this.client);
}

export namespace PaginationTests {
  export import Concrete = API.Concrete;
  export import MyConcretePageItem = API.MyConcretePageItem;
  export import ConcreteListParams = API.ConcreteListParams;

  export import PageNumber = API.PageNumber;
  export import PageNumberListParams = API.PageNumberListParams;

  export import Cursor = API.Cursor;
  export import CursorListParams = API.CursorListParams;

  export import CursorURL = API.CursorURL;
  export import CursorURLListParams = API.CursorURLListParams;

  export import Offset = API.Offset;
  export import OffsetListParams = API.OffsetListParams;

  export import FakePages = API.FakePages;
  export import FakePageListParams = API.FakePageListParams;

  export import Hypermedia = API.Hypermedia;
  export import HypermediaListParams = API.HypermediaListParams;

  export import HypermediaRaw = API.HypermediaRaw;
  export import HypermediaRawListParams = API.HypermediaRawListParams;
}
