// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as MethodConfigAPI from './method-config';
import * as CardsAPI from './cards';
import * as Shared from './shared';

export class MethodConfig extends APIResource {
  /**
   * Initiate print and shipment of a duplicate card.
   *
   * Only applies to cards of type `PHYSICAL` [beta].
   */
  shouldNotShowUpInAPIDocs(
    cardToken: string,
    body: MethodConfigShouldNotShowUpInAPIDocsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardsAPI.Card> {
    return this._client.post(`/cards/${cardToken}/reissue`, { body, ...options });
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsAll(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsAllResponse> {
    return this._client.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsGo(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsGoResponse> {
    return this._client.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsJava(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsJavaResponse> {
    return this._client.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsKotlin(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsKotlinResponse> {
    return this._client.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsNode(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsNodeResponse> {
    return this._client.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsNodeAndPython(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsNodeAndPythonResponse> {
    return this._client.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsPython(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsPythonResponse> {
    return this._client.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsRuby(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsRubyResponse> {
    return this._client.get(`/method_config/skipped_tests/${id}`, options);
  }
}

export interface MethodConfigSkippedTestsAllResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsGoResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsJavaResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsKotlinResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsNodeResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsNodeAndPythonResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsPythonResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsRubyResponse {
  foo: string;
}

export interface MethodConfigShouldNotShowUpInAPIDocsParams {
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

export namespace MethodConfig {
  export import MethodConfigSkippedTestsAllResponse = MethodConfigAPI.MethodConfigSkippedTestsAllResponse;
  export import MethodConfigSkippedTestsGoResponse = MethodConfigAPI.MethodConfigSkippedTestsGoResponse;
  export import MethodConfigSkippedTestsJavaResponse = MethodConfigAPI.MethodConfigSkippedTestsJavaResponse;
  export import MethodConfigSkippedTestsKotlinResponse = MethodConfigAPI.MethodConfigSkippedTestsKotlinResponse;
  export import MethodConfigSkippedTestsNodeResponse = MethodConfigAPI.MethodConfigSkippedTestsNodeResponse;
  export import MethodConfigSkippedTestsNodeAndPythonResponse = MethodConfigAPI.MethodConfigSkippedTestsNodeAndPythonResponse;
  export import MethodConfigSkippedTestsPythonResponse = MethodConfigAPI.MethodConfigSkippedTestsPythonResponse;
  export import MethodConfigSkippedTestsRubyResponse = MethodConfigAPI.MethodConfigSkippedTestsRubyResponse;
  export import MethodConfigShouldNotShowUpInAPIDocsParams = MethodConfigAPI.MethodConfigShouldNotShowUpInAPIDocsParams;
}
