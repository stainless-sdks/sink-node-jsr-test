// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as WidgetsAPI from 'sink-npm/resources/widgets';

export class Widgets extends APIResource {
  /**
   * Endpoint that tests using an integer and enum in the pathParams
   */
  retrieveWithFilter(
    widgetId: number,
    filterType: 'available' | 'archived' | 'out_of_stock',
    options?: Core.RequestOptions,
  ): Core.APIPromise<Widget> {
    return this._client.get(`/widgets/${widgetId}/filter/${filterType}`, options);
  }
}

export interface Widget {
  /**
   * The numeric unique ID for this widget.
   */
  id: number;
}

export namespace Widgets {
  export import Widget = WidgetsAPI.Widget;
}
