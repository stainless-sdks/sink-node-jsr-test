// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CardsAPI from '../../cards';
import * as LevelTwoAPI from './level-two/level-two';
import { LevelTwo, ModelLevel2 } from './level-two/level-two';

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

LevelOne.LevelTwo = LevelTwo;

export declare namespace LevelOne {
  export { type ModelLevel1 as ModelLevel1 };

  export { LevelTwo as LevelTwo, type ModelLevel2 as ModelLevel2 };
}
