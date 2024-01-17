// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { isRequestOptions } from 'sink-npm/core';
import * as BodyParamsAPI from 'sink-npm/resources/body-params/body-params';
import * as Shared from 'sink-npm/resources/shared';
import * as UnionsAPI from 'sink-npm/resources/body-params/unions';
import * as ResponsesAPI from 'sink-npm/resources/responses/responses';
import {
  PageCursor,
  PageCursorFromHeaders,
  PageCursorNestedObjectRef,
  PageCursorSharedRef,
  PageCursorTopLevelArray,
  PageOffset,
  PageOffsetTotalCount,
  PagePageNumber,
} from 'sink-npm/pagination';

export class BodyParams extends APIResource {
  unions: UnionsAPI.Unions = new UnionsAPI.Unions(this._client);

  /**
   * Should return a ModelWithNestedModel object with a `properties` field that we
   * can rename in the Stainless config to a prettier name.
   */
  nestedRequestModels(
    body: BodyParamNestedRequestModelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponsesAPI.ModelWithNestedModel> {
    return this._client.post('/body_params/with_nested_models', { body, ...options });
  }

  /**
   * Endpoint with an object `requestBody` that has an array property with `object`
   * items.
   */
  objectWithArrayOfObjects(
    body: BodyParamObjectWithArrayOfObjectsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/object_with_array_of_objects', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that has a schema that is defined as a model in
   * the config with "param" in the name.
   */
  paramInModelNameRef(
    body: BodyParamParamInModelNameRefParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/param_in_model_name_ref', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that has a property that is defined as a model in
   * the config.
   */
  propertyModelRef(
    body: BodyParamPropertyModelRefParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/property_model_ref', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that has a property that is a union type of
   * complex types.
   */
  propertyWithComplexUnion(
    body: BodyParamPropertyWithComplexUnionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/property_with_complex_union', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that has a property that is a union type of
   * complex types with a lot of nesting.
   */
  propertyWithHeavilyNestedComplexUnion(
    body: BodyParamPropertyWithHeavilyNestedComplexUnionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/property_with_heavily_nested_complex_union', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that sets `readOnly` to `true` on top level
   * properties
   */
  readOnlyProperties(
    body: BodyParamReadOnlyPropertiesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/read_only_properties', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that has an `additionalProperties` string schema
   * that is defined as a model in the config.
   */
  stringMapModelRef(
    body: BodyParamStringMapModelRefParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/string_map_model_ref', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` making use of allOf.
   */
  topLevelAllOf(
    body: BodyParamTopLevelAllOfParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BodyParamTopLevelAllOfResponse> {
    return this._client.post('/body_params/top_level_allOf', { body, ...options });
  }

  /**
   * Endpoint with a `requestBody` making use of allOf where one of the properties is
   * an object type.
   */
  topLevelAllOfNestedObject(
    body: BodyParamTopLevelAllOfNestedObjectParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/top_level_allOf_nested_object', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` pointing to a $ref'd schema that is an `anyOf`.
   */
  topLevelAnyOfWithRef(
    body: BodyParamTopLevelAnyOfWithRefParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.post('/body_params/top_level_anyOf_with_ref', { body, ...options });
  }

  /**
   * Endpoint with a `requestBody` that is an `array` type.
   */
  topLevelArray(body: BodyParamTopLevelArrayParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/body_params/top_level_array', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that is an `array` type with non-model children.
   */
  topLevelArrayWithChildren(
    body: BodyParamTopLevelArrayWithChildrenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/top_level_array_with_children', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` making use of oneOf but only contains one entry in
   * the union.
   */
  topLevelOneOfOneEntry(
    body: BodyParamTopLevelOneOfOneEntryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/top_level_oneOf_one_entry', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * The request body being set to a $ref that is a shared type in the stainless
   * config correctly references it.
   */
  topLevelSharedType(
    body?: BodyParamTopLevelSharedTypeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  topLevelSharedType(options?: Core.RequestOptions): Core.APIPromise<void>;
  topLevelSharedType(
    body: BodyParamTopLevelSharedTypeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.topLevelSharedType({}, body);
    }
    return this._client.post('/body_params/top_level_shared_type', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` making use of anyOf where the same property is
   * defined in both variants.
   */
  unionOverlappingProp(
    body?: BodyParamUnionOverlappingPropParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BodyParamUnionOverlappingPropResponse>;
  unionOverlappingProp(options?: Core.RequestOptions): Core.APIPromise<BodyParamUnionOverlappingPropResponse>;
  unionOverlappingProp(
    body: BodyParamUnionOverlappingPropParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BodyParamUnionOverlappingPropResponse> {
    if (isRequestOptions(body)) {
      return this.unionOverlappingProp({}, body);
    }
    return this._client.post('/body_params/top_level_anyOf_overlapping_property', { body, ...options });
  }

  /**
   * Endpoint with an optional request property that has a default value set.
   */
  withDefaultBodyParamOptional(
    params: BodyParamWithDefaultBodyParamOptionalParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { my_version_body_param = 'v1.4', ...body } = params;
    return this._client.post('/body_params/with_default_body_param_optional', {
      body: { my_version_body_param, ...body },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a required request property that has a default value set.
   */
  withDefaultBodyParamRequired(
    params: BodyParamWithDefaultBodyParamRequiredParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { my_version_body_param = 'v1.4', ...body } = params;
    return this._client.post('/body_params/with_default_body_param_required', {
      body: { my_version_body_param, ...body },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a request body that contains a property that points to a model
   * reference.
   */
  withModelProperty(
    body: BodyParamWithModelPropertyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/with_model_property', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class MyModelsPagePageNumber extends PagePageNumber<MyModel> {}

export class MyModelsPageCursorNestedObjectRef extends PageCursorNestedObjectRef<MyModel> {}

export class MyModelsPageCursorSharedRef extends PageCursorSharedRef<MyModel> {}

export class MyModelsPageCursorFromHeaders extends PageCursorFromHeaders<MyModel> {}

export class MyModelsPageCursorTopLevelArray extends PageCursorTopLevelArray<MyModel> {}

export class MyModelsPageCursor extends PageCursor<MyModel> {}

export class MyModelsPageOffset extends PageOffset<MyModel> {}

export class MyModelsPageOffsetTotalCount extends PageOffsetTotalCount<MyModel> {}

export type ModelWithParamInName = Record<string, string>;

export interface MyModel {
  bar?: boolean;
}

export interface NestedRequestModelA {
  foo?: NestedRequestModelB;
}

export interface NestedRequestModelB {
  bar?: NestedRequestModelC;
}

export interface NestedRequestModelC {
  baz?: NestedRequestModelC.Baz;
}

export namespace NestedRequestModelC {
  export interface Baz {
    hello?: string;
  }
}

export type StringMapModel = Record<string, string>;

export interface BodyParamTopLevelAllOfResponse {
  is_foo: boolean;

  kind: 'VIRTUAL' | 'PHYSICAL';
}

export interface BodyParamUnionOverlappingPropResponse {
  foo: string;
}

export interface BodyParamNestedRequestModelsParams {
  data?: NestedRequestModelA;
}

export interface BodyParamObjectWithArrayOfObjectsParams {
  array_prop?: Array<BodyParamObjectWithArrayOfObjectsParams.ArrayProp>;
}

export namespace BodyParamObjectWithArrayOfObjectsParams {
  /**
   * This is an object with required enum values
   */
  export interface ArrayProp {
    kind: 'VIRTUAL' | 'PHYSICAL';
  }
}

export interface BodyParamParamInModelNameRefParams {
  model_ref: ModelWithParamInName;

  name: string;
}

export interface BodyParamPropertyModelRefParams {
  model_ref: MyModel;

  name: string;
}

export interface BodyParamPropertyWithComplexUnionParams {
  name: string;

  /**
   * This is an object with required properties
   */
  unions:
    | BodyParamPropertyWithComplexUnionParams.ObjectWithReadOnlyProperty
    | BodyParamPropertyWithComplexUnionParams.SimpleObjectWithRequiredProperty;
}

export namespace BodyParamPropertyWithComplexUnionParams {
  export interface ObjectWithReadOnlyProperty {
    in_both?: boolean;
  }

  /**
   * This is an object with required properties
   */
  export interface SimpleObjectWithRequiredProperty {
    is_foo: boolean;
  }
}

export interface BodyParamPropertyWithHeavilyNestedComplexUnionParams {
  filters?: Array<
    | BodyParamPropertyWithHeavilyNestedComplexUnionParams.Variant1
    | BodyParamPropertyWithHeavilyNestedComplexUnionParams.Variant2
  >;
}

export namespace BodyParamPropertyWithHeavilyNestedComplexUnionParams {
  export interface Variant1 {
    /**
     * Match where document[field] is in value list.
     */
    match?: Variant1.Match;

    /**
     * Used to perform NOT filter. Can be a single filter or a list of filters to
     * perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
     */
    not?: unknown;

    /**
     * Used to perform a logical OR of filters. each element of the OR list can itself
     * be a list to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR
     * C
     */
    or?: Array<unknown>;

    selfreference?: Variant1.Selfreference;
  }

  export namespace Variant1 {
    /**
     * Match where document[field] is in value list.
     */
    export interface Match {
      value: unknown;

      /**
       * Field to match on.
       */
      field?: string;

      fuzzy?: boolean;
    }

    export interface Selfreference {
      /**
       * First field in comparison.
       */
      a: string;

      /**
       * Second field in comparison.
       */
      b: string;
    }
  }

  export interface Variant2 {
    case_insensitive?: boolean;

    condition?: string;

    condition_value?: unknown;

    field?: string;

    filter_type?: 'text_match' | 'word_match';

    fuzzy?: number;

    join?: boolean;

    strict?: 'must' | 'should' | 'must_or';
  }
}

export interface BodyParamReadOnlyPropertiesParams {
  in_both?: boolean;
}

export interface BodyParamStringMapModelRefParams {
  model_ref: StringMapModel;

  name: string;
}

export interface BodyParamTopLevelAllOfParams {
  is_foo: boolean;

  kind: 'VIRTUAL' | 'PHYSICAL';
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

export interface BodyParamTopLevelSharedTypeParams {
  bar?: Shared.SimpleObject;

  foo?: string;
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

export interface BodyParamWithDefaultBodyParamOptionalParams {
  my_version_body_param?: string;

  normal_param?: boolean;
}

export interface BodyParamWithDefaultBodyParamRequiredParams {
  my_version_body_param?: string;

  normal_param: boolean;
}

export interface BodyParamWithModelPropertyParams {
  foo?: string;

  my_model?: MyModel;
}

export namespace BodyParams {
  export import ModelWithParamInName = BodyParamsAPI.ModelWithParamInName;
  export import MyModel = BodyParamsAPI.MyModel;
  export import NestedRequestModelA = BodyParamsAPI.NestedRequestModelA;
  export import NestedRequestModelB = BodyParamsAPI.NestedRequestModelB;
  export import NestedRequestModelC = BodyParamsAPI.NestedRequestModelC;
  export import StringMapModel = BodyParamsAPI.StringMapModel;
  export import BodyParamTopLevelAllOfResponse = BodyParamsAPI.BodyParamTopLevelAllOfResponse;
  export import BodyParamUnionOverlappingPropResponse = BodyParamsAPI.BodyParamUnionOverlappingPropResponse;
  export import BodyParamNestedRequestModelsParams = BodyParamsAPI.BodyParamNestedRequestModelsParams;
  export import BodyParamObjectWithArrayOfObjectsParams = BodyParamsAPI.BodyParamObjectWithArrayOfObjectsParams;
  export import BodyParamParamInModelNameRefParams = BodyParamsAPI.BodyParamParamInModelNameRefParams;
  export import BodyParamPropertyModelRefParams = BodyParamsAPI.BodyParamPropertyModelRefParams;
  export import BodyParamPropertyWithComplexUnionParams = BodyParamsAPI.BodyParamPropertyWithComplexUnionParams;
  export import BodyParamPropertyWithHeavilyNestedComplexUnionParams = BodyParamsAPI.BodyParamPropertyWithHeavilyNestedComplexUnionParams;
  export import BodyParamReadOnlyPropertiesParams = BodyParamsAPI.BodyParamReadOnlyPropertiesParams;
  export import BodyParamStringMapModelRefParams = BodyParamsAPI.BodyParamStringMapModelRefParams;
  export import BodyParamTopLevelAllOfParams = BodyParamsAPI.BodyParamTopLevelAllOfParams;
  export import BodyParamTopLevelAllOfNestedObjectParams = BodyParamsAPI.BodyParamTopLevelAllOfNestedObjectParams;
  export import BodyParamTopLevelAnyOfWithRefParams = BodyParamsAPI.BodyParamTopLevelAnyOfWithRefParams;
  export import BodyParamTopLevelArrayParams = BodyParamsAPI.BodyParamTopLevelArrayParams;
  export import BodyParamTopLevelArrayWithChildrenParams = BodyParamsAPI.BodyParamTopLevelArrayWithChildrenParams;
  export import BodyParamTopLevelOneOfOneEntryParams = BodyParamsAPI.BodyParamTopLevelOneOfOneEntryParams;
  export import BodyParamTopLevelSharedTypeParams = BodyParamsAPI.BodyParamTopLevelSharedTypeParams;
  export import BodyParamUnionOverlappingPropParams = BodyParamsAPI.BodyParamUnionOverlappingPropParams;
  export import BodyParamWithDefaultBodyParamOptionalParams = BodyParamsAPI.BodyParamWithDefaultBodyParamOptionalParams;
  export import BodyParamWithDefaultBodyParamRequiredParams = BodyParamsAPI.BodyParamWithDefaultBodyParamRequiredParams;
  export import BodyParamWithModelPropertyParams = BodyParamsAPI.BodyParamWithModelPropertyParams;
  export import Unions = UnionsAPI.Unions;
  export import ModelNewTypeString = UnionsAPI.ModelNewTypeString;
  export import UnionParamUnionEnumNewTypeParams = UnionsAPI.UnionParamUnionEnumNewTypeParams;
}
