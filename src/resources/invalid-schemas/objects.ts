// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ObjectsAPI from './objects';

export class Objects extends APIResource {
  missingItems(options?: Core.RequestOptions): Core.APIPromise<ObjectMissingItemsResponse> {
    return this._client.get('/invalid_schemas/objects/property_missing_def', options);
  }
}

export interface ObjectMissingItemsResponse {
  any_prop: unknown;
}

export namespace Objects {
  export type ObjectMissingItemsResponse = ObjectsAPI.ObjectMissingItemsResponse;
}
