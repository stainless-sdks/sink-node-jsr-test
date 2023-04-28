// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Sta613 extends APIResource {
  /**
   * The operation takes a path param that is able to be set at the client level
   * alongside a standard path param.
   */
  globalWithStandard(
    camelCasedPath: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Sta613GlobalWithStandardResponse>> {
    return this.post(`/sta_613/path_params/${camelCasedPath}/${id}`, options);
  }

  /**
   * The operation takes a path param that is able to be set at the client level.
   */
  onlyGlobal(
    clientPathParam: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Sta613OnlyGlobalResponse>> {
    return this.post(`/sta_613/path_params/${clientPathParam}`, options);
  }
}

export interface Sta613OnlyGlobalResponse {
  foo: string;
}

export interface Sta613GlobalWithStandardResponse {
  foo: string;
}
