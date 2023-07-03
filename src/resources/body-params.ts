// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as Shared from 'sink-npm/resources/shared';
import * as API from './';
import {
  PagePageNumber,
  PageCursor,
  PageCursorURL,
  PageOffset,
  PageHypermedia,
  PageHypermediaRaw,
} from 'sink-npm/pagination';

export class BodyParams extends APIResource {
  /**
   * Endpoint with a `requestBody` that sets `readOnly` to `true` on top level
   * properties
   */
  readOnlyProperties(
    body: BodyParamReadOnlyPropertiesParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
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
  ): Promise<Core.APIResponse<void>> {
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
   * Endpoint with a `requestBody` that is an `array` type.
   */
  topLevelArray(
    body: BodyParamTopLevelArrayParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    return this.post('/body_params/top_level_array', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that is an `array` type with non-model children.
   */
  topLevelArrayWithChildren(
    body: BodyParamTopLevelArrayWithChildrenParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    return this.post('/body_params/top_level_array_with_children', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` making use of oneOf but only contains one entry in
   * the union.
   */
  topLevelOneOfOneEntry(
    body: BodyParamTopLevelOneOfOneEntryParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    return this.post('/body_params/top_level_oneOf_one_entry', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` making use of anyOf where the same property is
   * defined in both variants.
   */
  unionOverlappingProp(
    body: BodyParamUnionOverlappingPropParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<BodyParamUnionOverlappingPropResponse>> {
    return this.post('/body_params/top_level_anyOf_overlapping_property', { body, ...options });
  }

  /**
   * Endpoint with a request body that contains a property that points to a model
   * reference.
   */
  withModelProperty(
    body: BodyParamWithModelPropertyParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    return this.post('/body_params/with_model_property', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class MyModelsPagePageNumber extends PagePageNumber<MyModel> {}
// alias so we can export it in the namespace
type _MyModelsPagePageNumber = MyModelsPagePageNumber;

export class MyModelsPageCursor extends PageCursor<MyModel> {}
// alias so we can export it in the namespace
type _MyModelsPageCursor = MyModelsPageCursor;

export class MyModelsPageCursorURL extends PageCursorURL<MyModel> {}
// alias so we can export it in the namespace
type _MyModelsPageCursorURL = MyModelsPageCursorURL;

export class MyModelsPageOffset extends PageOffset<MyModel> {}
// alias so we can export it in the namespace
type _MyModelsPageOffset = MyModelsPageOffset;

export class MyModelsPageHypermedia extends PageHypermedia<MyModel> {}
// alias so we can export it in the namespace
type _MyModelsPageHypermedia = MyModelsPageHypermedia;

export class MyModelsPageHypermediaRaw extends PageHypermediaRaw<MyModel> {}
// alias so we can export it in the namespace
type _MyModelsPageHypermediaRaw = MyModelsPageHypermediaRaw;

export interface MyModel {
  bar?: boolean;
}

export interface BodyParamUnionOverlappingPropResponse {
  foo: string;
}

export interface BodyParamReadOnlyPropertiesParams {
  in_both?: boolean;
}

export type BodyParamTopLevelAllOfNestedObjectParams = BodyParamTopLevelAllOfNestedObjectParams.Body;

export namespace BodyParamTopLevelAllOfNestedObjectParams {
  export interface Body {
    kind: 'VIRTUAL' | 'PHYSICAL';

    /**
     * This is an object with required properties
     */
    nested_obj?: Body.NestedObj;
  }

  export namespace Body {
    /**
     * This is an object with required properties
     */
    export interface NestedObj {
      is_foo: boolean;
    }
  }
}

export type BodyParamTopLevelAnyOfWithRefParams =
  | BodyParamTopLevelAnyOfWithRefParams.ObjectWithRequiredEnum
  | BodyParamTopLevelAnyOfWithRefParams.SimpleObjectWithRequiredProperty;

export namespace BodyParamTopLevelAnyOfWithRefParams {
  export interface ObjectWithRequiredEnum {
    kind: 'VIRTUAL' | 'PHYSICAL';
  }

  export interface SimpleObjectWithRequiredProperty {
    is_foo: boolean;
  }
}

export type BodyParamTopLevelArrayParams = Array<Shared.BasicSharedModelObject>;

export type BodyParamTopLevelArrayWithChildrenParams = Array<BodyParamTopLevelArrayWithChildrenParams.Item>;

export namespace BodyParamTopLevelArrayWithChildrenParams {
  export interface Item {
    id: string;
  }
}

export interface BodyParamTopLevelOneOfOneEntryParams {
  kind: 'VIRTUAL' | 'PHYSICAL';
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

export namespace BodyParams {
  export import MyModel = API.MyModel;
  export import BodyParamUnionOverlappingPropResponse = API.BodyParamUnionOverlappingPropResponse;
  export import BodyParamReadOnlyPropertiesParams = API.BodyParamReadOnlyPropertiesParams;
  export import BodyParamTopLevelAllOfNestedObjectParams = API.BodyParamTopLevelAllOfNestedObjectParams;
  export import BodyParamTopLevelAnyOfWithRefParams = API.BodyParamTopLevelAnyOfWithRefParams;
  export import BodyParamTopLevelArrayParams = API.BodyParamTopLevelArrayParams;
  export import BodyParamTopLevelArrayWithChildrenParams = API.BodyParamTopLevelArrayWithChildrenParams;
  export import BodyParamTopLevelOneOfOneEntryParams = API.BodyParamTopLevelOneOfOneEntryParams;
  export import BodyParamUnionOverlappingPropParams = API.BodyParamUnionOverlappingPropParams;
  export import BodyParamWithModelPropertyParams = API.BodyParamWithModelPropertyParams;
}
