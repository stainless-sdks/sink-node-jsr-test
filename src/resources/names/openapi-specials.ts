// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as OpenAPISpecialsAPI from './openapi-specials';

export class OpenAPISpecials extends APIResource {
  usedUsedAsPropertyName(options?: Core.RequestOptions): Core.APIPromise<OpenAPISpecialUsedUsedAsPropertyNameResponse> {
    return this._client.get('/names/openapi_specials/used_used_as_property_name', options);
  }
}

export interface OpenAPISpecialUsedUsedAsPropertyNameResponse {
  $ref: string;
}

export namespace OpenAPISpecials {
  export import OpenAPISpecialUsedUsedAsPropertyNameResponse = OpenAPISpecialsAPI.OpenAPISpecialUsedUsedAsPropertyNameResponse;
}
