// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as EEOCAPI from 'sink-npm/resources/casing/eeoc';

export class Casing extends APIResource {
  eeoc: EEOCAPI.EEOCResource = new EEOCAPI.EEOCResource(this._client);
}

export namespace Casing {
  export import EEOCResource = EEOCAPI.EEOCResource;
  export import EEOC = EEOCAPI.EEOC;
  export import EEOCsPageCursor = EEOCAPI.EEOCsPageCursor;
  export import EEOCListParams = EEOCAPI.EEOCListParams;
}
