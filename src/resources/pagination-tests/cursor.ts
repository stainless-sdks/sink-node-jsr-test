// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as CursorAPI from 'sink-npm/resources/pagination-tests/cursor';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import {
  MyModelsPageCursor,
  MyModelsPageCursorNestedResponseProp,
} from 'sink-npm/resources/body-params/body-params';
import { type PageCursorNestedResponsePropParams, type PageCursorParams } from 'sink-npm/pagination';

export class Cursor extends APIResource {
  /**
   * Test case for cursor pagination
   */
  list(
    query?: CursorListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>;
  list(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>;
  list(
    query: CursorListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/paginated/cursor', MyModelsPageCursor, { query, ...options });
  }

  /**
   * Test case for cursor pagination that returns a cursor under a nested property.
   */
  listNestedResponseProp(
    query?: CursorListNestedResponsePropParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorNestedResponseProp, BodyParamsAPI.MyModel>;
  listNestedResponseProp(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorNestedResponseProp, BodyParamsAPI.MyModel>;
  listNestedResponseProp(
    query: CursorListNestedResponsePropParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursorNestedResponseProp, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.listNestedResponseProp({}, query);
    }
    return this.getAPIList('/paginated/cursor_nested_response_prop', MyModelsPageCursorNestedResponseProp, {
      query,
      ...options,
    });
  }
}

export interface CursorListParams extends PageCursorParams {}

export interface CursorListNestedResponsePropParams extends PageCursorNestedResponsePropParams {}

export namespace Cursor {
  export import CursorListParams = CursorAPI.CursorListParams;
  export import CursorListNestedResponsePropParams = CursorAPI.CursorListNestedResponsePropParams;
}

export { MyModelsPageCursor, MyModelsPageCursorNestedResponseProp };
