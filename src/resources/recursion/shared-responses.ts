// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as Shared from 'sink-npm/resources/shared';

export class SharedResponses extends APIResource {
  createMutualA(options?: Core.RequestOptions): Promise<Core.APIResponse<Shared.SharedMutualRecursionA>> {
    return this.post('/recursion/shared/responses/mutual-a', options);
  }

  createMutualB(options?: Core.RequestOptions): Promise<Core.APIResponse<Shared.SharedMutualRecursionB>> {
    return this.post('/recursion/shared/responses/mutual-b', options);
  }

  createSelf(options?: Core.RequestOptions): Promise<Core.APIResponse<Shared.SharedSelfRecursion>> {
    return this.post('/recursion/shared/responses/self', options);
  }
}
