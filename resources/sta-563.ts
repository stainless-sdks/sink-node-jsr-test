// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Sta_563Resource extends APIResource {
  /**
   * Should not generate return type for object without defined properties. See
   * https://linear.app/stainless/issue/STA-563/no-type-should-be-generated-for-endpoints-returning-type-object-schema.
   */
  deleteEmptyObject(options?: Core.RequestOptions): Promise<Core.APIResponse<unknown>> {
    return this.delete('/sta_563_empty_object', options);
  }
}
