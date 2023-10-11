// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as DefaultPathParamsAPI from 'sink-npm/resources/default-path-params';

export class DefaultPathParams extends APIResource {
  /**
   * The operation takes a path param that is able to be set at the client level
   * alongside a standard path param.
   */
  globalWithStandard(
    camelCasedPath: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DefaultPathParamGlobalWithStandardResponse> {
    return this.post(`/default_path_params/path_params/${camelCasedPath}/${id}`, options);
  }

  /**
   * The operation takes a path param that is able to be set at the client level.
   */
  onlyGlobal(
    clientPathParam: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DefaultPathParamOnlyGlobalResponse> {
    return this.post(`/default_path_params/path_params/${clientPathParam}`, options);
  }
}

export interface DefaultPathParamGlobalWithStandardResponse {
  foo: string;
}

export interface DefaultPathParamOnlyGlobalResponse {
  foo: string;
}

export namespace DefaultPathParams {
  export import DefaultPathParamGlobalWithStandardResponse = DefaultPathParamsAPI.DefaultPathParamGlobalWithStandardResponse;
  export import DefaultPathParamOnlyGlobalResponse = DefaultPathParamsAPI.DefaultPathParamOnlyGlobalResponse;
}
