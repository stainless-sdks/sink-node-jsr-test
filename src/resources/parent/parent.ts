// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChildAPI from './child';
import { Child, ChildInlinedResponseResponse } from './child';

export class Parent extends APIResource {
  child: ChildAPI.Child = new ChildAPI.Child(this._client);
}

Parent.Child = Child;

export declare namespace Parent {
  export { Child as Child, type ChildInlinedResponseResponse as ChildInlinedResponseResponse };
}
