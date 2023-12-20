// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as RefsAPI from 'sink-npm/resources/pagination-tests/refs';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import {
  MyModelsPageCursorNestedObjectRef,
  MyModelsPageCursorSharedRef,
} from 'sink-npm/resources/body-params/body-params';

export class Refs extends APIResource {
  /**
   * Test case for pagination using an in-line nested object reference
   */
  nestedObjectRef(
    query?: RefNestedObjectRefParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorNestedObjectRef, BodyParamsAPI.MyModel>;
  nestedObjectRef(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorNestedObjectRef, BodyParamsAPI.MyModel>;
  nestedObjectRef(
    query: RefNestedObjectRefParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorNestedObjectRef, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.nestedObjectRef({}, query);
    }
    return this._client.getAPIList('/paginated/nested_object_ref', MyModelsPageCursorNestedObjectRef, {
      query,
      ...options,
    });
  }

  /**
   * Test case for pagination using a shared model reference
   */
  withSharedModelRef(
    query?: RefWithSharedModelRefParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorSharedRef, BodyParamsAPI.MyModel>;
  withSharedModelRef(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorSharedRef, BodyParamsAPI.MyModel>;
  withSharedModelRef(
    query: RefWithSharedModelRefParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorSharedRef, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.withSharedModelRef({}, query);
    }
    return this._client.getAPIList('/paginated/with_shared_model_ref', MyModelsPageCursorSharedRef, {
      query,
      ...options,
    });
  }
}

export interface RefNestedObjectRefParams {
  cursor?: string | null;

  limit?: number;

  object_param?: RefNestedObjectRefParams.ObjectParam;
}

export namespace RefNestedObjectRefParams {
  export interface ObjectParam {
    foo?: string;
  }
}

export interface RefWithSharedModelRefParams {
  cursor?: string | null;

  limit?: number;
}

export namespace Refs {
  export import RefNestedObjectRefParams = RefsAPI.RefNestedObjectRefParams;
  export import RefWithSharedModelRefParams = RefsAPI.RefWithSharedModelRefParams;
}

export { MyModelsPageCursorNestedObjectRef, MyModelsPageCursorSharedRef };
