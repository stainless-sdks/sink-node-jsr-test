// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as ImportAPI from './import';

export class ImportResource extends APIResource {
  /**
   * Endpoint that is named `import` in the config which can cause issues in certain
   * languages.
   */
  import(options?: Core.RequestOptions): Core.APIPromise<Import> {
    return this._client.get('/names/reserved_names/import', options);
  }
}

export interface Import {
  foo: string;
}

export namespace ImportResource {
  export import Import = ImportAPI.Import;
}
