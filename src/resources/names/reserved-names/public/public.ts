// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ClassAPI from './class';
import { Class, ClassResource } from './class';
import * as InterfaceAPI from './interface';
import { Interface, InterfaceResource } from './interface';
import * as PrivateAPI from './private';
import { Private, PrivateResource } from './private';

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

PublicResource.PrivateResource = PrivateResource;
PublicResource.InterfaceResource = InterfaceResource;
PublicResource.ClassResource = ClassResource;

export declare namespace PublicResource {
  export { type Public as Public };

  export { PrivateResource as PrivateResource, type Private as Private };

  export { InterfaceResource as InterfaceResource, type Interface as Interface };

  export { ClassResource as ClassResource, type Class as Class };
}
