// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ModelReferencedInParentAndChildAPI from 'sink-npm/resources/model-referenced-in-parent-and-child/model-referenced-in-parent-and-child';

export class Child extends APIResource {
  retrieve(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelReferencedInParentAndChildAPI.ModelReferencedInParentAndChild> {
    return this._client.get('/model_referenced_in_parent_and_child/child', options);
  }
}
