// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { OffsetCase } from './offset-case';

export class PaginationTests extends APIResource {
  offsetCase: OffsetCase = new OffsetCase(this.client);
}
