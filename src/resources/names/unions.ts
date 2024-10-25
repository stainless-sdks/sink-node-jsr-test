// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UnionsAPI from './unions';
import * as ResponsesAPI from '../responses/responses';

export class Unions extends APIResource {
  discriminated(options?: Core.RequestOptions): Core.APIPromise<DiscriminatedUnion> {
    return this._client.get('/names/unions/discriminated_union', options);
  }

  variantsObjectWithUnionProperties(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponsesAPI.ObjectWithUnionProperties> {
    return this._client.get('/names/unions/variants_object_with_union_properties', options);
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
