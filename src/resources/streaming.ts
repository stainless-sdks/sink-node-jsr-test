// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as API from './index';
import { Stream } from 'sink-npm/streaming';

export class Streaming extends APIResource {
  basic(
    body: StreamingBasicParams.BasicStreamingRequestNonStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse>>;
  basic(
    body: StreamingBasicParams.BasicStreamingRequestStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Stream<StreamingBasicResponse>>>;
  basic(
    body: StreamingBasicParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse | Stream<StreamingBasicResponse>>> {
    return this.post('/streaming/basic', { body, ...options, stream: body.stream ?? false });
  }

  nestedParams(
    body: StreamingNestedParamsParams.NestedStreamingRequestNonStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingNestedParamsResponse>>;
  nestedParams(
    body: StreamingNestedParamsParams.NestedStreamingRequestStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Stream<StreamingNestedParamsResponse>>>;
  nestedParams(
    body: StreamingNestedParamsParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingNestedParamsResponse | Stream<StreamingNestedParamsResponse>>> {
    return this.post('/streaming/nested_params', { body, ...options, stream: body.stream ?? false });
  }

  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParams.QueryParamDiscriminatorRequestNonStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingQueryParamDiscriminatorResponse>>;
  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParams.QueryParamDiscriminatorRequestStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Stream<StreamingQueryParamDiscriminatorResponse>>>;
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

export type StreamingBasicParams =
  | StreamingBasicParams.BasicStreamingRequestNonStreaming
  | StreamingBasicParams.BasicStreamingRequestStreaming;

export namespace StreamingBasicParams {
  export interface BasicStreamingRequestNonStreaming {
    model: string;

    prompt: string;

    stream?: false;
  }

  export interface BasicStreamingRequestStreaming {
    model: string;

    prompt: string;

    stream: true;
  }
}

export type StreamingNestedParamsParams =
  | StreamingNestedParamsParams.NestedStreamingRequestNonStreaming
  | StreamingNestedParamsParams.NestedStreamingRequestStreaming;

export namespace StreamingNestedParamsParams {
  export interface NestedStreamingRequestNonStreaming {
    model: string;

    prompt: string;

    parent_object?: StreamingNestedParamsParams.NestedStreamingRequestNonStreaming.ParentObject;

    stream?: false;
  }

  export namespace NestedStreamingRequestNonStreaming {
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
  }

  export interface NestedStreamingRequestStreaming {
    model: string;

    prompt: string;

    stream: true;

    parent_object?: StreamingNestedParamsParams.NestedStreamingRequestStreaming.ParentObject;
  }

  export namespace NestedStreamingRequestStreaming {
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
  }
}

export type StreamingQueryParamDiscriminatorParams =
  | StreamingQueryParamDiscriminatorParams.QueryParamDiscriminatorRequestNonStreaming
  | StreamingQueryParamDiscriminatorParams.QueryParamDiscriminatorRequestStreaming;

export namespace StreamingQueryParamDiscriminatorParams {
  export interface QueryParamDiscriminatorRequestNonStreaming {
    prompt: string;

    should_stream?: false;
  }

  export interface QueryParamDiscriminatorRequestStreaming {
    prompt: string;

    should_stream: true;
  }
}

export namespace Streaming {
  export import StreamingBasicResponse = API.StreamingBasicResponse;
  export import StreamingNestedParamsResponse = API.StreamingNestedParamsResponse;
  export import StreamingQueryParamDiscriminatorResponse = API.StreamingQueryParamDiscriminatorResponse;
  export import StreamingBasicParams = API.StreamingBasicParams;
  export import StreamingNestedParamsParams = API.StreamingNestedParamsParams;
  export import StreamingQueryParamDiscriminatorParams = API.StreamingQueryParamDiscriminatorParams;
}
