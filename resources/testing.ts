// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';

export class Testing extends APIResource {
  /**
   * Top level endpoint
   */
  root(options?: Core.RequestOptions): Promise<Core.APIResponse<RootResponse>> {
    return this.get('/', options);
  }
}

export interface RootResponse {
  message: string;
}

export namespace Testing {
  export import RootResponse = API.RootResponse;
}
