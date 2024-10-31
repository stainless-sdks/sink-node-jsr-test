// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EEOCAPI from './eeoc';
import { EEOC, EEOCListParams, EEOCResource, EEOCsPageCursor } from './eeoc';

export class Casing extends APIResource {
  eeoc: EEOCAPI.EEOCResource = new EEOCAPI.EEOCResource(this._client);
}

Casing.EEOCResource = EEOCResource;
Casing.EEOCsPageCursor = EEOCsPageCursor;

export declare namespace Casing {
  export {
    EEOCResource as EEOCResource,
    type EEOC as EEOC,
    EEOCsPageCursor as EEOCsPageCursor,
    type EEOCListParams as EEOCListParams,
  };
}
