// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';

export class Resources extends APIResource {
  /**
   * Endpoint returning no response
   */
  foo(options?: Core.RequestOptions): Promise<Core.APIResponse<void>> {
    return this.post('/no_response', { ...options, headers: { Accept: '', ...options?.headers } });
  }
}
