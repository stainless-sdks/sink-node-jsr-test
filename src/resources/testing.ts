// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as TestingAPI from './testing';

export class Testing extends APIResource {
  root(options?: Core.RequestOptions): Core.APIPromise<RootResponse> {
    return this._client.get('/', options);
  }
}

export interface RootResponse {
  message: string;
}

export namespace Testing {
  export import RootResponse = TestingAPI.RootResponse;
}
