// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as qs from 'qs';
import * as API from 'sink-npm/resources/index';
import * as TopLevelAPI from 'sink-npm/resources/top-level';

const environments = {
  production: 'https://demo.stainlessapi.com/',
  sandbox: 'https://demo-sanbox.stainlessapi.com/',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * The API Key for the SINK API, sent as a bearer token
   */
  userToken?: string | null;

  /**
   * Defaults to process.env['SINK_USER'].
   */
  username?: string;

  /**
   * Defaults to process.env['SINK_CLIENT_ID'].
   */
  clientId?: string | null;

  /**
   * Defaults to process.env['SINK_CLIENT_SECRET'].
   */
  clientSecret?: string | null;

  /**
   * Defaults to process.env['SINK_SOME_BOOLEAN_ARG'].
   */
  someBooleanArg?: boolean | null;

  /**
   * Defaults to process.env['SINK_SOME_INTEGER_ARG'].
   */
  someIntegerArg?: number | null;

  /**
   * Defaults to process.env['SINK_SOME_NUMBER_ARG'].
   */
  someNumberArg?: number | null;

  /**
   * Defaults to process.env['SINK_SOME_NUMBER_ARG'].
   */
  someNumberArgRequired?: number;

  /**
   * Defaults to process.env['SINK_SOME_NUMBER_ARG'].
   */
  someNumberArgRequiredNoDefault?: number;

  someNumberArgRequiredNoDefaultNoEnv: number;

  requiredArgNoEnv: string;

  requiredArgNoEnvWithDefault?: string;

  clientPathParam?: string | null;

  camelCasePath?: string | null;

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

/** API Client for interfacing with the Sink API. */
export class Sink extends Core.APIClient {
  userToken: string | null;
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

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Sink API.
   *
   * @param {string | null} [opts.userToken=process.env['SINK_CUSTOM_API_KEY_ENV'] ?? null]
   * @param {string} [opts.username=process.env['SINK_USER'] ?? undefined]
   * @param {string | null} [opts.clientId=process.env['SINK_CLIENT_ID'] ?? null]
   * @param {string | null} [opts.clientSecret=process.env['SINK_CLIENT_SECRET'] ?? hellosecret]
   * @param {boolean | null} [opts.someBooleanArg=process.env['SINK_SOME_BOOLEAN_ARG'] ?? true]
   * @param {number | null} [opts.someIntegerArg=process.env['SINK_SOME_INTEGER_ARG'] ?? 123]
   * @param {number | null} [opts.someNumberArg=process.env['SINK_SOME_NUMBER_ARG'] ?? 1.2]
   * @param {number} [opts.someNumberArgRequired=process.env['SINK_SOME_NUMBER_ARG'] ?? 1.2]
   * @param {number} [opts.someNumberArgRequiredNoDefault=process.env['SINK_SOME_NUMBER_ARG'] ?? undefined]
   * @param {number} opts.someNumberArgRequiredNoDefaultNoEnv
   * @param {string} opts.requiredArgNoEnv
   * @param {string} [opts.requiredArgNoEnvWithDefault=hi!]
   * @param {string | null} [opts.clientPathParam]
   * @param {string | null} [opts.camelCasePath]
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
  }

  testing: API.Testing = new API.Testing(this);
  complexQueries: API.ComplexQueries = new API.ComplexQueries(this);
  casing: API.Casing = new API.Casing(this);
  defaultReqOptions: API.DefaultReqOptions = new API.DefaultReqOptions(this);
  tools: API.Tools = new API.Tools(this);
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
  company: API.CompanyResource = new API.CompanyResource(this);
  openapiFormats: API.OpenapiFormats = new API.OpenapiFormats(this);
  parent: API.Parent = new API.Parent(this);
  envelopes: API.Envelopes = new API.Envelopes(this);
  types: API.Types = new API.Types(this);
  names: API.Names = new API.Names(this);
  widgets: API.Widgets = new API.Widgets(this);
  defaultPathParams: API.DefaultPathParams = new API.DefaultPathParams(this);
  responses: API.Responses = new API.Responses(this);
  pathParams: API.PathParams = new API.PathParams(this);
  positionalParams: API.PositionalParams = new API.PositionalParams(this);
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
    return this.post('/no_response', { ...options, headers: { Accept: '', ...options?.headers } });
  }

  /**
   * A top level custom method on the sink customer.
   */
  getAuthURL({ redirectUri, clientId }: { redirectUri: string; clientId: string }): string {
    const url = new URL('/auth', 'http://localhost:8000');

    url.search = `client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    return url.toString();
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      'My-Api-Version': '11',
      'X-Enable-Metrics': '1',
      'X-Client-UserName': this.username,
      'X-Client-Secret': this.clientSecret,
      'X-Integer': this.someIntegerArg?.toString() ?? null,
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.userToken && headers['Authorization']) {
      return;
    }
    if (customHeaders['Authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the userToken to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.userToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.userToken}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Sink = this;
  static CONSTANT_WITH_NEWLINES = '\n\nHuman:';

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
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import APIStatus = API.APIStatus;
  export import APIStatusAlias = API.APIStatusAlias;
  export import CustomAPIStatusMessage = API.CustomAPIStatusMessage;

  export import Testing = API.Testing;
  export import RootResponse = API.RootResponse;

  export import ComplexQueries = API.ComplexQueries;
  export import ComplexQueryArrayQueryResponse = API.ComplexQueryArrayQueryResponse;
  export import ComplexQueryObjectQueryResponse = API.ComplexQueryObjectQueryResponse;
  export import ComplexQueryArrayQueryParams = API.ComplexQueryArrayQueryParams;
  export import ComplexQueryObjectQueryParams = API.ComplexQueryObjectQueryParams;

  export import Casing = API.Casing;

  export import DefaultReqOptions = API.DefaultReqOptions;

  export import Tools = API.Tools;
  export import ObjectSkippedProps = API.ObjectSkippedProps;
  export import ToolSkippedParamsParams = API.ToolSkippedParamsParams;

  export import MethodConfig = API.MethodConfig;
  export import MethodConfigSkippedTestsAllResponse = API.MethodConfigSkippedTestsAllResponse;
  export import MethodConfigSkippedTestsGoResponse = API.MethodConfigSkippedTestsGoResponse;
  export import MethodConfigSkippedTestsJavaResponse = API.MethodConfigSkippedTestsJavaResponse;
  export import MethodConfigSkippedTestsKotlinResponse = API.MethodConfigSkippedTestsKotlinResponse;
  export import MethodConfigSkippedTestsNodeResponse = API.MethodConfigSkippedTestsNodeResponse;
  export import MethodConfigSkippedTestsNodeAndPythonResponse = API.MethodConfigSkippedTestsNodeAndPythonResponse;
  export import MethodConfigSkippedTestsPythonResponse = API.MethodConfigSkippedTestsPythonResponse;
  export import MethodConfigSkippedTestsRubyResponse = API.MethodConfigSkippedTestsRubyResponse;

  export import Streaming = API.Streaming;
  export import StreamingBasicResponse = API.StreamingBasicResponse;
  export import StreamingNestedParamsResponse = API.StreamingNestedParamsResponse;
  export import StreamingQueryParamDiscriminatorResponse = API.StreamingQueryParamDiscriminatorResponse;
  export import StreamingBasicParams = API.StreamingBasicParams;
  export import StreamingBasicParamsNonStreaming = API.StreamingBasicParamsNonStreaming;
  export import StreamingBasicParamsStreaming = API.StreamingBasicParamsStreaming;
  export import StreamingNestedParamsParams = API.StreamingNestedParamsParams;
  export import StreamingNestedParamsParamsNonStreaming = API.StreamingNestedParamsParamsNonStreaming;
  export import StreamingNestedParamsParamsStreaming = API.StreamingNestedParamsParamsStreaming;
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
  export import CardProvisionFooResponse = API.CardProvisionFooResponse;
  export import CardCreateParams = API.CardCreateParams;
  export import CardUpdateParams = API.CardUpdateParams;
  export import CardCreateAliasedParams = API.CardCreateAliasedParams;
  export import CardCreateAliasedDeprecatedParams = API.CardCreateAliasedDeprecatedParams;
  export import CardProvisionFooParams = API.CardProvisionFooParams;
  export import CardReissueParams = API.CardReissueParams;

  export import Files = API.Files;
  export import FileCreateMultipartResponse = API.FileCreateMultipartResponse;
  export import FileEverythingMultipartResponse = API.FileEverythingMultipartResponse;
  export import FileWithOptionalParamResponse = API.FileWithOptionalParamResponse;
  export import FileCreateMultipartParams = API.FileCreateMultipartParams;
  export import FileEverythingMultipartParams = API.FileEverythingMultipartParams;
  export import FileWithOptionalParamParams = API.FileWithOptionalParamParams;

  export import Binaries = API.Binaries;

  export import Resources = API.Resources;

  export import ConfigTools = API.ConfigTools;
  export import OnlyNodeModel = API.OnlyNodeModel;
  export import ConfigToolOnlyInNodeParams = API.ConfigToolOnlyInNodeParams;

  export import CompanyResource = API.CompanyResource;
  export import Company = API.Company;

  export import OpenapiFormats = API.OpenapiFormats;
  export import OpenapiFormatArrayTypeOneEntryResponse = API.OpenapiFormatArrayTypeOneEntryResponse;
  export import OpenapiFormatArrayTypeOneEntryWithNullResponse = API.OpenapiFormatArrayTypeOneEntryWithNullResponse;
  export import OpenapiFormatArrayTypeOneEntryParams = API.OpenapiFormatArrayTypeOneEntryParams;
  export import OpenapiFormatArrayTypeOneEntryWithNullParams = API.OpenapiFormatArrayTypeOneEntryWithNullParams;

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

  export import Names = API.Names;
  export import Balance = API.Balance;
  export import NameChildPropImportClashResponse = API.NameChildPropImportClashResponse;
  export import NamePropertiesCommonConflictsResponse = API.NamePropertiesCommonConflictsResponse;
  export import NameResponsePropertyClashesModelImportResponse = API.NameResponsePropertyClashesModelImportResponse;
  export import NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;
  export import NamePropertiesCommonConflictsParams = API.NamePropertiesCommonConflictsParams;

  export import Widgets = API.Widgets;
  export import Widget = API.Widget;

  export import DefaultPathParams = API.DefaultPathParams;
  export import DefaultPathParamGlobalWithStandardResponse = API.DefaultPathParamGlobalWithStandardResponse;
  export import DefaultPathParamOnlyGlobalResponse = API.DefaultPathParamOnlyGlobalResponse;

  export import Responses = API.Responses;
  export import ModelFromNestedPath = API.ModelFromNestedPath;
  export import ModelWithNestedModel = API.ModelWithNestedModel;
  export import ObjectWithAnyOfNullProperty = API.ObjectWithAnyOfNullProperty;
  export import ObjectWithOneOfNullProperty = API.ObjectWithOneOfNullProperty;
  export import ResponsesAllofCrossObject = API.ResponsesAllofCrossObject;
  export import SimpleAllof = API.SimpleAllof;
  export import UnknownObject = API.UnknownObject;
  export import ResponseAdditionalPropertiesResponse = API.ResponseAdditionalPropertiesResponse;
  export import ResponseAdditionalPropertiesNestedModelReferenceResponse = API.ResponseAdditionalPropertiesNestedModelReferenceResponse;
  export import ResponseAllofCrossResourceResponse = API.ResponseAllofCrossResourceResponse;
  export import ResponseAllofSimpleResponse = API.ResponseAllofSimpleResponse;
  export import ResponseArrayResponseResponse = API.ResponseArrayResponseResponse;
  export import ResponseBooleanResponseResponse = API.ResponseBooleanResponseResponse;
  export import ResponseIntegerResponseResponse = API.ResponseIntegerResponseResponse;
  export import ResponseMissingRequiredResponse = API.ResponseMissingRequiredResponse;
  export import ResponseNestedArrayResponse = API.ResponseNestedArrayResponse;
  export import ResponseObjectAllPropertiesResponse = API.ResponseObjectAllPropertiesResponse;
  export import ResponseObjectNoPropertiesResponse = API.ResponseObjectNoPropertiesResponse;
  export import ResponseObjectWithAdditionalPropertiesPropResponse = API.ResponseObjectWithAdditionalPropertiesPropResponse;
  export import ResponseObjectWithHeavilyNestedUnionResponse = API.ResponseObjectWithHeavilyNestedUnionResponse;
  export import ResponseStringResponseResponse = API.ResponseStringResponseResponse;

  export import PathParams = API.PathParams;
  export import PathParamMultipleResponse = API.PathParamMultipleResponse;
  export import PathParamSingularResponse = API.PathParamSingularResponse;

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
  export import StringMapModel = API.StringMapModel;
  export import BodyParamTopLevelAllOfResponse = API.BodyParamTopLevelAllOfResponse;
  export import BodyParamUnionOverlappingPropResponse = API.BodyParamUnionOverlappingPropResponse;
  export import BodyParamNestedRequestModelsParams = API.BodyParamNestedRequestModelsParams;
  export import BodyParamObjectWithArrayOfObjectsParams = API.BodyParamObjectWithArrayOfObjectsParams;
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
  export import BodyParamTopLevelOneOfOneEntryParams = API.BodyParamTopLevelOneOfOneEntryParams;
  export import BodyParamTopLevelSharedTypeParams = API.BodyParamTopLevelSharedTypeParams;
  export import BodyParamUnionOverlappingPropParams = API.BodyParamUnionOverlappingPropParams;
  export import BodyParamWithDefaultBodyParamOptionalParams = API.BodyParamWithDefaultBodyParamOptionalParams;
  export import BodyParamWithDefaultBodyParamRequiredParams = API.BodyParamWithDefaultBodyParamRequiredParams;
  export import BodyParamWithModelPropertyParams = API.BodyParamWithModelPropertyParams;

  export import HeaderParams = API.HeaderParams;
  export import HeaderParamClientArgumentParams = API.HeaderParamClientArgumentParams;

  export import MixedParams = API.MixedParams;
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
  export import BranchRecursion = API.BranchRecursion;
  export import BranchRecursionChildA = API.BranchRecursionChildA;
  export import BranchRecursionChildB = API.BranchRecursionChildB;
  export import SelfRecursion = API.SelfRecursion;
  export import RecursionCreateEnvelopeResponse = API.RecursionCreateEnvelopeResponse;
  export import RecursionCreateBranchParams = API.RecursionCreateBranchParams;
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
  export import SharedCursorNestedResponsePropMeta = API.SharedCursorNestedResponsePropMeta;
  export import SharedSelfRecursion = API.SharedSelfRecursion;
  export import ShippingAddress = API.ShippingAddress;
  export import SimpleObject = API.SimpleObject;
  export import SimpleObjectAlias = API.SimpleObjectAlias;
}

export default Sink;
