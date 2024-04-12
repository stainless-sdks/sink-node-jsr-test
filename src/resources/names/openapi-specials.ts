// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as OpenapiSpecialsAPI from 'sink-npm/resources/names/openapi-specials';

export class OpenapiSpecials extends APIResource {
  usedUsedAsPropertyName(
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpenapiSpecialUsedUsedAsPropertyNameResponse> {
    return this._client.get('/names/openapi_specials/used_used_as_property_name', options);
  }
}

export interface OpenapiSpecialUsedUsedAsPropertyNameResponse {
  $ref: string;
}

export namespace OpenapiSpecials {
  export import OpenapiSpecialUsedUsedAsPropertyNameResponse = OpenapiSpecialsAPI.OpenapiSpecialUsedUsedAsPropertyNameResponse;
}
