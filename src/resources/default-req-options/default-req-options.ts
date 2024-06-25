// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ChildAPI from './child';

export class DefaultReqOptions extends APIResource {
  child: ChildAPI.Child = new ChildAPI.Child(this._client);

  /**
   * Testing resource level default request options.
   */
  exampleMethod(options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.get('/default_req_options', {
      ...options,
      headers: { 'X-My-Header': 'true', 'X-My-Other-Header': 'false', ...options?.headers },
    });
  }
}

export namespace DefaultReqOptions {
  export import Child = ChildAPI.Child;
}
