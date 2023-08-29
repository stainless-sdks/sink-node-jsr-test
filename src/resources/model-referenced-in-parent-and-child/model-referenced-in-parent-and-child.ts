// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { Child } from './child';
import * as API from './index';

export class ModelReferencedInParentAndChildResource extends APIResource {
  child: Child = new Child(this.client);

  retrieve(options?: Core.RequestOptions): Core.APIPromise<ModelReferencedInParentAndChild> {
    return this.get('/model_referenced_in_parent_and_child', options);
  }
}

export interface ModelReferencedInParentAndChild {
  foo: string;
}

export namespace ModelReferencedInParentAndChildResource {
  export import ModelReferencedInParentAndChild = API.ModelReferencedInParentAndChild;

  export import Child = API.Child;
}
