// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PrimitivesAPI from './primitives';

export class Primitives extends APIResource {
  /**
   * Endpoint that has a request body property that points to a string model &
   * returns an object with a string model prop
   */
  strings(
    body: PrimitiveStringsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrimitiveStringsResponse> {
    return this._client.post('/types/primitives/strings', { body, ...options });
  }
}

export type ModelString = string;

export interface PrimitiveStringsResponse {
  string_prop: ModelString;
}

export interface PrimitiveStringsParams {
  string_param?: ModelString;
}

export namespace Primitives {
  export import ModelString = PrimitivesAPI.ModelString;
  export import PrimitiveStringsResponse = PrimitivesAPI.PrimitiveStringsResponse;
  export import PrimitiveStringsParams = PrimitivesAPI.PrimitiveStringsParams;
}
