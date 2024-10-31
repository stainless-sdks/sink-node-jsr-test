// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class InterfaceResource extends APIResource {
  interface(options?: Core.RequestOptions): Core.APIPromise<Interface> {
    return this._client.get('/names/reserved_names/public/interface', options);
  }
}

export interface Interface {
  interface: string;
}

export declare namespace InterfaceResource {
  export { type Interface as Interface };
}
