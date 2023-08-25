// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';
import * as Errors from './error';
import type { Agent } from 'sink-npm/_shims/agent';
import * as Uploads from './uploads';
import * as qs from 'qs';

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
      throw new Error(
        "The SINK_USER environment variable is missing or empty; either provide it, or instantiate the Sink client with an username option, like new Sink({ username: 'Robert' }).",
      );
    }
    if (requiredArgNoEnv === undefined) {
      throw new Error(
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
      environment: 'production',
      ...opts,
    };

    if (!options.dangerouslyAllowBrowser && Core.isRunningInBrowser()) {
      throw new Error(
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
  sta563: API.Sta563 = new API.Sta563(this);
  sta569: API.Sta569 = new API.Sta569(this);
  sta630: API.Sta630 = new API.Sta630(this);
  parent: API.Parent = new API.Parent(this);
  sta606: API.Sta606 = new API.Sta606(this);
  envelopes: API.Envelopes = new API.Envelopes(this);
  types: API.Types = new API.Types(this);
  names: API.Names = new API.Names(this);
  widgets: API.Widgets = new API.Widgets(this);
  sta613: API.Sta613 = new API.Sta613(this);
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

  /**
   * API status check
   */
  apiStatus(options?: Core.RequestOptions): Core.APIPromise<Sink.APIStatus> {
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

  /**
   * Should not generate a named return type for object without defined properties;
   * instead, it should simply use an `unknown` type or equivalent. In Java and Go,
   * where we have fancier accessors for raw json stuff, we should generate a named
   * type, but it should basically just have untyped additional properties. See
   * https://linear.app/stainless/issue/STA-563/no-type-should-be-generated-for-endpoints-returning-type-object-schema.
   */
  sta563PostEmptyObject(options?: Core.RequestOptions): Core.APIPromise<Sink.Sta563PostEmptyObjectResponse> {
    return this.post('/sta_563_empty_object', options);
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

  export import APIStatus = API.APIStatus;
  export import APIStatusAlias = API.APIStatusAlias;
  export import CustomAPIStatusMessage = API.CustomAPIStatusMessage;
  export import Sta563PostEmptyObjectResponse = API.Sta563PostEmptyObjectResponse;

  export import Testing = API.Testing;
  export import RootResponse = API.RootResponse;

  export import ComplexQueries = API.ComplexQueries;
  export import ComplexQueryArrayQueryResponse = API.ComplexQueryArrayQueryResponse;
  export import ComplexQueryObjectQueryResponse = API.ComplexQueryObjectQueryResponse;
  export import ComplexQueryArrayQueryParams = API.ComplexQueryArrayQueryParams;
  export import ComplexQueryObjectQueryParams = API.ComplexQueryObjectQueryParams;

  export import Casing = API.Casing;

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
  export import CardsCardPage = API.CardsCardPage;
  export import CardCreateParams = API.CardCreateParams;
  export import CardUpdateParams = API.CardUpdateParams;
  export import CardListParams = API.CardListParams;
  export import CardCreateAliasedParams = API.CardCreateAliasedParams;
  export import CardListNonGetParams = API.CardListNonGetParams;
  export import CardProvisionFooParams = API.CardProvisionFooParams;
  export import CardReissueParams = API.CardReissueParams;

  export import Files = API.Files;
  export import FileCreateMultipartResponse = API.FileCreateMultipartResponse;
  export import FileEverythingMultipartResponse = API.FileEverythingMultipartResponse;
  export import FileCreateMultipartParams = API.FileCreateMultipartParams;
  export import FileEverythingMultipartParams = API.FileEverythingMultipartParams;

  export import Resources = API.Resources;

  export import ConfigTools = API.ConfigTools;

  export import CompanyResource = API.CompanyResource;
  export import Company = API.Company;

  export import Sta563 = API.Sta563;
  export import DeleteEmptyObjectResponse = API.DeleteEmptyObjectResponse;

  export import Sta569 = API.Sta569;
  export import Sta569OneEntryResponse = API.Sta569OneEntryResponse;
  export import Sta569OneEntryWithNullResponse = API.Sta569OneEntryWithNullResponse;
  export import Sta569OneEntryParams = API.Sta569OneEntryParams;
  export import Sta569OneEntryWithNullParams = API.Sta569OneEntryWithNullParams;

  export import Sta630 = API.Sta630;
  export import GithubUser = API.GithubUser;
  export import GithubUserPreferences = API.GithubUserPreferences;

  export import Parent = API.Parent;

  export import Sta606 = API.Sta606;
  export import Sta606WithSharedParamsParams = API.Sta606WithSharedParamsParams;

  export import Envelopes = API.Envelopes;
  export import Address = API.Address;
  export import EnvelopeInlineResponseResponse = API.EnvelopeInlineResponseResponse;
  export import EnvelopeWrappedArrayResponse = API.EnvelopeWrappedArrayResponse;

  export import Types = API.Types;
  export import TypeDatesResponse = API.TypeDatesResponse;
  export import TypeDatetimesResponse = API.TypeDatetimesResponse;
  export import TypeEnumsResponse = API.TypeEnumsResponse;
  export import TypeDatesParams = API.TypeDatesParams;
  export import TypeDatetimesParams = API.TypeDatetimesParams;
  export import TypeEnumsParams = API.TypeEnumsParams;

  export import Names = API.Names;
  export import Balance = API.Balance;
  export import NameChildPropImportClashResponse = API.NameChildPropImportClashResponse;
  export import NamePropertiesCommonConflictsResponse = API.NamePropertiesCommonConflictsResponse;
  export import NameResponsePropertyClashesModelImportResponse = API.NameResponsePropertyClashesModelImportResponse;
  export import NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;
  export import NamePropertiesCommonConflictsParams = API.NamePropertiesCommonConflictsParams;

  export import Widgets = API.Widgets;
  export import Widget = API.Widget;

  export import Sta613 = API.Sta613;
  export import Sta613GlobalWithStandardResponse = API.Sta613GlobalWithStandardResponse;
  export import Sta613OnlyGlobalResponse = API.Sta613OnlyGlobalResponse;

  export import Responses = API.Responses;
  export import ObjectWithAnyOfNullProperty = API.ObjectWithAnyOfNullProperty;
  export import ObjectWithOneOfNullProperty = API.ObjectWithOneOfNullProperty;
  export import ResponsesAllofCrossObject = API.ResponsesAllofCrossObject;
  export import SimpleAllof = API.SimpleAllof;
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
  export import ResponseUnionOfMixedTypesResponse = API.ResponseUnionOfMixedTypesResponse;
  export import ResponseUnionOfObjectsResponse = API.ResponseUnionOfObjectsResponse;

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
  export import MyModel = API.MyModel;
  export import BodyParamTopLevelAllOfResponse = API.BodyParamTopLevelAllOfResponse;
  export import BodyParamUnionOverlappingPropResponse = API.BodyParamUnionOverlappingPropResponse;
  export import BodyParamReadOnlyPropertiesParams = API.BodyParamReadOnlyPropertiesParams;
  export import BodyParamTopLevelAllOfParams = API.BodyParamTopLevelAllOfParams;
  export import BodyParamTopLevelAllOfNestedObjectParams = API.BodyParamTopLevelAllOfNestedObjectParams;
  export import BodyParamTopLevelAnyOfWithRefParams = API.BodyParamTopLevelAnyOfWithRefParams;
  export import BodyParamTopLevelArrayParams = API.BodyParamTopLevelArrayParams;
  export import BodyParamTopLevelArrayWithChildrenParams = API.BodyParamTopLevelArrayWithChildrenParams;
  export import BodyParamTopLevelOneOfOneEntryParams = API.BodyParamTopLevelOneOfOneEntryParams;
  export import BodyParamUnionOverlappingPropParams = API.BodyParamUnionOverlappingPropParams;
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
  export import MutualRecursionA = API.MutualRecursionA;
  export import MutualRecursionB = API.MutualRecursionB;
  export import SelfRecursion = API.SelfRecursion;
  export import RecursionCreateEnvelopeResponse = API.RecursionCreateEnvelopeResponse;
  export import RecursionCreateBranchParams = API.RecursionCreateBranchParams;
  export import RecursionCreateEnvelopeParams = API.RecursionCreateEnvelopeParams;
  export import RecursionCreateMutualAParams = API.RecursionCreateMutualAParams;
  export import RecursionCreateMutualBParams = API.RecursionCreateMutualBParams;
  export import RecursionCreateSelfParams = API.RecursionCreateSelfParams;

  export import BasicSharedModelObject = API.BasicSharedModelObject;
  export import Currency = API.Currency;
  export import ObjectWithChildRef = API.ObjectWithChildRef;
  export import SharedMutualRecursionA = API.SharedMutualRecursionA;
  export import SharedMutualRecursionB = API.SharedMutualRecursionB;
  export import SharedSelfRecursion = API.SharedSelfRecursion;
  export import ShippingAddress = API.ShippingAddress;
  export import SimpleObject = API.SimpleObject;
  export import SimpleObjectAlias = API.SimpleObjectAlias;
}

export default Sink;
