// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'sink-npm/resource';
import * as PaginatedModelFirstRefAPI from 'sink-npm/resources/resource-refs/paginated-model-first-ref';
import * as PaginatedModelSecondRefAPI from 'sink-npm/resources/resource-refs/paginated-model-second-ref';

export class ResourceRefs extends APIResource {
  paginatedModelFirstRef: PaginatedModelFirstRefAPI.PaginatedModelFirstRef =
    new PaginatedModelFirstRefAPI.PaginatedModelFirstRef(this._client);
  paginatedModelSecondRef: PaginatedModelSecondRefAPI.PaginatedModelSecondRef =
    new PaginatedModelSecondRefAPI.PaginatedModelSecondRef(this._client);
}

export namespace ResourceRefs {
  export import PaginatedModelFirstRef = PaginatedModelFirstRefAPI.PaginatedModelFirstRef;
  export import PaginatedModelSecondRef = PaginatedModelSecondRefAPI.PaginatedModelSecondRef;
}
