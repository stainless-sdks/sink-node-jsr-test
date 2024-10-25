// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';

const environments = {
  production: 'https://demo.stainlessapi.com/',
  sandbox: 'https://demo-sanbox.stainlessapi.com/',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * The API Key for the SINK API, sent as a bearer token
   */
  userToken?: string | null | undefined;

  /**
   * The API Key for the SINK API, sent as an api key header
   */
  apiKeyHeader?: string | null | undefined;

  /**
   * The API Key for the SINK API, sent as an api key query
   */
  apiKeyQuery?: string | null | undefined;

  /**
   * Defaults to process.env['SINK_USER'].
   */
  username?: string | undefined;

  /**
   * Defaults to process.env['SINK_CLIENT_ID'].
   */
  clientId?: string | null | undefined;

  /**
   * Defaults to process.env['SINK_CLIENT_SECRET'].
   */
  clientSecret?: string | null | undefined;

  /**
   * Defaults to process.env['SINK_SOME_BOOLEAN_ARG'].
   */
  someBooleanArg?: boolean | null | undefined;

  /**
   * Defaults to process.env['SINK_SOME_INTEGER_ARG'].
   */
  someIntegerArg?: number | null | undefined;

  /**
   * Defaults to process.env['SINK_SOME_NUMBER_ARG'].
   */
  someNumberArg?: number | null | undefined;

  /**
   * Defaults to process.env['SINK_SOME_NUMBER_ARG'].
   */
  someNumberArgRequired?: number | undefined;

  /**
   * Defaults to process.env['SINK_SOME_NUMBER_ARG'].
   */
  someNumberArgRequiredNoDefault?: number | undefined;

  someNumberArgRequiredNoDefaultNoEnv: number;

  requiredArgNoEnv: string;

  requiredArgNoEnvWithDefault?: string | undefined;

  clientPathParam?: string | null | undefined;

  camelCasePath?: string | null | undefined;

  clientQueryParam?: string | null | undefined;

  clientPathOrQueryParam?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://demo.stainlessapi.com/`
   * - `sandbox` corresponds to `https://demo-sanbox.stainlessapi.com/`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['SINK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 1
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;

  /**
   * By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   * Only set this option to `true` if you understand the risks and have appropriate mitigations in place.
   */
  dangerouslyAllowBrowser?: boolean;
}

/**
 * API Client for interfacing with the Sink API.
 */
export class Sink extends Core.APIClient {
  userToken: string | null;
  apiKeyHeader: string | null;
  apiKeyQuery: string | null;
  username: string;
  clientId: string | null;
  clientSecret: string | null;
  someBooleanArg: boolean | null;
  someIntegerArg: number | null;
  someNumberArg: number | null;
  someNumberArgRequired: number;
  someNumberArgRequiredNoDefault: number;
  someNumberArgRequiredNoDefaultNoEnv: number;
  requiredArgNoEnv: string;
  requiredArgNoEnvWithDefault: string;
  clientPathParam: string | null;
  camelCasePath: string | null;
  clientQueryParam: string | null;
  clientPathOrQueryParam: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Sink API.
   *
   * @param {string | null | undefined} [opts.userToken=process.env['SINK_CUSTOM_API_KEY_ENV'] ?? null]
   * @param {string | null | undefined} [opts.apiKeyHeader=process.env['SINK_CUSTOM_API_KEY_HEADER_ENV'] ?? null]
   * @param {string | null | undefined} [opts.apiKeyQuery=process.env['SINK_CUSTOM_API_KEY_QUERY_ENV'] ?? null]
   * @param {string | undefined} [opts.username=process.env['SINK_USER'] ?? undefined]
   * @param {string | null | undefined} [opts.clientId=process.env['SINK_CLIENT_ID'] ?? null]
   * @param {string | null | undefined} [opts.clientSecret=process.env['SINK_CLIENT_SECRET'] ?? hellosecret]
   * @param {boolean | null | undefined} [opts.someBooleanArg=process.env['SINK_SOME_BOOLEAN_ARG'] ?? true]
   * @param {number | null | undefined} [opts.someIntegerArg=process.env['SINK_SOME_INTEGER_ARG'] ?? 123]
   * @param {number | null | undefined} [opts.someNumberArg=process.env['SINK_SOME_NUMBER_ARG'] ?? 1.2]
   * @param {number | undefined} [opts.someNumberArgRequired=process.env['SINK_SOME_NUMBER_ARG'] ?? 1.2]
   * @param {number | undefined} [opts.someNumberArgRequiredNoDefault=process.env['SINK_SOME_NUMBER_ARG'] ?? undefined]
   * @param {number} opts.someNumberArgRequiredNoDefaultNoEnv
   * @param {string} opts.requiredArgNoEnv
   * @param {string | undefined} [opts.requiredArgNoEnvWithDefault=hi!]
   * @param {string | null | undefined} [opts.clientPathParam]
   * @param {string | null | undefined} [opts.camelCasePath]
   * @param {string | null | undefined} [opts.clientQueryParam]
   * @param {string | null | undefined} [opts.clientPathOrQueryParam]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['SINK_BASE_URL'] ?? https://demo.stainlessapi.com/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=1] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   */
  constructor({
    baseURL = Core.readEnv('SINK_BASE_URL'),
    userToken = Core.readEnv('SINK_CUSTOM_API_KEY_ENV') ?? null,
    apiKeyHeader = Core.readEnv('SINK_CUSTOM_API_KEY_HEADER_ENV') ?? null,
    apiKeyQuery = Core.readEnv('SINK_CUSTOM_API_KEY_QUERY_ENV') ?? null,
    username = Core.readEnv('SINK_USER'),
    clientId = Core.readEnv('SINK_CLIENT_ID') ?? null,
    clientSecret = Core.readEnv('SINK_CLIENT_SECRET') ?? 'hellosecret',
    someBooleanArg = Core.maybeCoerceBoolean(Core.readEnv('SINK_SOME_BOOLEAN_ARG')) ?? true,
    someIntegerArg = Core.maybeCoerceInteger(Core.readEnv('SINK_SOME_INTEGER_ARG')) ?? 123,
    someNumberArg = Core.maybeCoerceFloat(Core.readEnv('SINK_SOME_NUMBER_ARG')) ?? 1.2,
    someNumberArgRequired = Core.maybeCoerceFloat(Core.readEnv('SINK_SOME_NUMBER_ARG')) ?? 1.2,
    someNumberArgRequiredNoDefault = Core.maybeCoerceFloat(Core.readEnv('SINK_SOME_NUMBER_ARG')),
    someNumberArgRequiredNoDefaultNoEnv,
    requiredArgNoEnv,
    requiredArgNoEnvWithDefault = 'hi!',
    clientPathParam = null,
    camelCasePath = null,
    clientQueryParam = null,
    clientPathOrQueryParam = null,
    ...opts
  }: ClientOptions) {
    if (username === undefined) {
      throw new Errors.SinkError(
        "The SINK_USER environment variable is missing or empty; either provide it, or instantiate the Sink client with an username option, like new Sink({ username: 'Robert' }).",
      );
    }
    if (someNumberArgRequiredNoDefault === undefined) {
      throw new Errors.SinkError(
        "The SINK_SOME_NUMBER_ARG environment variable is missing or empty; either provide it, or instantiate the Sink client with an someNumberArgRequiredNoDefault option, like new Sink({ someNumberArgRequiredNoDefault: 'my someNumberArgRequiredNoDefault' }).",
      );
    }
    if (someNumberArgRequiredNoDefaultNoEnv === undefined) {
      throw new Errors.SinkError(
        "Missing required client option someNumberArgRequiredNoDefaultNoEnv; you need to instantiate the Sink client with an someNumberArgRequiredNoDefaultNoEnv option, like new Sink({ someNumberArgRequiredNoDefaultNoEnv: 'my someNumberArgRequiredNoDefaultNoEnv' }).",
      );
    }
    if (requiredArgNoEnv === undefined) {
      throw new Errors.SinkError(
        "Missing required client option requiredArgNoEnv; you need to instantiate the Sink client with an requiredArgNoEnv option, like new Sink({ requiredArgNoEnv: '<example>' }).",
      );
    }

    const options: ClientOptions = {
      userToken,
      apiKeyHeader,
      apiKeyQuery,
      username,
      clientId,
      clientSecret,
      someBooleanArg,
      someIntegerArg,
      someNumberArg,
      someNumberArgRequired,
      someNumberArgRequiredNoDefault,
      someNumberArgRequiredNoDefaultNoEnv,
      requiredArgNoEnv,
      requiredArgNoEnvWithDefault,
      clientPathParam,
      camelCasePath,
      clientQueryParam,
      clientPathOrQueryParam,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (!options.dangerouslyAllowBrowser && Core.isRunningInBrowser()) {
      throw new Errors.SinkError(
        'This is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew Sink({ dangerouslyAllowBrowser: true })',
      );
    }

    if (baseURL && opts.environment) {
      throw new Errors.SinkError(
        'Ambiguous URL; The `baseURL` option (or SINK_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
    this.idempotencyHeader = 'Idempotency-Key';

    this.userToken = userToken;
    this.apiKeyHeader = apiKeyHeader;
    this.apiKeyQuery = apiKeyQuery;
    this.username = username;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.someBooleanArg = someBooleanArg;
    this.someIntegerArg = someIntegerArg;
    this.someNumberArg = someNumberArg;
    this.someNumberArgRequired = someNumberArgRequired;
    this.someNumberArgRequiredNoDefault = someNumberArgRequiredNoDefault;
    this.someNumberArgRequiredNoDefaultNoEnv = someNumberArgRequiredNoDefaultNoEnv;
    this.requiredArgNoEnv = requiredArgNoEnv;
    this.requiredArgNoEnvWithDefault = requiredArgNoEnvWithDefault;
    this.clientPathParam = clientPathParam;
    this.camelCasePath = camelCasePath;
    this.clientQueryParam = clientQueryParam;
    this.clientPathOrQueryParam = clientPathOrQueryParam;
  }

  testing: API.Testing = new API.Testing(this);
  complexQueries: API.ComplexQueries = new API.ComplexQueries(this);
  casing: API.Casing = new API.Casing(this);
  defaultReqOptions: API.DefaultReqOptions = new API.DefaultReqOptions(this);
  tools: API.Tools = new API.Tools(this);
  undocumentedResource: API.UndocumentedResource = new API.UndocumentedResource(this);
  methodConfig: API.MethodConfig = new API.MethodConfig(this);
  streaming: API.Streaming = new API.Streaming(this);
  paginationTests: API.PaginationTests = new API.PaginationTests(this);
  docstrings: API.Docstrings = new API.Docstrings(this);
  invalidSchemas: API.InvalidSchemas = new API.InvalidSchemas(this);
  resourceRefs: API.ResourceRefs = new API.ResourceRefs(this);
  cards: API.Cards = new API.Cards(this);
  files: API.Files = new API.Files(this);
  binaries: API.Binaries = new API.Binaries(this);
  resources: API.Resources = new API.Resources(this);
  configTools: API.ConfigTools = new API.ConfigTools(this);
  /**
   * Stainless API company
   */
  company: API.CompanyResource = new API.CompanyResource(this);
  openAPIFormats: API.OpenAPIFormats = new API.OpenAPIFormats(this);
  parent: API.Parent = new API.Parent(this);
  envelopes: API.Envelopes = new API.Envelopes(this);
  types: API.Types = new API.Types(this);
  clients: API.Clients = new API.Clients(this);
  names: API.Names = new API.Names(this);
  /**
   * Widget is love
   * Widget is life
   */
  widgets: API.Widgets = new API.Widgets(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  clientParams: API.ClientParams = new API.ClientParams(this);
  responses: API.Responses = new API.Responses(this);
  pathParams: API.PathParams = new API.PathParams(this);
  positionalParams: API.PositionalParams = new API.PositionalParams(this);
  emptyBody: API.EmptyBody = new API.EmptyBody(this);
  queryParams: API.QueryParams = new API.QueryParams(this);
  bodyParams: API.BodyParams = new API.BodyParams(this);
  headerParams: API.HeaderParams = new API.HeaderParams(this);
  mixedParams: API.MixedParams = new API.MixedParams(this);
  makeAmbiguousSchemasLooser: API.MakeAmbiguousSchemasLooser = new API.MakeAmbiguousSchemasLooser(this);
  makeAmbiguousSchemasExplicit: API.MakeAmbiguousSchemasExplicit = new API.MakeAmbiguousSchemasExplicit(this);
  decoratorTests: API.DecoratorTests = new API.DecoratorTests(this);
  tests: API.Tests = new API.Tests(this);
  deeplyNested: API.DeeplyNested = new API.DeeplyNested(this);
  version1_30Names: API.Version1_30Names = new API.Version1_30Names(this);
  recursion: API.Recursion = new API.Recursion(this);
  sharedQueryParams: API.SharedQueryParams = new API.SharedQueryParams(this);
  modelReferencedInParentAndChild: API.ModelReferencedInParentAndChildResource =
    new API.ModelReferencedInParentAndChildResource(this);

  /**
   * API status check
   */
  apiStatus(options?: Core.RequestOptions): Core.APIPromise<TopLevelAPI.APIStatus> {
    return this.get('/status', options);
  }

  apiStatusAlias = this.apiStatus;

  /**
   * Endpoint returning no response
   */
  createNoResponse(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.post('/no_response', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return {
      'stl-api-key': this.apiKeyQuery ?? undefined,
      ...this._options.defaultQuery,
    };
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...(this._options.dangerouslyAllowBrowser ? { 'my-header-only-set-if-browser': 'true' } : undefined),
      'My-Api-Version': '11',
      'X-Enable-Metrics': '1',
      'X-Client-UserName': this.username,
      'X-Client-Secret': this.clientSecret,
      'X-Integer': this.someIntegerArg?.toString() ?? null,
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const bearerAuth = this.bearerAuth(opts);
    const apiKeyAuth = this.apiKeyAuth(opts);

    if (bearerAuth != null && !Core.isEmptyObj(bearerAuth)) {
      return bearerAuth;
    }

    if (apiKeyAuth != null && !Core.isEmptyObj(apiKeyAuth)) {
      return apiKeyAuth;
    }
    return {};
  }

  protected bearerAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.userToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.userToken}` };
  }

  protected apiKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiKeyHeader == null) {
      return {};
    }
    return { 'X-STL-APIKEY': this.apiKeyHeader };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Sink = this;
  static CONSTANT_WITH_NEWLINES = '\n\nHuman:';
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static SinkError = Errors.SinkError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const { CONSTANT_WITH_NEWLINES } = Sink;

export const {
  SinkError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Sink {
  export type RequestOptions = Core.RequestOptions;

  export import PageCursor = Pagination.PageCursor;
  export type PageCursorParams = Pagination.PageCursorParams;
  export type PageCursorResponse<T> = Pagination.PageCursorResponse<T>;

  export import PageCursorWithReverse = Pagination.PageCursorWithReverse;
  export type PageCursorWithReverseParams = Pagination.PageCursorWithReverseParams;
  export type PageCursorWithReverseResponse<T> = Pagination.PageCursorWithReverseResponse<T>;

  export import PageCursorFromHeaders = Pagination.PageCursorFromHeaders;
  export type PageCursorFromHeadersParams = Pagination.PageCursorFromHeadersParams;
  export type PageCursorFromHeadersResponse<T> = Pagination.PageCursorFromHeadersResponse<T>;

  export import PageCursorTopLevelArray = Pagination.PageCursorTopLevelArray;
  export type PageCursorTopLevelArrayParams = Pagination.PageCursorTopLevelArrayParams;
  export type PageCursorTopLevelArrayResponse<T> = Pagination.PageCursorTopLevelArrayResponse<T>;

  export import PageCursorSharedRef = Pagination.PageCursorSharedRef;
  export type PageCursorSharedRefParams = Pagination.PageCursorSharedRefParams;
  export type PageCursorSharedRefResponse<T> = Pagination.PageCursorSharedRefResponse<T>;

  export import PageCursorNestedObjectRef = Pagination.PageCursorNestedObjectRef;
  export type PageCursorNestedObjectRefParams = Pagination.PageCursorNestedObjectRefParams;
  export type PageCursorNestedObjectRefResponse<T> = Pagination.PageCursorNestedObjectRefResponse<T>;

  export import PageCursorNestedItems = Pagination.PageCursorNestedItems;
  export type PageCursorNestedItemsParams = Pagination.PageCursorNestedItemsParams;
  export type PageCursorNestedItemsResponse<T> = Pagination.PageCursorNestedItemsResponse<T>;

  export import PagePageNumber = Pagination.PagePageNumber;
  export type PagePageNumberParams = Pagination.PagePageNumberParams;
  export type PagePageNumberResponse<T> = Pagination.PagePageNumberResponse<T>;

  export import PagePageNumberWithoutCurrentPageResponse = Pagination.PagePageNumberWithoutCurrentPageResponse;
  export type PagePageNumberWithoutCurrentPageResponseParams =
    Pagination.PagePageNumberWithoutCurrentPageResponseParams;
  export type PagePageNumberWithoutCurrentPageResponseResponse<T> =
    Pagination.PagePageNumberWithoutCurrentPageResponseResponse<T>;

  export import PageOffsetTotalCount = Pagination.PageOffsetTotalCount;
  export type PageOffsetTotalCountParams = Pagination.PageOffsetTotalCountParams;
  export type PageOffsetTotalCountResponse<T> = Pagination.PageOffsetTotalCountResponse<T>;

  export import PageOffset = Pagination.PageOffset;
  export type PageOffsetParams = Pagination.PageOffsetParams;
  export type PageOffsetResponse<T> = Pagination.PageOffsetResponse<T>;

  export import PageOffsetNoStartField = Pagination.PageOffsetNoStartField;
  export type PageOffsetNoStartFieldParams = Pagination.PageOffsetNoStartFieldParams;
  export type PageOffsetNoStartFieldResponse<T> = Pagination.PageOffsetNoStartFieldResponse<T>;

  export import PageCursorURL = Pagination.PageCursorURL;
  export type PageCursorURLParams = Pagination.PageCursorURLParams;
  export type PageCursorURLResponse<T> = Pagination.PageCursorURLResponse<T>;

  export import PageCursorID = Pagination.PageCursorID;
  export type PageCursorIDParams = Pagination.PageCursorIDParams;
  export type PageCursorIDResponse<T> = Pagination.PageCursorIDResponse<T>;

  export import FakePage = Pagination.FakePage;
  export type FakePageParams = Pagination.FakePageParams;
  export type FakePageResponse<T> = Pagination.FakePageResponse<T>;

  export type APIStatus = API.APIStatus;
  export type APIStatusAlias = API.APIStatusAlias;
  export type CustomAPIStatusMessage = API.CustomAPIStatusMessage;

  export import Testing = API.Testing;
  export type RootResponse = API.RootResponse;

  export import ComplexQueries = API.ComplexQueries;
  export type ComplexQueryArrayQueryResponse = API.ComplexQueryArrayQueryResponse;
  export type ComplexQueryObjectQueryResponse = API.ComplexQueryObjectQueryResponse;
  export type ComplexQueryUnionQueryResponse = API.ComplexQueryUnionQueryResponse;
  export type ComplexQueryArrayQueryParams = API.ComplexQueryArrayQueryParams;
  export type ComplexQueryObjectQueryParams = API.ComplexQueryObjectQueryParams;
  export type ComplexQueryUnionQueryParams = API.ComplexQueryUnionQueryParams;

  export import Casing = API.Casing;

  export import DefaultReqOptions = API.DefaultReqOptions;
  export type DefaultReqOptionWithParamOverrideParams = API.DefaultReqOptionWithParamOverrideParams;

  export import Tools = API.Tools;
  export type ObjectSkippedProps = API.ObjectSkippedProps;
  export type ToolSkippedParamsParams = API.ToolSkippedParamsParams;

  export import UndocumentedResource = API.UndocumentedResource;
  export type UndocumentedResourceReissueParams = API.UndocumentedResourceReissueParams;

  export import MethodConfig = API.MethodConfig;
  export type MethodConfigSkippedTestsAllResponse = API.MethodConfigSkippedTestsAllResponse;
  export type MethodConfigSkippedTestsGoResponse = API.MethodConfigSkippedTestsGoResponse;
  export type MethodConfigSkippedTestsJavaResponse = API.MethodConfigSkippedTestsJavaResponse;
  export type MethodConfigSkippedTestsKotlinResponse = API.MethodConfigSkippedTestsKotlinResponse;
  export type MethodConfigSkippedTestsNodeResponse = API.MethodConfigSkippedTestsNodeResponse;
  export type MethodConfigSkippedTestsNodeAndPythonResponse =
    API.MethodConfigSkippedTestsNodeAndPythonResponse;
  export type MethodConfigSkippedTestsPythonResponse = API.MethodConfigSkippedTestsPythonResponse;
  export type MethodConfigSkippedTestsRubyResponse = API.MethodConfigSkippedTestsRubyResponse;
  export type MethodConfigShouldNotShowUpInAPIDocsParams = API.MethodConfigShouldNotShowUpInAPIDocsParams;

  export import Streaming = API.Streaming;
  export type StreamingBasicResponse = API.StreamingBasicResponse;
  export type StreamingNestedParamsResponse = API.StreamingNestedParamsResponse;
  export type StreamingNoDiscriminatorResponse = API.StreamingNoDiscriminatorResponse;
  export type StreamingQueryParamDiscriminatorResponse = API.StreamingQueryParamDiscriminatorResponse;
  export type StreamingBasicParams = API.StreamingBasicParams;
  export type StreamingBasicParamsNonStreaming = API.StreamingBasicParamsNonStreaming;
  export type StreamingBasicParamsStreaming = API.StreamingBasicParamsStreaming;
  export type StreamingNestedParamsParams = API.StreamingNestedParamsParams;
  export type StreamingNestedParamsParamsNonStreaming = API.StreamingNestedParamsParamsNonStreaming;
  export type StreamingNestedParamsParamsStreaming = API.StreamingNestedParamsParamsStreaming;
  export type StreamingNoDiscriminatorParams = API.StreamingNoDiscriminatorParams;
  export type StreamingQueryParamDiscriminatorParams = API.StreamingQueryParamDiscriminatorParams;
  export type StreamingQueryParamDiscriminatorParamsNonStreaming =
    API.StreamingQueryParamDiscriminatorParamsNonStreaming;
  export type StreamingQueryParamDiscriminatorParamsStreaming =
    API.StreamingQueryParamDiscriminatorParamsStreaming;

  export import PaginationTests = API.PaginationTests;

  export import Docstrings = API.Docstrings;
  export type DocstringLeadingDoubleQuoteResponse = API.DocstringLeadingDoubleQuoteResponse;
  export type DocstringTrailingDoubleQuoteResponse = API.DocstringTrailingDoubleQuoteResponse;

  export import InvalidSchemas = API.InvalidSchemas;

  export import ResourceRefs = API.ResourceRefs;

  export import Cards = API.Cards;
  export type Card = API.Card;
  export type CardAlias = API.CardAlias;
  export type FundingAccount = API.FundingAccount;
  export type CardListResponse = API.CardListResponse;
  export type CardProvisionFooResponse = API.CardProvisionFooResponse;
  export type CardCreateParams = API.CardCreateParams;
  export type CardUpdateParams = API.CardUpdateParams;
  export type CardListParams = API.CardListParams;
  export type CardCreateAliasedParams = API.CardCreateAliasedParams;
  export type CardCreateAliasedDeprecatedParams = API.CardCreateAliasedDeprecatedParams;
  export type CardProvisionFooParams = API.CardProvisionFooParams;
  export type CardReissueParams = API.CardReissueParams;

  export import Files = API.Files;
  export type FileCreateMultipartResponse = API.FileCreateMultipartResponse;
  export type FileEverythingMultipartResponse = API.FileEverythingMultipartResponse;
  export type FileNoFileMultipartResponse = API.FileNoFileMultipartResponse;
  export type FileWithOptionalParamResponse = API.FileWithOptionalParamResponse;
  export type FileCreateMultipartParams = API.FileCreateMultipartParams;
  export type FileEverythingMultipartParams = API.FileEverythingMultipartParams;
  export type FileNoFileMultipartParams = API.FileNoFileMultipartParams;
  export type FileWithOptionalParamParams = API.FileWithOptionalParamParams;

  export import Binaries = API.Binaries;
  export type BinaryWithPathAndBodyParamParams = API.BinaryWithPathAndBodyParamParams;

  export import Resources = API.Resources;

  export import ConfigTools = API.ConfigTools;
  export type ModelFromNestedResponseBodyRef = API.ModelFromNestedResponseBodyRef;
  export type ModelFromSchemasRef = API.ModelFromSchemasRef;
  export type ModelFromSchemasRefOpenAPIUri = API.ModelFromSchemasRefOpenAPIUri;
  export type ModelFromSchemasRefOpenAPIUriJmespath = API.ModelFromSchemasRefOpenAPIUriJmespath;
  export type ModelFromSchemasRefOpenAPIUriJsonpath = API.ModelFromSchemasRefOpenAPIUriJsonpath;
  export type OnlyNodeModel = API.OnlyNodeModel;
  export type ConfigToolModelRefFromNestedResponseBodyResponse =
    API.ConfigToolModelRefFromNestedResponseBodyResponse;
  export type ConfigToolOnlyInNodeParams = API.ConfigToolOnlyInNodeParams;

  export import CompanyResource = API.CompanyResource;
  export type Company = API.Company;

  export import OpenAPIFormats = API.OpenAPIFormats;
  export type OpenAPIFormatArrayTypeOneEntryResponse = API.OpenAPIFormatArrayTypeOneEntryResponse;
  export type OpenAPIFormatArrayTypeOneEntryWithNullResponse =
    API.OpenAPIFormatArrayTypeOneEntryWithNullResponse;
  export type OpenAPIFormatArrayTypeOneEntryParams = API.OpenAPIFormatArrayTypeOneEntryParams;
  export type OpenAPIFormatArrayTypeOneEntryWithNullParams = API.OpenAPIFormatArrayTypeOneEntryWithNullParams;

  export import Parent = API.Parent;

  export import Envelopes = API.Envelopes;
  export type Address = API.Address;
  export type EnvelopeInlineResponseResponse = API.EnvelopeInlineResponseResponse;
  export type EnvelopeWrappedArrayResponse = API.EnvelopeWrappedArrayResponse;

  export import Types = API.Types;
  export type TypeDatesResponse = API.TypeDatesResponse;
  export type TypeDatetimesResponse = API.TypeDatetimesResponse;
  export type TypeDatesParams = API.TypeDatesParams;
  export type TypeDatetimesParams = API.TypeDatetimesParams;

  export import Clients = API.Clients;
  export type Client = API.Client;
  export type ClientCreateParams = API.ClientCreateParams;

  export import Names = API.Names;
  export type Balance = API.Balance;
  export type NameChildPropImportClashResponse = API.NameChildPropImportClashResponse;
  export type NamePropertiesCommonConflictsResponse = API.NamePropertiesCommonConflictsResponse;
  export type NamePropertiesIllegalGoIdentifiersResponse = API.NamePropertiesIllegalGoIdentifiersResponse;
  export type NamePropertiesIllegalJavascriptIdentifiersResponse =
    API.NamePropertiesIllegalJavascriptIdentifiersResponse;
  export type NameResponsePropertyClashesModelImportResponse =
    API.NameResponsePropertyClashesModelImportResponse;
  export type NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;
  export type NamePropertiesCommonConflictsParams = API.NamePropertiesCommonConflictsParams;
  export type NamePropertiesIllegalGoIdentifiersParams = API.NamePropertiesIllegalGoIdentifiersParams;
  export type NamePropertiesIllegalJavascriptIdentifiersParams =
    API.NamePropertiesIllegalJavascriptIdentifiersParams;

  export import Widgets = API.Widgets;
  export type Widget = API.Widget;

  export import Webhooks = API.Webhooks;
  export type CardCreatedWebhookEvent = API.CardCreatedWebhookEvent;
  export type CardReadyWebhookEvent = API.CardReadyWebhookEvent;
  export type CardErroredWebhookEvent = API.CardErroredWebhookEvent;
  export type CardUpdatedWebhookEvent = API.CardUpdatedWebhookEvent;
  export type CardDeletedWebhookEvent = API.CardDeletedWebhookEvent;
  export type UnwrapWebhookEvent = API.UnwrapWebhookEvent;

  export import ClientParams = API.ClientParams;
  export type ClientParamWithPathParamResponse = API.ClientParamWithPathParamResponse;
  export type ClientParamWithPathParamAndStandardResponse = API.ClientParamWithPathParamAndStandardResponse;
  export type ClientParamWithQueryParamResponse = API.ClientParamWithQueryParamResponse;
  export type ClientParamWithPathParamParams = API.ClientParamWithPathParamParams;
  export type ClientParamWithPathParamAndStandardParams = API.ClientParamWithPathParamAndStandardParams;
  export type ClientParamWithQueryParamParams = API.ClientParamWithQueryParamParams;

  export import Responses = API.Responses;
  export type ModelFromNestedPath = API.ModelFromNestedPath;
  export type ModelWithNestedModel = API.ModelWithNestedModel;
  export type ObjectWithAnyOfNullProperty = API.ObjectWithAnyOfNullProperty;
  export type ObjectWithOneOfNullProperty = API.ObjectWithOneOfNullProperty;
  export type ObjectWithUnionProperties = API.ObjectWithUnionProperties;
  export type ResponsesAllofCrossObject = API.ResponsesAllofCrossObject;
  export type SimpleAllof = API.SimpleAllof;
  export type UnknownObject = API.UnknownObject;
  export type ResponseAdditionalPropertiesResponse = API.ResponseAdditionalPropertiesResponse;
  export type ResponseAdditionalPropertiesNestedModelReferenceResponse =
    API.ResponseAdditionalPropertiesNestedModelReferenceResponse;
  export type ResponseAllofCrossResourceResponse = API.ResponseAllofCrossResourceResponse;
  export type ResponseAllofSimpleResponse = API.ResponseAllofSimpleResponse;
  export type ResponseArrayObjectWithUnionPropertiesResponse =
    API.ResponseArrayObjectWithUnionPropertiesResponse;
  export type ResponseArrayResponseResponse = API.ResponseArrayResponseResponse;
  export type ResponseBooleanResponseResponse = API.ResponseBooleanResponseResponse;
  export type ResponseIntegerResponseResponse = API.ResponseIntegerResponseResponse;
  export type ResponseMissingRequiredResponse = API.ResponseMissingRequiredResponse;
  export type ResponseNestedArrayResponse = API.ResponseNestedArrayResponse;
  export type ResponseObjectAllPropertiesResponse = API.ResponseObjectAllPropertiesResponse;
  export type ResponseObjectNoPropertiesResponse = API.ResponseObjectNoPropertiesResponse;
  export type ResponseObjectWithAdditionalPropertiesPropResponse =
    API.ResponseObjectWithAdditionalPropertiesPropResponse;
  export type ResponseObjectWithHeavilyNestedUnionResponse = API.ResponseObjectWithHeavilyNestedUnionResponse;
  export type ResponseOnlyReadOnlyPropertiesResponse = API.ResponseOnlyReadOnlyPropertiesResponse;
  export type ResponseStringResponseResponse = API.ResponseStringResponseResponse;

  export import PathParams = API.PathParams;
  export type PathParamColonSuffixResponse = API.PathParamColonSuffixResponse;
  export type PathParamFileExtensionResponse = API.PathParamFileExtensionResponse;
  export type PathParamMultipleResponse = API.PathParamMultipleResponse;
  export type PathParamQueryParamResponse = API.PathParamQueryParamResponse;
  export type PathParamSingularResponse = API.PathParamSingularResponse;
  export type PathParamNullableParamsParams = API.PathParamNullableParamsParams;

  export import PositionalParams = API.PositionalParams;
  export type PositionalParamBasicBodyParams = API.PositionalParamBasicBodyParams;
  export type PositionalParamBasicQueryParams = API.PositionalParamBasicQueryParams;
  export type PositionalParamBodyParams = API.PositionalParamBodyParams;
  export type PositionalParamBodyExtraParamParams = API.PositionalParamBodyExtraParamParams;
  export type PositionalParamKitchenSinkParams = API.PositionalParamKitchenSinkParams;
  export type PositionalParamMultiplePathParamsParams = API.PositionalParamMultiplePathParamsParams;
  export type PositionalParamQueryParams = API.PositionalParamQueryParams;
  export type PositionalParamQueryAndPathParams = API.PositionalParamQueryAndPathParams;
  export type PositionalParamQueryMultipleParams = API.PositionalParamQueryMultipleParams;
  export type PositionalParamUnionBodyAndPathParams = API.PositionalParamUnionBodyAndPathParams;

  export import EmptyBody = API.EmptyBody;
  export type EmptyBodyStainlessEmptyObjectParams = API.EmptyBodyStainlessEmptyObjectParams;
  export type EmptyBodyTypedParamsParams = API.EmptyBodyTypedParamsParams;

  export import QueryParams = API.QueryParams;
  export type QueryParamAllOfParams = API.QueryParamAllOfParams;
  export type QueryParamAnyOfParams = API.QueryParamAnyOfParams;
  export type QueryParamAnyOfStringOrArrayParams = API.QueryParamAnyOfStringOrArrayParams;
  export type QueryParamArrayParams = API.QueryParamArrayParams;
  export type QueryParamEnumParams = API.QueryParamEnumParams;
  export type QueryParamObjectParams = API.QueryParamObjectParams;
  export type QueryParamOneOfParams = API.QueryParamOneOfParams;
  export type QueryParamPrimitivesParams = API.QueryParamPrimitivesParams;

  export import BodyParams = API.BodyParams;
  export type ModelWithParamInName = API.ModelWithParamInName;
  export type MyModel = API.MyModel;
  export type NestedRequestModelA = API.NestedRequestModelA;
  export type NestedRequestModelB = API.NestedRequestModelB;
  export type NestedRequestModelC = API.NestedRequestModelC;
  export type NullTypeModel = API.NullTypeModel;
  export type StringMapModel = API.StringMapModel;
  export type UnknownObjectModel = API.UnknownObjectModel;
  export type BodyParamTopLevelAllOfResponse = API.BodyParamTopLevelAllOfResponse;
  export type BodyParamUnionOverlappingPropResponse = API.BodyParamUnionOverlappingPropResponse;
  export type BodyParamBinaryStringTypeParams = API.BodyParamBinaryStringTypeParams;
  export type BodyParamBinaryTypeParams = API.BodyParamBinaryTypeParams;
  export type BodyParamDuplicateSubpropertyParams = API.BodyParamDuplicateSubpropertyParams;
  export type BodyParamEnumPropertiesParams = API.BodyParamEnumPropertiesParams;
  export type BodyParamNestedRequestModelsParams = API.BodyParamNestedRequestModelsParams;
  export type BodyParamNullTypeParams = API.BodyParamNullTypeParams;
  export type BodyParamObjectWithArrayOfObjectsParams = API.BodyParamObjectWithArrayOfObjectsParams;
  export type BodyParamObjectWithUnionPropertiesParams = API.BodyParamObjectWithUnionPropertiesParams;
  export type BodyParamOnlyReadOnlyPropertiesParams = API.BodyParamOnlyReadOnlyPropertiesParams;
  export type BodyParamParamInModelNameRefParams = API.BodyParamParamInModelNameRefParams;
  export type BodyParamPropertyModelRefParams = API.BodyParamPropertyModelRefParams;
  export type BodyParamPropertyWithComplexUnionParams = API.BodyParamPropertyWithComplexUnionParams;
  export type BodyParamPropertyWithHeavilyNestedComplexUnionParams =
    API.BodyParamPropertyWithHeavilyNestedComplexUnionParams;
  export type BodyParamReadOnlyPropertiesParams = API.BodyParamReadOnlyPropertiesParams;
  export type BodyParamStringMapModelRefParams = API.BodyParamStringMapModelRefParams;
  export type BodyParamTopLevelAllOfParams = API.BodyParamTopLevelAllOfParams;
  export type BodyParamTopLevelAllOfNestedObjectParams = API.BodyParamTopLevelAllOfNestedObjectParams;
  export type BodyParamTopLevelAnyOfWithRefParams = API.BodyParamTopLevelAnyOfWithRefParams;
  export type BodyParamTopLevelArrayParams = API.BodyParamTopLevelArrayParams;
  export type BodyParamTopLevelArrayWithChildrenParams = API.BodyParamTopLevelArrayWithChildrenParams;
  export type BodyParamTopLevelArrayWithOtherParamsParams = API.BodyParamTopLevelArrayWithOtherParamsParams;
  export type BodyParamTopLevelOneOfOneEntryParams = API.BodyParamTopLevelOneOfOneEntryParams;
  export type BodyParamTopLevelSharedTypeParams = API.BodyParamTopLevelSharedTypeParams;
  export type BodyParamUnionOverlappingPropParams = API.BodyParamUnionOverlappingPropParams;
  export type BodyParamUnknownObjectParams = API.BodyParamUnknownObjectParams;
  export type BodyParamWithDefaultBodyParamOptionalParams = API.BodyParamWithDefaultBodyParamOptionalParams;
  export type BodyParamWithDefaultBodyParamRequiredParams = API.BodyParamWithDefaultBodyParamRequiredParams;
  export type BodyParamWithModelPropertyParams = API.BodyParamWithModelPropertyParams;

  export import HeaderParams = API.HeaderParams;
  export type HeaderParamAllTypesParams = API.HeaderParamAllTypesParams;
  export type HeaderParamArraysParams = API.HeaderParamArraysParams;
  export type HeaderParamClientArgumentParams = API.HeaderParamClientArgumentParams;
  export type HeaderParamNullableTypeParams = API.HeaderParamNullableTypeParams;

  export import MixedParams = API.MixedParams;
  export type MixedParamBodyWithTopLevelOneOfAndPathParams = API.MixedParamBodyWithTopLevelOneOfAndPathParams;
  export type MixedParamQueryAndBodyParams = API.MixedParamQueryAndBodyParams;
  export type MixedParamQueryBodyAndPathParams = API.MixedParamQueryBodyAndPathParams;

  export import MakeAmbiguousSchemasLooser = API.MakeAmbiguousSchemasLooser;
  export type MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse =
    API.MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse;

  export import MakeAmbiguousSchemasExplicit = API.MakeAmbiguousSchemasExplicit;
  export type MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse =
    API.MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse;

  export import DecoratorTests = API.DecoratorTests;
  export type DecoratorTestKeepMeResponse = API.DecoratorTestKeepMeResponse;

  export import Tests = API.Tests;

  export import DeeplyNested = API.DeeplyNested;

  export import Version1_30Names = API.Version1_30Names;
  export type Version1_30NameCreateResponse = API.Version1_30NameCreateResponse;
  export type Version1_30NameCreateParams = API.Version1_30NameCreateParams;

  export import Recursion = API.Recursion;
  export type ArrayRecursion = API.ArrayRecursion;
  export type SelfRecursion = API.SelfRecursion;
  export type RecursionCreateEnvelopeResponse = API.RecursionCreateEnvelopeResponse;
  export type RecursionCreateEnvelopeParams = API.RecursionCreateEnvelopeParams;
  export type RecursionCreateSelfParams = API.RecursionCreateSelfParams;

  export import SharedQueryParams = API.SharedQueryParams;
  export type SharedQueryParamRetrieveResponse = API.SharedQueryParamRetrieveResponse;
  export type SharedQueryParamDelResponse = API.SharedQueryParamDelResponse;
  export type SharedQueryParamRetrieveParams = API.SharedQueryParamRetrieveParams;
  export type SharedQueryParamDelParams = API.SharedQueryParamDelParams;

  export import ModelReferencedInParentAndChildResource = API.ModelReferencedInParentAndChildResource;
  export type ModelReferencedInParentAndChild = API.ModelReferencedInParentAndChild;

  export type BasicSharedModelObject = API.BasicSharedModelObject;
  export type Currency = API.Currency;
  export type ObjectWithChildRef = API.ObjectWithChildRef;
  export type PageCursorSharedRefPagination = API.PageCursorSharedRefPagination;
  export type SharedCursorNestedResponsePropMeta = API.SharedCursorNestedResponsePropMeta;
  export type SharedSelfRecursion = API.SharedSelfRecursion;
  export type ShippingAddress = API.ShippingAddress;
  export type SimpleObject = API.SimpleObject;
  export type SimpleObjectAlias = API.SimpleObjectAlias;
}

export default Sink;
