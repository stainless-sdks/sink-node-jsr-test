// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class MakeAmbiguousSchemasLooser extends APIResource {
  /**
   * Test case for makeAmbiguousSchemasLooser
   */
  makeAmbiguousSchemasLooser(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse>> {
    return this.get('/make-ambiguous-schemas-looser', options);
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
  export import MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse = API.MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse;
}
