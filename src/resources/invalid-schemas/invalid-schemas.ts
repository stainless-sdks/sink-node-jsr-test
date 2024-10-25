// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ArraysAPI from './arrays';
import * as ObjectsAPI from './objects';

export class InvalidSchemas extends APIResource {
  arrays: ArraysAPI.Arrays = new ArraysAPI.Arrays(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
}

export namespace InvalidSchemas {
  export import Arrays = ArraysAPI.Arrays;
  export type ArrayMissingItemsResponse = ArraysAPI.ArrayMissingItemsResponse;
  export import Objects = ObjectsAPI.Objects;
  export type ObjectMissingItemsResponse = ObjectsAPI.ObjectMissingItemsResponse;
}
