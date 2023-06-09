// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { LevelOne } from './level-one/level-one';

export class DeeplyNested extends APIResource {
  levelOne: LevelOne = new LevelOne(this.client);
}
