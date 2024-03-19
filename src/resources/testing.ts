// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as TestingAPI from 'sink-npm/resources/testing';

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
