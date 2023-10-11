// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as ToolsAPI from 'sink-npm/resources/tools';

export class Tools extends APIResource {
  skippedParams(
    body: ToolSkippedParamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectSkippedProps> {
    return this.post('/tools/skipped_params', { body, ...options });
  }
}

export interface ObjectSkippedProps {
  skipped_go?: string;

  skipped_java?: string;

  skipped_python?: string;
}

export interface ToolSkippedParamsParams {
  skipped_go?: string;

  skipped_java?: string;

  skipped_python?: string;
}

export namespace Tools {
  export type ObjectSkippedProps = ToolsAPI.ObjectSkippedProps;
  export type ToolSkippedParamsParams = ToolsAPI.ToolSkippedParamsParams;
}
