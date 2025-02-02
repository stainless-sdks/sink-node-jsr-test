// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as BodyParamsAPI from './body-params';
import * as Shared from '../shared';
import * as ObjectsAPI from './objects';
import * as UnionsAPI from './unions';
import * as ResponsesAPI from '../responses/responses';
import {
  PageCursor,
  PageCursorFromHeaders,
  PageCursorNestedItems,
  PageCursorNestedObjectRef,
  PageCursorSharedRef,
  PageCursorTopLevelArray,
  PageCursorWithReverse,
  PageOffset,
  PageOffsetNoStartField,
  PageOffsetTotalCount,
  PagePageNumber,
  PagePageNumberWithoutCurrentPageResponse,
} from '../../pagination';
import { type BlobLike } from '../../uploads';

export class BodyParams extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  unions: UnionsAPI.Unions = new UnionsAPI.Unions(this._client);

  /**
   * Endpoint with a `requestBody` that has an `type: string` schema and content
   * `application/octet-stream` that is defined as a model in the config.
   */
  binaryStringType(
    body: BodyParamBinaryStringTypeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/binary_string_type', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }

  /**
   * Endpoint with a `requestBody` that has an `type: string, format: binary` schema
   * and content `application/octet-stream` that is defined as a model in the config.
   */
  binaryType(body: BodyParamBinaryTypeParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/body_params/binary_type', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }

  /**
   * An edge case where there are nested sub-properties of the same name with
   * possible clashes.
   */
  duplicateSubproperty(
    body: BodyParamDuplicateSubpropertyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponsesAPI.ModelWithNestedModel> {
    return this._client.post('/body_params/with_duplicate_subproperty', { body, ...options });
  }

  /**
   * Endpoint with a `requestBody` with various enums properties
   */
  enumProperties(body: BodyParamEnumPropertiesParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/body_params/enum_properties', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

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
   * Endpoint with a `requestBody` that has an `type: null` schema that is defined as
   * a model in the config.
   */
  nullType(body: BodyParamNullTypeParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/body_params/null_type', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
   * Endpoint with an object `requestBody` that has properties with union types.
   */
  objectWithUnionProperties(
    body: BodyParamObjectWithUnionPropertiesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/object_with_union_properties', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that only has `readOnly` properties
   */
  onlyReadOnlyProperties(
    body: BodyParamOnlyReadOnlyPropertiesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.patch('/body_params/only_read_only_properties', {
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
   * Endpoint with a `requestBody` that is an `array` type.
   */
  topLevelArrayWithOtherParams(
    params: BodyParamTopLevelArrayWithOtherParamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { id, items } = params;
    return this._client.post('/body_params/top_level_array_with_other_params', {
      query: { id },
      body: items,
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
   * Endpoint with a `requestBody` that has an untyped object schema that is defined
   * as a model in the config.
   */
  unknownObject(body: BodyParamUnknownObjectParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/body_params/unknown_object', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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

export class MyModelsPageCursor extends PageCursor<MyModel> {}

export class MyModelsPagePageNumber extends PagePageNumber<MyModel> {}

export class MyModelsPagePageNumberWithoutCurrentPageResponse extends PagePageNumberWithoutCurrentPageResponse<MyModel> {}

export class MyModelsPageCursorNestedObjectRef extends PageCursorNestedObjectRef<MyModel> {}

export class MyModelsPageCursorSharedRef extends PageCursorSharedRef<MyModel> {}

export class MyModelsPageCursorFromHeaders extends PageCursorFromHeaders<MyModel> {}

export class MyModelsPageCursorTopLevelArray extends PageCursorTopLevelArray<MyModel> {}

export class MyModelsPageCursorWithReverse extends PageCursorWithReverse<MyModel> {}

export class MyModelsPageOffset extends PageOffset<MyModel> {}

export class MyModelsPageOffsetNoStartField extends PageOffsetNoStartField<MyModel> {}

export class MyModelsPageOffsetTotalCount extends PageOffsetTotalCount<MyModel> {}

export class MyModelsPageCursorNestedItems extends PageCursorNestedItems<MyModel> {}

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

export type NullTypeModel = null;

export type StringMapModel = Record<string, string>;

export type UnknownObjectModel = unknown;

export interface BodyParamTopLevelAllOfResponse {
  is_foo: boolean;

  kind: 'VIRTUAL' | 'PHYSICAL';
}

export interface BodyParamUnionOverlappingPropResponse {
  foo: string;
}

export type BodyParamBinaryStringTypeParams = string;

export type BodyParamBinaryTypeParams = string | ArrayBufferView | ArrayBuffer | BlobLike;

export interface BodyParamDuplicateSubpropertyParams {
  baz?: BodyParamDuplicateSubpropertyParams.Baz;

  foo?: BodyParamDuplicateSubpropertyParams.Foo;

  foo_bar?: BodyParamDuplicateSubpropertyParams.FooBar;

  mapping?: BodyParamDuplicateSubpropertyParams.Mapping;

  mappings?: Array<BodyParamDuplicateSubpropertyParams.Mapping>;
}

export namespace BodyParamDuplicateSubpropertyParams {
  export interface Baz {
    bar?: Baz.Bar;
  }

  export namespace Baz {
    export interface Bar {
      hello?: string;
    }
  }

  export interface Foo {
    bar?: Foo.Bar;
  }

  export namespace Foo {
    export interface Bar {
      hello?: string;
    }
  }

  export interface FooBar {
    hello?: string;
  }

  export interface Mapping {
    hello?: string;
  }

  export interface Mapping {
    hello?: string;
  }
}

export interface BodyParamEnumPropertiesParams {
  code?: 1 | 2;

  cost?: 0.1 | 0.2;

  enabled?: true;

  kind?: 'failed' | 'success';
}

export interface BodyParamNestedRequestModelsParams {
  data?: NestedRequestModelA;
}

export interface BodyParamNullTypeParams {
  name: string;

  null_type_prop: NullTypeModel;
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

export interface BodyParamObjectWithUnionPropertiesParams {
  bar: Shared.SimpleObject | BodyParamObjectWithUnionPropertiesParams.ObjectWithModelProperty;

  foo: number | string | boolean | unknown;
}

export namespace BodyParamObjectWithUnionPropertiesParams {
  export interface ObjectWithModelProperty {
    foo?: string;

    my_model?: BodyParamsAPI.MyModel;
  }
}

export interface BodyParamOnlyReadOnlyPropertiesParams {}

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

export interface BodyParamTopLevelArrayWithOtherParamsParams {
  /**
   * Query param:
   */
  id: string;

  /**
   * Body param:
   */
  items: Array<Shared.BasicSharedModelObject>;
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

export interface BodyParamUnknownObjectParams {
  name: string;

  unknown_object_prop: UnknownObjectModel;
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
  export import NullTypeModel = BodyParamsAPI.NullTypeModel;
  export import StringMapModel = BodyParamsAPI.StringMapModel;
  export import UnknownObjectModel = BodyParamsAPI.UnknownObjectModel;
  export import BodyParamTopLevelAllOfResponse = BodyParamsAPI.BodyParamTopLevelAllOfResponse;
  export import BodyParamUnionOverlappingPropResponse = BodyParamsAPI.BodyParamUnionOverlappingPropResponse;
  export import BodyParamBinaryStringTypeParams = BodyParamsAPI.BodyParamBinaryStringTypeParams;
  export import BodyParamBinaryTypeParams = BodyParamsAPI.BodyParamBinaryTypeParams;
  export import BodyParamDuplicateSubpropertyParams = BodyParamsAPI.BodyParamDuplicateSubpropertyParams;
  export import BodyParamEnumPropertiesParams = BodyParamsAPI.BodyParamEnumPropertiesParams;
  export import BodyParamNestedRequestModelsParams = BodyParamsAPI.BodyParamNestedRequestModelsParams;
  export import BodyParamNullTypeParams = BodyParamsAPI.BodyParamNullTypeParams;
  export import BodyParamObjectWithArrayOfObjectsParams = BodyParamsAPI.BodyParamObjectWithArrayOfObjectsParams;
  export import BodyParamObjectWithUnionPropertiesParams = BodyParamsAPI.BodyParamObjectWithUnionPropertiesParams;
  export import BodyParamOnlyReadOnlyPropertiesParams = BodyParamsAPI.BodyParamOnlyReadOnlyPropertiesParams;
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
  export import BodyParamTopLevelArrayWithOtherParamsParams = BodyParamsAPI.BodyParamTopLevelArrayWithOtherParamsParams;
  export import BodyParamTopLevelOneOfOneEntryParams = BodyParamsAPI.BodyParamTopLevelOneOfOneEntryParams;
  export import BodyParamTopLevelSharedTypeParams = BodyParamsAPI.BodyParamTopLevelSharedTypeParams;
  export import BodyParamUnionOverlappingPropParams = BodyParamsAPI.BodyParamUnionOverlappingPropParams;
  export import BodyParamUnknownObjectParams = BodyParamsAPI.BodyParamUnknownObjectParams;
  export import BodyParamWithDefaultBodyParamOptionalParams = BodyParamsAPI.BodyParamWithDefaultBodyParamOptionalParams;
  export import BodyParamWithDefaultBodyParamRequiredParams = BodyParamsAPI.BodyParamWithDefaultBodyParamRequiredParams;
  export import BodyParamWithModelPropertyParams = BodyParamsAPI.BodyParamWithModelPropertyParams;
  export import Objects = ObjectsAPI.Objects;
  export import ObjectMixedKnownAndUnknownParams = ObjectsAPI.ObjectMixedKnownAndUnknownParams;
  export import Unions = UnionsAPI.Unions;
  export import ModelNewTypeString = UnionsAPI.ModelNewTypeString;
  export import UnionParamUnionEnumNewTypeParams = UnionsAPI.UnionParamUnionEnumNewTypeParams;
}
