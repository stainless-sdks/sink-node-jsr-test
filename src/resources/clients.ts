// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ClientsAPI from './clients';

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

export namespace Clients {
  export type Client = ClientsAPI.Client;
  export type ClientCreateParams = ClientsAPI.ClientCreateParams;
}
