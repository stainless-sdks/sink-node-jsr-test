// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';

export class KeepThisResource extends APIResource {
  /**
   * Nested method that should render because it is not skipped nor are its
   * ancestors.
   */
  keepThisMethod(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<KeepThisResourceKeepThisMethodResponse>> {
    return this.get('/decorator_tests/nested/keep/this/method', options);
  }
}

export interface KeepThisResourceKeepThisMethodResponse {
  foo: string;
}

export namespace KeepThisResource {
  export import KeepThisResourceKeepThisMethodResponse = API.KeepThisResourceKeepThisMethodResponse;
}
