// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ModelReferencedInParentAndChildAPI from './model-referenced-in-parent-and-child';

export class Child extends APIResource {
  retrieve(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelReferencedInParentAndChildAPI.ModelReferencedInParentAndChild> {
    return this._client.get('/model_referenced_in_parent_and_child/child', options);
  }
}
