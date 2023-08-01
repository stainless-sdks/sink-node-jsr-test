// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as Cards from 'sink-npm/resources/cards';
import * as API from './index';

export class LevelThree extends APIResource {
  /**
   * Get card configuration such as spend limit and state.
   */
  methodLevel3(cardToken: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Cards.Card>> {
    return this.get(`/cards/${cardToken}`, options);
  }
}

export interface ModelLevel3 {
  depth?: 'level 3' | null;
}

export namespace LevelThree {
  export import ModelLevel3 = API.ModelLevel3;
}
