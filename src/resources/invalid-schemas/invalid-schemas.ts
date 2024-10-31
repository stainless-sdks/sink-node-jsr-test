// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ArraysAPI from './arrays';
import { ArrayMissingItemsResponse, Arrays } from './arrays';
import * as ObjectsAPI from './objects';
import { ObjectMissingItemsResponse, Objects } from './objects';

export class InvalidSchemas extends APIResource {
  arrays: ArraysAPI.Arrays = new ArraysAPI.Arrays(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
}

InvalidSchemas.Arrays = Arrays;
InvalidSchemas.Objects = Objects;

export declare namespace InvalidSchemas {
  export { Arrays as Arrays, type ArrayMissingItemsResponse as ArrayMissingItemsResponse };

  export { Objects as Objects, type ObjectMissingItemsResponse as ObjectMissingItemsResponse };
}
