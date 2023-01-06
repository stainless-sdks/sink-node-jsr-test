// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Resources extends APIResource {
  /**
   * Endpoint returning no response
   */
  foo(options?: Core.RequestOptions): Promise<void> {
    return this.post('/no_response', { ...options, headers: { Accept: '', ...options?.headers } });
  }
}
