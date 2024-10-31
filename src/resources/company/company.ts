// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PaymentsAPI from './payments';
import { CompanyPayment, Payments } from './payments';

/**
 * Stainless API company
 */
export class CompanyResource extends APIResource {
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
}

export interface Company {
  name: string;
}

CompanyResource.Payments = Payments;

export declare namespace CompanyResource {
  export { type Company as Company };

  export { Payments as Payments, type CompanyPayment as CompanyPayment };
}
