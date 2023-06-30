// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { SimpleObjectsFakePage } from 'sink-npm/resources/shared';
import * as API from './';
import { FakePageParams } from 'sink-npm/pagination';

export class FakePages extends APIResource {
  /**
   * Endpoint that returns a top-level array that is transformed into a fake_page.
   */
  list(query: FakePageListParams, options?: Core.RequestOptions): Core.PagePromise<SimpleObjectsFakePage> {
    return this.getAPIList('/paginated/fake_page', SimpleObjectsFakePage, { query, ...options });
  }
}

export interface FakePageListParams extends FakePageParams {}

export namespace FakePages {
  export import FakePageListParams = API.FakePageListParams;
}

export { SimpleObjectsFakePage };
