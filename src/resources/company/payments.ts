// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Payments extends APIResource {
  /**
   * Get a payment that the company made.
   */
  retrieve(paymentId: string, options?: Core.RequestOptions): Core.APIPromise<CompanyPayment> {
    return this.get(`/company/payments/${paymentId}`, options);
  }
}

export interface CompanyPayment {
  amount: number;
}

export namespace Payments {
  export import CompanyPayment = API.CompanyPayment;
}
