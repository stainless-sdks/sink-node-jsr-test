// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as Cards from 'sink-npm/resources/cards';
import { LevelTwo } from './level-two/level-two';
import * as API from './';

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

export namespace LevelOne {
  export import ModelLevel1 = API.ModelLevel1;

  export import LevelTwo = API.LevelTwo;
  export import ModelLevel2 = API.ModelLevel2;
}
