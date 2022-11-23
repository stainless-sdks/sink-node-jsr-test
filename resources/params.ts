// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';

export class Params extends APIResource {
  /**
   * Endpoint with a `requestBody` that sets `readOnly` to `true` on top level
   * properties
   */
  readOnlyProperties(body: ParamReadOnlyPropertiesParams, options?: Core.RequestOptions): Promise<void> {
    return this.post('/params/read_only_properties', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` making use of allOf.
   */
  topLevelAllOf(body: ParamTopLevelAllOfParams, options?: Core.RequestOptions): Promise<void> {
    return this.post('/params/top_level_allOf', {
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
    body: ParamTopLevelAllOfNestedObjectParams,
    options?: Core.RequestOptions,
  ): Promise<void> {
    return this.post('/params/top_level_allOf_nested_object', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` making use of anyOf.
   */
  topLevelAnyOf(
    body: ParamTopLevelAnyOfParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ParamTopLevelAnyOfResponse>> {
    return this.post('/params/top_level_anyOf', { body, ...options });
  }

  /**
   * Endpoint with a `requestBody` making use of oneOf.
   */
  topLevelOneOf(
    body: ParamTopLevelOneOfParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ParamTopLevelOneOfResponse>> {
    return this.post('/params/top_level_oneOf', { body, ...options });
  }

  /**
   * Endpoint with a `requestBody` making use of anyOf where the same property is
   * defined in both variants.
   */
  unionOverlappingProp(
    body?: ParamUnionOverlappingPropParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ParamUnionOverlappingPropResponse>>;
  unionOverlappingProp(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ParamUnionOverlappingPropResponse>>;
  unionOverlappingProp(
    body: ParamUnionOverlappingPropParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ParamUnionOverlappingPropResponse>> {
    if (isRequestOptions(body)) {
      return this.unionOverlappingProp({}, body);
    }

    return this.post('/params/top_level_anyOf_overlapping_property', { body, ...options });
  }
}

export interface ParamTopLevelAnyOfResponse {
  foo?: string;
}

export interface ParamTopLevelOneOfResponse {
  foo?: string;
}

export interface ParamUnionOverlappingPropResponse {
  foo?: string;
}

export interface ParamReadOnlyPropertiesParams {
  in_both?: boolean;
}

export type ParamTopLevelAllOfParams = ParamTopLevelAllOfParams.ObjectWithRequiredEnum &
  ParamTopLevelAllOfParams.SimpleObjectWithRequiredProperty;

export namespace ParamTopLevelAllOfParams {
  export interface ObjectWithRequiredEnum {
    kind: 'VIRTUAL' | 'PHYSICAL';
  }

  export interface SimpleObjectWithRequiredProperty {
    is_foo: boolean;
  }
}

export type ParamTopLevelAllOfNestedObjectParams =
  ParamTopLevelAllOfNestedObjectParams.ObjectWithRequiredEnum &
    ParamTopLevelAllOfNestedObjectParams.ObjectWithNestedObjectRef;

export namespace ParamTopLevelAllOfNestedObjectParams {
  export interface ObjectWithRequiredEnum {
    kind: 'VIRTUAL' | 'PHYSICAL';
  }

  export interface ObjectWithNestedObjectRef {
    nested_obj?: ObjectWithNestedObjectRef.NestedObj;
  }

  export namespace ObjectWithNestedObjectRef {
    export interface NestedObj {
      is_foo: boolean;
    }
  }
}

export type ParamTopLevelAnyOfParams =
  | ParamTopLevelAnyOfParams.ObjectWithRequiredEnum
  | ParamTopLevelAnyOfParams.SimpleObjectWithRequiredProperty;

export namespace ParamTopLevelAnyOfParams {
  export interface ObjectWithRequiredEnum {
    kind: 'VIRTUAL' | 'PHYSICAL';
  }

  export interface SimpleObjectWithRequiredProperty {
    is_foo: boolean;
  }
}

export type ParamTopLevelOneOfParams =
  | ParamTopLevelOneOfParams.ObjectWithRequiredEnum
  | ParamTopLevelOneOfParams.SimpleObjectWithRequiredProperty;

export namespace ParamTopLevelOneOfParams {
  export interface ObjectWithRequiredEnum {
    kind: 'VIRTUAL' | 'PHYSICAL';
  }

  export interface SimpleObjectWithRequiredProperty {
    is_foo: boolean;
  }
}

export type ParamUnionOverlappingPropParams =
  | ParamUnionOverlappingPropParams.ObjectWithFooProperty1
  | ParamUnionOverlappingPropParams.ObjectWithFooProperty2;

export namespace ParamUnionOverlappingPropParams {
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
