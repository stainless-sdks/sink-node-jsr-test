// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class TestingResource extends APIResource {
  /**
   * Top level endpoint
   */
  root(options?: Core.RequestOptions): Promise<Core.APIResponse<TestingRootResponse>> {
    return this.get('/', options);
  }
}

export interface TestingRootResponse {
  message: string;
}
