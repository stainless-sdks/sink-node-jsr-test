// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ResponsesAPI from 'sink-npm/resources/responses/responses';
import * as BodyParamsAPI from 'sink-npm/resources/body-params';
import * as Shared from 'sink-npm/resources/shared';
import * as PaymentsAPI from 'sink-npm/resources/company/payments';
import * as UnionTypesAPI from 'sink-npm/resources/responses/union-types';

export class Responses extends APIResource {
  unionTypes: UnionTypesAPI.UnionTypes = new UnionTypesAPI.UnionTypes(this.client);

  /**
   * Endpoint with a top level additionalProperties response.
   */
  additionalProperties(options?: Core.RequestOptions): Core.APIPromise<ResponseAdditionalPropertiesResponse> {
    return this.post('/responses/additional_properties', options);
  }

  /**
   * Endpoint with a top level additionalProperties response where the items type
   * points to an object defined as a model in the config.
   */
  additionalPropertiesNestedModelReference(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponseAdditionalPropertiesNestedModelReferenceResponse> {
    return this.post('/responses/additional_properties_nested_model_reference', options);
  }

  /**
   * Method with a response object defined using allOf and two models, one from
   * another resource and one from this resource, as well as a nested allOf.
   */
  allofCrossResource(options?: Core.RequestOptions): Core.APIPromise<ResponseAllofCrossResourceResponse> {
    return this.get('/responses/allof/cross', options);
  }

  /**
   * Method with a response object defined using allOf and inline schema definitions.
   */
  allofSimple(options?: Core.RequestOptions): Core.APIPromise<ResponseAllofSimpleResponse> {
    return this.get('/responses/allof/simple', options);
  }

  /**
   * Method with a response object that uses anyOf to indicate nullability.
   */
  anyofNull(options?: Core.RequestOptions): Core.APIPromise<ObjectWithAnyOfNullProperty> {
    return this.get('/responses/anyof_null', options);
  }

  /**
   * Endpoint that returns a top-level array.
   */
  arrayResponse(options?: Core.RequestOptions): Core.APIPromise<ResponseArrayResponseResponse> {
    return this.get('/responses/array', options);
  }

  /**
   * Endpoint with a top level boolean response.
   */
  booleanResponse(options?: Core.RequestOptions): Core.APIPromise<ResponseBooleanResponseResponse> {
    return this.post('/responses/boolean', options);
  }

  /**
   * Endpoint with an empty response.
   */
  emptyResponse(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.post('/responses/empty', { ...options, headers: { Accept: '', ...options?.headers } });
  }

  /**
   * Endpoint with a top level integer response.
   */
  integerResponse(options?: Core.RequestOptions): Core.APIPromise<ResponseIntegerResponseResponse> {
    return this.post('/responses/integer', options);
  }

  /**
   * Endpoint with a response schema that doesn't set the `required` property.
   */
  missingRequired(options?: Core.RequestOptions): Core.APIPromise<ResponseMissingRequiredResponse> {
    return this.get('/responses/missing_required', options);
  }

  /**
   * Endpoint that returns a nested array.
   */
  nestedArray(options?: Core.RequestOptions): Core.APIPromise<ResponseNestedArrayResponse> {
    return this.get('/responses/nested_array', options);
  }

  /**
   * Method with a response object with a different property for each supported type.
   */
  objectAllProperties(options?: Core.RequestOptions): Core.APIPromise<ResponseObjectAllPropertiesResponse> {
    return this.get('/responses/object/everything', options);
  }

  /**
   * Endpoint with an empty response.
   */
  objectNoProperties(options?: Core.RequestOptions): Core.APIPromise<ResponseObjectNoPropertiesResponse> {
    return this.post('/responses/object_no_properties', options);
  }

  /**
   * Endpoint with an object response that contains an `additionalProperties`
   * property with a nested schema.
   */
  objectWithAdditionalPropertiesProp(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponseObjectWithAdditionalPropertiesPropResponse> {
    return this.post('/responses/object_with_additional_properties_prop', options);
  }

  /**
   * Endpoint with an object response that contains a union property with multiple
   * nested schemas.
   */
  objectWithHeavilyNestedUnion(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponseObjectWithHeavilyNestedUnionResponse> {
    return this.post('/responses/object_with_heavily_nested_union', options);
  }

  /**
   * Method with a response object that uses oneOf to indicate nullability.
   */
  oneofNull(options?: Core.RequestOptions): Core.APIPromise<ObjectWithOneOfNullProperty> {
    return this.get('/responses/oneof_null', options);
  }

  /**
   * Endpoint that returns a $ref to SimpleObject. This is used to test shared
   * response models.
   */
  sharedSimpleObject(options?: Core.RequestOptions): Core.APIPromise<Shared.SimpleObject> {
    return this.get('/responses/shared_simple_object', options);
  }

  /**
   * Endpoint with a top level string response.
   */
  stringResponse(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this.post('/responses/string', {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Should not generate a named return type for object without defined properties;
   * instead, it should simply use an `unknown` type or equivalent. In Java and Go,
   * where we have fancier accessors for raw json stuff, we should generate a named
   * type, but it should basically just have untyped additional properties. See
   * https://linear.app/stainless/issue/STA-563/no-type-should-be-generated-for-endpoints-returning-type-object-schema.
   */
  unknownObject(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this.post('/responses/unknown_object', options);
  }

  /**
   * Should return a ModelWithNestedModel object with a `properties` field that we
   * can rename in the Stainless config to a prettier name.
   */
  withModelInNestedPath(options?: Core.RequestOptions): Core.APIPromise<ModelWithNestedModel> {
    return this.get('/responses/with_model_in_nested_path', options);
  }
}

export interface ModelFromNestedPath {
  /**
   * What email they want in their commit messages
   */
  commit_email: string;

  /**
   * What name they want in their commit messages
   */
  commit_name: string;

  /**
   * Do they prefer view Git diffs side by side, or interleaved?
   */
  diff_style: 'interleaved' | 'side_by_side';
}

export interface ModelWithNestedModel {
  /**
   * Someone's email address.
   */
  email: string;

  preferences: ModelFromNestedPath;
}

export interface ObjectWithAnyOfNullProperty {
  foo: ObjectWithAnyOfNullProperty.Foo | null;
}

export namespace ObjectWithAnyOfNullProperty {
  export interface Foo {
    thing?: string;
  }
}

export interface ObjectWithOneOfNullProperty {
  foo: ObjectWithOneOfNullProperty.Foo | null;
}

export namespace ObjectWithOneOfNullProperty {
  export interface Foo {
    item?: string;
  }
}

export interface ResponsesAllofCrossObject {
  bar?: number;

  foo?: string;
}

export interface SimpleAllof {
  is_foo: boolean;

  kind: 'VIRTUAL' | 'PHYSICAL';
}

export type UnknownObject = unknown;

export type ResponseAdditionalPropertiesResponse = Record<string, unknown>;

export type ResponseAdditionalPropertiesNestedModelReferenceResponse = Record<string, BodyParamsAPI.MyModel>;

export interface ResponseAllofCrossResourceResponse extends SimpleAllof, ResponsesAllofCrossObject {
  baz?: string;
}

export interface ResponseAllofSimpleResponse {
  bar?: string;

  foo?: string;
}

export type ResponseArrayResponseResponse = Array<Shared.SimpleObject>;

export type ResponseBooleanResponseResponse = boolean;

export type ResponseIntegerResponseResponse = number;

export interface ResponseMissingRequiredResponse {
  bar: boolean | null;

  foo: string;
}

export interface ResponseNestedArrayResponse {
  objects: Array<ResponseNestedArrayResponse.Object>;
}

export namespace ResponseNestedArrayResponse {
  export interface Object {
    bar?: number;

    foo?: string;
  }
}

export interface ResponseObjectAllPropertiesResponse {
  allof: SimpleAllof;

  b: boolean;

  e: 'active' | 'inactive' | 'pending';

  i: number;

  n: null;

  object_array: Array<PaymentsAPI.CompanyPayment>;

  primitive_array: Array<string>;

  s: string;
}

export interface ResponseObjectNoPropertiesResponse {}

export interface ResponseObjectWithAdditionalPropertiesPropResponse {
  foo: Record<string, ResponseObjectWithAdditionalPropertiesPropResponse.Foo>;
}

export namespace ResponseObjectWithAdditionalPropertiesPropResponse {
  export interface Foo {
    bar?: string;
  }
}

export interface ResponseObjectWithHeavilyNestedUnionResponse {
  union_prop:
    | ResponseObjectWithHeavilyNestedUnionResponse.UnionPropVariant1
    | ResponseObjectWithHeavilyNestedUnionResponse.UnionPropVariant2;
}

export namespace ResponseObjectWithHeavilyNestedUnionResponse {
  export interface UnionPropVariant1 {
    union_1_layer_1?: Array<UnionPropVariant1.Union1Layer1>;
  }

  export namespace UnionPropVariant1 {
    export interface Union1Layer1 {
      union_1_layer_2?: string;
    }
  }

  export interface UnionPropVariant2 {
    union_2_layer_1?: UnionPropVariant2.Union2Layer1;
  }

  export namespace UnionPropVariant2 {
    export interface Union2Layer1 {
      union_2_layer_2?: string;
    }
  }
}

export type ResponseStringResponseResponse = string;

export namespace Responses {
  export import ModelFromNestedPath = ResponsesAPI.ModelFromNestedPath;
  export import ModelWithNestedModel = ResponsesAPI.ModelWithNestedModel;
  export import ObjectWithAnyOfNullProperty = ResponsesAPI.ObjectWithAnyOfNullProperty;
  export import ObjectWithOneOfNullProperty = ResponsesAPI.ObjectWithOneOfNullProperty;
  export import ResponsesAllofCrossObject = ResponsesAPI.ResponsesAllofCrossObject;
  export import SimpleAllof = ResponsesAPI.SimpleAllof;
  export import UnknownObject = ResponsesAPI.UnknownObject;
  export import ResponseAdditionalPropertiesResponse = ResponsesAPI.ResponseAdditionalPropertiesResponse;
  export import ResponseAdditionalPropertiesNestedModelReferenceResponse = ResponsesAPI.ResponseAdditionalPropertiesNestedModelReferenceResponse;
  export import ResponseAllofCrossResourceResponse = ResponsesAPI.ResponseAllofCrossResourceResponse;
  export import ResponseAllofSimpleResponse = ResponsesAPI.ResponseAllofSimpleResponse;
  export import ResponseArrayResponseResponse = ResponsesAPI.ResponseArrayResponseResponse;
  export import ResponseBooleanResponseResponse = ResponsesAPI.ResponseBooleanResponseResponse;
  export import ResponseIntegerResponseResponse = ResponsesAPI.ResponseIntegerResponseResponse;
  export import ResponseMissingRequiredResponse = ResponsesAPI.ResponseMissingRequiredResponse;
  export import ResponseNestedArrayResponse = ResponsesAPI.ResponseNestedArrayResponse;
  export import ResponseObjectAllPropertiesResponse = ResponsesAPI.ResponseObjectAllPropertiesResponse;
  export import ResponseObjectNoPropertiesResponse = ResponsesAPI.ResponseObjectNoPropertiesResponse;
  export import ResponseObjectWithAdditionalPropertiesPropResponse = ResponsesAPI.ResponseObjectWithAdditionalPropertiesPropResponse;
  export import ResponseObjectWithHeavilyNestedUnionResponse = ResponsesAPI.ResponseObjectWithHeavilyNestedUnionResponse;
  export import ResponseStringResponseResponse = ResponsesAPI.ResponseStringResponseResponse;
  export import UnionTypes = UnionTypesAPI.UnionTypes;
  export import UnionTypeMixedTypesResponse = UnionTypesAPI.UnionTypeMixedTypesResponse;
  export import UnionTypeNumbersResponse = UnionTypesAPI.UnionTypeNumbersResponse;
  export import UnionTypeObjectsResponse = UnionTypesAPI.UnionTypeObjectsResponse;
  export import UnionTypeSuperMixedTypesResponse = UnionTypesAPI.UnionTypeSuperMixedTypesResponse;
}
