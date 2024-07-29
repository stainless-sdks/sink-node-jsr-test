// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PathParamsAPI from './path-params';
import * as Shared from './shared';

export class PathParams extends APIResource {
  /**
   * Endpoint with a path param followed by a verb.
   */
  colonSuffix(
    withVerb: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PathParamColonSuffixResponse> {
    return this._client.post(`/path_params/${withVerb}:initiate`, options);
  }

  /**
   * Endpoint with a singular path parameter that uses a `dash` separator.
   */
  dashedParam(
    dashedParam: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.post(`/path_params/${dashedParam}`, options);
  }

  /**
   * Endpoint with a singular path parameter that is a date type.
   */
  dateParam(
    dateParam: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.post(`/path_params/dates/${dateParam}`, options);
  }

  /**
   * Endpoint with a singular path parameter that is a date-time type.
   */
  datetimeParam(
    datetimeParam: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.post(`/path_params/date_times/${datetimeParam}`, options);
  }

  /**
   * Endpoint with a singular path parameter that is an enum type.
   */
  enumParam(
    enumParam: 'A' | 'B' | 'C',
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.post(`/path_params/enums/${enumParam}`, options);
  }

  /**
   * Endpoint with a singular path parameter that is of an integer type.
   */
  integerParam(
    integerParam: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.post(`/path_params/${integerParam}`, options);
  }

  /**
   * Endpoint with multiple path parameters.
   */
  multiple(
    first: string,
    second: string,
    last: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PathParamMultipleResponse> {
    return this._client.post(`/path_params/${first}/${second}/${last}`, options);
  }

  /**
   * Endpoint with nullable path parameters.
   *
   * In a spec file nullable path params are ambiguous and likely to be a mistake.
   * They are transformed to non-nullable as part of the spec normalization and a
   * diagnostic is emitted.
   */
  nullableParams(
    nullableParam1: string,
    nullableParam2: string,
    nullableParam3: 'foo',
    body: PathParamNullableParamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.post(`/path_params/nullable/${nullableParam1}/${nullableParam2}/${nullableParam3}`, {
      body,
      ...options,
    });
  }

  /**
   * Endpoint with multiple path parameters that are of different types, e.g. one
   * integer type and the other string type.
   */
  paramsMixedTypes(
    integerParam: number,
    stringParam: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.post(`/path_params/mixed/${integerParam}/${stringParam}`, options);
  }

  /**
   * Endpoint with a singular path parameter.
   */
  singular(singular: string, options?: Core.RequestOptions): Core.APIPromise<PathParamSingularResponse> {
    return this._client.post(`/path_params/${singular}`, options);
  }
}

export interface PathParamColonSuffixResponse {
  foo: string;
}

export interface PathParamMultipleResponse {
  foo: string;
}

export interface PathParamSingularResponse {
  foo: string;
}

export interface PathParamNullableParamsParams {
  foo?: string;
}

export namespace PathParams {
  export import PathParamColonSuffixResponse = PathParamsAPI.PathParamColonSuffixResponse;
  export import PathParamMultipleResponse = PathParamsAPI.PathParamMultipleResponse;
  export import PathParamSingularResponse = PathParamsAPI.PathParamSingularResponse;
  export import PathParamNullableParamsParams = PathParamsAPI.PathParamNullableParamsParams;
}
