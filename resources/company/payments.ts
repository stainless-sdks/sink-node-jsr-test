// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';

export class Payments extends APIResource {
  /**
   * Get a payment that the company made.
   */
  retrieve(paymentId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CompanyPayment>> {
    return this.get(`/company/payments/${paymentId}`, options);
  }
}

export interface CompanyPayment {
  amount: number;
}

export namespace Payments {
  export import CompanyPayment = API.CompanyPayment;
}
