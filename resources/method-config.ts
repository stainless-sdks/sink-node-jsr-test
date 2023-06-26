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
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsGoResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsJava(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsJavaResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsKotlin(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsKotlinResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsNode(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsNodeResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsNodeAndPython(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsNodeAndPythonResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsPython(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<MethodConfigSkippedTestsPythonResponse>> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }
}

export interface MethodConfigSkippedTestsAllResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsGoResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsJavaResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsKotlinResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsNodeResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsNodeAndPythonResponse {
  foo: string;
}

export interface MethodConfigSkippedTestsPythonResponse {
  foo: string;
}

export namespace MethodConfig {
  export import MethodConfigSkippedTestsAllResponse = API.MethodConfigSkippedTestsAllResponse;
  export import MethodConfigSkippedTestsGoResponse = API.MethodConfigSkippedTestsGoResponse;
  export import MethodConfigSkippedTestsJavaResponse = API.MethodConfigSkippedTestsJavaResponse;
  export import MethodConfigSkippedTestsKotlinResponse = API.MethodConfigSkippedTestsKotlinResponse;
  export import MethodConfigSkippedTestsNodeResponse = API.MethodConfigSkippedTestsNodeResponse;
  export import MethodConfigSkippedTestsNodeAndPythonResponse = API.MethodConfigSkippedTestsNodeAndPythonResponse;
  export import MethodConfigSkippedTestsPythonResponse = API.MethodConfigSkippedTestsPythonResponse;
}
