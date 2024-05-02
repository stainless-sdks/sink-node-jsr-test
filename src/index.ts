// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { Sink } from './client';

export { Sink };
export default Sink;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export const { CONSTANT_WITH_NEWLINES } = Sink;

export const {
  SinkError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export * from './client';
