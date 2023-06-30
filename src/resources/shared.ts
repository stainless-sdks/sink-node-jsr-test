// File generated from our OpenAPI spec by Stainless.

import { FakePage } from 'sink-npm/pagination';

export interface BasicSharedModelObject {
  foo: string;
}

/**
 * This is my description for the Currency enum
 */
export type Currency =
  | 'USD'
  | 'GBP'
  | 'PAB'
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | null;

export interface ObjectWithChildRef {
  bar: SimpleObject;

  foo: string;
}

export interface SharedMutualRecursionA {
  b?: SharedMutualRecursionB;
}

export interface SharedMutualRecursionB {
  a?: SharedMutualRecursionA;
}

export interface SharedSelfRecursion {
  name: string;

  child?: SharedSelfRecursion;
}

export interface ShippingAddress {
  /**
   * Valid USPS routable address.
   */
  address1: string;

  /**
   * City
   */
  city: string;

  /**
   * Uppercase ISO 3166-1 alpha-3 three character abbreviation.
   */
  country: string;

  /**
   * Customer's first name. This will be the first name printed on the physical card.
   */
  first_name: string;

  /**
   * Customer's surname (family name). This will be the last name printed on the
   * physical card.
   */
  last_name: string;

  /**
   * Postal code (formerly zipcode). For US addresses, either five-digit zipcode or
   * nine-digit "ZIP+4".
   */
  postal_code: string;

  /**
   * Uppercase ISO 3166-2 two character abbreviation for US and CA. Optional with a
   * limit of 24 characters for other countries.
   */
  state: string;

  /**
   * Unit number (if applicable).
   */
  address2?: string;

  /**
   * Email address to be contacted for expedited shipping process purposes. Required
   * if `shipping_method` is `EXPEDITED`.
   */
  email?: string;

  /**
   * Text to be printed on line two of the physical card. Use of this field requires
   * additional permissions.
   */
  line2_text?: string;

  /**
   * Cardholder's phone number in E.164 format to be contacted for expedited shipping
   * process purposes. Required if `shipping_method` is `EXPEDITED`.
   */
  phone_number?: string;
}

export interface SimpleObject {
  /**
   * This is a long multi line description
   *
   * to be sure that we
   *
   * handle it correctly in our various SDKs.
   */
  bar: number;
}

export type SimpleObjectAlias = SimpleObject;

export class SimpleObjectsFakePage extends FakePage<SimpleObject> {}
