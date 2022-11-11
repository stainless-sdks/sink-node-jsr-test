// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Types extends APIResource {

  enums(body: TypeEnumsParams, options?: Core.RequestOptions): Promise<Core.APIResponse<TypeEnumsResponse>>{
         return this.post('/types/enums', { body, ...options })
       };
}

export interface TypeEnumsResponse  {

currency?: Shared.Currency
}

export interface TypeEnumsParams  {

input_currency?: Shared.Currency
}