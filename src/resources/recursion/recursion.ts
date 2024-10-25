// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RecursionAPI from './recursion';
import * as SharedResponsesAPI from './shared-responses';

export class Recursion extends APIResource {
  sharedResponses: SharedResponsesAPI.SharedResponses = new SharedResponsesAPI.SharedResponses(this._client);

  createEnvelope(
    body: RecursionCreateEnvelopeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecursionCreateEnvelopeResponse> {
    return this._client.post('/recursion/envelope', { body, ...options });
  }

  createSelf(body: RecursionCreateSelfParams, options?: Core.RequestOptions): Core.APIPromise<SelfRecursion> {
    return this._client.post('/recursion/self', { body, ...options });
  }
}

export type ArrayRecursion = Array<number | ArrayRecursion>;

export interface SelfRecursion {
  name: string;

  child?: SelfRecursion;
}

export interface RecursionCreateEnvelopeResponse {
  data: SelfRecursion;
}

export interface RecursionCreateEnvelopeParams {
  data?: SelfRecursion;
}

export interface RecursionCreateSelfParams {
  name: string;

  child?: SelfRecursion;
}

export namespace Recursion {
  export type ArrayRecursion = RecursionAPI.ArrayRecursion;
  export type SelfRecursion = RecursionAPI.SelfRecursion;
  export type RecursionCreateEnvelopeResponse = RecursionAPI.RecursionCreateEnvelopeResponse;
  export type RecursionCreateEnvelopeParams = RecursionAPI.RecursionCreateEnvelopeParams;
  export type RecursionCreateSelfParams = RecursionAPI.RecursionCreateSelfParams;
  export import SharedResponses = SharedResponsesAPI.SharedResponses;
}
