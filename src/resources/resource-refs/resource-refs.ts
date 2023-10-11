// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as PaginatedModelFirstRefAPI from 'sink-npm/resources/resource-refs/paginated-model-first-ref';
import * as PaginatedModelSecondRefAPI from 'sink-npm/resources/resource-refs/paginated-model-second-ref';

export class ResourceRefs extends APIResource {
  paginatedModelFirstRef: PaginatedModelFirstRefAPI.PaginatedModelFirstRef =
    new PaginatedModelFirstRefAPI.PaginatedModelFirstRef(this.client);
  paginatedModelSecondRef: PaginatedModelSecondRefAPI.PaginatedModelSecondRef =
    new PaginatedModelSecondRefAPI.PaginatedModelSecondRef(this.client);
}

export namespace ResourceRefs {
  export import PaginatedModelFirstRef = PaginatedModelFirstRefAPI.PaginatedModelFirstRef;
  export type PaginatedModelFirstRefListParams = PaginatedModelFirstRefAPI.PaginatedModelFirstRefListParams;
  export import PaginatedModelSecondRef = PaginatedModelSecondRefAPI.PaginatedModelSecondRef;
  export type PaginatedModelSecondRefListParams =
    PaginatedModelSecondRefAPI.PaginatedModelSecondRefListParams;
}
