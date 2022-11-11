// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Widgets extends APIResource {

  retrieveWithFilter(widgetId: number, filterType: 'available' | 'archived' | 'out_of_stock', options?: Core.RequestOptions): Promise<Core.APIResponse<Widget>>{
         return this.get(`/widgets/${widgetId}/filter/${filterType}`, options)
       };
}

export interface Widget  {
  /**
 * The numeric unique ID for this widget.
 */
id: number
}