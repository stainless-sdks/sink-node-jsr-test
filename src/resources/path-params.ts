// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as Shared from 'sink-npm/resources/shared';
import * as API from './index';

export class PathParams extends APIResource {
  /**
   * Endpoint with a singular path parameter that uses a `dash` separator.
   */
  dashedParam(
    dashedParam: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.BasicSharedModelObject>> {
    return this.post(`/path_params/${dashedParam}`, options);
  }

  /**
   * Endpoint with a singular path parameter that is of an integer type.
   */
  integerParam(
    integerParam: number,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.BasicSharedModelObject>> {
    return this.post(`/path_params/${integerParam}`, options);
  }

  /**
   * Endpoint with multiple path parameters.
   */
  multiple(
    first: string,
    second: string,
    last: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PathParamMultipleResponse>> {
    return this.post(`/path_params/${first}/${second}/${last}`, options);
  }

  /**
   * Endpoint with multiple path parameters that are of different types, e.g. one
   * integer type and the other string type.
   */
  paramsMixedTypes(
    integerParam: number,
    stringParam: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.BasicSharedModelObject>> {
    return this.post(`/path_params/mixed/${integerParam}/${stringParam}`, options);
  }

  /**
   * Endpoint with a singular path parameter.
   */
  singular(
    singular: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PathParamSingularResponse>> {
    return this.post(`/path_params/${singular}`, options);
  }
}

export interface PathParamMultipleResponse {
  foo: string;
}

export interface PathParamSingularResponse {
  foo: string;
}

export namespace PathParams {
  export import PathParamMultipleResponse = API.PathParamMultipleResponse;
  export import PathParamSingularResponse = API.PathParamSingularResponse;
}
