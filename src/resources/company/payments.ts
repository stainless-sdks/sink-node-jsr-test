// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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

export declare namespace Payments {
  export { type CompanyPayment as CompanyPayment };
}
