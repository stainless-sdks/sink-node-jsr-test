// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { Params } from './params';

export class Names extends APIResource {
  params: Params = new Params(this.client);

  responseShadowsPydantic(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<NameResponseShadowsPydanticResponse>> {
    return this.get('/names/response_property_shadows_pydantic', options);
  }
}

export interface NameResponseShadowsPydanticResponse {
  parse_raw: string;
}
