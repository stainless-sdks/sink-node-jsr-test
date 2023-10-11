// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as ChildAPI from 'sink-npm/resources/parent/child';

export class Parent extends APIResource {
  child: ChildAPI.Child = new ChildAPI.Child(this.client);
}

export namespace Parent {
  export import Child = ChildAPI.Child;
  export import ChildInlinedResponseResponse = ChildAPI.ChildInlinedResponseResponse;
}
