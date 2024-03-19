// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as SchemaTypesAPI from 'sink-npm/resources/pagination-tests/schema-types';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import { MyModelsPageCursor } from 'sink-npm/resources/body-params/body-params';
import { type PageCursorParams } from 'sink-npm/pagination';

export class SchemaTypes extends APIResource {
  /**
   * Test case for a cursor endpoint that defines properties using allOf
   */
  allofs(
    query?: SchemaTypeAllofsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>;
  allofs(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>;
  allofs(
    query: SchemaTypeAllofsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.allofs({}, query);
    }
    return this._client.getAPIList('/paginated/schema_types/allofs', MyModelsPageCursor, {
      query,
      ...options,
    });
  }

  /**
   * Test case for a cursor endpoint that returns an anyOf
   */
  unions(
    query?: SchemaTypeUnionsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>;
  unions(options?: Core.RequestOptions): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel>;
  unions(
    query: SchemaTypeUnionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MyModelsPageCursor, BodyParamsAPI.MyModel> {
    if (isRequestOptions(query)) {
      return this.unions({}, query);
    }
    return this._client.getAPIList('/paginated/schema_types/unions', MyModelsPageCursor, {
      query,
      ...options,
    });
  }
}

export interface SchemaTypeAllofsParams extends PageCursorParams {
  limit?: number;
}

export interface SchemaTypeUnionsParams extends PageCursorParams {
  limit?: number;
}

export namespace SchemaTypes {
  export import SchemaTypeAllofsParams = SchemaTypesAPI.SchemaTypeAllofsParams;
  export import SchemaTypeUnionsParams = SchemaTypesAPI.SchemaTypeUnionsParams;
}

export { MyModelsPageCursor };
