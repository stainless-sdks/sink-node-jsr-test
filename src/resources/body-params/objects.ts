// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ObjectsAPI from './objects';

export class Objects extends APIResource {
  /**
   * Endpoint with an object `requestBody` that has a property that uses
   * `additionalProperties: true` alongside defined properties
   */
  mixedKnownAndUnknown(
    body: ObjectMixedKnownAndUnknownParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/body_params/objects/mixed_known_and_unknown', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ObjectMixedKnownAndUnknownParams {
  mixed_prop?: ObjectMixedKnownAndUnknownParams.MixedProp;
}

export namespace ObjectMixedKnownAndUnknownParams {
  export interface MixedProp {
    my_known_prop?: number;
    [k: string]: string | number | undefined;
  }
}

export namespace Objects {
  export type ObjectMixedKnownAndUnknownParams = ObjectsAPI.ObjectMixedKnownAndUnknownParams;
}
