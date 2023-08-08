// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Version1_30Names extends APIResource {
  /**
   * The `X-Client-Secret` header shouldn't be included in params definitions as it
   * is already sent as a client argument.
   *
   * Whereas the `X-Custom-Endpoint-Header` should be included as it is only used
   * here.
   */
  create(
    version1_15: string,
    params: Version1_30NameCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Version1_30NameCreateResponse> {
    const { version_1_16: version1_16, version_1_14: version1_14, ...body } = params;
    return this.post(`/version_1_30_names/query/${version1_15}`, {
      query: { version_1_16: version1_16 },
      body,
      ...options,
      headers: { version_1_14: version1_14 || '', ...options?.headers },
    });
  }
}

export interface Version1_30NameCreateResponse {
  version_1_18: string;
}

export interface Version1_30NameCreateParams {
  /**
   * Query param:
   */
  version_1_16?: string;

  /**
   * Body param:
   */
  version_1_17?: string;

  /**
   * Header param:
   */
  version_1_14?: string;
}

export namespace Version1_30Names {
  export import Version1_30NameCreateResponse = API.Version1_30NameCreateResponse;
  export import Version1_30NameCreateParams = API.Version1_30NameCreateParams;
}
