// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import { ImportResource } from './import';
import { Methods } from './methods';
import * as API from './index';

export class ReservedNames extends APIResource {
  import: ImportResource = new ImportResource(this.client);
  methods: Methods = new Methods(this.client);
}

export namespace ReservedNames {
  export import ImportResource = API.ImportResource;
  export import Import = API.Import;

  export import Methods = API.Methods;
  export import Export = API.Export;
  export import Return = API.Return;
  export import MethodExportParams = API.MethodExportParams;
}
