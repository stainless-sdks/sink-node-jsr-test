// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MapsAPI from './maps';
import * as Shared from '../shared';

export class Maps extends APIResource {
  /**
   * Endpoint with a response schema object that contains properties that use
   * `additionalProperties` with a nullable items type.
   */
  nullableItems(options?: Core.RequestOptions): Core.APIPromise<MapNullableItemsResponse> {
    return this._client.get('/types/map/nullable_items', options);
  }
}

export interface MapNullableItemsResponse {
  inline_primitive?: Record<string, number | null>;

  shared_model?: Record<string, Shared.ShippingAddress | null>;

  shared_model_that_uses_null_itself?: Record<string, Shared.Currency | null>;
}

export namespace Maps {
  export import MapNullableItemsResponse = MapsAPI.MapNullableItemsResponse;
}
