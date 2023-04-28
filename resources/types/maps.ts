// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Shared from '~/resources/shared';

export class Maps extends APIResource {
  /**
   * Endpoint with a response schema object that contains properties that use
   * `additionalProperties` with a nullable items type.
   */
  nullableItems(options?: Core.RequestOptions): Promise<Core.APIResponse<MapNullableItemsResponse>> {
    return this.get('/types/map/nullable_items', options);
  }
}

export interface MapNullableItemsResponse {
  inline_primitive?: Record<string, number | null>;

  shared_model?: Record<string, Shared.ShippingAddress | null>;

  shared_model_that_uses_null_itself?: Record<string, Shared.Currency | null>;
}
