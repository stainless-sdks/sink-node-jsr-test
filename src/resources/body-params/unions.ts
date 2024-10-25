// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UnionsAPI from './unions';

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
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type ModelNewTypeString = string;

export interface UnionParamUnionEnumNewTypeParams {
  model?: ModelNewTypeString | 'gpt-4' | 'gpt-3';
}

export namespace Unions {
  export type ModelNewTypeString = UnionsAPI.ModelNewTypeString;
  export type UnionParamUnionEnumNewTypeParams = UnionsAPI.UnionParamUnionEnumNewTypeParams;
}
