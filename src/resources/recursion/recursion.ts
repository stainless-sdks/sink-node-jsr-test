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
  export type ArrayRecursion = RecursionAPI.ArrayRecursion;
  export type BranchRecursion = RecursionAPI.BranchRecursion;
  export type BranchRecursionChildA = RecursionAPI.BranchRecursionChildA;
  export type BranchRecursionChildB = RecursionAPI.BranchRecursionChildB;
  export type MutualRecursionA = RecursionAPI.MutualRecursionA;
  export type MutualRecursionB = RecursionAPI.MutualRecursionB;
  export type SelfRecursion = RecursionAPI.SelfRecursion;
  export type RecursionCreateEnvelopeResponse = RecursionAPI.RecursionCreateEnvelopeResponse;
  export type RecursionCreateBranchParams = RecursionAPI.RecursionCreateBranchParams;
  export type RecursionCreateEnvelopeParams = RecursionAPI.RecursionCreateEnvelopeParams;
  export type RecursionCreateMutualAParams = RecursionAPI.RecursionCreateMutualAParams;
  export type RecursionCreateMutualBParams = RecursionAPI.RecursionCreateMutualBParams;
  export type RecursionCreateSelfParams = RecursionAPI.RecursionCreateSelfParams;
  export import SharedResponses = SharedResponsesAPI.SharedResponses;
}
