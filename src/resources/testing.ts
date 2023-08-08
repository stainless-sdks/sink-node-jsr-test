// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Testing extends APIResource {
  root(options?: Core.RequestOptions): Core.APIPromise<RootResponse> {
    return this.get('/', options);
  }
}

export interface RootResponse {
  message: string;
}

export namespace Testing {
  export import RootResponse = API.RootResponse;
}
