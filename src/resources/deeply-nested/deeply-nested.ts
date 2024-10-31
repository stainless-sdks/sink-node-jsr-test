// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LevelOneAPI from './level-one/level-one';
import { LevelOne, ModelLevel1 } from './level-one/level-one';

export class DeeplyNested extends APIResource {
  levelOne: LevelOneAPI.LevelOne = new LevelOneAPI.LevelOne(this._client);
}

DeeplyNested.LevelOne = LevelOne;

export declare namespace DeeplyNested {
  export { LevelOne as LevelOne, type ModelLevel1 as ModelLevel1 };
}
