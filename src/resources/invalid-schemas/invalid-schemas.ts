// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as ArraysAPI from 'sink-npm/resources/invalid-schemas/arrays';
import * as ObjectsAPI from 'sink-npm/resources/invalid-schemas/objects';

export class InvalidSchemas extends APIResource {
  arrays: ArraysAPI.Arrays = new ArraysAPI.Arrays(this.client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this.client);
}

export namespace InvalidSchemas {
  export import Arrays = ArraysAPI.Arrays;
  export type ArrayMissingItemsResponse = ArraysAPI.ArrayMissingItemsResponse;
  export import Objects = ObjectsAPI.Objects;
  export type ObjectMissingItemsResponse = ObjectsAPI.ObjectMissingItemsResponse;
}
