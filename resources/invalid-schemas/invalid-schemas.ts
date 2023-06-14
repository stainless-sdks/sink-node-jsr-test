// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { Arrays } from './arrays';

export class InvalidSchemas extends APIResource {
  arrays: Arrays = new Arrays(this.client);
}
