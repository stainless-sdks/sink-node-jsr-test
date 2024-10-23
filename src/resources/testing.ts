// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as TestingAPI from './testing';

export class Testing extends APIResource {
  root(options?: Core.RequestOptions): Core.APIPromise<RootResponse> {
    return this._client.get('/', options);
  }
}

export interface RootResponse {
  checkEscaping: 'And now, a set of characters that are likely to cause issues if not properly escaped:\n- quotes: " \' ` - slashes: / // /// \\ \\\\ \\\\\\ - others: \\n \\r \\t \\b \\f \\v \\x63 \\uFE63 \\U0000FE63 \\N{HYPHEN} \\1 \\12 \\123 \\1234 a \\a \\g \\* \\( \\& \\@ \\x2z \\u11z1 \\U1111z111 \\N{HYPHEN#} ${test} #{test}\n';

  message: string;
}

export namespace Testing {
  export import RootResponse = TestingAPI.RootResponse;
}
