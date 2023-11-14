// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as EEOCAPI from 'sink-npm/resources/casing/eeoc';
import { PageCursor, type PageCursorParams } from 'sink-npm/pagination';

export class EEOCResource extends APIResource {
  /**
   * Test case for paginated initialism model
   */
  list(query?: EEOCListParams, options?: Core.RequestOptions): Core.PagePromise<EEOCsPageCursor, EEOC>;
  list(options?: Core.RequestOptions): Core.PagePromise<EEOCsPageCursor, EEOC>;
  list(
    query: EEOCListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EEOCsPageCursor, EEOC> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/casing/eeoc', EEOCsPageCursor, { query, ...options });
  }
}

export class EEOCsPageCursor extends PageCursor<EEOC> {}

export interface EEOC {
  foo?: string;
}

export interface EEOCListParams extends PageCursorParams {}

export namespace EEOCResource {
  export import EEOC = EEOCAPI.EEOC;
  export import EEOCsPageCursor = EEOCAPI.EEOCsPageCursor;
  export import EEOCListParams = EEOCAPI.EEOCListParams;
}
