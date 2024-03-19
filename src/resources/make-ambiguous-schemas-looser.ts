// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as MakeAmbiguousSchemasLooserAPI from 'sink-npm/resources/make-ambiguous-schemas-looser';

export class MakeAmbiguousSchemasLooser extends APIResource {
  /**
   * Test case for makeAmbiguousSchemasLooser
   */
  makeAmbiguousSchemasLooser(
    options?: Core.RequestOptions,
  ): Core.APIPromise<MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse> {
    return this._client.get('/make-ambiguous-schemas-looser', options);
  }
}

export interface MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse {
  any: unknown;

  anyJson: unknown;

  anyObject: Record<string, unknown>;

  empty: unknown;

  emptyAdditionalProperties: unknown;

  emptyObject: unknown;
}

export namespace MakeAmbiguousSchemasLooser {
  export import MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse = MakeAmbiguousSchemasLooserAPI.MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse;
}
