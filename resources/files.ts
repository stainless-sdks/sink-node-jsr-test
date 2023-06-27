// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';
import { type Uploadable, multipartFormRequestOptions } from '~/core';

export class Files extends APIResource {
  /**
   * Endpoint for testing file uploads
   */
  async createMultipart(
    body: FileCreateMultipartParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<FileCreateMultipartResponse>> {
    return this.post('/files/multipart', await multipartFormRequestOptions({ body, ...options }));
  }
}

export interface FileCreateMultipartResponse {
  url: string;
}

export interface FileCreateMultipartParams {
  file: Uploadable;

  purpose: string;
}

export namespace Files {
  export import FileCreateMultipartResponse = API.FileCreateMultipartResponse;
  export import FileCreateMultipartParams = API.FileCreateMultipartParams;
}
