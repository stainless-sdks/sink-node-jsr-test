// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import { isRequestOptions } from '~/core'
import * as BodyParams from '~/resources/body-params'
import { PageOffset, PageOffsetParams } from '~/pagination'
import * as Shared from '~/resources/shared'

export class Offset extends APIResource {

  /**
   * Test case for offset pagination
   */
  list(query?: OffsetListParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageOffset>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageOffset>;
  list(query: OffsetListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageOffset>{
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/paginated/offset', MyModelsPageOffset, { query, ...options })
  };
}

export class MyModelsPageOffset extends PageOffset<BodyParams.MyModel> {}

export interface OffsetListParams extends PageOffsetParams {

}