// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as LevelOneAPI from 'sink-npm/resources/deeply-nested/level-one/level-one';
import * as CardsAPI from 'sink-npm/resources/cards';
import * as LevelTwoAPI from 'sink-npm/resources/deeply-nested/level-one/level-two/level-two';

export class LevelOne extends APIResource {
  levelTwo: LevelTwoAPI.LevelTwo = new LevelTwoAPI.LevelTwo(this.client);

  /**
   * Get card configuration such as spend limit and state.
   */
  methodLevel1(cardToken: string, options?: Core.RequestOptions): Core.APIPromise<CardsAPI.Card> {
    return this.get(`/cards/${cardToken}`, options);
  }
}

export interface ModelLevel1 {
  depth?: 'level 1' | null;
}

export namespace LevelOne {
  export type ModelLevel1 = LevelOneAPI.ModelLevel1;
  export import LevelTwo = LevelTwoAPI.LevelTwo;
  export type ModelLevel2 = LevelTwoAPI.ModelLevel2;
}
