// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class ClassResource extends APIResource {
  class(options?: Core.RequestOptions): Core.APIPromise<Class> {
    return this._client.get('/names/reserved_names/public/class', options);
  }
}

export interface Class {
  class: string;
}

export declare namespace ClassResource {
  export { type Class as Class };
}
