// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DecoratorTestsAPI from './decorator-tests';
import * as KeepThisResourceAPI from './keep-this-resource';
import * as LanguagesAPI from './languages';

export class DecoratorTests extends APIResource {
  languages: LanguagesAPI.Languages = new LanguagesAPI.Languages(this._client);
  keepThisResource: KeepThisResourceAPI.KeepThisResource = new KeepThisResourceAPI.KeepThisResource(
    this._client,
  );

  /**
   * Top-level method that should not be skipped.
   */
  keepMe(options?: Core.RequestOptions): Core.APIPromise<DecoratorTestKeepMeResponse> {
    return this._client.get('/decorator_tests/keep/me', options);
  }
}

export interface DecoratorTestKeepMeResponse {
  foo: string;
}

export namespace DecoratorTests {
  export import DecoratorTestKeepMeResponse = DecoratorTestsAPI.DecoratorTestKeepMeResponse;
  export import Languages = LanguagesAPI.Languages;
  export import KeepThisResource = KeepThisResourceAPI.KeepThisResource;
  export import KeepThisResourceKeepThisMethodResponse = KeepThisResourceAPI.KeepThisResourceKeepThisMethodResponse;
}
