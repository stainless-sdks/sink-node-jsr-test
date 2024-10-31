// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class KeepThisResource extends APIResource {
  /**
   * Nested method that should render because it is not skipped nor are its
   * ancestors.
   */
  keepThisMethod(options?: Core.RequestOptions): Core.APIPromise<KeepThisResourceKeepThisMethodResponse> {
    return this._client.get('/decorator_tests/nested/keep/this/method', options);
  }
}

export interface KeepThisResourceKeepThisMethodResponse {
  foo: string;
}

export declare namespace KeepThisResource {
  export { type KeepThisResourceKeepThisMethodResponse as KeepThisResourceKeepThisMethodResponse };
}
