// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import { LevelOne } from './level-one/level-one';
import * as API from './index';

export class DeeplyNested extends APIResource {
  levelOne: LevelOne = new LevelOne(this.client);
}

export namespace DeeplyNested {
  export import LevelOne = API.LevelOne;
  export import ModelLevel1 = API.ModelLevel1;
}
