// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as ImportAPI from 'sink-npm/resources/names/reserved-names/import';
import * as MethodsAPI from 'sink-npm/resources/names/reserved-names/methods';

export class ReservedNames extends APIResource {
  import: ImportAPI.ImportResource = new ImportAPI.ImportResource(this.client);
  methods: MethodsAPI.Methods = new MethodsAPI.Methods(this.client);
}

export namespace ReservedNames {
  export import ImportResource = ImportAPI.ImportResource;
  export import Import = ImportAPI.Import;
  export import Methods = MethodsAPI.Methods;
  export import Export = MethodsAPI.Export;
  export import Return = MethodsAPI.Return;
  export import MethodExportParams = MethodsAPI.MethodExportParams;
}
