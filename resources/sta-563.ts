// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Sta_563Resource extends APIResource {
  deleteEmptyObject(options?: Core.RequestOptions): Promise<Core.APIResponse<unknown>> {
    return this.delete('/sta_563_empty_object', options);
  }
}
