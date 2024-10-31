// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ChildAPI from './child';
import { Child } from './child';

export class ModelReferencedInParentAndChildResource extends APIResource {
  child: ChildAPI.Child = new ChildAPI.Child(this._client);

  retrieve(options?: Core.RequestOptions): Core.APIPromise<ModelReferencedInParentAndChild> {
    return this._client.get('/model_referenced_in_parent_and_child', options);
  }
}

export interface ModelReferencedInParentAndChild {
  foo: string;
}

ModelReferencedInParentAndChildResource.Child = Child;

export declare namespace ModelReferencedInParentAndChildResource {
  export { type ModelReferencedInParentAndChild as ModelReferencedInParentAndChild };

  export { Child as Child };
}
