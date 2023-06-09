// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Cards from '~/resources/cards';
import { LevelTwo } from './level-two/level-two';

export class LevelOne extends APIResource {
  levelTwo: LevelTwo = new LevelTwo(this.client);

  /**
   * Get card configuration such as spend limit and state.
   */
  methodLevel1(cardToken: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Cards.Card>> {
    return this.get(`/cards/${cardToken}`, options);
  }
}

export interface ModelLevel1 {
  depth?: 'level 1' | null;
}
