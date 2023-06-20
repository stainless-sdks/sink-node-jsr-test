// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';

export class MethodConfig extends APIResource {
  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsAll(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsAllResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsGo(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsAllResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsJava(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsAllResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsKotlin(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsAllResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsNode(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsAllResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsNodeAndPython(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsAllResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsPython(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsAllResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }
}

export interface MethodConfigSkippedTestsAllResponse {
  foo: string;
}

export namespace MethodConfig {
  export import MethodConfigSkippedTestsAllResponse = API.MethodConfigSkippedTestsAllResponse;
}
