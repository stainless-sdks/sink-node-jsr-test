// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Child extends APIResource {
  /**
   * Testing resource level default request options.
   */
  exampleMethod(options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.get('/default_req_options', {
      ...options,
      headers: {
        'X-Header-From-Child': 'foo',
        'X-My-Header': 'true',
        'X-My-Other-Header': 'false',
        ...options?.headers,
      },
    });
  }
}
