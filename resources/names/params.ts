// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';

export class Params extends APIResource {
  /**
   * Endpoint with a `requestBody` that has a property named `options`
   */
  optionsParam(
    body: ParamOptionsParamParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.post('/names/body_params/options', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Endpoint with a `requestBody` that has a property named `timeout`
   */
  timeoutParam(
    body: ParamTimeoutParamParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.post('/names/body_params/timeout', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
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
  export import ParamOptionsParamParams = API.ParamOptionsParamParams;
  export import ParamTimeoutParamParams = API.ParamTimeoutParamParams;
}
