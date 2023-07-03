// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';

export class Tests extends APIResource {
  /**
   * Testing codegen change with new Github action
   */
  runCodegen(options?: Core.RequestOptions): Promise<Core.APIResponse<void>> {
    return this.get('/tests/run_codegen', { ...options, headers: { Accept: '', ...options?.headers } });
  }
}