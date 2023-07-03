// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as Shared from 'sink-npm/resources/shared';
import * as API from './';
import { CardPage, CardPageParams, PageCursor } from 'sink-npm/pagination';

export class Cards extends APIResource {
  /**
   * Create a new virtual or physical card. Parameters `pin`, `shippingAddress`, and
   * `product_id` only apply to physical cards.
   */
  create(body: CardCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Card>> {
    return this.post('/cards', { body, ...options });
  }

  /**
   * Get card configuration such as spend limit and state.
   */
  retrieve(cardToken: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Card>> {
    return this.get(`/cards/${cardToken}`, options);
  }

  /**
   * Update the specified properties of the card. Unsupplied properties will remain
   * unchanged. `pin` parameter only applies to physical cards.
   *
   * _Note: setting a card to a `CLOSED` state is a final action that cannot be
   * undone._
   */
  update(
    cardToken: string,
    body: CardUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Card>> {
    return this.patch(`/cards/${cardToken}`, { body, ...options });
  }

  /**
   * List cards.
   */
  list(query?: CardListParams, options?: Core.RequestOptions): Core.PagePromise<CardsCardPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardsCardPage>;
  list(
    query: CardListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardsCardPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/cards', CardsCardPage, { query, ...options });
  }

  createAliased = this.create;

  /**
   * A top level custom method on the sink customer.
   *
   * @deprecated This method will be removed in the next release. Please use `client.get_auth_url()` instead.
   */
  deprecatedGetAuthURL({ redirectUri, clientId }: { redirectUri: string; clientId: string }): string {
    const url = new URL('/auth', 'http://localhost:8000');

    url.search = `client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    return url.toString();
  }

  /**
   * Endpoint that represents a method that has been marked as deprecated in the
   * stainless config.
   *
   * @deprecated This method has been deprecated.
   *
   * It will be removed in v0.99.0
   */
  deprecatedMethod(options?: Core.RequestOptions): Promise<Core.APIResponse<void>> {
    return this.post('/deprecations/method', { ...options, headers: { Accept: '', ...options?.headers } });
  }

  /**
   * List cards.
   */
  listNonGet(body?: CardListNonGetParams, options?: Core.RequestOptions): Core.PagePromise<CardsCardPage>;
  listNonGet(options?: Core.RequestOptions): Core.PagePromise<CardsCardPage>;
  listNonGet(
    body: CardListNonGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardsCardPage> {
    if (isRequestOptions(body)) {
      return this.listNonGet({}, body);
    }
    const { account_token: accountToken, begin, end, page, page_size: pageSize } = body;
    return this.getAPIList('/cards/list', CardsCardPage, {
      query: { account_token: accountToken, begin, end, page, page_size: pageSize },
      method: 'post',
      ...options,
    });
  }

  /**
   * Get card configuration such as spend limit and state.
   */
  listNotPaginated(cardToken: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Card>> {
    return this.get(`/cards/${cardToken}`, options);
  }

  /**
   * Allow your cardholders to directly add payment cards to the device's digital
   * wallet (e.g. Apple Pay) with one touch from your app.
   *
   * This requires some additional setup and configuration. Please
   * [Contact Us](https://lithic.com/contact) or your Customer Success representative
   * for more information.
   */
  provisionFoo(
    cardToken: string,
    body: CardProvisionFooParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CardProvisionFooResponse>> {
    return this.post(`/cards/${cardToken}/provision`, { body, ...options });
  }

  /**
   * Initiate print and shipment of a duplicate card.
   *
   * Only applies to cards of type `PHYSICAL` [beta].
   */
  reissue(
    cardToken: string,
    body: CardReissueParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Card>> {
    return this.post(`/cards/${cardToken}/reissue`, { body, ...options });
  }
}

/**
 * Test description for card pages.
 */
export class CardsCardPage extends CardPage<Card> {}

export class CardsPageCursor extends PageCursor<Card> {}

export interface Card {
  /**
   * Globally unique identifier.
   */
  token: string;

  /**
   * An ISO 8601 timestamp for when the card was created. UTC time zone.
   */
  created: string;

  funding: FundingAccount;

  /**
   * Last four digits of the card number.
   */
  lastFour: string;

  /**
   * Amount (in cents) to limit approved authorizations. Transaction requests above
   * the spend limit will be declined.
   */
  spend_limit: number;

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
  spend_limit_duration: 'ANNUALLY' | 'FOREVER' | 'MONTHLY' | 'TRANSACTION';

  /**
   * Card state values:
   *
   * - `CLOSED` - Card will no longer approve authorizations. Closing a card cannot
   *   be undone.
   * - `OPEN` - Card will approve authorizations (if they match card and account
   *   parameters).
   * - `PAUSED` - Card will decline authorizations, but can be resumed at a later
   *   time.
   * - `PENDING_FULFILLMENT` - The initial state for cards of type `PHYSICAL`. The
   *   card is provisioned pending manufacturing and fulfillment. Cards in this state
   *   can accept authorizations for e-commerce purchases, but not for "Card Present"
   *   purchases where the physical card itself is present.
   * - `PENDING_ACTIVATION` - Each business day at 2pm Eastern Time Zone (ET), cards
   *   of type `PHYSICAL` in state `PENDING_FULFILLMENT` are sent to the card
   *   production warehouse and updated to state `PENDING_ACTIVATION` . Similar to
   *   `PENDING_FULFILLMENT`, cards in this state can be used for e-commerce
   *   transactions. API clients should update the card's state to `OPEN` only after
   *   the cardholder confirms receipt of the card.
   *
   * In sandbox, the same daily batch fulfillment occurs, but no cards are actually
   * manufactured.
   */
  state: 'CLOSED' | 'OPEN' | 'PAUSED' | 'PENDING_ACTIVATION' | 'PENDING_FULFILLMENT';

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
   * List of identifiers for the Auth Rule(s) that are applied on the card.
   */
  auth_rule_tokens?: Array<string>;

  /**
   * Three digit cvv printed on the back of the card.
   */
  cvv?: string;

  /**
   * Two digit (MM) expiry month.
   */
  exp_month?: string;

  /**
   * Four digit (yyyy) expiry year.
   */
  exp_year?: string;

  /**
   * Hostname of card’s locked merchant (will be empty if not applicable).
   */
  hostname?: string;

  /**
   * Friendly name to identify the card.
   */
  memo?: string;

  /**
   * Primary Account Number (PAN) (i.e. the card number). Customers must be PCI
   * compliant to have PAN returned as a field in production. Please contact
   * [support@lithic.com](mailto:support@lithic.com) for questions.
   */
  pan?: string;
}

export type CardAlias = Card;

export interface FundingAccount {
  /**
   * A globally unique identifier for this FundingAccount.
   */
  token: string;

  /**
   * An ISO 8601 string representing when this funding source was added to the Lithic
   * account. This may be `null`. UTC time zone.
   */
  created: string;

  /**
   * The last 4 digits of the account (e.g. bank account, debit card) associated with
   * this FundingAccount. This may be null.
   */
  lastFour: string;

  /**
   * State of funding source.
   *
   * Funding source states:
   *
   * - `ENABLED` - The funding account is available to use for card creation and
   *   transactions.
   * - `PENDING` - The funding account is still being verified e.g. bank
   *   micro-deposits verification.
   * - `DELETED` - The founding account has been deleted.
   */
  state: 'ENABLED' | 'PENDING' | 'DELETED';

  /**
   * Types of funding source:
   *
   * - `DEPOSITORY_CHECKING` - Bank checking account.
   * - `DEPOSITORY_SAVINGS` - Bank savings account.
   */
  type: 'DEPOSITORY_CHECKING' | 'DEPOSITORY_SAVINGS';

  /**
   * Account name identifying the funding source. This may be `null`.
   */
  account_name?: string;

  /**
   * The nickname given to the `FundingAccount` or `null` if it has no nickname.
   */
  nickname?: string;
}

export interface CardProvisionFooResponse {
  provisioning_payload: string;
}

export interface CardCreateParams {
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

export interface CardUpdateParams {
  /**
   * Only required for multi-account users. Token identifying the account the card
   * will be associated with. Only applicable if using account holder enrollment. See
   * [Managing Your Program](https://docs.lithic.com/docs/managing-your-program) for
   * more information.
   */
  account_token?: string;

  /**
   * Identifier for any Auth Rules that will be applied to transactions taking place
   * with the card.
   */
  auth_rule_token?: string;

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
   * Encrypted PIN block (in base64). Only applies to cards of type `PHYSICAL` and
   * `VIRTUAL`. See
   * [Encrypted PIN Block](https://docs.lithic.com/docs/cards#encrypted-pin-block-enterprise).
   */
  pin?: string;

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
   * - `CLOSED` - Card will no longer approve authorizations. Closing a card cannot
   *   be undone.
   * - `OPEN` - Card will approve authorizations (if they match card and account
   *   parameters).
   * - `PAUSED` - Card will decline authorizations, but can be resumed at a later
   *   time.
   */
  state?: 'CLOSED' | 'OPEN' | 'PAUSED';
}

export interface CardListParams extends CardPageParams {
  /**
   * Only required for multi-account users. Returns cards associated with this
   * account. Only applicable if using account holder enrollment. See
   * [Managing Your Program](https://docs.lithic.com/docs/managing-your-program) for
   * more information.
   */
  account_token?: string;

  /**
   * Date string in 8601 format. Only entries created after the specified date will
   * be included. UTC time zone.
   */
  begin?: string;

  /**
   * Date string in 8601 format. Only entries created before the specified date will
   * be included. UTC time zone.
   */
  end?: string;
}

export interface CardCreateAliasedParams {
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

export interface CardListNonGetParams extends CardPageParams {
  /**
   * Only required for multi-account users. Returns cards associated with this
   * account. Only applicable if using account holder enrollment. See
   * [Managing Your Program](https://docs.lithic.com/docs/managing-your-program) for
   * more information.
   */
  account_token?: string;

  /**
   * Date string in 8601 format. Only entries created after the specified date will
   * be included. UTC time zone.
   */
  begin?: string;

  /**
   * Date string in 8601 format. Only entries created before the specified date will
   * be included. UTC time zone.
   */
  end?: string;
}

export interface CardProvisionFooParams {
  /**
   * Only required for multi-account users. Token identifying the account the card
   * will be associated with. Only applicable if using account holder enrollment. See
   * [Managing Your Program](https://docs.lithic.com/docs/managing-your-program) for
   * more information.
   */
  account_token?: string;

  /**
   * Required for `APPLE_PAY`. Apple's public leaf certificate. Base64 encoded in PEM
   * format with headers `(-----BEGIN CERTIFICATE-----)` and trailers omitted.
   * Provided by the device's wallet.
   */
  certificate?: string;

  /**
   * Name of digital wallet provider.
   */
  digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | 'SAMSUNG_PAY';

  /**
   * Required for `APPLE_PAY`. Base64 cryptographic nonce provided by the device's
   * wallet.
   */
  nonce?: string;

  /**
   * Required for `APPLE_PAY`. Base64 cryptographic nonce provided by the device's
   * wallet.
   */
  nonce_signature?: string;
}

export interface CardReissueParams {
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

export namespace Cards {
  export import Card = API.Card;
  export import CardAlias = API.CardAlias;
  export import FundingAccount = API.FundingAccount;
  export import CardProvisionFooResponse = API.CardProvisionFooResponse;
  export import CardsCardPage = API.CardsCardPage;
  export import CardCreateParams = API.CardCreateParams;
  export import CardUpdateParams = API.CardUpdateParams;
  export import CardListParams = API.CardListParams;
  export import CardCreateAliasedParams = API.CardCreateAliasedParams;
  export import CardListNonGetParams = API.CardListNonGetParams;
  export import CardProvisionFooParams = API.CardProvisionFooParams;
  export import CardReissueParams = API.CardReissueParams;
}