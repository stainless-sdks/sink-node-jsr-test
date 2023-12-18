// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { type Response } from 'sink-npm/_shims/index';
import * as BinariesAPI from 'sink-npm/resources/binaries';

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

export namespace Binaries {
  export import BinaryWithPathAndBodyParamParams = BinariesAPI.BinaryWithPathAndBodyParamParams;
}
