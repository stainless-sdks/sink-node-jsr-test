// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class SkipThisResource extends APIResource {
  /**
   * Nested method that should never render because its parent resource is skipped.
   */
  iNeverAppear(options?: Core.RequestOptions): Core.APIPromise<SkipThisResourceINeverAppearResponse> {
    return this._client.get('/decorator_tests/nested/i/never/appear', options);
  }
}

export interface SkipThisResourceINeverAppearResponse {
  foo: string;
}

export declare namespace SkipThisResource {
  export { type SkipThisResourceINeverAppearResponse as SkipThisResourceINeverAppearResponse };
}
