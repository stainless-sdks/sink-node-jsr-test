// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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

export declare namespace MakeAmbiguousSchemasLooser {
  export { type MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse as MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse };
}
