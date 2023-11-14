// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ObjectsAPI from 'sink-npm/resources/invalid-schemas/objects';

export class Objects extends APIResource {
  missingItems(options?: Core.RequestOptions): Core.APIPromise<ObjectMissingItemsResponse> {
    return this._client.get('/invalid_schemas/objects/property_missing_def', options);
  }
}

export interface ObjectMissingItemsResponse {
  any_prop: unknown;
}

export namespace Objects {
  export import ObjectMissingItemsResponse = ObjectsAPI.ObjectMissingItemsResponse;
}
