// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MethodsAPI from './methods';

export class Methods extends APIResource {
  /**
   * Test reserved word in method name
   */
  export(_class: string, params?: MethodExportParams, options?: Core.RequestOptions): Core.APIPromise<Export>;
  export(_class: string, options?: Core.RequestOptions): Core.APIPromise<Export>;
  export(
    _class: string,
    params: MethodExportParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Export> {
    if (isRequestOptions(params)) {
      return this.export(_class, {}, params);
    }
    const { let: _let, ...body } = params;
    return this._client.post(`/names/reserved_names/methods/export/${_class}`, {
      query: { let: _let },
      body,
      ...options,
    });
  }
}

export interface Export {
  /**
   * test reserved word in response property
   */
  export: Array<Return>;
}

/**
 * test reserved word in schema name
 */
export interface Return {
  foo?: string;
}

export interface MethodExportParams {
  /**
   * Query param: test reserved word in query parameter
   */
  let?: string;

  /**
   * Body param: test reserved word in body property
   */
  const?: string;
}

export namespace Methods {
  export import Export = MethodsAPI.Export;
  export import Return = MethodsAPI.Return;
  export import MethodExportParams = MethodsAPI.MethodExportParams;
}
