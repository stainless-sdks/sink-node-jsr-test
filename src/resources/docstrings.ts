// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';

export class Docstrings extends APIResource {
  leadingDoubleQuote(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<DocstringLeadingDoubleQuoteResponse>> {
    return this.get('/docstrings/property_leading_double_quote', options);
  }

  trailingDoubleQuote(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<DocstringTrailingDoubleQuoteResponse>> {
    return this.get('/docstrings/property_trailing_double_quote', options);
  }
}

export interface DocstringLeadingDoubleQuoteResponse {
  /**
   * "This description starts with a double quote
   */
  prop: boolean;
}

export interface DocstringTrailingDoubleQuoteResponse {
  /**
   * This description ends in a "
   */
  prop: boolean;
}

export namespace Docstrings {
  export import DocstringLeadingDoubleQuoteResponse = API.DocstringLeadingDoubleQuoteResponse;
  export import DocstringTrailingDoubleQuoteResponse = API.DocstringTrailingDoubleQuoteResponse;
}
