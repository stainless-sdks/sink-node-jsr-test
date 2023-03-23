// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import { isRequestOptions } from '~/core'
import { Languages } from './languages'
import { KeepThisResource } from './keep-this-resource'
import * as Shared from '~/resources/shared'

export class DecoratorTests extends APIResource {
  languages: Languages = new Languages(this.client);
  keepThisResource: KeepThisResource = new KeepThisResource(this.client);

  /**
   * Top-level method that should not be skipped.
   */
  keepMe(options?: Core.RequestOptions): Promise<Core.APIResponse<DecoratorTestKeepMeResponse>>{
    return this.get('/decorator_tests/keep/me', options)
  };
}

export interface DecoratorTestKeepMeResponse  {

foo: string
}