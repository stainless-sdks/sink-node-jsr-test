// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { EEOCResource } from './eeoc';

export class Casing extends APIResource {
  eeoc: EEOCResource = new EEOCResource(this.client);
}
