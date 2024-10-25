// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ReservedNamesAPI from './reserved-names';
import * as ImportAPI from './import';
import * as MethodsAPI from './methods';
import * as PublicAPI from './public/public';

export class ReservedNames extends APIResource {
  public: PublicAPI.PublicResource = new PublicAPI.PublicResource(this._client);
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
  export type ReservedNameCommonReservedParamsParams =
    ReservedNamesAPI.ReservedNameCommonReservedParamsParams;
  export import PublicResource = PublicAPI.PublicResource;
  export type Public = PublicAPI.Public;
  export import ImportResource = ImportAPI.ImportResource;
  export type Import = ImportAPI.Import;
  export import Methods = MethodsAPI.Methods;
  export type Export = MethodsAPI.Export;
  export type Return = MethodsAPI.Return;
  export type MethodExportParams = MethodsAPI.MethodExportParams;
}
