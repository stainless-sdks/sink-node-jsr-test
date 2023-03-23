// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Widgets extends APIResource {
  /**
   * Endpoint that tests using an integer and enum in the pathParams
   */
  retrieveWithFilter(
    widgetId: number,
    filterType: 'available' | 'archived' | 'out_of_stock' | null,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Widget>> {
    return this.get(`/widgets/${widgetId}/filter/${filterType}`, options);
  }
}

export interface Widget {
  /**
   * The numeric unique ID for this widget.
   */
  id: number;
}
