// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as UnionsAPI from 'sink-npm/resources/body-params/unions';

export class Unions extends APIResource {
  /**
   * Defines a request parameter that is configured to generate a `NewType` type in
   * Python and is used in a union type alongside an enum.
   */
  paramUnionEnumNewType(
    body: UnionParamUnionEnumNewTypeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/unions/param_union_enum_new_type', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export type ModelNewTypeString = string;

export interface UnionParamUnionEnumNewTypeParams {
  model?: ModelNewTypeString | 'gpt-4' | 'gpt-3';
}

export namespace Unions {
  export import ModelNewTypeString = UnionsAPI.ModelNewTypeString;
  export import UnionParamUnionEnumNewTypeParams = UnionsAPI.UnionParamUnionEnumNewTypeParams;
}
