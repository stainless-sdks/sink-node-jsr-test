// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as Cards from 'sink-npm/resources/cards';
import { LevelThree } from './level-three';
import * as API from './';

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

export namespace LevelTwo {
  export import ModelLevel2 = API.ModelLevel2;

  export import LevelThree = API.LevelThree;
  export import ModelLevel3 = API.ModelLevel3;
}
