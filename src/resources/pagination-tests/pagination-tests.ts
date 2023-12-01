// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as CursorAPI from 'sink-npm/resources/pagination-tests/cursor';

export class PaginationTests extends APIResource {
  cursor: CursorAPI.Cursor = new CursorAPI.Cursor(this._client);
}

export namespace PaginationTests {
  export import Cursor = CursorAPI.Cursor;
  export import CursorListParams = CursorAPI.CursorListParams;
}
