// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as MakeAmbiguousSchemasExplicitAPI from './make-ambiguous-schemas-explicit';

export class MakeAmbiguousSchemasExplicit extends APIResource {
  /**
   * Test case for makeAmbiguousSchemasExplicit
   */
  makeAmbiguousSchemasExplicit(
    options?: Core.RequestOptions,
  ): Core.APIPromise<MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse> {
    return this._client.get('/make-ambiguous-schemas-explicit', options);
  }
}

export interface MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse {
  any: unknown;

  anyJson: unknown;

  anyObject: Record<string, unknown>;

  empty: unknown;

  emptyAdditionalProperties: Record<string, unknown>;

  emptyObject: Record<string, unknown>;
}

export namespace MakeAmbiguousSchemasExplicit {
  export type MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse =
    MakeAmbiguousSchemasExplicitAPI.MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse;
}
