// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { type Response as FetchResponse } from '../../../_shims/index';

/**
 * The `Response` class name can cause clashes with imports.
 */
export class Response extends APIResource {
  /**
   * Return a binary response.
   */
  binaryReturn(options?: Core.RequestOptions): Core.APIPromise<FetchResponse> {
    return this._client.get('/binaries/return_binary', { ...options, __binaryResponse: true });
  }
}
