// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Shared from '~/resources/shared';

export class Types extends APIResource {
  /**
   * Endpoint that has a `$ref`d enum type in the request body and the response body
   */
  enums(body: TypeEnumsParams, options?: Core.RequestOptions): Promise<Core.APIResponse<TypeEnumsResponse>> {
    return this.post('/types/enums', { body, ...options });
  }
}

export interface TypeEnumsResponse {
  currency: Shared.Currency;

  problematic_enum: '123_FOO' | '30%';
}

export interface TypeEnumsParams {
  input_currency: Shared.Currency;

  problematic_enum: '123_FOO' | '30%';
}
