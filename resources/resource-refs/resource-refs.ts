// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { PaginatedModelFirstRef } from './paginated-model-first-ref';
import { PaginatedModelSecondRef } from './paginated-model-second-ref';

export class ResourceRefs extends APIResource {
  paginatedModelFirstRef: PaginatedModelFirstRef = new PaginatedModelFirstRef(this.client);
  paginatedModelSecondRef: PaginatedModelSecondRef = new PaginatedModelSecondRef(this.client);
}
