// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';
import { type Uploadable, multipartFormRequestOptions } from 'sink-npm/core';

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

  /**
   * Endpoint for testing file uploads with all kinds of properties
   */
  async everythingMultipart(
    body: FileEverythingMultipartParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<FileEverythingMultipartResponse>> {
    return this.post('/files/multipart_everything', await multipartFormRequestOptions({ body, ...options }));
  }
}

export interface FileCreateMultipartResponse {
  url: string;
}

export interface FileEverythingMultipartResponse {
  url: string;
}

export interface FileCreateMultipartParams {
  file: Uploadable;

  purpose: string;
}

export interface FileEverythingMultipartParams {
  b: boolean;

  e: 'a' | 'b' | 'c';

  file: Uploadable;

  i: number;

  n: number;

  purpose: string;

  s: string;
}

export namespace Files {
  export import FileCreateMultipartResponse = API.FileCreateMultipartResponse;
  export import FileEverythingMultipartResponse = API.FileEverythingMultipartResponse;
  export import FileCreateMultipartParams = API.FileCreateMultipartParams;
  export import FileEverythingMultipartParams = API.FileEverythingMultipartParams;
}
