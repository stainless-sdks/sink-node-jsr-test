// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as LevelOneAPI from 'sink-npm/resources/deeply-nested/level-one/level-one';

export class DeeplyNested extends APIResource {
  levelOne: LevelOneAPI.LevelOne = new LevelOneAPI.LevelOne(this.client);
}

export namespace DeeplyNested {
  export import LevelOne = LevelOneAPI.LevelOne;
  export import ModelLevel1 = LevelOneAPI.ModelLevel1;
}
