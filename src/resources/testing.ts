// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as TestingAPI from 'sink-npm/resources/testing';

export class Testing extends APIResource {
  root(options?: Core.RequestOptions): Core.APIPromise<RootResponse> {
    return this.get('/', options);
  }
}

export interface RootResponse {
  message: string;
}

export namespace Testing {
  export type RootResponse = TestingAPI.RootResponse;
}
