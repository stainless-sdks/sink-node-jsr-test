// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as Shared from '~/resources/shared';
import {
  PagePageNumber,
  PageCursor,
  PageCursorURL,
  PageOffset,
  PageHypermedia,
  PageHypermediaRaw,
} from '~/pagination';

export class BodyParams extends APIResource {
  /**
   * Endpoint with a `requestBody` that sets `readOnly` to `true` on top level
   * properties
   */
  readOnlyProperties(
    body: BodyParamReadOnlyPropertiesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.post('/body_params/read_only_properties', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` making use of allOf where one of the properties is
   * an object type.
   */
  topLevelAllOfNestedObject(
    body: BodyParamTopLevelAllOfNestedObjectParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.post('/body_params/top_level_allOf_nested_object', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` pointing to a $ref'd schema that is an `anyOf`.
   */
  topLevelAnyOfWithRef(
    body: BodyParamTopLevelAnyOfWithRefParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.BasicSharedModelObject>> {
    return this.post('/body_params/top_level_anyOf_with_ref', { body, ...options });
  }

  /**
   * Endpoint with a `requestBody` making use of anyOf where the same property is
   * defined in both variants.
   */
  unionOverlappingProp(
    body?: BodyParamUnionOverlappingPropParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<BodyParamUnionOverlappingPropResponse>>;
  unionOverlappingProp(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<BodyParamUnionOverlappingPropResponse>>;
  unionOverlappingProp(
    body: BodyParamUnionOverlappingPropParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<BodyParamUnionOverlappingPropResponse>> {
    if (isRequestOptions(body)) {
      return this.unionOverlappingProp({}, body);
    }
    return this.post('/body_params/top_level_anyOf_overlapping_property', { body, ...options });
  }

  /**
   * Endpoint with a request body that contains a property that points to a model
   * reference.
   */
  withModelProperty(
    body: BodyParamWithModelPropertyParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.post('/body_params/with_model_property', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class MyModelsPagePageNumber extends PagePageNumber<MyModel> {}

export class MyModelsPageCursor extends PageCursor<MyModel> {}

export class MyModelsPageCursorURL extends PageCursorURL<MyModel> {}

export class MyModelsPageOffset extends PageOffset<MyModel> {}

export class MyModelsPageHypermedia extends PageHypermedia<MyModel> {}

export class MyModelsPageHypermediaRaw extends PageHypermediaRaw<MyModel> {}

export interface MyModel {
  bar?: boolean;
}

export interface BodyParamUnionOverlappingPropResponse {
  foo: string;
}

export interface BodyParamReadOnlyPropertiesParams {
  in_both?: boolean;
}

export interface BodyParamTopLevelAllOfNestedObjectParams {
  kind: 'VIRTUAL' | 'PHYSICAL';

  /**
   * This is an object with required properties
   */
  nested_obj?: BodyParamTopLevelAllOfNestedObjectParams.NestedObj;
}

export namespace BodyParamTopLevelAllOfNestedObjectParams {
  /**
   * This is an object with required properties
   */
  export interface NestedObj {
    is_foo: boolean;
  }
}

export type BodyParamTopLevelAnyOfWithRefParams =
  | BodyParamTopLevelAnyOfWithRefParams.ObjectWithRequiredEnum
  | BodyParamTopLevelAnyOfWithRefParams.SimpleObjectWithRequiredProperty;

export namespace BodyParamTopLevelAnyOfWithRefParams {
  /**
   * This is an object with required enum values
   */
  export interface ObjectWithRequiredEnum {
    kind: 'VIRTUAL' | 'PHYSICAL';
  }

  /**
   * This is an object with required properties
   */
  export interface SimpleObjectWithRequiredProperty {
    is_foo: boolean;
  }
}

export type BodyParamUnionOverlappingPropParams =
  | BodyParamUnionOverlappingPropParams.ObjectWithFooProperty1
  | BodyParamUnionOverlappingPropParams.ObjectWithFooProperty2;

export namespace BodyParamUnionOverlappingPropParams {
  export interface ObjectWithFooProperty1 {
    /**
     * FOO 1
     */
    foo: string;
  }

  export interface ObjectWithFooProperty2 {
    /**
     * FOO 2
     */
    foo?: boolean;
  }
}

export interface BodyParamWithModelPropertyParams {
  foo?: string;

  my_model?: MyModel;
}
