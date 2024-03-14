// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ClassAPI from 'sink-npm/resources/names/reserved-names/public/class';

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
