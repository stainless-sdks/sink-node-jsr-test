// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import { Arrays } from './arrays';
import * as API from './index';

export class InvalidSchemas extends APIResource {
  arrays: Arrays = new Arrays(this.client);
}

export namespace InvalidSchemas {
  export import Arrays = API.Arrays;
  export import ArrayMissingItemsResponse = API.ArrayMissingItemsResponse;
}
