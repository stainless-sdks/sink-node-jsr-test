// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as PaymentsAPI from 'sink-npm/resources/company/payments';

/**
 * For paying Stainless $$$
 */
export class Payments extends APIResource {
  /**
   * Get a payment that the company made.
   */
  retrieve(paymentId: string, options?: Core.RequestOptions): Core.APIPromise<CompanyPayment> {
    return this._client.get(`/company/payments/${paymentId}`, options);
  }
}

export interface CompanyPayment {
  amount: number;
}

export namespace Payments {
  export import CompanyPayment = PaymentsAPI.CompanyPayment;
}
