// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Cards from '~/resources/cards';
import { LevelThree } from './level-three';

export class LevelTwo extends APIResource {
  levelThree: LevelThree = new LevelThree(this.client);

  /**
   * Get card configuration such as spend limit and state.
   */
  methodLevel2(cardToken: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Cards.Card>> {
    return this.get(`/cards/${cardToken}`, options);
  }
}

export interface ModelLevel2 {
  depth?: 'level 2' | null;
}
