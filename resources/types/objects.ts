// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Objects extends APIResource {
  /**
   * Endpoint with a response schema object that contains a mix of known & unknown
   * properties with the same value types.
   */
  mixedKnownAndUnknown(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ObjectMixedKnownAndUnknownResponse>> {
    return this.get('/types/object/mixed_known_and_unknown', options);
  }
}

export interface ObjectMixedKnownAndUnknownResponse {
  foo?: number;
  [k: string]: number;
}
