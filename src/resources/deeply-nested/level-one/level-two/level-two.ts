// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { LevelThree } from './level-three';
import * as LevelTwoAPI from './level-two';
import * as CardsAPI from '../../../cards';
import * as LevelThreeAPI from './level-three';

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

export namespace LevelTwo {
  export import ModelLevel2 = LevelTwoAPI.ModelLevel2;
  export import LevelThree = LevelThreeAPI.LevelThree;
  export import ModelLevel3 = LevelThreeAPI.ModelLevel3;
}
