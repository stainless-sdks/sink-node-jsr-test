// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import { isRequestOptions } from '~/core'
import { Child } from './child'
import * as Shared from '~/resources/shared'

export class Parent extends APIResource {
  child: Child = new Child(this.client);

}