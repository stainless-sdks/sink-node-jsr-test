// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import { isRequestOptions } from '~/core'
import { PageNumber } from './page-number'
import { Cursor } from './cursor'
import { CursorURL } from './cursor-url'
import { Offset } from './offset'
import { FakePages } from './fake-pages'
import { Hypermedia } from './hypermedia'
import { HypermediaRaw } from './hypermedia-raw'
import * as Shared from '~/resources/shared'

export class PaginationTests extends APIResource {
  pageNumber: PageNumber = new PageNumber(this.client);
  cursor: Cursor = new Cursor(this.client);
  cursorURL: CursorURL = new CursorURL(this.client);
  offset: Offset = new Offset(this.client);
  fakePages: FakePages = new FakePages(this.client);
  hypermedia: Hypermedia = new Hypermedia(this.client);
  hypermediaRaw: HypermediaRaw = new HypermediaRaw(this.client);

}