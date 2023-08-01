// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import { Payments } from './payments';
import * as API from './index';

export class CompanyResource extends APIResource {
  payments: Payments = new Payments(this.client);
}

export interface Company {
  name: string;
}

export namespace CompanyResource {
  export import Company = API.Company;

  export import Payments = API.Payments;
  export import CompanyPayment = API.CompanyPayment;
}
