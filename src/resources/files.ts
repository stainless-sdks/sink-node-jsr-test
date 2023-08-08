// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';
import { type Uploadable, multipartFormRequestOptions } from 'sink-npm/core';

export class Files extends APIResource {
  /**
   * Endpoint for testing file uploads
   */
  createMultipart(
    body: FileCreateMultipartParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileCreateMultipartResponse> {
    return this.post('/files/multipart', multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Endpoint for testing file uploads with all kinds of properties
   */
  everythingMultipart(
    body: FileEverythingMultipartParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileEverythingMultipartResponse> {
    return this.post('/files/multipart_everything', multipartFormRequestOptions({ body, ...options }));
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
