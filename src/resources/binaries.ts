// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Binaries extends APIResource {
  /**
   * Return a binary response.
   */
  returnBinary(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/binaries/return_binary', { ...options, __binaryResponse: true });
  }

  /**
   * Return a binary response.
   */
  withPathAndBodyParam(
    id: string,
    body: BinaryWithPathAndBodyParamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.post(`/binaries/with_path_and_body_param/${id}`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Return a binary response.
   */
  withPathParam(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/binaries/with_path_param/${id}`, { ...options, __binaryResponse: true });
  }
}

export interface BinaryWithPathAndBodyParamParams {
  foo?: string;
}

export declare namespace Binaries {
  export { type BinaryWithPathAndBodyParamParams as BinaryWithPathAndBodyParamParams };
}
