// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ReservedNamesAPI from 'sink-npm/resources/names/reserved-names/reserved-names';
import * as ImportAPI from 'sink-npm/resources/names/reserved-names/import';
import * as MethodsAPI from 'sink-npm/resources/names/reserved-names/methods';

export class ReservedNames extends APIResource {
  import: ImportAPI.ImportResource = new ImportAPI.ImportResource(this._client);
  methods: MethodsAPI.Methods = new MethodsAPI.Methods(this._client);

  /**
   * Endpoint with a `requestBody` that has a property name that can conflict with
   * language keywords.
   */
  commonReservedParams(
    body: ReservedNameCommonReservedParamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/names/reserved_names/common_reserved_params', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ReservedNameCommonReservedParamsParams {
  from: string;
}

export namespace ReservedNames {
  export import ReservedNameCommonReservedParamsParams = ReservedNamesAPI.ReservedNameCommonReservedParamsParams;
  export import ImportResource = ImportAPI.ImportResource;
  export import Import = ImportAPI.Import;
  export import Methods = MethodsAPI.Methods;
  export import Export = MethodsAPI.Export;
  export import Return = MethodsAPI.Return;
  export import MethodExportParams = MethodsAPI.MethodExportParams;
}
