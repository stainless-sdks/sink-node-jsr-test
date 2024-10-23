// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as RefsAPI from './refs';
import * as BodyParamsAPI from '../body-params/body-params';
import { MyModelsPageCursorNestedObjectRef, MyModelsPageCursorSharedRef } from '../body-params/body-params';
import { PageCursorNestedObjectRef, type PageCursorNestedObjectRefParams, PageCursorSharedRef, type PageCursorSharedRefParams } from '../../pagination';

export class Refs extends APIResource {
  /**
   * Test case for pagination using an in-line nested object reference
   */
  nestedObjectRef(query?: RefNestedObjectRefParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorNestedObjectRef, BodyParamsAPI.MyModel>
  nestedObjectRef(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorNestedObjectRef, BodyParamsAPI.MyModel>
  nestedObjectRef(query: RefNestedObjectRefParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorNestedObjectRef, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.nestedObjectRef({}, query);
    }
    return this._client.getAPIList('/paginated/nested_object_ref', MyModelsPageCursorNestedObjectRef, { query, ...options });
  }

  /**
   * Test case for pagination using a shared model reference
   */
  withSharedModelRef(query?: RefWithSharedModelRefParams, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorSharedRef, BodyParamsAPI.MyModel>
  withSharedModelRef(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorSharedRef, BodyParamsAPI.MyModel>
  withSharedModelRef(query: RefWithSharedModelRefParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursorSharedRef, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.withSharedModelRef({}, query);
    }
    return this._client.getAPIList('/paginated/with_shared_model_ref', MyModelsPageCursorSharedRef, { query, ...options });
  }
}

export interface RefNestedObjectRefParams extends PageCursorNestedObjectRefParams {
  limit?: number;
}

export interface RefWithSharedModelRefParams extends PageCursorSharedRefParams {
  limit?: number;
}

export namespace Refs {
  export import RefNestedObjectRefParams = RefsAPI.RefNestedObjectRefParams;
  export import RefWithSharedModelRefParams = RefsAPI.RefWithSharedModelRefParams;
}

export { MyModelsPageCursorNestedObjectRef, MyModelsPageCursorSharedRef }
