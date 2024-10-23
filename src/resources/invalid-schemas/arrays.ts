// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as ArraysAPI from './arrays';

export class Arrays extends APIResource {
  missingItems(options?: Core.RequestOptions): Core.APIPromise<ArrayMissingItemsResponse> {
    return this._client.get('/invalid_schemas/arrays/missing_items', options);
  }
}

export interface ArrayMissingItemsResponse {
  array_prop: Array<unknown>;
}

export namespace Arrays {
  export import ArrayMissingItemsResponse = ArraysAPI.ArrayMissingItemsResponse;
}
