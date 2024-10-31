// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { PageCursor, type PageCursorParams } from '../../pagination';

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

export interface EEOCListParams extends PageCursorParams {
  limit?: number;
}

EEOCResource.EEOCsPageCursor = EEOCsPageCursor;

export declare namespace EEOCResource {
  export { type EEOC as EEOC, EEOCsPageCursor as EEOCsPageCursor, type EEOCListParams as EEOCListParams };
}
