// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
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

export declare namespace Webhooks {
  export {
    type CardCreatedWebhookEvent as CardCreatedWebhookEvent,
    type CardReadyWebhookEvent as CardReadyWebhookEvent,
    type CardErroredWebhookEvent as CardErroredWebhookEvent,
    type CardUpdatedWebhookEvent as CardUpdatedWebhookEvent,
    type CardDeletedWebhookEvent as CardDeletedWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
