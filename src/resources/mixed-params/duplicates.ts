// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as DuplicatesAPI from 'sink-npm/resources/mixed-params/duplicates';
import * as Shared from 'sink-npm/resources/shared';

export class Duplicates extends APIResource {
  /**
   * Endpoint with a `requestBody` that defines a param with the same name in path
   * and body params
   */
  bodyAndPath(
    pathId: string,
    params: DuplicateBodyAndPathParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    const { body_id, ...body } = params;
    return this.post(`/mixed_params/duplicates/body_and_path/${pathId}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Endpoint with a `requestBody` that defines a param with the same name in query
   * and body params
   */
  queryAndBody(
    params: DuplicateQueryAndBodyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    const { query_id, body_id, ...body } = params;
    return this.post('/mixed_params/duplicates/query_and_body', {
      query: { id: query_id },
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Endpoint with a `requestBody` that defines a param with the same name in path
   * and query params
   */
  queryAndPath(
    pathId: string,
    params: DuplicateQueryAndPathParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BasicSharedModelObject> {
    const { query_id } = params;
    return this.post(`/mixed_params/duplicates/query_and_path/${pathId}`, {
      query: { id: query_id },
      ...options,
    });
  }
}

export interface DuplicateBodyAndPathParams {
  /**
   * Body param description
   */
  body_id: string;
}

export interface DuplicateQueryAndBodyParams {
  /**
   * Query param: Query param description
   */
  query_id: string;

  /**
   * Body param: Body param description
   */
  body_id: string;
}

export interface DuplicateQueryAndPathParams {
  /**
   * Query param description
   */
  query_id: string;
}

export namespace Duplicates {
  export type DuplicateBodyAndPathParams = DuplicatesAPI.DuplicateBodyAndPathParams;
  export type DuplicateQueryAndBodyParams = DuplicatesAPI.DuplicateQueryAndBodyParams;
  export type DuplicateQueryAndPathParams = DuplicatesAPI.DuplicateQueryAndPathParams;
}
