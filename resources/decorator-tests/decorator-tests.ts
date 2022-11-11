// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { KeepThisResourceResource } from './keep-this-resource';

export class DecoratorTests extends APIResource {
  keepThisResource: KeepThisResourceResource = new KeepThisResourceResource(this.client);

  /**
   * Top-level method that should not be skipped.
   */
  keepMe(options?: Core.RequestOptions): Promise<Core.APIResponse<DecoratorTestKeepMeResponse>> {
    return this.get('/decorator_tests/keep/me', options);
  }
}

export interface DecoratorTestKeepMeResponse {
  foo?: string;
}
