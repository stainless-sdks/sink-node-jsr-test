// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ExtraParamsAndFieldsAPI from 'sink-npm/resources/pagination-tests/extra-params-and-fields';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import { MyModelsGenericPageWithExtraParamsAndFields } from 'sink-npm/resources/body-params/body-params';
import { type GenericPageWithExtraParamsAndFieldsParams } from 'sink-npm/pagination';

export class ExtraParamsAndFields extends APIResource {
  /**
   * Test case for generic page types using cursor based pagination, with more params
   */
  list(
    params: ExtraParamsAndFieldListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsGenericPageWithExtraParamsAndFields, BodyParamsAPI.MyModel> {
    const { my_cursor, limit, ...body } = params;
    return this._client.getAPIList('/paginated/more_params', MyModelsGenericPageWithExtraParamsAndFields, {
      query: { my_cursor, limit },
      body,
      method: 'post',
      ...options,
    });
  }
}

export interface ExtraParamsAndFieldListParams extends GenericPageWithExtraParamsAndFieldsParams {
  /**
   * Body param:
   */
  foo?: unknown;
}

export namespace ExtraParamsAndFields {
  export import ExtraParamsAndFieldListParams = ExtraParamsAndFieldsAPI.ExtraParamsAndFieldListParams;
}

export { MyModelsGenericPageWithExtraParamsAndFields };
