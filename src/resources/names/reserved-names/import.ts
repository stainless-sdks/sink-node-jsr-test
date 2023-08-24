// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class ImportResource extends APIResource {
  /**
   * Endpoint that is named `import` in the config which can cause issues in certain
   * languages.
   */
  import(options?: Core.RequestOptions): Core.APIPromise<Import> {
    return this.get('/names/reserved_names/import', options);
  }
}

export interface Import {
  foo: string;
}

export namespace ImportResource {
  export import Import = API.Import;
}
