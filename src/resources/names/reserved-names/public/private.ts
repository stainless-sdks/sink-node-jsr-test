// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as PrivateAPI from 'sink-npm/resources/names/reserved-names/public/private';

export class PrivateResource extends APIResource {
  private(options?: Core.RequestOptions): Core.APIPromise<Private> {
    return this._client.get('/names/reserved_names/public/private', options);
  }
}

export interface Private {
  private: string;
}

export namespace PrivateResource {
  export import Private = PrivateAPI.Private;
}
