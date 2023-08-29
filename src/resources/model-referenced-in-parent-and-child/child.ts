// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ModelReferencedInParentAndChild from 'sink-npm/resources/model-referenced-in-parent-and-child/index';

export class Child extends APIResource {
  retrieve(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelReferencedInParentAndChild.ModelReferencedInParentAndChild> {
    return this.get('/model_referenced_in_parent_and_child/child', options);
  }
}
