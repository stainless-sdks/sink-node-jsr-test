// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CardsAPI from '../../../cards';
import * as LevelThreeAPI from './level-three';
import { LevelThree, ModelLevel3 } from './level-three';

export class LevelTwo extends APIResource {
  levelThree: LevelThreeAPI.LevelThree = new LevelThreeAPI.LevelThree(this._client);

  /**
   * Get card configuration such as spend limit and state.
   */
  methodLevel2(cardToken: string, options?: Core.RequestOptions): Core.APIPromise<CardsAPI.Card> {
    return this._client.get(`/cards/${cardToken}`, options);
  }
}

export interface ModelLevel2 {
  depth?: 'level 2' | null;
}

LevelTwo.LevelThree = LevelThree;

export declare namespace LevelTwo {
  export { type ModelLevel2 as ModelLevel2 };

  export { LevelThree as LevelThree, type ModelLevel3 as ModelLevel3 };
}
