// File generated from our OpenAPI spec by Stainless.

import type { Sink } from './index';

export class APIResource {
  protected client: Sink;
  constructor(client: Sink) {
    this.client = client;

    this.get = client.get.bind(client);
    this.post = client.post.bind(client);
    this.patch = client.patch.bind(client);
    this.put = client.put.bind(client);
    this.delete = client.delete.bind(client);
    this.getAPIList = client.getAPIList.bind(client);
  }

  protected get: Sink['get'];
  protected post: Sink['post'];
  protected patch: Sink['patch'];
  protected put: Sink['put'];
  protected delete: Sink['delete'];
  protected getAPIList: Sink['getAPIList'];
}
