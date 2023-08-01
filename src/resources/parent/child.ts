// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Child extends APIResource {
  /**
   * Method with inlined response model.
   */
  inlinedResponse(options?: Core.RequestOptions): Promise<Core.APIResponse<ChildInlinedResponseResponse>> {
    return this.get('/inlined_response', options);
  }
}

export interface ChildInlinedResponseResponse {
  foo: number;
}

export namespace Child {
  export import ChildInlinedResponseResponse = API.ChildInlinedResponseResponse;
}
