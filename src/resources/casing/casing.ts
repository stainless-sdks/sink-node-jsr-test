// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import { EEOCResource } from './eeoc';
import * as API from './index';

export class Casing extends APIResource {
  eeoc: EEOCResource = new EEOCResource(this.client);
}

export namespace Casing {
  export import EEOCResource = API.EEOCResource;
  export import EEOC = API.EEOC;
  export import EEOCsPageCursor = API.EEOCsPageCursor;
  export import EEOCListParams = API.EEOCListParams;
}
