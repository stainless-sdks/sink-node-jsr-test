// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as BodyParams from '~/resources/body-params';
import * as API from './';

export class Objects extends APIResource {
  /**
   * Endpoint with a response schema object that contains a mix of known & unknown
   * properties with the same value types.
   */
  mixedKnownAndUnknown(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ObjectMixedKnownAndUnknownResponse>> {
    return this.get('/types/object/mixed_known_and_unknown', options);
  }

  /**
   * Endpoint with a response schema object that contains multiple properties that
   * reference the same $ref in array items that is _not_ a model in the config.
   * Three child types should be generated. One for each property.
   */
  multipleArrayPropertiesSameRef(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ObjectMultipleArrayPropertiesSameRefResponse>> {
    return this.get('/types/object/multiple_array_properties_same_ref', options);
  }

  /**
   * Endpoint with a response schema object that contains multiple properties that
   * reference the same model.
   */
  multiplePropertiesSameModel(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ObjectMultiplePropertiesSameModelResponse>> {
    return this.get('/types/object/multiple_properties_same_model', options);
  }

  /**
   * Endpoint with a response schema object that contains multiple properties that
   * reference the same $ref that is _not_ a model in the config. Three child types
   * should be generated. One for each property.
   */
  multiplePropertiesSameRef(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ObjectMultiplePropertiesSameRefResponse>> {
    return this.get('/types/object/multiple_properties_same_ref', options);
  }
}

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
  required_prop: BodyParams.MyModel;

  bar?: BodyParams.MyModel;

  foo?: BodyParams.MyModel;
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

export namespace Objects {
  export import ObjectMixedKnownAndUnknownResponse = API.ObjectMixedKnownAndUnknownResponse;
  export import ObjectMultipleArrayPropertiesSameRefResponse = API.ObjectMultipleArrayPropertiesSameRefResponse;
  export import ObjectMultiplePropertiesSameModelResponse = API.ObjectMultiplePropertiesSameModelResponse;
  export import ObjectMultiplePropertiesSameRefResponse = API.ObjectMultiplePropertiesSameRefResponse;
}
