// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import { Child } from './child';
import * as API from './';

export class Parent extends APIResource {
  child: Child = new Child(this.client);
}

export namespace Parent {
  export import Child = API.Child;
  export import ChildInlinedResponseResponse = API.ChildInlinedResponseResponse;
}
