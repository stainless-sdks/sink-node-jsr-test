// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Arrays extends APIResource {
  missingItems(options?: Core.RequestOptions): Promise<Core.APIResponse<ArrayMissingItemsResponse>> {
    return this.get('/invalid_schemas/arrays/missing_items', options);
  }
}

export interface ArrayMissingItemsResponse {
  array_prop: Array<unknown>;
}

export namespace Arrays {
  export import ArrayMissingItemsResponse = API.ArrayMissingItemsResponse;
}
