// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { Params } from './params';
import { CanCauseClashes } from './can-cause-clashes/can-cause-clashes';
import * as API from './index';

export class Names extends APIResource {
  params: Params = new Params(this.client);
  canCauseClashes: CanCauseClashes = new CanCauseClashes(this.client);

  /**
   * Endpoint with request & response properties that are likely to cause name
   * conflicts.
   */
  propertiesCommonConflicts(
    body: NamePropertiesCommonConflictsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamePropertiesCommonConflictsResponse> {
    return this.post('/names/properties_common_conflicts', { body, ...options });
  }

  /**
   * Endpoint with a response model property that would clash with pydantic.
   */
  responseShadowsPydantic(
    options?: Core.RequestOptions,
  ): Core.APIPromise<NameResponseShadowsPydanticResponse> {
    return this.get('/names/response_property_shadows_pydantic', options);
  }
}

export interface NamePropertiesCommonConflictsResponse {
  /**
   * This shadows the stdlib `datetime.date` type in Python & causes type errors.
   */
  date: string;
}

export interface NameResponseShadowsPydanticResponse {
  parse_raw: string;
}

export interface NamePropertiesCommonConflictsParams {
  /**
   * This shadows the stdlib `datetime.date` type in Python & causes type errors.
   */
  date: string;
}

export namespace Names {
  export import NamePropertiesCommonConflictsResponse = API.NamePropertiesCommonConflictsResponse;
  export import NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;
  export import NamePropertiesCommonConflictsParams = API.NamePropertiesCommonConflictsParams;

  export import Params = API.Params;
  export import ParamOptionsParamParams = API.ParamOptionsParamParams;
  export import ParamTimeoutParamParams = API.ParamTimeoutParamParams;

  export import CanCauseClashes = API.CanCauseClashes;
}
