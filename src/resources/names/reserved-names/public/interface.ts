// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as InterfaceAPI from './interface';

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
