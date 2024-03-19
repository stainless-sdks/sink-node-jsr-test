// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Sink } from './index';

export class APIResource {
  protected _client: Sink;

  constructor(client: Sink) {
    this._client = client;
  }
}
