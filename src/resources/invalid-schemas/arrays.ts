// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Arrays extends APIResource {
  missingItems(options?: Core.RequestOptions): Core.APIPromise<ArrayMissingItemsResponse> {
    return this._client.get('/invalid_schemas/arrays/missing_items', options);
  }
}

export interface ArrayMissingItemsResponse {
  array_prop: Array<unknown>;
}

export declare namespace Arrays {
  export { type ArrayMissingItemsResponse as ArrayMissingItemsResponse };
}
