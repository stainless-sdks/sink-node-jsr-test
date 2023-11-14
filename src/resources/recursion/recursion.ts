// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as RecursionAPI from 'sink-npm/resources/recursion/recursion';
import * as SharedResponsesAPI from 'sink-npm/resources/recursion/shared-responses';

export class Recursion extends APIResource {
  sharedResponses: SharedResponsesAPI.SharedResponses = new SharedResponsesAPI.SharedResponses(this._client);

  createBranch(
    body: RecursionCreateBranchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BranchRecursion> {
    return this._client.post('/recursion/branch', { body, ...options });
  }

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

export interface BranchRecursion {
  child?: BranchRecursionChildA | BranchRecursionChildB;
}

export interface BranchRecursionChildA {
  a: BranchRecursion;
}

export interface BranchRecursionChildB {
  b: BranchRecursion;
}

export interface SelfRecursion {
  name: string;

  child?: SelfRecursion;
}

export interface RecursionCreateEnvelopeResponse {
  data: SelfRecursion;
}

export interface RecursionCreateBranchParams {
  child?: BranchRecursionChildA | BranchRecursionChildB;
}

export interface RecursionCreateEnvelopeParams {
  data?: SelfRecursion;
}

export interface RecursionCreateSelfParams {
  name: string;

  child?: SelfRecursion;
}

export namespace Recursion {
  export import ArrayRecursion = RecursionAPI.ArrayRecursion;
  export import BranchRecursion = RecursionAPI.BranchRecursion;
  export import BranchRecursionChildA = RecursionAPI.BranchRecursionChildA;
  export import BranchRecursionChildB = RecursionAPI.BranchRecursionChildB;
  export import SelfRecursion = RecursionAPI.SelfRecursion;
  export import RecursionCreateEnvelopeResponse = RecursionAPI.RecursionCreateEnvelopeResponse;
  export import RecursionCreateBranchParams = RecursionAPI.RecursionCreateBranchParams;
  export import RecursionCreateEnvelopeParams = RecursionAPI.RecursionCreateEnvelopeParams;
  export import RecursionCreateSelfParams = RecursionAPI.RecursionCreateSelfParams;
  export import SharedResponses = SharedResponsesAPI.SharedResponses;
}
