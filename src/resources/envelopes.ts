// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Envelopes extends APIResource {
  /**
   * Endpoint with a response wrapped within a `data` property.
   */
  explicit(options?: Core.RequestOptions): Core.APIPromise<Address> {
    return (this.get('/envelopes/data', options) as Core.APIPromise<{ data: Address }>)._thenUnwrap(
      (obj) => obj.data,
    );
  }

  /**
   * Endpoint with a response wrapped within a `items` property.
   */
  implicit(options?: Core.RequestOptions): Core.APIPromise<Address> {
    return (this.get('/envelopes/items', options) as Core.APIPromise<{ items: Address }>)._thenUnwrap(
      (obj) => obj.items,
    );
  }

  /**
   * Endpoint with a response wrapped within a `items` property that doesn't use a
   * $ref.
   */
  inlineResponse(options?: Core.RequestOptions): Core.APIPromise<EnvelopeInlineResponseResponse> {
    return (
      this.get('/envelopes/items/inline_response', options) as Core.APIPromise<{
        items: EnvelopeInlineResponseResponse;
      }>
    )._thenUnwrap((obj) => obj.items);
  }
}

export interface Address {
  /**
   * Valid deliverable address (no PO boxes).
   */
  address1: string;

  /**
   * Name of city.
   */
  city: string;

  /**
   * Valid country code. Only USA is currently supported, entered in uppercase ISO
   * 3166-1 alpha-3 three-character format.
   */
  country: string;

  /**
   * Valid postal code. Only USA ZIP codes are currently supported, entered as a
   * five-digit ZIP or nine-digit ZIP+4.
   */
  postal_code: string;

  /**
   * Valid state code. Only USA state codes are currently supported, entered in
   * uppercase ISO 3166-2 two-character format.
   */
  state: string;

  /**
   * Unit or apartment number (if applicable).
   */
  address2?: string;
}

export interface EnvelopeInlineResponseResponse {
  foo?: string;
}

export namespace Envelopes {
  export import Address = API.Address;
  export import EnvelopeInlineResponseResponse = API.EnvelopeInlineResponseResponse;
}
