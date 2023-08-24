// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import { ImportResource } from './import';
import * as API from './index';

export class ReservedNames extends APIResource {
  import: ImportResource = new ImportResource(this.client);
}

export namespace ReservedNames {
  export import ImportResource = API.ImportResource;
  export import Import = API.Import;
}
