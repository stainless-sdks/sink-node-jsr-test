// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Tests extends APIResource {
  /**
   * Testing codegen change with new Github action
   */
  runCodegen(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
    return this.get('/tests/run_codegen', { ...options, headers: { Accept: '', ...options?.headers } });
  }
}
