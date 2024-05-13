// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../core';
import { APIResource } from '../../../../resource';
import * as PublicAPI from './public';
import * as ClassAPI from './class';
import * as InterfaceAPI from './interface';
import * as PrivateAPI from './private';

export class PublicResource extends APIResource {
  private: PrivateAPI.PrivateResource = new PrivateAPI.PrivateResource(this._client);
  interface: InterfaceAPI.InterfaceResource = new InterfaceAPI.InterfaceResource(this._client);
  class: ClassAPI.ClassResource = new ClassAPI.ClassResource(this._client);

  public(options?: Core.RequestOptions): Core.APIPromise<Public> {
    return this._client.get('/names/reserved_names/public', options);
  }
}

export interface Public {
  public: string;
}

export namespace PublicResource {
  export import Public = PublicAPI.Public;
  export import PrivateResource = PrivateAPI.PrivateResource;
  export import Private = PrivateAPI.Private;
  export import InterfaceResource = InterfaceAPI.InterfaceResource;
  export import Interface = InterfaceAPI.Interface;
  export import ClassResource = ClassAPI.ClassResource;
  export import Class = ClassAPI.Class;
}
