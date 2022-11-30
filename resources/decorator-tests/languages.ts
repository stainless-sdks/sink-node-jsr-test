// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Shared from '~/resources/shared';

export class Languages extends APIResource {
  skippedForPython(options?: Core.RequestOptions): Promise<Core.APIResponse<Shared.SimpleObject>> {
    return this.get('/responses/simple_object', options);
  }
}
