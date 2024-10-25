// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SkipThisResourceAPI from './skip-this-resource';

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

export namespace SkipThisResource {
  export import SkipThisResourceINeverAppearResponse = SkipThisResourceAPI.SkipThisResourceINeverAppearResponse;
}
