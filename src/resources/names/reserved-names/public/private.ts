// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class PrivateResource extends APIResource {
  private(options?: Core.RequestOptions): Core.APIPromise<Private> {
    return this._client.get('/names/reserved_names/public/private', options);
  }
}

export interface Private {
  private: string;
}

export declare namespace PrivateResource {
  export { type Private as Private };
}
