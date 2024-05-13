// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as Shared from '../shared';

export class Languages extends APIResource {
  /**
   * Endpoint that returns a $ref to SimpleObject. This is used to test shared
   * response models.
   */
  skippedForPython(options?: Core.RequestOptions): Core.APIPromise<Shared.SimpleObject> {
    return this._client.get('/responses/shared_simple_object', options);
  }
}
