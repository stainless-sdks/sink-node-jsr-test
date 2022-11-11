// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import { ChildResource } from './child'
import * as Shared from '~/resources/shared'

export class ParentResource extends APIResource {
  child: ChildResource = new ChildResource(this.client);

}