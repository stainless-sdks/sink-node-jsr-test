// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { Languages } from './languages';
import { KeepThisResource } from './keep-this-resource';
import * as API from './';

export class DecoratorTests extends APIResource {
  languages: Languages = new Languages(this.client);
  keepThisResource: KeepThisResource = new KeepThisResource(this.client);

  /**
   * Top-level method that should not be skipped.
   */
  keepMe(options?: Core.RequestOptions): Promise<Core.APIResponse<DecoratorTestKeepMeResponse>> {
    return this.get('/decorator_tests/keep/me', options);
  }
}

export interface DecoratorTestKeepMeResponse {
  foo: string;
}

export namespace DecoratorTests {
  export import DecoratorTestKeepMeResponse = API.DecoratorTestKeepMeResponse;

  export import Languages = API.Languages;

  export import KeepThisResource = API.KeepThisResource;
  export import KeepThisResourceKeepThisMethodResponse = API.KeepThisResourceKeepThisMethodResponse;
}
