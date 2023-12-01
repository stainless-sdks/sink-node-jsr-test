// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as EEOCAPI from 'sink-npm/resources/casing/eeoc';

export class EEOCResource extends APIResource {
  /**
   * Test case for paginated initialism model
   */
  list(query?: EEOCListParams, options?: Core.RequestOptions): Core.APIPromise<EEOC>;
  list(options?: Core.RequestOptions): Core.APIPromise<EEOC>;
  list(
    query: EEOCListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EEOC> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/casing/eeoc', { query, ...options });
  }
}

export interface EEOC {
  foo?: string;
}

export interface EEOCListParams {
  cursor?: string;

  limit?: number;
}

export namespace EEOCResource {
  export import EEOC = EEOCAPI.EEOC;
  export import EEOCListParams = EEOCAPI.EEOCListParams;
}
