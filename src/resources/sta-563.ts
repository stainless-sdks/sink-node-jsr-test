// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Sta563 extends APIResource {
  /**
   * Should not generate return type for object without defined properties. See
   * https://linear.app/stainless/issue/STA-563/no-type-should-be-generated-for-endpoints-returning-type-object-schema.
   */
  deleteEmptyObject(options?: Core.RequestOptions): Core.APIPromise<DeleteEmptyObjectResponse> {
    return this.delete('/sta_563_empty_object', options);
  }
}

export interface DeleteEmptyObjectResponse {}

export namespace Sta563 {
  export import DeleteEmptyObjectResponse = API.DeleteEmptyObjectResponse;
}
