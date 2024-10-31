// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Clients extends APIResource {
  create(body: ClientCreateParams, options?: Core.RequestOptions): Core.APIPromise<Client> {
    return this._client.post('/clients', { body, ...options });
  }
}

export interface Client {
  id: string;

  name: string;
}

export interface ClientCreateParams {
  account_token: string;

  name: string;
}

export declare namespace Clients {
  export { type Client as Client, type ClientCreateParams as ClientCreateParams };
}
