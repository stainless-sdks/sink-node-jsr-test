// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as MakeAmbiguousSchemasExplicitAPI from 'sink-npm/resources/make-ambiguous-schemas-explicit';

export class MakeAmbiguousSchemasExplicit extends APIResource {
  /**
   * Test case for makeAmbiguousSchemasExplicit
   */
  makeAmbiguousSchemasExplicit(
    options?: Core.RequestOptions,
  ): Core.APIPromise<MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse> {
    return this.get('/make-ambiguous-schemas-explicit', options);
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
