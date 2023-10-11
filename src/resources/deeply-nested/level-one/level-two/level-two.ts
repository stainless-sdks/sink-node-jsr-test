// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as LevelTwoAPI from 'sink-npm/resources/deeply-nested/level-one/level-two/level-two';
import * as CardsAPI from 'sink-npm/resources/cards';
import * as LevelThreeAPI from 'sink-npm/resources/deeply-nested/level-one/level-two/level-three';

export class LevelTwo extends APIResource {
  levelThree: LevelThreeAPI.LevelThree = new LevelThreeAPI.LevelThree(this.client);

  /**
   * Get card configuration such as spend limit and state.
   */
  methodLevel2(cardToken: string, options?: Core.RequestOptions): Core.APIPromise<CardsAPI.Card> {
    return this.get(`/cards/${cardToken}`, options);
  }
}

export interface ModelLevel2 {
  depth?: 'level 2' | null;
}

export namespace LevelTwo {
  export import ModelLevel2 = LevelTwoAPI.ModelLevel2;
  export import LevelThree = LevelThreeAPI.LevelThree;
  export import ModelLevel3 = LevelThreeAPI.ModelLevel3;
}
