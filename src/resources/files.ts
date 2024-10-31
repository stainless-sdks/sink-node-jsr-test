// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Files extends APIResource {
  /**
   * Endpoint for testing file uploads
   */
  createMultipart(
    body: FileCreateMultipartParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileCreateMultipartResponse> {
    return this._client.post('/files/multipart', Core.multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Endpoint for testing file uploads with all kinds of properties
   */
  everythingMultipart(
    body: FileEverythingMultipartParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileEverythingMultipartResponse> {
    return this._client.post(
      '/files/multipart_everything',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Endpoint for multipart requests without a file parameter.
   */
  noFileMultipart(
    body: FileNoFileMultipartParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileNoFileMultipartResponse> {
    return this._client.post(
      '/files/no_file_multipart',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Multipart request with a required and an optional file request param.
   */
  withOptionalParam(
    body: FileWithOptionalParamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileWithOptionalParamResponse> {
    return this._client.post(
      '/files/with_optional_param',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface FileCreateMultipartResponse {
  url: string;
}

export interface FileEverythingMultipartResponse {
  url: string;
}

export interface FileNoFileMultipartResponse {
  url: string;
}

export interface FileWithOptionalParamResponse {
  url: string;
}

export interface FileCreateMultipartParams {
  file: Core.Uploadable;

  purpose: string;
}

export interface FileEverythingMultipartParams {
  b: boolean;

  e: 'a' | 'b' | 'c';

  f: number;

  file: Core.Uploadable;

  i: number;

  purpose: string;

  s: string;
}

export interface FileNoFileMultipartParams {
  purpose: string;
}

export interface FileWithOptionalParamParams {
  /**
   * The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask
   * is not provided, image must have transparency, which will be used as the mask.
   */
  image: Core.Uploadable;

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
  mask?: Core.Uploadable;
}

export declare namespace Files {
  export {
    type FileCreateMultipartResponse as FileCreateMultipartResponse,
    type FileEverythingMultipartResponse as FileEverythingMultipartResponse,
    type FileNoFileMultipartResponse as FileNoFileMultipartResponse,
    type FileWithOptionalParamResponse as FileWithOptionalParamResponse,
    type FileCreateMultipartParams as FileCreateMultipartParams,
    type FileEverythingMultipartParams as FileEverythingMultipartParams,
    type FileNoFileMultipartParams as FileNoFileMultipartParams,
    type FileWithOptionalParamParams as FileWithOptionalParamParams,
  };
}
