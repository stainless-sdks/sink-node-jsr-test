// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { type Response } from 'sink-npm/_shims/index';

export class Binaries extends APIResource {
  /**
   * Return a binary response.
   */
  returnBinary(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this.get('/binaries/return_binary', { ...options, __binaryResponse: true });
  }
}
