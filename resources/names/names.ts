// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { Params } from './params';

export class Names extends APIResource {
  params: Params = new Params(this.client);

  /**
   * Endpoint with request & response properties that are likely to cause name
   * conflicts.
   */
  propertiesCommonConflicts(
    body: NamePropertiesCommonConflictsParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<NamePropertiesCommonConflictsResponse>> {
    return this.post('/names/properties_common_conflicts', { body, ...options });
  }

  /**
   * Endpoint with a response model property that would clash with pydantic.
   */
  responseShadowsPydantic(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<NameResponseShadowsPydanticResponse>> {
    return this.get('/names/response_property_shadows_pydantic', options);
  }
}

export interface NameResponseShadowsPydanticResponse {
  parse_raw: string;
}

export interface NamePropertiesCommonConflictsResponse {
  /**
   * This shadows the stdlib `datetime.date` type in Python & causes type errors.
   */
  date: string;
}

export interface NamePropertiesCommonConflictsParams {
  /**
   * This shadows the stdlib `datetime.date` type in Python & causes type errors.
   */
  date: string;
}
