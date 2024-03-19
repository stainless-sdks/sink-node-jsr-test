// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';

export class Resources extends APIResource {
  /**
   * Endpoint returning no response
   */
  foo(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/no_response', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
