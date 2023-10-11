// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as MethodConfigAPI from 'sink-npm/resources/method-config';

export class MethodConfig extends APIResource {
  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsAll(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsAllResponse> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsGo(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsGoResponse> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsJava(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsJavaResponse> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsKotlin(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsKotlinResponse> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsNode(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsNodeResponse> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsNodeAndPython(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsNodeAndPythonResponse> {
    return this.get(`/method_config/skipped_tests/${id}`, options);
  }

  /**
   * Used to test skipping generated unit tests.
   */
  skippedTestsPython(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MethodConfigSkippedTestsPythonResponse> {
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
  export type MethodConfigSkippedTestsAllResponse = MethodConfigAPI.MethodConfigSkippedTestsAllResponse;
  export type MethodConfigSkippedTestsGoResponse = MethodConfigAPI.MethodConfigSkippedTestsGoResponse;
  export type MethodConfigSkippedTestsJavaResponse = MethodConfigAPI.MethodConfigSkippedTestsJavaResponse;
  export type MethodConfigSkippedTestsKotlinResponse = MethodConfigAPI.MethodConfigSkippedTestsKotlinResponse;
  export type MethodConfigSkippedTestsNodeResponse = MethodConfigAPI.MethodConfigSkippedTestsNodeResponse;
  export type MethodConfigSkippedTestsNodeAndPythonResponse =
    MethodConfigAPI.MethodConfigSkippedTestsNodeAndPythonResponse;
  export type MethodConfigSkippedTestsPythonResponse = MethodConfigAPI.MethodConfigSkippedTestsPythonResponse;
}
