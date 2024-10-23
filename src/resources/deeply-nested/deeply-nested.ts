// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { LevelOne } from './level-one/level-one';
import * as LevelOneAPI from './level-one/level-one';

export class DeeplyNested extends APIResource {
  levelOne: LevelOneAPI.LevelOne = new LevelOneAPI.LevelOne(this._client);
}

export namespace DeeplyNested {
  export import LevelOne = LevelOneAPI.LevelOne;
  export import ModelLevel1 = LevelOneAPI.ModelLevel1;
}
