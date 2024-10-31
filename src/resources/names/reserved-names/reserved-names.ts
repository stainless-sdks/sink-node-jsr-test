// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ImportAPI from './import';
import { Import, ImportResource } from './import';
import * as MethodsAPI from './methods';
import { Export, MethodExportParams, Methods, Return } from './methods';
import * as PublicAPI from './public/public';
import { Public, PublicResource } from './public/public';

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

ReservedNames.PublicResource = PublicResource;
ReservedNames.ImportResource = ImportResource;
ReservedNames.Methods = Methods;

export declare namespace ReservedNames {
  export { type ReservedNameCommonReservedParamsParams as ReservedNameCommonReservedParamsParams };

  export { PublicResource as PublicResource, type Public as Public };

  export { ImportResource as ImportResource, type Import as Import };

  export {
    Methods as Methods,
    type Export as Export,
    type Return as Return,
    type MethodExportParams as MethodExportParams,
  };
}
