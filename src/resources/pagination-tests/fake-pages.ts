// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as FakePagesAPI from './fake-pages';
import * as Shared from '../shared';
import { SimpleObjectsFakePage } from '../shared';
import { type FakePageParams } from '../../pagination';

export class FakePages extends APIResource {
  /**
   * Endpoint that returns a top-level array that is transformed into a fake_page.
   */
  list(
    query: FakePageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SimpleObjectsFakePage, Shared.SimpleObject> {
    return this._client.getAPIList('/paginated/fake_page', SimpleObjectsFakePage, { query, ...options });
  }
}

export interface FakePageListParams extends FakePageParams {}

export namespace FakePages {
  export type FakePageListParams = FakePagesAPI.FakePageListParams;
}

export { SimpleObjectsFakePage };
