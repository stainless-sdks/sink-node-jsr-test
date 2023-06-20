// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { PaginatedModelFirstRef } from './paginated-model-first-ref';
import { PaginatedModelSecondRef } from './paginated-model-second-ref';
import * as API from './';

export class ResourceRefs extends APIResource {
  paginatedModelFirstRef: PaginatedModelFirstRef = new PaginatedModelFirstRef(this.client);
  paginatedModelSecondRef: PaginatedModelSecondRef = new PaginatedModelSecondRef(this.client);
}

export namespace ResourceRefs {
  export import PaginatedModelFirstRef = API.PaginatedModelFirstRef;
  export import PaginatedModelFirstRefListParams = API.PaginatedModelFirstRefListParams;

  export import PaginatedModelSecondRef = API.PaginatedModelSecondRef;
  export import PaginatedModelSecondRefListParams = API.PaginatedModelSecondRefListParams;
}
