// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';
import { Stream } from 'sink-npm/streaming';

export class Streaming extends APIResource {
  basic(
    body: StreamingBasicParamsNonStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse>>;
  basic(
    body: StreamingBasicParamsStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Stream<StreamingBasicResponse>>>;
  basic(
    body: StreamingBasicParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse | Stream<StreamingBasicResponse>>>;
  basic(
    body: StreamingBasicParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse | Stream<StreamingBasicResponse>>> {
    return this.post('/streaming/basic', { body, ...options, stream: body.stream ?? false });
  }

  nestedParams(
    body: StreamingNestedParamsParamsNonStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingNestedParamsResponse>>;
  nestedParams(
    body: StreamingNestedParamsParamsStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Stream<StreamingNestedParamsResponse>>>;
  nestedParams(
    body: StreamingNestedParamsParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingNestedParamsResponse | Stream<StreamingNestedParamsResponse>>>;
  nestedParams(
    body: StreamingNestedParamsParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingNestedParamsResponse | Stream<StreamingNestedParamsResponse>>> {
    return this.post('/streaming/nested_params', { body, ...options, stream: body.stream ?? false });
  }

  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParamsNonStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingQueryParamDiscriminatorResponse>>;
  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParamsStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Stream<StreamingQueryParamDiscriminatorResponse>>>;
  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParams,
    options?: Core.RequestOptions,
  ): Promise<
    Core.APIResponse<
      StreamingQueryParamDiscriminatorResponse | Stream<StreamingQueryParamDiscriminatorResponse>
    >
  >;
  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParams,
    options?: Core.RequestOptions,
  ): Promise<
    Core.APIResponse<
      StreamingQueryParamDiscriminatorResponse | Stream<StreamingQueryParamDiscriminatorResponse>
    >
  > {
    return this.get('/streaming/query_param_discriminator', {
      query,
      ...options,
      stream: query.should_stream ?? false,
    });
  }
}

export interface StreamingBasicResponse {
  completion: string;

  model?: string;
}

export interface StreamingNestedParamsResponse {
  completion: string;

  model?: string;
}

export interface StreamingQueryParamDiscriminatorResponse {
  completion: string;

  model?: string;
}

export interface StreamingBasicParams {
  model: string;

  prompt: string;

  stream?: boolean;
}

export namespace StreamingBasicParams {
  export type StreamingBasicParamsNonStreaming = API.StreamingBasicParamsNonStreaming;
  export type StreamingBasicParamsStreaming = API.StreamingBasicParamsStreaming;
}

export interface StreamingBasicParamsNonStreaming extends StreamingBasicParams {
  stream?: false;
}

export interface StreamingBasicParamsStreaming extends StreamingBasicParams {
  stream: true;
}

export interface StreamingNestedParamsParams {
  model: string;

  prompt: string;

  parent_object?: StreamingNestedParamsParams.ParentObject;

  stream?: boolean;
}

export namespace StreamingNestedParamsParams {
  export interface ParentObject {
    array_prop?: Array<ParentObject.ArrayProp>;

    child_prop?: ParentObject.ChildProp;
  }

  export namespace ParentObject {
    export interface ArrayProp {
      from_array_items?: boolean;
    }

    export interface ChildProp {
      from_object?: string;
    }
  }

  export type StreamingNestedParamsParamsNonStreaming = API.StreamingNestedParamsParamsNonStreaming;
  export type StreamingNestedParamsParamsStreaming = API.StreamingNestedParamsParamsStreaming;
}

export interface StreamingNestedParamsParamsNonStreaming extends StreamingNestedParamsParams {
  stream?: false;
}

export interface StreamingNestedParamsParamsStreaming extends StreamingNestedParamsParams {
  stream: true;
}

export interface StreamingQueryParamDiscriminatorParams {
  prompt: string;

  should_stream?: boolean;
}

export namespace StreamingQueryParamDiscriminatorParams {
  export type StreamingQueryParamDiscriminatorParamsNonStreaming =
    API.StreamingQueryParamDiscriminatorParamsNonStreaming;
  export type StreamingQueryParamDiscriminatorParamsStreaming =
    API.StreamingQueryParamDiscriminatorParamsStreaming;
}

export interface StreamingQueryParamDiscriminatorParamsNonStreaming
  extends StreamingQueryParamDiscriminatorParams {
  should_stream?: false;
}

export interface StreamingQueryParamDiscriminatorParamsStreaming
  extends StreamingQueryParamDiscriminatorParams {
  should_stream: true;
}

export namespace Streaming {
  export import StreamingBasicResponse = API.StreamingBasicResponse;
  export import StreamingNestedParamsResponse = API.StreamingNestedParamsResponse;
  export import StreamingQueryParamDiscriminatorResponse = API.StreamingQueryParamDiscriminatorResponse;
  export import StreamingBasicParams = API.StreamingBasicParams;
  export import StreamingBasicParamsNonStreaming = API.StreamingBasicParamsNonStreaming;
  export import StreamingBasicParamsStreaming = API.StreamingBasicParamsStreaming;
  export import StreamingNestedParamsParams = API.StreamingNestedParamsParams;
  export import StreamingNestedParamsParamsNonStreaming = API.StreamingNestedParamsParamsNonStreaming;
  export import StreamingNestedParamsParamsStreaming = API.StreamingNestedParamsParamsStreaming;
  export import StreamingQueryParamDiscriminatorParams = API.StreamingQueryParamDiscriminatorParams;
  export import StreamingQueryParamDiscriminatorParamsNonStreaming = API.StreamingQueryParamDiscriminatorParamsNonStreaming;
  export import StreamingQueryParamDiscriminatorParamsStreaming = API.StreamingQueryParamDiscriminatorParamsStreaming;
}
