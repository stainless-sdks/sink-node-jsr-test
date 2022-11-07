// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Responses extends APIResource {
  /**
   * Method with a response object that uses anyOf to indicate nullability.
   */
  anyofNull(options?: Core.RequestOptions): Promise<Core.APIResponse<ObjectWithAnyOfNullProperty>> {
    return this.get('/responses/anyof_null', options);
  }

  /**
   * Method with a response object that uses oneOf to indicate nullability.
   */
  oneofofNull(options?: Core.RequestOptions): Promise<Core.APIResponse<ObjectWithOneOfNullProperty>> {
    return this.get('/responses/oneof_null', options);
  }
}

export interface ObjectWithAnyOfNullProperty {
  foo?: ObjectWithAnyOfNullProperty.Foo | null;
}

export namespace ObjectWithAnyOfNullProperty {
  export interface Foo {
    thing?: string;
  }
}

export interface ObjectWithOneOfNullProperty {
  foo?: ObjectWithOneOfNullProperty.Foo | null;
}

export namespace ObjectWithOneOfNullProperty {
  export interface Foo {
    item?: string;
  }
}
