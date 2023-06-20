// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';

export class Envelopes extends APIResource {
  /**
   * Endpoint with a response wrapped within a `data` property.
   */
  async explicit(options?: Core.RequestOptions): Promise<Address> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get('/envelopes/data', options)) as any;
    return response.data;
  }

  /**
   * Endpoint with a response wrapped within a `items` property.
   */
  async implicit(options?: Core.RequestOptions): Promise<Address> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get('/envelopes/items', options)) as any;
    return response.items;
  }

  /**
   * Endpoint with a response wrapped within a `items` property that doesn't use a
   * $ref.
   */
  async inlineResponse(options?: Core.RequestOptions): Promise<EnvelopeInlineResponseResponse> {
    // Note that this method does not support accessing responseHeaders
    const response = (await this.get('/envelopes/items/inline_response', options)) as any;
    return response.items;
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
