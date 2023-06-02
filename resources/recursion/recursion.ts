// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { SharedResponses } from './shared-responses';

export class Recursion extends APIResource {
  sharedResponses: SharedResponses = new SharedResponses(this.client);

  createBranch(
    body: RecursionCreateBranchParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<BranchRecursion>> {
    return this.post('/recursion/branch', { body, ...options });
  }

  createEnvelope(
    body: RecursionCreateEnvelopeParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RecursionCreateEnvelopeResponse>> {
    return this.post('/recursion/envelope', { body, ...options });
  }

  createMutualA(
    body: RecursionCreateMutualAParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MutualRecursionA>> {
    return this.post('/recursion/mutual-a', { body, ...options });
  }

  createMutualB(
    body: RecursionCreateMutualBParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MutualRecursionB>> {
    return this.post('/recursion/mutual-b', { body, ...options });
  }

  createSelf(
    body: RecursionCreateSelfParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<SelfRecursion>> {
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
