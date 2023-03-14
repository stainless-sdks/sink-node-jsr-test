// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as BodyParams from '~/resources/body-params';
import { FakePage } from '~/pagination';
import * as Shared from '~/resources/shared';

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
   * Method with a response object that uses anyOf to indicate nullability.
   */
  anyofNull(options?: Core.RequestOptions): Promise<Core.APIResponse<ObjectWithAnyOfNullProperty>> {
    return this.get('/responses/anyof_null', options);
  }

  /**
   * Endpoint that returns a top-level array.
   */
  arrayResponse(options?: Core.RequestOptions): Core.PagePromise<SimpleObjectsFakePage> {
    return this.getAPIList('/responses/array', SimpleObjectsFakePage, options);
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
  emptyResponse(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
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
   * Endpoint with an empty response.
   */
  objectNoProperties(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ResponseObjectNoPropertiesResponse>> {
    return this.post('/responses/object_no_properties', options);
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
  stringResponse(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<string>>> {
    return this.post('/responses/string', {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }
}

export class SimpleObjectsFakePage extends FakePage<Shared.SimpleObject> {}

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

export interface ResponseObjectNoPropertiesResponse {}

export type ResponseAdditionalPropertiesResponse = Record<string, unknown>;

export type ResponseAdditionalPropertiesNestedModelReferenceResponse = Record<string, BodyParams.MyModel>;

export type ResponseIntegerResponseResponse = number;

export type ResponseStringResponseResponse = string;

export type ResponseBooleanResponseResponse = boolean;

export interface ResponseMissingRequiredResponse {
  bar: boolean | null;

  foo: string;
}
