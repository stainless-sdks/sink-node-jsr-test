// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ModelReferencedInParentAndChildAPI from 'sink-npm/resources/model-referenced-in-parent-and-child/model-referenced-in-parent-and-child';
import * as ChildAPI from 'sink-npm/resources/model-referenced-in-parent-and-child/child';

export class ModelReferencedInParentAndChildResource extends APIResource {
  child: ChildAPI.Child = new ChildAPI.Child(this._client);

  retrieve(options?: Core.RequestOptions): Core.APIPromise<ModelReferencedInParentAndChild> {
    return this._client.get('/model_referenced_in_parent_and_child', options);
  }
}

export interface ModelReferencedInParentAndChild {
  foo: string;
}

export namespace ModelReferencedInParentAndChildResource {
  export import ModelReferencedInParentAndChild = ModelReferencedInParentAndChildAPI.ModelReferencedInParentAndChild;
  export import Child = ChildAPI.Child;
}
