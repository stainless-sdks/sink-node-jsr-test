// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { Child } from './child';

export class Parent extends APIResource {
  child: Child = new Child(this.client);
}
