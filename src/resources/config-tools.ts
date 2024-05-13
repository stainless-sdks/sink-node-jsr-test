// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ConfigToolsAPI from './config-tools';
import * as CardsAPI from './cards';
import * as Shared from './shared';

export class ConfigTools extends APIResource {
  modelRefFromNestedResponseBody(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigToolModelRefFromNestedResponseBodyResponse> {
    return this._client.get('/config_tools/model_refs/from_nested_response', options);
  }

  modelRefFromSchemas(options?: Core.RequestOptions): Core.APIPromise<ModelFromSchemasRef> {
    return this._client.get('/config_tools/model_refs/from_schemas', options);
  }

  /**
   * Create a new virtual or physical card. Parameters `pin`, `shippingAddress`, and
   * `product_id` only apply to physical cards.
   */
  onlyInNode(
    body: ConfigToolOnlyInNodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardsAPI.Card> {
    return this._client.post('/cards', { body, ...options });
  }
}

export interface ModelFromNestedResponseBodyRef {
  this_should_be_in_a_model?: string;
}

export interface ModelFromSchemasRef {
  name: string;
}

export interface OnlyNodeModel {
  name: string;
}

export interface ConfigToolModelRefFromNestedResponseBodyResponse {
  foo: ConfigToolModelRefFromNestedResponseBodyResponse.Foo;
}

export namespace ConfigToolModelRefFromNestedResponseBodyResponse {
  export interface Foo {
    bar: ConfigToolsAPI.ModelFromNestedResponseBodyRef;
  }
}

export interface ConfigToolOnlyInNodeParams {
  /**
   * Card types:
   *
   * - `MERCHANT_LOCKED` - Card is locked to first merchant that successfully
   *   authorizes the card.
   * - `PHYSICAL` - Manufactured and sent to the cardholder. We offer white label
   *   branding, credit, ATM, PIN debit, chip/EMV, NFC and magstripe functionality.
   *   Reach out at [lithic.com/contact](https://lithic.com/contact) for more
   *   information.
   * - `SINGLE_USE` - Card will close shortly after the first transaction.
   * - `VIRTUAL` - Card will authorize at any merchant and can be added to a digital
   *   wallet like Apple Pay or Google Pay (if the card program is digital
   *   wallet-enabled).
   */
  type: 'MERCHANT_LOCKED' | 'PHYSICAL' | 'SINGLE_USE' | 'VIRTUAL';

  /**
   * Only required for multi-account users. Token identifying the account the card
   * will be associated with. Only applicable if using account holder enrollment. See
   * [Managing Your Program](https://docs.lithic.com/docs/managing-your-program) for
   * more information.
   */
  account_token?: string;

  /**
   * Identifies the card program under which to create the card. Different card
   * programs may have their own configurations (e.g., digital wallet card art, BIN
   * type). This must be configured with Lithic before use.
   */
  card_program_token?: string;

  /**
   * Two digit (MM) expiry month. If neither `exp_month` nor `exp_year` is provided,
   * an expiration date will be generated.
   */
  exp_month?: string;

  /**
   * Four digit (yyyy) expiry year. If neither `exp_month` nor `exp_year` is
   * provided, an expiration date will be generated.
   */
  exp_year?: string;

  /**
   * The token for the desired `FundingAccount` to use when making transactions with
   * this card.
   */
  funding_token?: string;

  /**
   * Friendly name to identify the card.
   */
  memo?: string;

  /**
   * Used to test the PythonSDKs ability to handle reserved keywords as parameters
   */
  not?: string;

  /**
   * Encrypted PIN block (in base64). Only applies to cards of type `PHYSICAL` and
   * `VIRTUAL`. See
   * [Encrypted PIN Block](https://docs.lithic.com/docs/cards#encrypted-pin-block-enterprise).
   */
  pin?: string;

  /**
   * Specifies the configuration (e.g., physical card art) that the card should be
   * manufactured with, and only applies to cards of type `PHYSICAL` [beta]. This
   * must be configured with Lithic before use.
   */
  product_id?: string;

  /**
   * Shipping method for the card. Only applies to cards of type PHYSICAL [beta]. Use
   * of options besides `STANDARD` require additional permissions.
   *
   * - `STANDARD` - USPS regular mail or similar international option, with no
   *   tracking
   * - `STANDARD_WITH_TRACKING` - USPS regular mail or similar international option,
   *   with tracking
   * - `EXPEDITED` - FedEx Standard Overnight or similar international option, with
   *   tracking
   */
  shipping_method?: 'STANDARD' | 'STANDARD_WITH_TRACKING' | 'EXPEDITED';

  shippingAddress?: Shared.ShippingAddress;

  /**
   * Amount (in cents) to limit approved authorizations. Transaction requests above
   * the spend limit will be declined.
   */
  spend_limit?: number;

  /**
   * Spend limit duration values:
   *
   * - `ANNUALLY` - Card will authorize transactions up to spend limit in a calendar
   *   year.
   * - `FOREVER` - Card will authorize only up to spend limit for the entire lifetime
   *   of the card.
   * - `MONTHLY` - Card will authorize transactions up to spend limit for the
   *   trailing month. Month is calculated as this calendar date one month prior.
   * - `TRANSACTION` - Card will authorizate multiple transactions if each individual
   *   transaction is under the spend limit.
   */
  spend_limit_duration?: 'ANNUALLY' | 'FOREVER' | 'MONTHLY' | 'TRANSACTION';

  /**
   * Card state values:
   *
   * - `OPEN` - Card will approve authorizations (if they match card and account
   *   parameters).
   * - `PAUSED` - Card will decline authorizations, but can be resumed at a later
   *   time.
   */
  state?: 'OPEN' | 'PAUSED';
}

export namespace ConfigTools {
  export import ModelFromNestedResponseBodyRef = ConfigToolsAPI.ModelFromNestedResponseBodyRef;
  export import ModelFromSchemasRef = ConfigToolsAPI.ModelFromSchemasRef;
  export import OnlyNodeModel = ConfigToolsAPI.OnlyNodeModel;
  export import ConfigToolModelRefFromNestedResponseBodyResponse = ConfigToolsAPI.ConfigToolModelRefFromNestedResponseBodyResponse;
  export import ConfigToolOnlyInNodeParams = ConfigToolsAPI.ConfigToolOnlyInNodeParams;
}
