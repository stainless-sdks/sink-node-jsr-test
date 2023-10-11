// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Pagination from './pagination';
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
   * Defaults to process.env["SINK_CUSTOM_API_KEY_ENV"]. Set it to null if you want to send unauthenticated requests.
   */
  userToken?: string | null;

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
   */
  baseURL?: string;

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
   * @default 2
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

  username?: string;

  clientId?: string | null;

  clientSecret?: string | null;

  someBooleanArg?: boolean | null;

  someIntegerArg?: number | null;

  someNumberArg?: number | null;

  requiredArgNoEnv: string;
}

/** API Client for interfacing with the Sink API. */
export class Sink extends Core.APIClient {
  userToken: string | null;
  username: string;
  clientId?: string | null;
  clientSecret?: string | null;
  someBooleanArg?: boolean | null;
  someIntegerArg?: number | null;
  someNumberArg?: number | null;
  requiredArgNoEnv: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Sink API.
   *
   * @param {string | null} [opts.userToken=process.env['SINK_CUSTOM_API_KEY_ENV']] - The user token to send to the API.
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   * @param {string} [opts.username]
   * @param {string | null} [opts.clientId]
   * @param {string | null} [opts.clientSecret=hellosecret]
   * @param {boolean | null} [opts.someBooleanArg=true]
   * @param {number | null} [opts.someIntegerArg=123]
   * @param {number | null} [opts.someNumberArg=1.2]
   * @param {string} opts.requiredArgNoEnv
   */
  constructor({
    userToken = Core.readEnv('SINK_CUSTOM_API_KEY_ENV') ?? null,
    username = Core.readEnv('SINK_USER'),
    clientId = Core.readEnv('SINK_CLIENT_ID') ?? null,
    clientSecret = Core.readEnv('SINK_CLIENT_SECRET') ?? 'hellosecret',
    someBooleanArg = Core.maybeCoerceBoolean(Core.readEnv('SINK_SOME_BOOLEAN_ARG')) ?? true,
    someIntegerArg = Core.maybeCoerceInteger(Core.readEnv('SINK_SOME_INTEGER_ARG')) ?? 123,
    someNumberArg = Core.maybeCoerceFloat(Core.readEnv('SINK_SOME_NUMBER_ARG')) ?? 1.2,
    requiredArgNoEnv,
    ...opts
  }: ClientOptions) {
    if (username === undefined) {
      throw new Errors.SinkError(
        "The SINK_USER environment variable is missing or empty; either provide it, or instantiate the Sink client with an username option, like new Sink({ username: 'Robert' }).",
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
      requiredArgNoEnv,
      ...opts,
      environment: opts.environment ?? 'production',
    };

    if (!options.dangerouslyAllowBrowser && Core.isRunningInBrowser()) {
      throw new Errors.SinkError(
        'This is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew Sink({ dangerouslyAllowBrowser: true })',
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
    this.requiredArgNoEnv = requiredArgNoEnv;
  }

  testing: API.Testing = new API.Testing(this);
  complexQueries: API.ComplexQueries = new API.ComplexQueries(this);
  casing: API.Casing = new API.Casing(this);
  tools: API.Tools = new API.Tools(this);
  methodConfig: API.MethodConfig = new API.MethodConfig(this);
  streaming: API.Streaming = new API.Streaming(this);
  paginationTests: API.PaginationTests = new API.PaginationTests(this);
  docstrings: API.Docstrings = new API.Docstrings(this);
  invalidSchemas: API.InvalidSchemas = new API.InvalidSchemas(this);
  resourceRefs: API.ResourceRefs = new API.ResourceRefs(this);
  cards: API.Cards = new API.Cards(this);
  files: API.Files = new API.Files(this);
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

  export import CardPage = Pagination.CardPage;
  export import CardPageParams = Pagination.CardPageParams;
  export import CardPageResponse = Pagination.CardPageResponse;

  export import MyConcretePage = Pagination.MyConcretePage;
  export import MyConcretePageParams = Pagination.MyConcretePageParams;
  export import MyConcretePageResponse = Pagination.MyConcretePageResponse;

  export import PagePageNumber = Pagination.PagePageNumber;
  export import PagePageNumberParams = Pagination.PagePageNumberParams;
  export import PagePageNumberResponse = Pagination.PagePageNumberResponse;

  export import PageCursor = Pagination.PageCursor;
  export import PageCursorParams = Pagination.PageCursorParams;
  export import PageCursorResponse = Pagination.PageCursorResponse;

  export import PageCursorNestedResponseProp = Pagination.PageCursorNestedResponseProp;
  export import PageCursorNestedResponsePropParams = Pagination.PageCursorNestedResponsePropParams;
  export import PageCursorNestedResponsePropResponse = Pagination.PageCursorNestedResponsePropResponse;

  export import PageCursorURL = Pagination.PageCursorURL;
  export import PageCursorURLParams = Pagination.PageCursorURLParams;
  export import PageCursorURLResponse = Pagination.PageCursorURLResponse;

  export import PageOffset = Pagination.PageOffset;
  export import PageOffsetParams = Pagination.PageOffsetParams;
  export import PageOffsetResponse = Pagination.PageOffsetResponse;

  export import PageHypermedia = Pagination.PageHypermedia;
  export import PageHypermediaParams = Pagination.PageHypermediaParams;
  export import PageHypermediaResponse = Pagination.PageHypermediaResponse;

  export import PageHypermediaRaw = Pagination.PageHypermediaRaw;
  export import PageHypermediaRawParams = Pagination.PageHypermediaRawParams;
  export import PageHypermediaRawResponse = Pagination.PageHypermediaRawResponse;

  export import FakePage = Pagination.FakePage;
  export import FakePageParams = Pagination.FakePageParams;
  export import FakePageResponse = Pagination.FakePageResponse;

  export type APIStatus = API.APIStatus;
  export type APIStatusAlias = API.APIStatusAlias;
  export type CustomAPIStatusMessage = API.CustomAPIStatusMessage;

  export import Testing = API.Testing;
  export type RootResponse = API.RootResponse;

  export import ComplexQueries = API.ComplexQueries;
  export type ComplexQueryArrayQueryResponse = API.ComplexQueryArrayQueryResponse;
  export type ComplexQueryObjectQueryResponse = API.ComplexQueryObjectQueryResponse;
  export type ComplexQueryArrayQueryParams = API.ComplexQueryArrayQueryParams;
  export type ComplexQueryObjectQueryParams = API.ComplexQueryObjectQueryParams;

  export import Casing = API.Casing;

  export import Tools = API.Tools;
  export type ObjectSkippedProps = API.ObjectSkippedProps;
  export type ToolSkippedParamsParams = API.ToolSkippedParamsParams;

  export import MethodConfig = API.MethodConfig;
  export type MethodConfigSkippedTestsAllResponse = API.MethodConfigSkippedTestsAllResponse;
  export type MethodConfigSkippedTestsGoResponse = API.MethodConfigSkippedTestsGoResponse;
  export type MethodConfigSkippedTestsJavaResponse = API.MethodConfigSkippedTestsJavaResponse;
  export type MethodConfigSkippedTestsKotlinResponse = API.MethodConfigSkippedTestsKotlinResponse;
  export type MethodConfigSkippedTestsNodeResponse = API.MethodConfigSkippedTestsNodeResponse;
  export type MethodConfigSkippedTestsNodeAndPythonResponse =
    API.MethodConfigSkippedTestsNodeAndPythonResponse;
  export type MethodConfigSkippedTestsPythonResponse = API.MethodConfigSkippedTestsPythonResponse;

  export import Streaming = API.Streaming;
  export type StreamingBasicResponse = API.StreamingBasicResponse;
  export type StreamingNestedParamsResponse = API.StreamingNestedParamsResponse;
  export type StreamingQueryParamDiscriminatorResponse = API.StreamingQueryParamDiscriminatorResponse;
  export type StreamingBasicParams = API.StreamingBasicParams;
  export type StreamingBasicParamsNonStreaming = API.StreamingBasicParamsNonStreaming;
  export type StreamingBasicParamsStreaming = API.StreamingBasicParamsStreaming;
  export type StreamingNestedParamsParams = API.StreamingNestedParamsParams;
  export type StreamingNestedParamsParamsNonStreaming = API.StreamingNestedParamsParamsNonStreaming;
  export type StreamingNestedParamsParamsStreaming = API.StreamingNestedParamsParamsStreaming;
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
  export type CardProvisionFooResponse = API.CardProvisionFooResponse;
  export import CardsCardPage = API.CardsCardPage;
  export type CardCreateParams = API.CardCreateParams;
  export type CardUpdateParams = API.CardUpdateParams;
  export type CardListParams = API.CardListParams;
  export type CardCreateAliasedParams = API.CardCreateAliasedParams;
  export type CardCreateAliasedDeprecatedParams = API.CardCreateAliasedDeprecatedParams;
  export type CardListNonGetParams = API.CardListNonGetParams;
  export type CardProvisionFooParams = API.CardProvisionFooParams;
  export type CardReissueParams = API.CardReissueParams;

  export import Files = API.Files;
  export type FileCreateMultipartResponse = API.FileCreateMultipartResponse;
  export type FileEverythingMultipartResponse = API.FileEverythingMultipartResponse;
  export type FileWithOptionalParamResponse = API.FileWithOptionalParamResponse;
  export type FileCreateMultipartParams = API.FileCreateMultipartParams;
  export type FileEverythingMultipartParams = API.FileEverythingMultipartParams;
  export type FileWithOptionalParamParams = API.FileWithOptionalParamParams;

  export import Resources = API.Resources;

  export import ConfigTools = API.ConfigTools;
  export type OnlyNodeModel = API.OnlyNodeModel;
  export type ConfigToolOnlyInNodeParams = API.ConfigToolOnlyInNodeParams;

  export import CompanyResource = API.CompanyResource;
  export type Company = API.Company;

  export import OpenapiFormats = API.OpenapiFormats;
  export type OpenapiFormatArrayTypeOneEntryResponse = API.OpenapiFormatArrayTypeOneEntryResponse;
  export type OpenapiFormatArrayTypeOneEntryWithNullResponse =
    API.OpenapiFormatArrayTypeOneEntryWithNullResponse;
  export type OpenapiFormatArrayTypeOneEntryParams = API.OpenapiFormatArrayTypeOneEntryParams;
  export type OpenapiFormatArrayTypeOneEntryWithNullParams = API.OpenapiFormatArrayTypeOneEntryWithNullParams;

  export import Parent = API.Parent;

  export import Envelopes = API.Envelopes;
  export type Address = API.Address;
  export type EnvelopeInlineResponseResponse = API.EnvelopeInlineResponseResponse;
  export type EnvelopeWrappedArrayResponse = API.EnvelopeWrappedArrayResponse;

  export import Types = API.Types;
  export type TypeDatesResponse = API.TypeDatesResponse;
  export type TypeDatetimesResponse = API.TypeDatetimesResponse;
  export type TypeEnumsResponse = API.TypeEnumsResponse;
  export type TypeDatesParams = API.TypeDatesParams;
  export type TypeDatetimesParams = API.TypeDatetimesParams;
  export type TypeEnumTestsArrayUniqueValuesParams = API.TypeEnumTestsArrayUniqueValuesParams;
  export type TypeEnumTestsArrayUniqueValues2ValuesParams = API.TypeEnumTestsArrayUniqueValues2ValuesParams;
  export type TypeEnumTestsArrayUniqueValuesNumbersParams = API.TypeEnumTestsArrayUniqueValuesNumbersParams;
  export type TypeEnumsParams = API.TypeEnumsParams;

  export import Names = API.Names;
  export type Balance = API.Balance;
  export type NameChildPropImportClashResponse = API.NameChildPropImportClashResponse;
  export type NamePropertiesCommonConflictsResponse = API.NamePropertiesCommonConflictsResponse;
  export type NameResponsePropertyClashesModelImportResponse =
    API.NameResponsePropertyClashesModelImportResponse;
  export type NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;
  export type NamePropertiesCommonConflictsParams = API.NamePropertiesCommonConflictsParams;

  export import Widgets = API.Widgets;
  export type Widget = API.Widget;

  export import DefaultPathParams = API.DefaultPathParams;
  export type DefaultPathParamGlobalWithStandardResponse = API.DefaultPathParamGlobalWithStandardResponse;
  export type DefaultPathParamOnlyGlobalResponse = API.DefaultPathParamOnlyGlobalResponse;

  export import Responses = API.Responses;
  export type ModelFromNestedPath = API.ModelFromNestedPath;
  export type ModelWithNestedModel = API.ModelWithNestedModel;
  export type ObjectWithAnyOfNullProperty = API.ObjectWithAnyOfNullProperty;
  export type ObjectWithOneOfNullProperty = API.ObjectWithOneOfNullProperty;
  export type ResponsesAllofCrossObject = API.ResponsesAllofCrossObject;
  export type SimpleAllof = API.SimpleAllof;
  export type UnknownObject = API.UnknownObject;
  export type ResponseAdditionalPropertiesResponse = API.ResponseAdditionalPropertiesResponse;
  export type ResponseAdditionalPropertiesNestedModelReferenceResponse =
    API.ResponseAdditionalPropertiesNestedModelReferenceResponse;
  export type ResponseAllofCrossResourceResponse = API.ResponseAllofCrossResourceResponse;
  export type ResponseAllofSimpleResponse = API.ResponseAllofSimpleResponse;
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
  export type ResponseStringResponseResponse = API.ResponseStringResponseResponse;

  export import PathParams = API.PathParams;
  export type PathParamMultipleResponse = API.PathParamMultipleResponse;
  export type PathParamSingularResponse = API.PathParamSingularResponse;

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
  export type StringMapModel = API.StringMapModel;
  export type BodyParamTopLevelAllOfResponse = API.BodyParamTopLevelAllOfResponse;
  export type BodyParamUnionOverlappingPropResponse = API.BodyParamUnionOverlappingPropResponse;
  export type BodyParamNestedRequestModelsParams = API.BodyParamNestedRequestModelsParams;
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
  export type BodyParamTopLevelOneOfOneEntryParams = API.BodyParamTopLevelOneOfOneEntryParams;
  export type BodyParamTopLevelSharedTypeParams = API.BodyParamTopLevelSharedTypeParams;
  export type BodyParamUnionOverlappingPropParams = API.BodyParamUnionOverlappingPropParams;
  export type BodyParamWithDefaultBodyParamOptionalParams = API.BodyParamWithDefaultBodyParamOptionalParams;
  export type BodyParamWithDefaultBodyParamRequiredParams = API.BodyParamWithDefaultBodyParamRequiredParams;
  export type BodyParamWithModelPropertyParams = API.BodyParamWithModelPropertyParams;

  export import HeaderParams = API.HeaderParams;
  export type HeaderParamClientArgumentParams = API.HeaderParamClientArgumentParams;

  export import MixedParams = API.MixedParams;
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
  export type BranchRecursion = API.BranchRecursion;
  export type BranchRecursionChildA = API.BranchRecursionChildA;
  export type BranchRecursionChildB = API.BranchRecursionChildB;
  export type MutualRecursionA = API.MutualRecursionA;
  export type MutualRecursionB = API.MutualRecursionB;
  export type SelfRecursion = API.SelfRecursion;
  export type RecursionCreateEnvelopeResponse = API.RecursionCreateEnvelopeResponse;
  export type RecursionCreateBranchParams = API.RecursionCreateBranchParams;
  export type RecursionCreateEnvelopeParams = API.RecursionCreateEnvelopeParams;
  export type RecursionCreateMutualAParams = API.RecursionCreateMutualAParams;
  export type RecursionCreateMutualBParams = API.RecursionCreateMutualBParams;
  export type RecursionCreateSelfParams = API.RecursionCreateSelfParams;

  export import SharedQueryParams = API.SharedQueryParams;
  export type SharedQueryParamRetrieveResponse = API.SharedQueryParamRetrieveResponse;
  export type SharedQueryParamDelResponse = API.SharedQueryParamDelResponse;
  export type SharedQueryParamRetrieveParams = API.SharedQueryParamRetrieveParams;
  export type SharedQueryParamDelParams = API.SharedQueryParamDelParams;

  export import ModelReferencedInParentAndChildResource = API.ModelReferencedInParentAndChildResource;
  export type ModelReferencedInParentAndChild = API.ModelReferencedInParentAndChild;

  export import BasicSharedModelObject = API.BasicSharedModelObject;
  export import Currency = API.Currency;
  export import ObjectWithChildRef = API.ObjectWithChildRef;
  export import SharedCursorNestedResponsePropMeta = API.SharedCursorNestedResponsePropMeta;
  export import SharedMutualRecursionA = API.SharedMutualRecursionA;
  export import SharedMutualRecursionB = API.SharedMutualRecursionB;
  export import SharedSelfRecursion = API.SharedSelfRecursion;
  export import ShippingAddress = API.ShippingAddress;
  export import SimpleObject = API.SimpleObject;
  export import SimpleObjectAlias = API.SimpleObjectAlias;
}

export default Sink;
