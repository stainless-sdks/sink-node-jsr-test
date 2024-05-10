// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ChildAPI from 'sink-npm/resources/parent/child';

/**
 * Some children can be very large
 * For example, the children of Godzilla
 */
export class Child extends APIResource {
  /**
   * Method with inlined response model.
   */
  inlinedResponse(options?: Core.RequestOptions): Core.APIPromise<ChildInlinedResponseResponse> {
    return this._client.get('/inlined_response', options);
  }
}

export interface ChildInlinedResponseResponse {
  foo: number;
}

export namespace Child {
  export import ChildInlinedResponseResponse = ChildAPI.ChildInlinedResponseResponse;
}
