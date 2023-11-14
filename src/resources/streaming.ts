// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIPromise } from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as StreamingAPI from 'sink-npm/resources/streaming';
import { Stream } from 'sink-npm/streaming';

export class Streaming extends APIResource {
  basic(
    body: StreamingBasicParamsNonStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<StreamingBasicResponse>;
  basic(
    body: StreamingBasicParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<StreamingBasicResponse>>;
  basic(
    body: StreamingBasicParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<StreamingBasicResponse> | StreamingBasicResponse>;
  basic(
    body: StreamingBasicParams,
    options?: Core.RequestOptions,
  ): APIPromise<StreamingBasicResponse> | APIPromise<Stream<StreamingBasicResponse>> {
    return this._client.post('/streaming/basic', { body, ...options, stream: body.stream ?? false }) as
      | APIPromise<StreamingBasicResponse>
      | APIPromise<Stream<StreamingBasicResponse>>;
  }

  nestedParams(
    body: StreamingNestedParamsParamsNonStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<StreamingNestedParamsResponse>;
  nestedParams(
    body: StreamingNestedParamsParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<StreamingNestedParamsResponse>>;
  nestedParams(
    body: StreamingNestedParamsParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<StreamingNestedParamsResponse> | StreamingNestedParamsResponse>;
  nestedParams(
    body: StreamingNestedParamsParams,
    options?: Core.RequestOptions,
  ): APIPromise<StreamingNestedParamsResponse> | APIPromise<Stream<StreamingNestedParamsResponse>> {
    return this._client.post('/streaming/nested_params', {
      body,
      ...options,
      stream: body.stream ?? false,
    }) as APIPromise<StreamingNestedParamsResponse> | APIPromise<Stream<StreamingNestedParamsResponse>>;
  }

  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParamsNonStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<StreamingQueryParamDiscriminatorResponse>;
  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<StreamingQueryParamDiscriminatorResponse>>;
  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<StreamingQueryParamDiscriminatorResponse> | StreamingQueryParamDiscriminatorResponse>;
  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParams,
    options?: Core.RequestOptions,
  ):
    | APIPromise<StreamingQueryParamDiscriminatorResponse>
    | APIPromise<Stream<StreamingQueryParamDiscriminatorResponse>> {
    return this._client.get('/streaming/query_param_discriminator', {
      query,
      ...options,
      stream: query.should_stream ?? false,
    }) as
      | APIPromise<StreamingQueryParamDiscriminatorResponse>
      | APIPromise<Stream<StreamingQueryParamDiscriminatorResponse>>;
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

export type StreamingBasicParams = StreamingBasicParamsNonStreaming | StreamingBasicParamsStreaming;

export interface StreamingBasicParamsBase {
  model: string;

  prompt: string;

  stream?: boolean;
}

export namespace StreamingBasicParams {
  export type StreamingBasicParamsNonStreaming = StreamingAPI.StreamingBasicParamsNonStreaming;
  export type StreamingBasicParamsStreaming = StreamingAPI.StreamingBasicParamsStreaming;
}

export interface StreamingBasicParamsNonStreaming extends StreamingBasicParamsBase {
  stream?: false;
}

export interface StreamingBasicParamsStreaming extends StreamingBasicParamsBase {
  stream: true;
}

export type StreamingNestedParamsParams =
  | StreamingNestedParamsParamsNonStreaming
  | StreamingNestedParamsParamsStreaming;

export interface StreamingNestedParamsParamsBase {
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

  export type StreamingNestedParamsParamsNonStreaming = StreamingAPI.StreamingNestedParamsParamsNonStreaming;
  export type StreamingNestedParamsParamsStreaming = StreamingAPI.StreamingNestedParamsParamsStreaming;
}

export interface StreamingNestedParamsParamsNonStreaming extends StreamingNestedParamsParamsBase {
  stream?: false;
}

export interface StreamingNestedParamsParamsStreaming extends StreamingNestedParamsParamsBase {
  stream: true;
}

export type StreamingQueryParamDiscriminatorParams =
  | StreamingQueryParamDiscriminatorParamsNonStreaming
  | StreamingQueryParamDiscriminatorParamsStreaming;

export interface StreamingQueryParamDiscriminatorParamsBase {
  prompt: string;

  should_stream?: boolean;
}

export namespace StreamingQueryParamDiscriminatorParams {
  export type StreamingQueryParamDiscriminatorParamsNonStreaming =
    StreamingAPI.StreamingQueryParamDiscriminatorParamsNonStreaming;
  export type StreamingQueryParamDiscriminatorParamsStreaming =
    StreamingAPI.StreamingQueryParamDiscriminatorParamsStreaming;
}

export interface StreamingQueryParamDiscriminatorParamsNonStreaming
  extends StreamingQueryParamDiscriminatorParamsBase {
  should_stream?: false;
}

export interface StreamingQueryParamDiscriminatorParamsStreaming
  extends StreamingQueryParamDiscriminatorParamsBase {
  should_stream: true;
}

export namespace Streaming {
  export import StreamingBasicResponse = StreamingAPI.StreamingBasicResponse;
  export import StreamingNestedParamsResponse = StreamingAPI.StreamingNestedParamsResponse;
  export import StreamingQueryParamDiscriminatorResponse = StreamingAPI.StreamingQueryParamDiscriminatorResponse;
  export import StreamingBasicParams = StreamingAPI.StreamingBasicParams;
  export import StreamingBasicParamsNonStreaming = StreamingAPI.StreamingBasicParamsNonStreaming;
  export import StreamingBasicParamsStreaming = StreamingAPI.StreamingBasicParamsStreaming;
  export import StreamingNestedParamsParams = StreamingAPI.StreamingNestedParamsParams;
  export import StreamingNestedParamsParamsNonStreaming = StreamingAPI.StreamingNestedParamsParamsNonStreaming;
  export import StreamingNestedParamsParamsStreaming = StreamingAPI.StreamingNestedParamsParamsStreaming;
  export import StreamingQueryParamDiscriminatorParams = StreamingAPI.StreamingQueryParamDiscriminatorParams;
  export import StreamingQueryParamDiscriminatorParamsNonStreaming = StreamingAPI.StreamingQueryParamDiscriminatorParamsNonStreaming;
  export import StreamingQueryParamDiscriminatorParamsStreaming = StreamingAPI.StreamingQueryParamDiscriminatorParamsStreaming;
}
