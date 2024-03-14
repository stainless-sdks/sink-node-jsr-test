// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as InterfaceAPI from 'sink-npm/resources/names/reserved-names/public/interface';

export class InterfaceResource extends APIResource {
  interface(options?: Core.RequestOptions): Core.APIPromise<Interface> {
    return this._client.get('/names/reserved_names/public/interface', options);
  }
}

export interface Interface {
  interface: string;
}

export namespace InterfaceResource {
  export import Interface = InterfaceAPI.Interface;
}
