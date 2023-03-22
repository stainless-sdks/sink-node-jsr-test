// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { SimpleObjectsFakePage } from '~/resources/shared';
import { FakePageParams } from '~/pagination';

export class FakePages extends APIResource {
  /**
   * Endpoint that returns a top-level array that is transformed into a fake_page.
   */
  list(query: FakePageListParams, options?: Core.RequestOptions): Core.PagePromise<SimpleObjectsFakePage> {
    return this.getAPIList('/paginated/fake_page', SimpleObjectsFakePage, { query, ...options });
  }
}

export interface FakePageListParams extends FakePageParams {}

export { SimpleObjectsFakePage };
