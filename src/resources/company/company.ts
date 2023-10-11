// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as CompanyAPI from 'sink-npm/resources/company/company';
import * as PaymentsAPI from 'sink-npm/resources/company/payments';

export class CompanyResource extends APIResource {
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this.client);
}

export interface Company {
  name: string;
}

export namespace CompanyResource {
  export import Company = CompanyAPI.Company;
  export import Payments = PaymentsAPI.Payments;
  export import CompanyPayment = PaymentsAPI.CompanyPayment;
}
