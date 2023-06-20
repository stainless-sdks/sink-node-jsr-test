// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { PageCursor, PageCursorParams } from '~/pagination';

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

export interface EEOC {
  foo?: string;
}

export interface EEOCListParams extends PageCursorParams {}

export namespace EEOCResource {
  export import EEOC = API.EEOC;
  export import EEOCsPageCursor = API.EEOCsPageCursor;
  export import EEOCListParams = API.EEOCListParams;
}
