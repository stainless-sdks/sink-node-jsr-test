// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PaginatedModelFirstRefAPI from './paginated-model-first-ref';
import { PaginatedModelFirstRef } from './paginated-model-first-ref';
import * as PaginatedModelSecondRefAPI from './paginated-model-second-ref';
import { PaginatedModelSecondRef } from './paginated-model-second-ref';

export class ResourceRefs extends APIResource {
  paginatedModelFirstRef: PaginatedModelFirstRefAPI.PaginatedModelFirstRef =
    new PaginatedModelFirstRefAPI.PaginatedModelFirstRef(this._client);
  paginatedModelSecondRef: PaginatedModelSecondRefAPI.PaginatedModelSecondRef =
    new PaginatedModelSecondRefAPI.PaginatedModelSecondRef(this._client);
}

ResourceRefs.PaginatedModelFirstRef = PaginatedModelFirstRef;
ResourceRefs.PaginatedModelSecondRef = PaginatedModelSecondRef;

export declare namespace ResourceRefs {
  export { PaginatedModelFirstRef as PaginatedModelFirstRef };

  export { PaginatedModelSecondRef as PaginatedModelSecondRef };
}
