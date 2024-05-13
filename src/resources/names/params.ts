// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ParamsAPI from './params';

export class Params extends APIResource {
  /**
   * Endpoint with a `requestBody` that has a property named `options`
   */
  optionsParam(body: ParamOptionsParamParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/names/body_params/options', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that has a property named `timeout`
   */
  timeoutParam(body: ParamTimeoutParamParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/names/body_params/timeout', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ParamOptionsParamParams {
  /**
   * my options request parameter
   */
  options?: string;
}

export interface ParamTimeoutParamParams {
  /**
   * my timeout request parameter
   */
  timeout?: number;
}

export namespace Params {
  export import ParamOptionsParamParams = ParamsAPI.ParamOptionsParamParams;
  export import ParamTimeoutParamParams = ParamsAPI.ParamTimeoutParamParams;
}
