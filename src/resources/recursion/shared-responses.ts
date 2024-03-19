// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as Shared from 'sink-npm/resources/shared';

export class SharedResponses extends APIResource {
  createSelf(options?: Core.RequestOptions): Core.APIPromise<Shared.SharedSelfRecursion> {
    return this._client.post('/recursion/shared/responses/self', options);
  }
}
