// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as API from './index';
import { PageCursor, PageCursorParams } from 'sink-npm/pagination';

export class EEOCResource extends APIResource {
  /**
   * Test case for paginated initialism model
   */
  list(query?: EEOCListParams, options?: Core.RequestOptions): Core.PagePromise<EEOCsPageCursor>;
  list(options?: Core.RequestOptions): Core.PagePromise<EEOCsPageCursor>;
  list(
    query: EEOCListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EEOCsPageCursor> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/casing/eeoc', EEOCsPageCursor, { query, ...options });
  }
}

export class EEOCsPageCursor extends PageCursor<EEOC> {}
// alias so we can export it in the namespace
type _EEOCsPageCursor = EEOCsPageCursor;

export interface EEOC {
  foo?: string;
}

export interface EEOCListParams extends PageCursorParams {}

export namespace EEOCResource {
  export import EEOC = API.EEOC;
  export type EEOCsPageCursor = _EEOCsPageCursor;
  export import EEOCListParams = API.EEOCListParams;
}
