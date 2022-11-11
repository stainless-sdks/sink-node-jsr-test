// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Sta_563Resource extends APIResource {

  deleteEmptyObject(options?: Core.RequestOptions): Promise<Core.APIResponse<unknown>>{
         return this.delete('/sta_563_empty_object', options)
       };
}

