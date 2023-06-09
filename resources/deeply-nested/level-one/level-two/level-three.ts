// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Cards from '~/resources/cards';

export class LevelThree extends APIResource {
  /**
   * Get card configuration such as spend limit and state.
   */
  methodLevel3(cardToken: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Cards.Card>> {
    return this.get(`/cards/${cardToken}`, options);
  }
}

export interface ModelLevel3 {
  depth?: 'level 3' | null;
}
