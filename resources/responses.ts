// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as BodyParams from '~/resources/body-params';
import * as Payments from '~/resources/company/payments';
import * as Shared from '~/resources/shared';
import * as API from './';

export class Responses extends APIResource {
  /**
   * Endpoint with a top level additionalProperties response.
   */
  additionalProperties(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ResponseAdditionalPropertiesResponse>> {
    return this.post('/responses/additional_properties', options);
  }

  /**
   * Endpoint with a top level additionalProperties response where the items type
   * points to an object defined as a model in the config.
   */
  additionalPropertiesNestedModelReference(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ResponseAdditionalPropertiesNestedModelReferenceResponse>> {
    return this.post('/responses/additional_properties_nested_model_reference', options);
  }

  /**
   * Method with a response object defined using allOf and inline schema definitions.
   */
  allofSimple(options?: Core.RequestOptions): Promise<Core.APIResponse<ResponseAllofSimpleResponse>> {
    return this.get('/responses/allof/simple', options);
  }

  /**
   * Method with a response object that uses anyOf to indicate nullability.
   */
  anyofNull(options?: Core.RequestOptions): Promise<Core.APIResponse<ObjectWithAnyOfNullProperty>> {
    return this.get('/responses/anyof_null', options);
  }

  /**
   * Endpoint that returns a top-level array.
   */
  arrayResponse(options?: Core.RequestOptions): Promise<Core.APIResponse<ResponseArrayResponseResponse>> {
    return this.get('/responses/array', options);
  }

  /**
   * Endpoint with a top level boolean response.
   */
  booleanResponse(options?: Core.RequestOptions): Promise<Core.APIResponse<ResponseBooleanResponseResponse>> {
    return this.post('/responses/boolean', options);
  }

  /**
   * Endpoint with an empty response.
   */
  emptyResponse(options?: Core.RequestOptions): Promise<Core.APIResponse<void>> {
    return this.post('/responses/empty', { ...options, headers: { Accept: '', ...options?.headers } });
  }

  /**
   * Endpoint with a top level integer response.
   */
  integerResponse(options?: Core.RequestOptions): Promise<Core.APIResponse<ResponseIntegerResponseResponse>> {
    return this.post('/responses/integer', options);
  }

  /**
   * Endpoint with a response schema that doesn't set the `required` property.
   */
  missingRequired(options?: Core.RequestOptions): Promise<Core.APIResponse<ResponseMissingRequiredResponse>> {
    return this.get('/responses/missing_required', options);
  }

  /**
   * Endpoint that returns a nested array.
   */
  nestedArray(options?: Core.RequestOptions): Promise<Core.APIResponse<ResponseNestedArrayResponse>> {
    return this.get('/responses/nested_array', options);
  }

  /**
   * Method with a response object with a different property for each supported type.
   */
  objectAllProperties(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ResponseObjectAllPropertiesResponse>> {
    return this.get('/responses/object/everything', options);
  }

  /**
   * Endpoint with an empty response.
   */
  objectNoProperties(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ResponseObjectNoPropertiesResponse>> {
    return this.post('/responses/object_no_properties', options);
  }

  /**
   * Endpoint with an object response that contains an `additionalProperties`
   * property with a nested schema.
   */
  objectWithAdditionalPropertiesProp(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ResponseObjectWithAdditionalPropertiesPropResponse>> {
    return this.post('/responses/object_with_additional_properties_prop', options);
  }

  /**
   * Endpoint with an object response that contains a union property with multiple
   * nested schemas.
   */
  objectWithHeavilyNestedUnion(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ResponseObjectWithHeavilyNestedUnionResponse>> {
    return this.post('/responses/object_with_heavily_nested_union', options);
  }

  /**
   * Method with a response object that uses oneOf to indicate nullability.
   */
  oneofNull(options?: Core.RequestOptions): Promise<Core.APIResponse<ObjectWithOneOfNullProperty>> {
    return this.get('/responses/oneof_null', options);
  }

  /**
   * Endpoint that returns a $ref to SimpleObject. This is used to test shared
   * response models.
   */
  sharedResponseObject(options?: Core.RequestOptions): Promise<Core.APIResponse<Shared.SimpleObject>> {
    return this.get('/responses/simple_object', options);
  }

  /**
   * Endpoint with a top level string response.
   */
  stringResponse(options?: Core.RequestOptions): Promise<Core.APIResponse<string>> {
    return this.post('/responses/string', {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Endpoint with a top level union response of different types.
   */
  unionOfMixedTypes(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ResponseUnionOfMixedTypesResponse>> {
    return this.post('/responses/union_of_mixed_types', options);
  }

  /**
   * Endpoint with a top level union response of just object variants.
   */
  unionOfObjects(options?: Core.RequestOptions): Promise<Core.APIResponse<ResponseUnionOfObjectsResponse>> {
    return this.post('/responses/union_of_objects', options);
  }
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

export interface SimpleAllof {
  is_foo: boolean;

  kind: 'VIRTUAL' | 'PHYSICAL';
}

export type ResponseAdditionalPropertiesResponse = Record<string, unknown>;

export type ResponseAdditionalPropertiesNestedModelReferenceResponse = Record<string, BodyParams.MyModel>;

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

  i: number;

  n: null;

  object_array: Array<Payments.CompanyPayment>;

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
    | ResponseObjectWithHeavilyNestedUnionResponse.UnionMember0
    | ResponseObjectWithHeavilyNestedUnionResponse.UnionMember1;
}

export namespace ResponseObjectWithHeavilyNestedUnionResponse {
  export interface UnionMember0 {
    union_1_layer_1?: Array<UnionMember0.Union1Layer1>;
  }

  export namespace UnionMember0 {
    export interface Union1Layer1 {
      union_1_layer_2?: string;
    }
  }

  export interface UnionMember1 {
    union_2_layer_1?: UnionMember1.Union2Layer1;
  }

  export namespace UnionMember1 {
    export interface Union2Layer1 {
      union_2_layer_2?: string;
    }
  }
}

export type ResponseStringResponseResponse = string;

export type ResponseUnionOfMixedTypesResponse =
  | Shared.SimpleObject
  | ResponseUnionOfMixedTypesResponse.BasicObject
  | boolean;

export namespace ResponseUnionOfMixedTypesResponse {
  export interface BasicObject {
    item?: string;
  }
}

export type ResponseUnionOfObjectsResponse = Shared.SimpleObject | ResponseUnionOfObjectsResponse.BasicObject;

export namespace ResponseUnionOfObjectsResponse {
  export interface BasicObject {
    item?: string;
  }
}

export namespace Responses {
  export import ObjectWithAnyOfNullProperty = API.ObjectWithAnyOfNullProperty;
  export import ObjectWithOneOfNullProperty = API.ObjectWithOneOfNullProperty;
  export import SimpleAllof = API.SimpleAllof;
  export import ResponseAdditionalPropertiesResponse = API.ResponseAdditionalPropertiesResponse;
  export import ResponseAdditionalPropertiesNestedModelReferenceResponse = API.ResponseAdditionalPropertiesNestedModelReferenceResponse;
  export import ResponseAllofSimpleResponse = API.ResponseAllofSimpleResponse;
  export import ResponseArrayResponseResponse = API.ResponseArrayResponseResponse;
  export import ResponseBooleanResponseResponse = API.ResponseBooleanResponseResponse;
  export import ResponseIntegerResponseResponse = API.ResponseIntegerResponseResponse;
  export import ResponseMissingRequiredResponse = API.ResponseMissingRequiredResponse;
  export import ResponseNestedArrayResponse = API.ResponseNestedArrayResponse;
  export import ResponseObjectAllPropertiesResponse = API.ResponseObjectAllPropertiesResponse;
  export import ResponseObjectNoPropertiesResponse = API.ResponseObjectNoPropertiesResponse;
  export import ResponseObjectWithAdditionalPropertiesPropResponse = API.ResponseObjectWithAdditionalPropertiesPropResponse;
  export import ResponseObjectWithHeavilyNestedUnionResponse = API.ResponseObjectWithHeavilyNestedUnionResponse;
  export import ResponseStringResponseResponse = API.ResponseStringResponseResponse;
  export import ResponseUnionOfMixedTypesResponse = API.ResponseUnionOfMixedTypesResponse;
  export import ResponseUnionOfObjectsResponse = API.ResponseUnionOfObjectsResponse;
}
