// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import { Arrays } from './arrays';
import { Objects } from './objects';
import * as API from './index';

export class InvalidSchemas extends APIResource {
  arrays: Arrays = new Arrays(this.client);
  objects: Objects = new Objects(this.client);
}

export namespace InvalidSchemas {
  export import Arrays = API.Arrays;
  export import ArrayMissingItemsResponse = API.ArrayMissingItemsResponse;

  export import Objects = API.Objects;
  export import ObjectMissingItemsResponse = API.ObjectMissingItemsResponse;
}
