// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { Payments } from './payments';

export class CompanyResource extends APIResource {
  payments: Payments = new Payments(this.client);
}

export interface Company {
  name: string;
}
