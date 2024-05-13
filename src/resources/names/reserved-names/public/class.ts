// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../core';
import { APIResource } from '../../../../resource';
import * as ClassAPI from './class';

export class ClassResource extends APIResource {
  class(options?: Core.RequestOptions): Core.APIPromise<Class> {
    return this._client.get('/names/reserved_names/public/class', options);
  }
}

export interface Class {
  class: string;
}

export namespace ClassResource {
  export import Class = ClassAPI.Class;
}
