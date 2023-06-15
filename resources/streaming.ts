// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { Stream } from '~/streaming';

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
  ): Promise<Core.APIResponse<StreamingBasicResponse>>;
  nestedParams(
    body: StreamingNestedParamsParams.NestedStreamingRequestStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Stream<StreamingBasicResponse>>>;
  nestedParams(
    body: StreamingNestedParamsParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse | Stream<StreamingBasicResponse>>> {
    return this.post('/streaming/nested_params', { body, ...options, stream: body.stream ?? false });
  }

  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParams.QueryParamDiscriminatorRequestNonStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse>>;
  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParams.QueryParamDiscriminatorRequestStreaming,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Stream<StreamingBasicResponse>>>;
  queryParamDiscriminator(
    query: StreamingQueryParamDiscriminatorParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<StreamingBasicResponse | Stream<StreamingBasicResponse>>> {
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
      export interface ChildProp {
        from_object?: string;
      }

      export interface ArrayProp {
        from_array_items?: boolean;
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
      export interface ChildProp {
        from_object?: string;
      }

      export interface ArrayProp {
        from_array_items?: boolean;
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
