// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Child } from './child';
import * as DefaultReqOptionsAPI from './default-req-options';
import * as Shared from '../shared';
import * as ChildAPI from './child';

export class DefaultReqOptions extends APIResource {
  child: ChildAPI.Child = new ChildAPI.Child(this._client);

  /**
   * Testing resource level default request options.
   */
  exampleMethod(options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.get('/default_req_options', { ...options, headers: { 'X-My-Header': 'true', 'X-My-Other-Header': 'false', ...options?.headers } });
  }

  /**
   * Resource level default request options for a header that is also included in
   * `parameters`.
   */
  withParamOverride(params?: DefaultReqOptionWithParamOverrideParams, options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject>
  withParamOverride(options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject>
  withParamOverride(params: DefaultReqOptionWithParamOverrideParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject> {
    if (isRequestOptions(params)) {
      return this.withParamOverride({}, params);
    }
    const { 'X-My-Header': xMyHeader } = params;
    return this._client.get('/default_req_options/with_param_override', { ...options, headers: { 'X-My-Header': xMyHeader != null ? xMyHeader.toString() : 'true', 'X-My-Other-Header': 'false', ...options?.headers } });
  }
}

export interface DefaultReqOptionWithParamOverrideParams {
  'X-My-Header'?: boolean;
}

export namespace DefaultReqOptions {
  export import DefaultReqOptionWithParamOverrideParams = DefaultReqOptionsAPI.DefaultReqOptionWithParamOverrideParams;
  export import Child = ChildAPI.Child;
}
