// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DocstringsAPI from './docstrings';
import * as Shared from './shared';

export class Docstrings extends APIResource {
  /**
   * This is the method description.
   *
   * Hello _/ console.log('evil code') /_ Goodbye """ """" """"" """"""
   * console.log('more evil code'); """ \
   *
   * these need stay (valid escapes)
   *
   * \'\"\ \\ \n\r\t\b\f\v\x63\uFE63\U0000FE63\N{HYPHEN}\1\12\123\1234a
   *
   * these need be escaped in python (invalid escapes)
   *
   * \a\g\*\(\&\@\x2z\u11z1\U1111z111\N{HYPHEN#}
   *
   * \
   * Other text
   */
  descriptionContainsJsDoc(options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.get('/docstrings/description_contains_comments', options);
  }

  /**
   * This is the method description.
   *
   * In the middle it contains a \*\* / Or ```
   *
   * Other text
   */
  descriptionContainsJsDocEnd(options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.get('/docstrings/description_contains_comment_enders', options);
  }

  leadingDoubleQuote(options?: Core.RequestOptions): Core.APIPromise<DocstringLeadingDoubleQuoteResponse> {
    return this._client.get('/docstrings/property_leading_double_quote', options);
  }

  trailingDoubleQuote(options?: Core.RequestOptions): Core.APIPromise<DocstringTrailingDoubleQuoteResponse> {
    return this._client.get('/docstrings/property_trailing_double_quote', options);
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

  /**
   * This description ends in a \"
   */
  prop2: boolean;

  /**
   * This description ends in a \\"
   */
  prop3: boolean;
}

export namespace Docstrings {
  export import DocstringLeadingDoubleQuoteResponse = DocstringsAPI.DocstringLeadingDoubleQuoteResponse;
  export import DocstringTrailingDoubleQuoteResponse = DocstringsAPI.DocstringTrailingDoubleQuoteResponse;
}
