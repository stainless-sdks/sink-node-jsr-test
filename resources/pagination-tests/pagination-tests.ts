// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { PageNumber } from './page-number';
import { Cursor } from './cursor';
import { CursorURL } from './cursor-url';
import { Offset } from './offset';
import { FakePages } from './fake-pages';
import { Hypermedia } from './hypermedia';
import { HypermediaRaw } from './hypermedia-raw';

export class PaginationTests extends APIResource {
  pageNumber: PageNumber = new PageNumber(this.client);
  cursor: Cursor = new Cursor(this.client);
  cursorURL: CursorURL = new CursorURL(this.client);
  offset: Offset = new Offset(this.client);
  fakePages: FakePages = new FakePages(this.client);
  hypermedia: Hypermedia = new Hypermedia(this.client);
  hypermediaRaw: HypermediaRaw = new HypermediaRaw(this.client);
}
