// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as UndocumentedResourceAPI from 'sink-npm/resources/undocumented-resource';
import * as CardsAPI from 'sink-npm/resources/cards';
import * as Shared from 'sink-npm/resources/shared';

export class UndocumentedResource extends APIResource {
  /**
   * Initiate print and shipment of a duplicate card.
   *
   * Only applies to cards of type `PHYSICAL` [beta].
   */
  reissue(
    cardToken: string,
    body: UndocumentedResourceReissueParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardsAPI.Card> {
    return this._client.post(`/cards/${cardToken}/reissue`, { body, ...options });
  }
}

export interface UndocumentedResourceReissueParams {
  /**
   * Specifies the configuration (e.g. physical card art) that the card should be
   * manufactured with, and only applies to cards of type `PHYSICAL` [beta]. This
   * must be configured with Lithic before use.
   */
  product_id?: string;

  /**
   * Shipping method for the card. Use of options besides `STANDARD` require
   * additional permissions.
   *
   * - `STANDARD` - USPS regular mail or similar international option, with no
   *   tracking
   * - `STANDARD_WITH_TRACKING` - USPS regular mail or similar international option,
   *   with tracking
   * - `EXPEDITED` - FedEx Standard Overnight or similar international option, with
   *   tracking
   */
  shipping_method?: 'STANDARD' | 'STANDARD_WITH_TRACKING' | 'EXPEDITED';

  /**
   * If omitted, the previous shipping address will be used.
   */
  shippingAddress?: Shared.ShippingAddress;
}

export namespace UndocumentedResource {
  export import UndocumentedResourceReissueParams = UndocumentedResourceAPI.UndocumentedResourceReissueParams;
}
