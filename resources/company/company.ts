// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import { isRequestOptions } from '~/core'
import { Payments } from './payments'
import * as Shared from '~/resources/shared'

export class CompanyResource extends APIResource {
  payments: Payments = new Payments(this.client);

}

export interface Company  {

name: string
}