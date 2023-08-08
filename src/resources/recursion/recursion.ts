// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { SharedResponses } from './shared-responses';
import * as API from './index';

export class Recursion extends APIResource {
  sharedResponses: SharedResponses = new SharedResponses(this.client);

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
  export import ArrayRecursion = API.ArrayRecursion;
  export import BranchRecursion = API.BranchRecursion;
  export import BranchRecursionChildA = API.BranchRecursionChildA;
  export import BranchRecursionChildB = API.BranchRecursionChildB;
  export import MutualRecursionA = API.MutualRecursionA;
  export import MutualRecursionB = API.MutualRecursionB;
  export import SelfRecursion = API.SelfRecursion;
  export import RecursionCreateEnvelopeResponse = API.RecursionCreateEnvelopeResponse;
  export import RecursionCreateBranchParams = API.RecursionCreateBranchParams;
  export import RecursionCreateEnvelopeParams = API.RecursionCreateEnvelopeParams;
  export import RecursionCreateMutualAParams = API.RecursionCreateMutualAParams;
  export import RecursionCreateMutualBParams = API.RecursionCreateMutualBParams;
  export import RecursionCreateSelfParams = API.RecursionCreateSelfParams;

  export import SharedResponses = API.SharedResponses;
}
