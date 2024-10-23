// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as WebhooksAPI from './webhooks';
import * as CardsAPI from './cards';

export class Webhooks extends APIResource {
  unwrap(body: string): UnwrapWebhookEvent {
    return JSON.parse(body) as UnwrapWebhookEvent;
  }
}

export interface CardCreatedWebhookEvent {
  id: string;

  data: CardsAPI.Card;

  type: 'card.created';

  user_id?: string;
}

export interface CardReadyWebhookEvent {
  id: string;

  data: CardsAPI.Card;

  type: 'card.ready';

  user_id?: string;
}

export interface CardErroredWebhookEvent {
  id: string;

  data: CardsAPI.Card;

  type: 'card.errored';

  user_id?: string;
}

export interface CardUpdatedWebhookEvent {
  id: string;

  data: CardsAPI.Card;

  type: 'card.updated';

  user_id?: string;
}

export interface CardDeletedWebhookEvent {
  id: string;

  data: CardsAPI.Card;

  type: 'card.deleted';

  user_id?: string;
}

export type UnwrapWebhookEvent =
  | CardCreatedWebhookEvent
  | CardReadyWebhookEvent
  | CardErroredWebhookEvent
  | CardUpdatedWebhookEvent
  | CardDeletedWebhookEvent;

export namespace Webhooks {
  export import CardCreatedWebhookEvent = WebhooksAPI.CardCreatedWebhookEvent;
  export import CardReadyWebhookEvent = WebhooksAPI.CardReadyWebhookEvent;
  export import CardErroredWebhookEvent = WebhooksAPI.CardErroredWebhookEvent;
  export import CardUpdatedWebhookEvent = WebhooksAPI.CardUpdatedWebhookEvent;
  export import CardDeletedWebhookEvent = WebhooksAPI.CardDeletedWebhookEvent;
  export import UnwrapWebhookEvent = WebhooksAPI.UnwrapWebhookEvent;
}
