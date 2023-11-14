// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as LevelThreeAPI from 'sink-npm/resources/deeply-nested/level-one/level-two/level-three';
import * as CardsAPI from 'sink-npm/resources/cards';

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
