// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as KeepThisResourceAPI from './keep-this-resource';
import { KeepThisResource, KeepThisResourceKeepThisMethodResponse } from './keep-this-resource';
import * as LanguagesAPI from './languages';
import { Languages } from './languages';
import * as SkipThisResourceAPI from './skip-this-resource';
import { SkipThisResource, SkipThisResourceINeverAppearResponse } from './skip-this-resource';

export class DecoratorTests extends APIResource {
  languages: LanguagesAPI.Languages = new LanguagesAPI.Languages(this._client);
  keepThisResource: KeepThisResourceAPI.KeepThisResource = new KeepThisResourceAPI.KeepThisResource(
    this._client,
  );
  skipThisResource: SkipThisResourceAPI.SkipThisResource = new SkipThisResourceAPI.SkipThisResource(
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

DecoratorTests.Languages = Languages;
DecoratorTests.KeepThisResource = KeepThisResource;
DecoratorTests.SkipThisResource = SkipThisResource;

export declare namespace DecoratorTests {
  export { type DecoratorTestKeepMeResponse as DecoratorTestKeepMeResponse };

  export { Languages as Languages };

  export {
    KeepThisResource as KeepThisResource,
    type KeepThisResourceKeepThisMethodResponse as KeepThisResourceKeepThisMethodResponse,
  };

  export {
    SkipThisResource as SkipThisResource,
    type SkipThisResourceINeverAppearResponse as SkipThisResourceINeverAppearResponse,
  };
}
