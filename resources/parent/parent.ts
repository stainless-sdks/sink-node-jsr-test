// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { ChildResource } from './child';

export class ParentResource extends APIResource {
  child: ChildResource = new ChildResource(this.client);
}
