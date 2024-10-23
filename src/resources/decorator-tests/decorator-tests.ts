// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Languages } from './languages';
import { KeepThisResource } from './keep-this-resource';
import { SkipThisResource } from './skip-this-resource';
import * as DecoratorTestsAPI from './decorator-tests';
import * as KeepThisResourceAPI from './keep-this-resource';
import * as LanguagesAPI from './languages';
import * as SkipThisResourceAPI from './skip-this-resource';

export class DecoratorTests extends APIResource {
  languages: LanguagesAPI.Languages = new LanguagesAPI.Languages(this._client);
  keepThisResource: KeepThisResourceAPI.KeepThisResource = new KeepThisResourceAPI.KeepThisResource(this._client);
  skipThisResource: SkipThisResourceAPI.SkipThisResource = new SkipThisResourceAPI.SkipThisResource(this._client);

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
  export import SkipThisResource = SkipThisResourceAPI.SkipThisResource;
  export import SkipThisResourceINeverAppearResponse = SkipThisResourceAPI.SkipThisResourceINeverAppearResponse;
}
