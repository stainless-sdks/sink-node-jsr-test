// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChildAPI from './child';

export class Parent extends APIResource {
  child: ChildAPI.Child = new ChildAPI.Child(this._client);
}

export namespace Parent {
  export import Child = ChildAPI.Child;
  export import ChildInlinedResponseResponse = ChildAPI.ChildInlinedResponseResponse;
}
