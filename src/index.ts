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
  export import RequestOptions = Core.RequestOptions;

  export import PageCursor = Pagination.PageCursor;
  export import PageCursorParams = Pagination.PageCursorParams;
  export import PageCursorResponse = Pagination.PageCursorResponse;

  export import PageCursorWithReverse = Pagination.PageCursorWithReverse;
  export import PageCursorWithReverseParams = Pagination.PageCursorWithReverseParams;
  export import PageCursorWithReverseResponse = Pagination.PageCursorWithReverseResponse;

  export import PageCursorFromHeaders = Pagination.PageCursorFromHeaders;
  export import PageCursorFromHeadersParams = Pagination.PageCursorFromHeadersParams;
  export import PageCursorFromHeadersResponse = Pagination.PageCursorFromHeadersResponse;

  export import PageCursorTopLevelArray = Pagination.PageCursorTopLevelArray;
  export import PageCursorTopLevelArrayParams = Pagination.PageCursorTopLevelArrayParams;
  export import PageCursorTopLevelArrayResponse = Pagination.PageCursorTopLevelArrayResponse;

  export import PageCursorSharedRef = Pagination.PageCursorSharedRef;
  export import PageCursorSharedRefParams = Pagination.PageCursorSharedRefParams;
  export import PageCursorSharedRefResponse = Pagination.PageCursorSharedRefResponse;

  export import PageCursorNestedObjectRef = Pagination.PageCursorNestedObjectRef;
  export import PageCursorNestedObjectRefParams = Pagination.PageCursorNestedObjectRefParams;
  export import PageCursorNestedObjectRefResponse = Pagination.PageCursorNestedObjectRefResponse;

  export import PageCursorNestedItems = Pagination.PageCursorNestedItems;
  export import PageCursorNestedItemsParams = Pagination.PageCursorNestedItemsParams;
  export import PageCursorNestedItemsResponse = Pagination.PageCursorNestedItemsResponse;

  export import PagePageNumber = Pagination.PagePageNumber;
  export import PagePageNumberParams = Pagination.PagePageNumberParams;
  export import PagePageNumberResponse = Pagination.PagePageNumberResponse;

  export import PagePageNumberWithoutCurrentPageResponse = Pagination.PagePageNumberWithoutCurrentPageResponse;
  export import PagePageNumberWithoutCurrentPageResponseParams = Pagination.PagePageNumberWithoutCurrentPageResponseParams;
  export import PagePageNumberWithoutCurrentPageResponseResponse = Pagination.PagePageNumberWithoutCurrentPageResponseResponse;

  export import PageOffsetTotalCount = Pagination.PageOffsetTotalCount;
  export import PageOffsetTotalCountParams = Pagination.PageOffsetTotalCountParams;
  export import PageOffsetTotalCountResponse = Pagination.PageOffsetTotalCountResponse;

  export import PageOffset = Pagination.PageOffset;
  export import PageOffsetParams = Pagination.PageOffsetParams;
  export import PageOffsetResponse = Pagination.PageOffsetResponse;

  export import PageOffsetNoStartField = Pagination.PageOffsetNoStartField;
  export import PageOffsetNoStartFieldParams = Pagination.PageOffsetNoStartFieldParams;
  export import PageOffsetNoStartFieldResponse = Pagination.PageOffsetNoStartFieldResponse;

  export import PageCursorURL = Pagination.PageCursorURL;
  export import PageCursorURLParams = Pagination.PageCursorURLParams;
  export import PageCursorURLResponse = Pagination.PageCursorURLResponse;

  export import PageCursorID = Pagination.PageCursorID;
  export import PageCursorIDParams = Pagination.PageCursorIDParams;
  export import PageCursorIDResponse = Pagination.PageCursorIDResponse;

  export import FakePage = Pagination.FakePage;
  export import FakePageParams = Pagination.FakePageParams;
  export import FakePageResponse = Pagination.FakePageResponse;

  export import APIStatus = API.APIStatus;
  export import APIStatusAlias = API.APIStatusAlias;
  export import CustomAPIStatusMessage = API.CustomAPIStatusMessage;

  export import Testing = API.Testing;
  export import RootResponse = API.RootResponse;

  export import ComplexQueries = API.ComplexQueries;
  export import ComplexQueryArrayQueryResponse = API.ComplexQueryArrayQueryResponse;
  export import ComplexQueryObjectQueryResponse = API.ComplexQueryObjectQueryResponse;
  export import ComplexQueryUnionQueryResponse = API.ComplexQueryUnionQueryResponse;
  export import ComplexQueryArrayQueryParams = API.ComplexQueryArrayQueryParams;
  export import ComplexQueryObjectQueryParams = API.ComplexQueryObjectQueryParams;
  export import ComplexQueryUnionQueryParams = API.ComplexQueryUnionQueryParams;

  export import Casing = API.Casing;

  export import DefaultReqOptions = API.DefaultReqOptions;
  export import DefaultReqOptionWithParamOverrideParams = API.DefaultReqOptionWithParamOverrideParams;

  export import Tools = API.Tools;
  export import ObjectSkippedProps = API.ObjectSkippedProps;
  export import ToolSkippedParamsParams = API.ToolSkippedParamsParams;

  export import UndocumentedResource = API.UndocumentedResource;
  export import UndocumentedResourceReissueParams = API.UndocumentedResourceReissueParams;

  export import MethodConfig = API.MethodConfig;
  export import MethodConfigSkippedTestsAllResponse = API.MethodConfigSkippedTestsAllResponse;
  export import MethodConfigSkippedTestsGoResponse = API.MethodConfigSkippedTestsGoResponse;
  export import MethodConfigSkippedTestsJavaResponse = API.MethodConfigSkippedTestsJavaResponse;
  export import MethodConfigSkippedTestsKotlinResponse = API.MethodConfigSkippedTestsKotlinResponse;
  export import MethodConfigSkippedTestsNodeResponse = API.MethodConfigSkippedTestsNodeResponse;
  export import MethodConfigSkippedTestsNodeAndPythonResponse = API.MethodConfigSkippedTestsNodeAndPythonResponse;
  export import MethodConfigSkippedTestsPythonResponse = API.MethodConfigSkippedTestsPythonResponse;
  export import MethodConfigSkippedTestsRubyResponse = API.MethodConfigSkippedTestsRubyResponse;
  export import MethodConfigShouldNotShowUpInAPIDocsParams = API.MethodConfigShouldNotShowUpInAPIDocsParams;

  export import Streaming = API.Streaming;
  export import StreamingBasicResponse = API.StreamingBasicResponse;
  export import StreamingNestedParamsResponse = API.StreamingNestedParamsResponse;
  export import StreamingNoDiscriminatorResponse = API.StreamingNoDiscriminatorResponse;
  export import StreamingQueryParamDiscriminatorResponse = API.StreamingQueryParamDiscriminatorResponse;
  export import StreamingBasicParams = API.StreamingBasicParams;
  export import StreamingBasicParamsNonStreaming = API.StreamingBasicParamsNonStreaming;
  export import StreamingBasicParamsStreaming = API.StreamingBasicParamsStreaming;
  export import StreamingNestedParamsParams = API.StreamingNestedParamsParams;
  export import StreamingNestedParamsParamsNonStreaming = API.StreamingNestedParamsParamsNonStreaming;
  export import StreamingNestedParamsParamsStreaming = API.StreamingNestedParamsParamsStreaming;
  export import StreamingNoDiscriminatorParams = API.StreamingNoDiscriminatorParams;
  export import StreamingQueryParamDiscriminatorParams = API.StreamingQueryParamDiscriminatorParams;
  export import StreamingQueryParamDiscriminatorParamsNonStreaming = API.StreamingQueryParamDiscriminatorParamsNonStreaming;
  export import StreamingQueryParamDiscriminatorParamsStreaming = API.StreamingQueryParamDiscriminatorParamsStreaming;

  export import PaginationTests = API.PaginationTests;

  export import Docstrings = API.Docstrings;
  export import DocstringLeadingDoubleQuoteResponse = API.DocstringLeadingDoubleQuoteResponse;
  export import DocstringTrailingDoubleQuoteResponse = API.DocstringTrailingDoubleQuoteResponse;

  export import InvalidSchemas = API.InvalidSchemas;

  export import ResourceRefs = API.ResourceRefs;

  export import Cards = API.Cards;
  export import Card = API.Card;
  export import CardAlias = API.CardAlias;
  export import FundingAccount = API.FundingAccount;
  export import CardListResponse = API.CardListResponse;
  export import CardProvisionFooResponse = API.CardProvisionFooResponse;
  export import CardCreateParams = API.CardCreateParams;
  export import CardUpdateParams = API.CardUpdateParams;
  export import CardListParams = API.CardListParams;
  export import CardCreateAliasedParams = API.CardCreateAliasedParams;
  export import CardCreateAliasedDeprecatedParams = API.CardCreateAliasedDeprecatedParams;
  export import CardProvisionFooParams = API.CardProvisionFooParams;
  export import CardReissueParams = API.CardReissueParams;

  export import Files = API.Files;
  export import FileCreateMultipartResponse = API.FileCreateMultipartResponse;
  export import FileEverythingMultipartResponse = API.FileEverythingMultipartResponse;
  export import FileNoFileMultipartResponse = API.FileNoFileMultipartResponse;
  export import FileWithOptionalParamResponse = API.FileWithOptionalParamResponse;
  export import FileCreateMultipartParams = API.FileCreateMultipartParams;
  export import FileEverythingMultipartParams = API.FileEverythingMultipartParams;
  export import FileNoFileMultipartParams = API.FileNoFileMultipartParams;
  export import FileWithOptionalParamParams = API.FileWithOptionalParamParams;

  export import Binaries = API.Binaries;
  export import BinaryWithPathAndBodyParamParams = API.BinaryWithPathAndBodyParamParams;

  export import Resources = API.Resources;

  export import ConfigTools = API.ConfigTools;
  export import ModelFromNestedResponseBodyRef = API.ModelFromNestedResponseBodyRef;
  export import ModelFromSchemasRef = API.ModelFromSchemasRef;
  export import ModelFromSchemasRefOpenAPIUri = API.ModelFromSchemasRefOpenAPIUri;
  export import ModelFromSchemasRefOpenAPIUriJmespath = API.ModelFromSchemasRefOpenAPIUriJmespath;
  export import ModelFromSchemasRefOpenAPIUriJsonpath = API.ModelFromSchemasRefOpenAPIUriJsonpath;
  export import OnlyNodeModel = API.OnlyNodeModel;
  export import ConfigToolModelRefFromNestedResponseBodyResponse = API.ConfigToolModelRefFromNestedResponseBodyResponse;
  export import ConfigToolOnlyInNodeParams = API.ConfigToolOnlyInNodeParams;

  export import CompanyResource = API.CompanyResource;
  export import Company = API.Company;

  export import OpenAPIFormats = API.OpenAPIFormats;
  export import OpenAPIFormatArrayTypeOneEntryResponse = API.OpenAPIFormatArrayTypeOneEntryResponse;
  export import OpenAPIFormatArrayTypeOneEntryWithNullResponse = API.OpenAPIFormatArrayTypeOneEntryWithNullResponse;
  export import OpenAPIFormatArrayTypeOneEntryParams = API.OpenAPIFormatArrayTypeOneEntryParams;
  export import OpenAPIFormatArrayTypeOneEntryWithNullParams = API.OpenAPIFormatArrayTypeOneEntryWithNullParams;

  export import Parent = API.Parent;

  export import Envelopes = API.Envelopes;
  export import Address = API.Address;
  export import EnvelopeInlineResponseResponse = API.EnvelopeInlineResponseResponse;
  export import EnvelopeWrappedArrayResponse = API.EnvelopeWrappedArrayResponse;

  export import Types = API.Types;
  export import TypeDatesResponse = API.TypeDatesResponse;
  export import TypeDatetimesResponse = API.TypeDatetimesResponse;
  export import TypeDatesParams = API.TypeDatesParams;
  export import TypeDatetimesParams = API.TypeDatetimesParams;

  export import Clients = API.Clients;
  export import Client = API.Client;
  export import ClientCreateParams = API.ClientCreateParams;

  export import Names = API.Names;
  export import Balance = API.Balance;
  export import NameChildPropImportClashResponse = API.NameChildPropImportClashResponse;
  export import NamePropertiesCommonConflictsResponse = API.NamePropertiesCommonConflictsResponse;
  export import NamePropertiesIllegalJavascriptIdentifiersResponse = API.NamePropertiesIllegalJavascriptIdentifiersResponse;
  export import NameResponsePropertyClashesModelImportResponse = API.NameResponsePropertyClashesModelImportResponse;
  export import NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;
  export import NamePropertiesCommonConflictsParams = API.NamePropertiesCommonConflictsParams;
  export import NamePropertiesIllegalJavascriptIdentifiersParams = API.NamePropertiesIllegalJavascriptIdentifiersParams;

  export import Widgets = API.Widgets;
  export import Widget = API.Widget;

  export import Webhooks = API.Webhooks;
  export import CardCreatedWebhookEvent = API.CardCreatedWebhookEvent;
  export import CardReadyWebhookEvent = API.CardReadyWebhookEvent;
  export import CardErroredWebhookEvent = API.CardErroredWebhookEvent;
  export import CardUpdatedWebhookEvent = API.CardUpdatedWebhookEvent;
  export import CardDeletedWebhookEvent = API.CardDeletedWebhookEvent;
  export import UnwrapWebhookEvent = API.UnwrapWebhookEvent;

  export import ClientParams = API.ClientParams;
  export import ClientParamWithPathParamResponse = API.ClientParamWithPathParamResponse;
  export import ClientParamWithPathParamAndStandardResponse = API.ClientParamWithPathParamAndStandardResponse;
  export import ClientParamWithQueryParamResponse = API.ClientParamWithQueryParamResponse;
  export import ClientParamWithPathParamParams = API.ClientParamWithPathParamParams;
  export import ClientParamWithPathParamAndStandardParams = API.ClientParamWithPathParamAndStandardParams;
  export import ClientParamWithQueryParamParams = API.ClientParamWithQueryParamParams;

  export import Responses = API.Responses;
  export import ModelFromNestedPath = API.ModelFromNestedPath;
  export import ModelWithNestedModel = API.ModelWithNestedModel;
  export import ObjectWithAnyOfNullProperty = API.ObjectWithAnyOfNullProperty;
  export import ObjectWithOneOfNullProperty = API.ObjectWithOneOfNullProperty;
  export import ObjectWithUnionProperties = API.ObjectWithUnionProperties;
  export import ResponsesAllofCrossObject = API.ResponsesAllofCrossObject;
  export import SimpleAllof = API.SimpleAllof;
  export import UnknownObject = API.UnknownObject;
  export import ResponseAdditionalPropertiesResponse = API.ResponseAdditionalPropertiesResponse;
  export import ResponseAdditionalPropertiesNestedModelReferenceResponse = API.ResponseAdditionalPropertiesNestedModelReferenceResponse;
  export import ResponseAllofCrossResourceResponse = API.ResponseAllofCrossResourceResponse;
  export import ResponseAllofSimpleResponse = API.ResponseAllofSimpleResponse;
  export import ResponseArrayObjectWithUnionPropertiesResponse = API.ResponseArrayObjectWithUnionPropertiesResponse;
  export import ResponseArrayResponseResponse = API.ResponseArrayResponseResponse;
  export import ResponseBooleanResponseResponse = API.ResponseBooleanResponseResponse;
  export import ResponseIntegerResponseResponse = API.ResponseIntegerResponseResponse;
  export import ResponseMissingRequiredResponse = API.ResponseMissingRequiredResponse;
  export import ResponseNestedArrayResponse = API.ResponseNestedArrayResponse;
  export import ResponseObjectAllPropertiesResponse = API.ResponseObjectAllPropertiesResponse;
  export import ResponseObjectNoPropertiesResponse = API.ResponseObjectNoPropertiesResponse;
  export import ResponseObjectWithAdditionalPropertiesPropResponse = API.ResponseObjectWithAdditionalPropertiesPropResponse;
  export import ResponseObjectWithHeavilyNestedUnionResponse = API.ResponseObjectWithHeavilyNestedUnionResponse;
  export import ResponseOnlyReadOnlyPropertiesResponse = API.ResponseOnlyReadOnlyPropertiesResponse;
  export import ResponseStringResponseResponse = API.ResponseStringResponseResponse;

  export import PathParams = API.PathParams;
  export import PathParamColonSuffixResponse = API.PathParamColonSuffixResponse;
  export import PathParamFileExtensionResponse = API.PathParamFileExtensionResponse;
  export import PathParamMultipleResponse = API.PathParamMultipleResponse;
  export import PathParamQueryParamResponse = API.PathParamQueryParamResponse;
  export import PathParamSingularResponse = API.PathParamSingularResponse;
  export import PathParamNullableParamsParams = API.PathParamNullableParamsParams;

  export import PositionalParams = API.PositionalParams;
  export import PositionalParamBasicBodyParams = API.PositionalParamBasicBodyParams;
  export import PositionalParamBasicQueryParams = API.PositionalParamBasicQueryParams;
  export import PositionalParamBodyParams = API.PositionalParamBodyParams;
  export import PositionalParamBodyExtraParamParams = API.PositionalParamBodyExtraParamParams;
  export import PositionalParamKitchenSinkParams = API.PositionalParamKitchenSinkParams;
  export import PositionalParamMultiplePathParamsParams = API.PositionalParamMultiplePathParamsParams;
  export import PositionalParamQueryParams = API.PositionalParamQueryParams;
  export import PositionalParamQueryAndPathParams = API.PositionalParamQueryAndPathParams;
  export import PositionalParamQueryMultipleParams = API.PositionalParamQueryMultipleParams;
  export import PositionalParamUnionBodyAndPathParams = API.PositionalParamUnionBodyAndPathParams;

  export import EmptyBody = API.EmptyBody;
  export import EmptyBodyStainlessEmptyObjectParams = API.EmptyBodyStainlessEmptyObjectParams;
  export import EmptyBodyTypedParamsParams = API.EmptyBodyTypedParamsParams;

  export import QueryParams = API.QueryParams;
  export import QueryParamAllOfParams = API.QueryParamAllOfParams;
  export import QueryParamAnyOfParams = API.QueryParamAnyOfParams;
  export import QueryParamAnyOfStringOrArrayParams = API.QueryParamAnyOfStringOrArrayParams;
  export import QueryParamArrayParams = API.QueryParamArrayParams;
  export import QueryParamEnumParams = API.QueryParamEnumParams;
  export import QueryParamObjectParams = API.QueryParamObjectParams;
  export import QueryParamOneOfParams = API.QueryParamOneOfParams;
  export import QueryParamPrimitivesParams = API.QueryParamPrimitivesParams;

  export import BodyParams = API.BodyParams;
  export import ModelWithParamInName = API.ModelWithParamInName;
  export import MyModel = API.MyModel;
  export import NestedRequestModelA = API.NestedRequestModelA;
  export import NestedRequestModelB = API.NestedRequestModelB;
  export import NestedRequestModelC = API.NestedRequestModelC;
  export import NullTypeModel = API.NullTypeModel;
  export import StringMapModel = API.StringMapModel;
  export import UnknownObjectModel = API.UnknownObjectModel;
  export import BodyParamTopLevelAllOfResponse = API.BodyParamTopLevelAllOfResponse;
  export import BodyParamUnionOverlappingPropResponse = API.BodyParamUnionOverlappingPropResponse;
  export import BodyParamBinaryStringTypeParams = API.BodyParamBinaryStringTypeParams;
  export import BodyParamBinaryTypeParams = API.BodyParamBinaryTypeParams;
  export import BodyParamDuplicateSubpropertyParams = API.BodyParamDuplicateSubpropertyParams;
  export import BodyParamEnumPropertiesParams = API.BodyParamEnumPropertiesParams;
  export import BodyParamNestedRequestModelsParams = API.BodyParamNestedRequestModelsParams;
  export import BodyParamNullTypeParams = API.BodyParamNullTypeParams;
  export import BodyParamObjectWithArrayOfObjectsParams = API.BodyParamObjectWithArrayOfObjectsParams;
  export import BodyParamObjectWithUnionPropertiesParams = API.BodyParamObjectWithUnionPropertiesParams;
  export import BodyParamOnlyReadOnlyPropertiesParams = API.BodyParamOnlyReadOnlyPropertiesParams;
  export import BodyParamParamInModelNameRefParams = API.BodyParamParamInModelNameRefParams;
  export import BodyParamPropertyModelRefParams = API.BodyParamPropertyModelRefParams;
  export import BodyParamPropertyWithComplexUnionParams = API.BodyParamPropertyWithComplexUnionParams;
  export import BodyParamPropertyWithHeavilyNestedComplexUnionParams = API.BodyParamPropertyWithHeavilyNestedComplexUnionParams;
  export import BodyParamReadOnlyPropertiesParams = API.BodyParamReadOnlyPropertiesParams;
  export import BodyParamStringMapModelRefParams = API.BodyParamStringMapModelRefParams;
  export import BodyParamTopLevelAllOfParams = API.BodyParamTopLevelAllOfParams;
  export import BodyParamTopLevelAllOfNestedObjectParams = API.BodyParamTopLevelAllOfNestedObjectParams;
  export import BodyParamTopLevelAnyOfWithRefParams = API.BodyParamTopLevelAnyOfWithRefParams;
  export import BodyParamTopLevelArrayParams = API.BodyParamTopLevelArrayParams;
  export import BodyParamTopLevelArrayWithChildrenParams = API.BodyParamTopLevelArrayWithChildrenParams;
  export import BodyParamTopLevelArrayWithOtherParamsParams = API.BodyParamTopLevelArrayWithOtherParamsParams;
  export import BodyParamTopLevelOneOfOneEntryParams = API.BodyParamTopLevelOneOfOneEntryParams;
  export import BodyParamTopLevelSharedTypeParams = API.BodyParamTopLevelSharedTypeParams;
  export import BodyParamUnionOverlappingPropParams = API.BodyParamUnionOverlappingPropParams;
  export import BodyParamUnknownObjectParams = API.BodyParamUnknownObjectParams;
  export import BodyParamWithDefaultBodyParamOptionalParams = API.BodyParamWithDefaultBodyParamOptionalParams;
  export import BodyParamWithDefaultBodyParamRequiredParams = API.BodyParamWithDefaultBodyParamRequiredParams;
  export import BodyParamWithModelPropertyParams = API.BodyParamWithModelPropertyParams;

  export import HeaderParams = API.HeaderParams;
  export import HeaderParamAllTypesParams = API.HeaderParamAllTypesParams;
  export import HeaderParamArraysParams = API.HeaderParamArraysParams;
  export import HeaderParamClientArgumentParams = API.HeaderParamClientArgumentParams;
  export import HeaderParamNullableTypeParams = API.HeaderParamNullableTypeParams;

  export import MixedParams = API.MixedParams;
  export import MixedParamBodyWithTopLevelOneOfAndPathParams = API.MixedParamBodyWithTopLevelOneOfAndPathParams;
  export import MixedParamQueryAndBodyParams = API.MixedParamQueryAndBodyParams;
  export import MixedParamQueryBodyAndPathParams = API.MixedParamQueryBodyAndPathParams;

  export import MakeAmbiguousSchemasLooser = API.MakeAmbiguousSchemasLooser;
  export import MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse = API.MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse;

  export import MakeAmbiguousSchemasExplicit = API.MakeAmbiguousSchemasExplicit;
  export import MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse = API.MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse;

  export import DecoratorTests = API.DecoratorTests;
  export import DecoratorTestKeepMeResponse = API.DecoratorTestKeepMeResponse;

  export import Tests = API.Tests;

  export import DeeplyNested = API.DeeplyNested;

  export import Version1_30Names = API.Version1_30Names;
  export import Version1_30NameCreateResponse = API.Version1_30NameCreateResponse;
  export import Version1_30NameCreateParams = API.Version1_30NameCreateParams;

  export import Recursion = API.Recursion;
  export import ArrayRecursion = API.ArrayRecursion;
  export import SelfRecursion = API.SelfRecursion;
  export import RecursionCreateEnvelopeResponse = API.RecursionCreateEnvelopeResponse;
  export import RecursionCreateEnvelopeParams = API.RecursionCreateEnvelopeParams;
  export import RecursionCreateSelfParams = API.RecursionCreateSelfParams;

  export import SharedQueryParams = API.SharedQueryParams;
  export import SharedQueryParamRetrieveResponse = API.SharedQueryParamRetrieveResponse;
  export import SharedQueryParamDelResponse = API.SharedQueryParamDelResponse;
  export import SharedQueryParamRetrieveParams = API.SharedQueryParamRetrieveParams;
  export import SharedQueryParamDelParams = API.SharedQueryParamDelParams;

  export import ModelReferencedInParentAndChildResource = API.ModelReferencedInParentAndChildResource;
  export import ModelReferencedInParentAndChild = API.ModelReferencedInParentAndChild;

  export import BasicSharedModelObject = API.BasicSharedModelObject;
  export import Currency = API.Currency;
  export import ObjectWithChildRef = API.ObjectWithChildRef;
  export import PageCursorSharedRefPagination = API.PageCursorSharedRefPagination;
  export import SharedCursorNestedResponsePropMeta = API.SharedCursorNestedResponsePropMeta;
  export import SharedSelfRecursion = API.SharedSelfRecursion;
  export import ShippingAddress = API.ShippingAddress;
  export import SimpleObject = API.SimpleObject;
  export import SimpleObjectAlias = API.SimpleObjectAlias;
}

export default Sink;
