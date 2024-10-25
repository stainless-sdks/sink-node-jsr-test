// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EEOCAPI from './eeoc';

export class Casing extends APIResource {
  eeoc: EEOCAPI.EEOCResource = new EEOCAPI.EEOCResource(this._client);
}

export namespace Casing {
  export import EEOCResource = EEOCAPI.EEOCResource;
  export import EEOC = EEOCAPI.EEOC;
  export import EEOCsPageCursor = EEOCAPI.EEOCsPageCursor;
  export import EEOCListParams = EEOCAPI.EEOCListParams;
}
