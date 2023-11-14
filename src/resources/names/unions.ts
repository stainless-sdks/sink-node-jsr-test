// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as UnionsAPI from 'sink-npm/resources/names/unions';

export class Unions extends APIResource {
  discriminated(options?: Core.RequestOptions): Core.APIPromise<DiscriminatedUnion> {
    return this._client.get('/names/unions/discriminated_union', options);
  }

  variantsSinglePropObjects(options?: Core.RequestOptions): Core.APIPromise<VariantsSinglePropObjects> {
    return this._client.get('/names/unions/variants_single_prop_objects', options);
  }
}

export type DiscriminatedUnion = DiscriminatedUnion.Foo | DiscriminatedUnion.Bar;

export namespace DiscriminatedUnion {
  export interface Foo {
    foo?: string;

    type?: 'foo';
  }

  export interface Bar {
    bar?: string;

    type?: 'bar';
  }
}

export type VariantsSinglePropObjects = VariantsSinglePropObjects.Foo | VariantsSinglePropObjects.Bar;

export namespace VariantsSinglePropObjects {
  export interface Foo {
    foo?: string;
  }

  export interface Bar {
    bar?: string;
  }
}

export namespace Unions {
  export import DiscriminatedUnion = UnionsAPI.DiscriminatedUnion;
  export import VariantsSinglePropObjects = UnionsAPI.VariantsSinglePropObjects;
}
