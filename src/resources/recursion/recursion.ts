// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as RecursionAPI from 'sink-npm/resources/recursion/recursion';
import * as SharedResponsesAPI from 'sink-npm/resources/recursion/shared-responses';

export class Recursion extends APIResource {
  sharedResponses: SharedResponsesAPI.SharedResponses = new SharedResponsesAPI.SharedResponses(this.client);

  createBranch(
    body: RecursionCreateBranchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BranchRecursion> {
    return this.post('/recursion/branch', { body, ...options });
  }

  createEnvelope(
    body: RecursionCreateEnvelopeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecursionCreateEnvelopeResponse> {
    return this.post('/recursion/envelope', { body, ...options });
  }

  createMutualA(
    body: RecursionCreateMutualAParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MutualRecursionA> {
    return this.post('/recursion/mutual-a', { body, ...options });
  }

  createMutualB(
    body: RecursionCreateMutualBParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MutualRecursionB> {
    return this.post('/recursion/mutual-b', { body, ...options });
  }

  createSelf(body: RecursionCreateSelfParams, options?: Core.RequestOptions): Core.APIPromise<SelfRecursion> {
    return this.post('/recursion/self', { body, ...options });
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

export interface MutualRecursionA {
  b?: MutualRecursionB;
}

export interface MutualRecursionB {
  a?: MutualRecursionA;
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

export interface RecursionCreateMutualAParams {
  b?: MutualRecursionB;
}

export interface RecursionCreateMutualBParams {
  a?: MutualRecursionA;
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
  export import MutualRecursionA = RecursionAPI.MutualRecursionA;
  export import MutualRecursionB = RecursionAPI.MutualRecursionB;
  export import SelfRecursion = RecursionAPI.SelfRecursion;
  export import RecursionCreateEnvelopeResponse = RecursionAPI.RecursionCreateEnvelopeResponse;
  export import RecursionCreateBranchParams = RecursionAPI.RecursionCreateBranchParams;
  export import RecursionCreateEnvelopeParams = RecursionAPI.RecursionCreateEnvelopeParams;
  export import RecursionCreateMutualAParams = RecursionAPI.RecursionCreateMutualAParams;
  export import RecursionCreateMutualBParams = RecursionAPI.RecursionCreateMutualBParams;
  export import RecursionCreateSelfParams = RecursionAPI.RecursionCreateSelfParams;
  export import SharedResponses = SharedResponsesAPI.SharedResponses;
}
