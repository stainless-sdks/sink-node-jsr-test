// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Payments } from './payments';
import * as CompanyAPI from './company';
import * as PaymentsAPI from './payments';

/**
 * Stainless API company
 */
export class CompanyResource extends APIResource {
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
}

export interface Company {
  name: string;
}

export namespace CompanyResource {
  export import Company = CompanyAPI.Company;
  export import Payments = PaymentsAPI.Payments;
  export import CompanyPayment = PaymentsAPI.CompanyPayment;
}
