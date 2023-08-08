// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Widgets extends APIResource {
  /**
   * Endpoint that tests using an integer and enum in the pathParams
   */
  retrieveWithFilter(
    widgetId: number,
    filterType: 'available' | 'archived' | 'out_of_stock' | null,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Widget> {
    return this.get(`/widgets/${widgetId}/filter/${filterType}`, options);
  }
}

export interface Widget {
  /**
   * The numeric unique ID for this widget.
   */
  id: number;
}

export namespace Widgets {
  export import Widget = API.Widget;
}
