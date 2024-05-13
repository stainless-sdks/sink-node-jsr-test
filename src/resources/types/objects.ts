// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ObjectsAPI from './objects';
import * as BodyParamsAPI from '../body-params/body-params';

export class Objects extends APIResource {
  /**
   * Endpoint with a response schema object that contains a mix of known & unknown
   * properties with the same value types.
   */
  mixedKnownAndUnknown(options?: Core.RequestOptions): Core.APIPromise<ObjectMixedKnownAndUnknownResponse> {
    return this._client.get('/types/object/mixed_known_and_unknown', options);
  }

  /**
   * Endpoint with a response schema object that contains multiple properties that
   * reference the same $ref in array items that is _not_ a model in the config.
   * Three child types should be generated, one for each property.
   */
  multipleArrayPropertiesSameRef(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectMultipleArrayPropertiesSameRefResponse> {
    return this._client.get('/types/object/multiple_array_properties_same_ref', options);
  }

  /**
   * Endpoint with a response schema object that contains multiple properties that
   * reference the same model.
   */
  multiplePropertiesSameModel(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectMultiplePropertiesSameModelResponse> {
    return this._client.get('/types/object/multiple_properties_same_model', options);
  }

  /**
   * Endpoint with a response schema object that contains multiple properties that
   * reference the same $ref that is _not_ a model in the config. Three child types
   * should be generated. One for each property.
   */
  multiplePropertiesSameRef(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectMultiplePropertiesSameRefResponse> {
    return this._client.get('/types/object/multiple_properties_same_ref', options);
  }

  /**
   * Endpoint with a response schema object that contains properties that are
   * primitive 2d arrays
   */
  twoDimensionalArrayPrimitiveProperty(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectTwoDimensionalArrayPrimitivePropertyResponse> {
    return this._client.get('/types/object/2d_array_primitive_properties', options);
  }

  /**
   * Endpoint with a response schema object that does not define any properties
   */
  unknownObject(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/types/object/unknown_object', options);
  }
}

export type UnknownObjectType = unknown;

export interface ObjectMixedKnownAndUnknownResponse {
  foo?: number;
  [k: string]: number;
}

export interface ObjectMultipleArrayPropertiesSameRefResponse {
  required_prop: Array<ObjectMultipleArrayPropertiesSameRefResponse.RequiredProp>;

  bar?: Array<ObjectMultipleArrayPropertiesSameRefResponse.Bar>;

  foo?: Array<ObjectMultipleArrayPropertiesSameRefResponse.Foo>;
}

export namespace ObjectMultipleArrayPropertiesSameRefResponse {
  export interface RequiredProp {
    foo?: string;
  }

  export interface Bar {
    foo?: string;
  }

  export interface Foo {
    foo?: string;
  }
}

export interface ObjectMultiplePropertiesSameModelResponse {
  required_prop: BodyParamsAPI.MyModel;

  bar?: BodyParamsAPI.MyModel;

  foo?: BodyParamsAPI.MyModel;
}

export interface ObjectMultiplePropertiesSameRefResponse {
  required_prop: ObjectMultiplePropertiesSameRefResponse.RequiredProp;

  bar?: ObjectMultiplePropertiesSameRefResponse.Bar;

  foo?: ObjectMultiplePropertiesSameRefResponse.Foo;
}

export namespace ObjectMultiplePropertiesSameRefResponse {
  export interface RequiredProp {
    foo?: string;
  }

  export interface Bar {
    foo?: string;
  }

  export interface Foo {
    foo?: string;
  }
}

export interface ObjectTwoDimensionalArrayPrimitivePropertyResponse {
  boolean_prop: Array<Array<boolean>>;

  integer_prop: Array<Array<number>>;

  number_prop: Array<Array<number>>;

  string_prop: Array<Array<string>>;
}

export namespace Objects {
  export import UnknownObjectType = ObjectsAPI.UnknownObjectType;
  export import ObjectMixedKnownAndUnknownResponse = ObjectsAPI.ObjectMixedKnownAndUnknownResponse;
  export import ObjectMultipleArrayPropertiesSameRefResponse = ObjectsAPI.ObjectMultipleArrayPropertiesSameRefResponse;
  export import ObjectMultiplePropertiesSameModelResponse = ObjectsAPI.ObjectMultiplePropertiesSameModelResponse;
  export import ObjectMultiplePropertiesSameRefResponse = ObjectsAPI.ObjectMultiplePropertiesSameRefResponse;
  export import ObjectTwoDimensionalArrayPrimitivePropertyResponse = ObjectsAPI.ObjectTwoDimensionalArrayPrimitivePropertyResponse;
}
