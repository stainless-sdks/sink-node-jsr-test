// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as LevelOneAPI from './level-one';
import * as CardsAPI from '../../cards';
import * as LevelTwoAPI from './level-two/level-two';

export class LevelOne extends APIResource {
  levelTwo: LevelTwoAPI.LevelTwo = new LevelTwoAPI.LevelTwo(this._client);

  /**
   * Get card configuration such as spend limit and state.
   */
  methodLevel1(cardToken: string, options?: Core.RequestOptions): Core.APIPromise<CardsAPI.Card> {
    return this._client.get(`/cards/${cardToken}`, options);
  }
}

export interface ModelLevel1 {
  depth?: 'level 1' | null;
}

export namespace LevelOne {
  export import ModelLevel1 = LevelOneAPI.ModelLevel1;
  export import LevelTwo = LevelTwoAPI.LevelTwo;
  export import ModelLevel2 = LevelTwoAPI.ModelLevel2;
}
