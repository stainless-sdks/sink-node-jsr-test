// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Offset, OffsetParams } from '~/pagination';
import * as Params from '~/resources/params';

export class OffsetCase extends APIResource {
  /**
   * Test case for offset pagination
   */
  list(query?: OffsetCaseListParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsOffset>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsOffset>;
  list(
    query: OffsetCaseListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsOffset> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/pagination-test/offset', MyModelsOffset, { query, ...options });
  }
}

export class MyModelsOffset extends Offset<Params.MyModel> {}

export interface OffsetCaseListParams extends OffsetParams {}
