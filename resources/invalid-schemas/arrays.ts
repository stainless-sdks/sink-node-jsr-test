// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Arrays extends APIResource {
  missingItems(options?: Core.RequestOptions): Promise<Core.APIResponse<ArrayMissingItemsResponse>> {
    return this.get('/invalid_schemas/arrays/missing_items', options);
  }
}

export interface ArrayMissingItemsResponse {
  array_prop: Array<unknown>;
}
