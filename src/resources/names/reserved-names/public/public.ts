// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as PublicAPI from 'sink-npm/resources/names/reserved-names/public/public';
import * as ClassAPI from 'sink-npm/resources/names/reserved-names/public/class';
import * as InterfaceAPI from 'sink-npm/resources/names/reserved-names/public/interface';
import * as PrivateAPI from 'sink-npm/resources/names/reserved-names/public/private';

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
