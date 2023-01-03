// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class ChildResource extends APIResource {
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
