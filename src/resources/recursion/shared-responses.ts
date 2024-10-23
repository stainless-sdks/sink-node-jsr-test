// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class SharedResponses extends APIResource {
  createSelf(options?: Core.RequestOptions): Core.APIPromise<Shared.SharedSelfRecursion> {
    return this._client.post('/recursion/shared/responses/self', options);
  }
}
