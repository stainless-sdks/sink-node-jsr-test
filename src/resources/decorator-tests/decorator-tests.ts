// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as DecoratorTestsAPI from 'sink-npm/resources/decorator-tests/decorator-tests';
import * as KeepThisResourceAPI from 'sink-npm/resources/decorator-tests/keep-this-resource';
import * as LanguagesAPI from 'sink-npm/resources/decorator-tests/languages';

export class DecoratorTests extends APIResource {
  languages: LanguagesAPI.Languages = new LanguagesAPI.Languages(this.client);
  keepThisResource: KeepThisResourceAPI.KeepThisResource = new KeepThisResourceAPI.KeepThisResource(
    this.client,
  );

  /**
   * Top-level method that should not be skipped.
   */
  keepMe(options?: Core.RequestOptions): Core.APIPromise<DecoratorTestKeepMeResponse> {
    return this.get('/decorator_tests/keep/me', options);
  }
}

export interface DecoratorTestKeepMeResponse {
  foo: string;
}

export namespace DecoratorTests {
  export type DecoratorTestKeepMeResponse = DecoratorTestsAPI.DecoratorTestKeepMeResponse;
  export import Languages = LanguagesAPI.Languages;
  export import KeepThisResource = KeepThisResourceAPI.KeepThisResource;
  export type KeepThisResourceKeepThisMethodResponse =
    KeepThisResourceAPI.KeepThisResourceKeepThisMethodResponse;
}
