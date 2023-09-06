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

  /**
   * Multipart request with a required and an optional file request param.
   */
  withOptionalParam(
    body: FileWithOptionalParamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileWithOptionalParamResponse> {
    return this.post('/files/with_optional_param', multipartFormRequestOptions({ body, ...options }));
  }
}

export interface FileCreateMultipartResponse {
  url: string;
}

export interface FileEverythingMultipartResponse {
  url: string;
}

export interface FileWithOptionalParamResponse {
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

export interface FileWithOptionalParamParams {
  /**
   * The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask
   * is not provided, image must have transparency, which will be used as the mask.
   */
  image: Uploadable;

  /**
   * A text description of the desired image(s). The maximum length is 1000
   * characters.
   */
  prompt: string;

  /**
   * An additional image whose fully transparent areas (e.g. where alpha is zero)
   * indicate where `image` should be edited. Must be a valid PNG file, less than
   * 4MB, and have the same dimensions as `image`.
   */
  mask?: Uploadable;
}

export namespace Files {
  export import FileCreateMultipartResponse = API.FileCreateMultipartResponse;
  export import FileEverythingMultipartResponse = API.FileEverythingMultipartResponse;
  export import FileWithOptionalParamResponse = API.FileWithOptionalParamResponse;
  export import FileCreateMultipartParams = API.FileCreateMultipartParams;
  export import FileEverythingMultipartParams = API.FileEverythingMultipartParams;
  export import FileWithOptionalParamParams = API.FileWithOptionalParamParams;
}
