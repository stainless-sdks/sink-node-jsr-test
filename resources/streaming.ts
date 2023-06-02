// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { Stream } from '~/streaming';

export class Streaming extends APIResource {
  basic(
    body: StreamingBasicParams.BasicStreamingEnabledRequest,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Stream<StreamingBasicResponse>>>;
  basic(
    body: StreamingBasicParams.BasicStreamingRequest,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse>>;
  basic(
    body: StreamingBasicParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse | Stream<StreamingBasicResponse>>> {
    return this.post('/streaming/basic', { body, ...options, stream: body.stream });
  }
}

export interface StreamingBasicResponse {
  completion: string;

  model?: string;
}

export type StreamingBasicParams =
  | StreamingBasicParams.BasicStreamingEnabledRequest
  | StreamingBasicParams.BasicStreamingRequest;

export namespace StreamingBasicParams {
  export interface BasicStreamingEnabledRequest {
    model: string;

    prompt: string;

    stream: true;
  }

  export interface BasicStreamingRequest {
    model: string;

    prompt: string;

    stream?: false;
  }
}
