// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';

export class Resources extends APIResource {
  /**
   * Endpoint returning no response
   */
  foo(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/no_response', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
