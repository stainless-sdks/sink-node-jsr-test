// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Tests extends APIResource {
  /**
   * Testing codegen change with new Github action
   */
  runCodegen(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/tests/run_codegen', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
