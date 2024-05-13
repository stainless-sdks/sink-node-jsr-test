// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../core';
import { APIResource } from '../../../../resource';
import * as LevelThreeAPI from './level-three';
import * as CardsAPI from '../../../cards';

export class LevelThree extends APIResource {
  /**
   * Get card configuration such as spend limit and state.
   */
  methodLevel3(cardToken: string, options?: Core.RequestOptions): Core.APIPromise<CardsAPI.Card> {
    return this._client.get(`/cards/${cardToken}`, options);
  }
}

export interface ModelLevel3 {
  depth?: 'level 3' | null;
}

export namespace LevelThree {
  export import ModelLevel3 = LevelThreeAPI.ModelLevel3;
}
