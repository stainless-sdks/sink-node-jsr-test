// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

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

export declare namespace ImportResource {
  export { type Import as Import };
}
