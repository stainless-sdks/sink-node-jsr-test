// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import {
  type FakePageParams,
  FakePageResponse,
  type PageCursorFromHeadersParams,
  PageCursorFromHeadersResponse,
  type PageCursorIDParams,
  PageCursorIDResponse,
  type PageCursorNestedItemsParams,
  PageCursorNestedItemsResponse,
  type PageCursorNestedObjectRefParams,
  PageCursorNestedObjectRefResponse,
  type PageCursorParams,
  PageCursorResponse,
  type PageCursorSharedRefParams,
  PageCursorSharedRefResponse,
  type PageCursorTopLevelArrayParams,
  PageCursorTopLevelArrayResponse,
  type PageCursorURLParams,
  PageCursorURLResponse,
  type PageCursorWithReverseParams,
  PageCursorWithReverseResponse,
  type PageOffsetNoStartFieldParams,
  PageOffsetNoStartFieldResponse,
  type PageOffsetParams,
  PageOffsetResponse,
  type PageOffsetTotalCountParams,
  PageOffsetTotalCountResponse,
  type PagePageNumberParams,
  PagePageNumberResponse,
  type PagePageNumberWithoutCurrentPageResponseParams,
  PagePageNumberWithoutCurrentPageResponseResponse,
} from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import { APIStatus, APIStatusAlias, CustomAPIStatusMessage } from './resources/top-level';
import { Binaries, BinaryWithPathAndBodyParamParams } from './resources/binaries';
import {
  Card,
  CardAlias,
  CardCreateAliasedDeprecatedParams,
  CardCreateAliasedParams,
  CardCreateParams,
  CardListParams,
  CardListResponse,
  CardProvisionFooParams,
  CardProvisionFooResponse,
  CardReissueParams,
  CardUpdateParams,
  Cards,
  FundingAccount,
} from './resources/cards';
import {
  ClientParamWithPathParamAndStandardParams,
  ClientParamWithPathParamAndStandardResponse,
  ClientParamWithPathParamParams,
  ClientParamWithPathParamResponse,
  ClientParamWithQueryParamParams,
  ClientParamWithQueryParamResponse,
  ClientParams,
} from './resources/client-params';
import { Client, ClientCreateParams, Clients } from './resources/clients';
import {
  ComplexQueries,
  ComplexQueryArrayQueryParams,
  ComplexQueryArrayQueryResponse,
  ComplexQueryObjectQueryParams,
  ComplexQueryObjectQueryResponse,
  ComplexQueryUnionQueryParams,
  ComplexQueryUnionQueryResponse,
} from './resources/complex-queries';
import {
  ConfigToolModelRefFromNestedResponseBodyResponse,
  ConfigToolOnlyInNodeParams,
  ConfigTools,
  ModelFromNestedResponseBodyRef,
  ModelFromSchemasRef,
  ModelFromSchemasRefOpenAPIUri,
  ModelFromSchemasRefOpenAPIUriJmespath,
  ModelFromSchemasRefOpenAPIUriJsonpath,
  OnlyNodeModel,
} from './resources/config-tools';
import {
  DocstringLeadingDoubleQuoteResponse,
  DocstringTrailingDoubleQuoteResponse,
  Docstrings,
} from './resources/docstrings';
import {
  EmptyBody,
  EmptyBodyStainlessEmptyObjectParams,
  EmptyBodyTypedParamsParams,
} from './resources/empty-body';
import {
  Address,
  EnvelopeInlineResponseResponse,
  EnvelopeWrappedArrayResponse,
  Envelopes,
} from './resources/envelopes';
import {
  FileCreateMultipartParams,
  FileCreateMultipartResponse,
  FileEverythingMultipartParams,
  FileEverythingMultipartResponse,
  FileNoFileMultipartParams,
  FileNoFileMultipartResponse,
  FileWithOptionalParamParams,
  FileWithOptionalParamResponse,
  Files,
} from './resources/files';
import {
  HeaderParamAllTypesParams,
  HeaderParamArraysParams,
  HeaderParamClientArgumentParams,
  HeaderParamNullableTypeParams,
  HeaderParams,
} from './resources/header-params';
import {
  MakeAmbiguousSchemasExplicit,
  MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse,
} from './resources/make-ambiguous-schemas-explicit';
import {
  MakeAmbiguousSchemasLooser,
  MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse,
} from './resources/make-ambiguous-schemas-looser';
import {
  MethodConfig,
  MethodConfigShouldNotShowUpInAPIDocsParams,
  MethodConfigSkippedTestsAllResponse,
  MethodConfigSkippedTestsGoResponse,
  MethodConfigSkippedTestsJavaResponse,
  MethodConfigSkippedTestsKotlinResponse,
  MethodConfigSkippedTestsNodeAndPythonResponse,
  MethodConfigSkippedTestsNodeResponse,
  MethodConfigSkippedTestsPythonResponse,
  MethodConfigSkippedTestsRubyResponse,
} from './resources/method-config';
import {
  OpenAPIFormatArrayTypeOneEntryParams,
  OpenAPIFormatArrayTypeOneEntryResponse,
  OpenAPIFormatArrayTypeOneEntryWithNullParams,
  OpenAPIFormatArrayTypeOneEntryWithNullResponse,
  OpenAPIFormats,
} from './resources/openapi-formats';
import {
  PathParamColonSuffixResponse,
  PathParamFileExtensionResponse,
  PathParamMultipleResponse,
  PathParamNullableParamsParams,
  PathParamQueryParamResponse,
  PathParamSingularResponse,
  PathParams,
} from './resources/path-params';
import {
  PositionalParamBasicBodyParams,
  PositionalParamBasicQueryParams,
  PositionalParamBodyExtraParamParams,
  PositionalParamBodyParams,
  PositionalParamKitchenSinkParams,
  PositionalParamMultiplePathParamsParams,
  PositionalParamQueryAndPathParams,
  PositionalParamQueryMultipleParams,
  PositionalParamQueryParams,
  PositionalParamUnionBodyAndPathParams,
  PositionalParams,
} from './resources/positional-params';
import {
  QueryParamAllOfParams,
  QueryParamAnyOfParams,
  QueryParamAnyOfStringOrArrayParams,
  QueryParamArrayParams,
  QueryParamEnumParams,
  QueryParamObjectParams,
  QueryParamOneOfParams,
  QueryParamPrimitivesParams,
  QueryParams,
} from './resources/query-params';
import { Resources } from './resources/resources';
import {
  SharedQueryParamDelParams,
  SharedQueryParamDelResponse,
  SharedQueryParamRetrieveParams,
  SharedQueryParamRetrieveResponse,
  SharedQueryParams,
} from './resources/shared-query-params';
import {
  Streaming,
  StreamingBasicParams,
  StreamingBasicParamsNonStreaming,
  StreamingBasicParamsStreaming,
  StreamingBasicResponse,
  StreamingNestedParamsParams,
  StreamingNestedParamsParamsNonStreaming,
  StreamingNestedParamsParamsStreaming,
  StreamingNestedParamsResponse,
  StreamingNoDiscriminatorParams,
  StreamingNoDiscriminatorResponse,
  StreamingQueryParamDiscriminatorParams,
  StreamingQueryParamDiscriminatorParamsNonStreaming,
  StreamingQueryParamDiscriminatorParamsStreaming,
  StreamingQueryParamDiscriminatorResponse,
} from './resources/streaming';
import { RootResponse, Testing } from './resources/testing';
import { Tests } from './resources/tests';
import { ObjectSkippedProps, ToolSkippedParamsParams, Tools } from './resources/tools';
import { UndocumentedResource, UndocumentedResourceReissueParams } from './resources/undocumented-resource';
import {
  Version1_30NameCreateParams,
  Version1_30NameCreateResponse,
  Version1_30Names,
} from './resources/version-1-30-names';
import {
  CardCreatedWebhookEvent,
  CardDeletedWebhookEvent,
  CardErroredWebhookEvent,
  CardReadyWebhookEvent,
  CardUpdatedWebhookEvent,
  UnwrapWebhookEvent,
  Webhooks,
} from './resources/webhooks';
import { Widget, Widgets } from './resources/widgets';
import {
  BodyParamBinaryStringTypeParams,
  BodyParamBinaryTypeParams,
  BodyParamDuplicateSubpropertyParams,
  BodyParamEnumPropertiesParams,
  BodyParamNestedRequestModelsParams,
  BodyParamNullTypeParams,
  BodyParamObjectWithArrayOfObjectsParams,
  BodyParamObjectWithUnionPropertiesParams,
  BodyParamOnlyReadOnlyPropertiesParams,
  BodyParamParamInModelNameRefParams,
  BodyParamPropertyModelRefParams,
  BodyParamPropertyWithComplexUnionParams,
  BodyParamPropertyWithHeavilyNestedComplexUnionParams,
  BodyParamReadOnlyPropertiesParams,
  BodyParamStringMapModelRefParams,
  BodyParamTopLevelAllOfNestedObjectParams,
  BodyParamTopLevelAllOfParams,
  BodyParamTopLevelAllOfResponse,
  BodyParamTopLevelAnyOfWithRefParams,
  BodyParamTopLevelArrayParams,
  BodyParamTopLevelArrayWithChildrenParams,
  BodyParamTopLevelArrayWithOtherParamsParams,
  BodyParamTopLevelOneOfOneEntryParams,
  BodyParamTopLevelSharedTypeParams,
  BodyParamUnionOverlappingPropParams,
  BodyParamUnionOverlappingPropResponse,
  BodyParamUnknownObjectParams,
  BodyParamWithDefaultBodyParamOptionalParams,
  BodyParamWithDefaultBodyParamRequiredParams,
  BodyParamWithModelPropertyParams,
  BodyParams,
  ModelWithParamInName,
  MyModel,
  NestedRequestModelA,
  NestedRequestModelB,
  NestedRequestModelC,
  NullTypeModel,
  StringMapModel,
  UnknownObjectModel,
} from './resources/body-params/body-params';
import { Casing } from './resources/casing/casing';
import { Company, CompanyResource } from './resources/company/company';
import { DecoratorTestKeepMeResponse, DecoratorTests } from './resources/decorator-tests/decorator-tests';
import { DeeplyNested } from './resources/deeply-nested/deeply-nested';
import {
  DefaultReqOptionWithParamOverrideParams,
  DefaultReqOptions,
} from './resources/default-req-options/default-req-options';
import { InvalidSchemas } from './resources/invalid-schemas/invalid-schemas';
import {
  MixedParamBodyWithTopLevelOneOfAndPathParams,
  MixedParamQueryAndBodyParams,
  MixedParamQueryBodyAndPathParams,
  MixedParams,
} from './resources/mixed-params/mixed-params';
import {
  ModelReferencedInParentAndChild,
  ModelReferencedInParentAndChildResource,
} from './resources/model-referenced-in-parent-and-child/model-referenced-in-parent-and-child';
import {
  Balance,
  NameChildPropImportClashResponse,
  NamePropertiesCommonConflictsParams,
  NamePropertiesCommonConflictsResponse,
  NamePropertiesIllegalGoIdentifiersParams,
  NamePropertiesIllegalGoIdentifiersResponse,
  NamePropertiesIllegalJavascriptIdentifiersParams,
  NamePropertiesIllegalJavascriptIdentifiersResponse,
  NameResponsePropertyClashesModelImportResponse,
  NameResponseShadowsPydanticResponse,
  Names,
} from './resources/names/names';
import { PaginationTests } from './resources/pagination-tests/pagination-tests';
import { Parent } from './resources/parent/parent';
import {
  ArrayRecursion,
  Recursion,
  RecursionCreateEnvelopeParams,
  RecursionCreateEnvelopeResponse,
  RecursionCreateSelfParams,
  SelfRecursion,
} from './resources/recursion/recursion';
import { ResourceRefs } from './resources/resource-refs/resource-refs';
import {
  ModelFromNestedPath,
  ModelWithNestedModel,
  ObjectWithAnyOfNullProperty,
  ObjectWithOneOfNullProperty,
  ObjectWithUnionProperties,
  ResponseAdditionalPropertiesNestedModelReferenceResponse,
  ResponseAdditionalPropertiesResponse,
  ResponseAllofCrossResourceResponse,
  ResponseAllofSimpleResponse,
  ResponseArrayObjectWithUnionPropertiesResponse,
  ResponseArrayResponseResponse,
  ResponseBooleanResponseResponse,
  ResponseIntegerResponseResponse,
  ResponseMissingRequiredResponse,
  ResponseNestedArrayResponse,
  ResponseObjectAllPropertiesResponse,
  ResponseObjectNoPropertiesResponse,
  ResponseObjectWithAdditionalPropertiesPropResponse,
  ResponseObjectWithHeavilyNestedUnionResponse,
  ResponseOnlyReadOnlyPropertiesResponse,
  ResponseStringResponseResponse,
  Responses,
  ResponsesAllofCrossObject,
  SimpleAllof,
  UnknownObject,
} from './resources/responses/responses';
import {
  TypeDatesParams,
  TypeDatesResponse,
  TypeDatetimesParams,
  TypeDatetimesResponse,
  Types,
} from './resources/types/types';

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

export const SinkError = Errors.SinkError;
export const APIError = Errors.APIError;
export const APIConnectionError = Errors.APIConnectionError;
export const APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
export const APIUserAbortError = Errors.APIUserAbortError;
export const NotFoundError = Errors.NotFoundError;
export const ConflictError = Errors.ConflictError;
export const RateLimitError = Errors.RateLimitError;
export const BadRequestError = Errors.BadRequestError;
export const AuthenticationError = Errors.AuthenticationError;
export const InternalServerError = Errors.InternalServerError;
export const PermissionDeniedError = Errors.PermissionDeniedError;
export const UnprocessableEntityError = Errors.UnprocessableEntityError;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Sink.Testing = Testing;
Sink.ComplexQueries = ComplexQueries;
Sink.Casing = Casing;
Sink.DefaultReqOptions = DefaultReqOptions;
Sink.Tools = Tools;
Sink.UndocumentedResource = UndocumentedResource;
Sink.MethodConfig = MethodConfig;
Sink.Streaming = Streaming;
Sink.PaginationTests = PaginationTests;
Sink.Docstrings = Docstrings;
Sink.InvalidSchemas = InvalidSchemas;
Sink.ResourceRefs = ResourceRefs;
Sink.Cards = Cards;
Sink.Files = Files;
Sink.Binaries = Binaries;
Sink.Resources = Resources;
Sink.ConfigTools = ConfigTools;
Sink.CompanyResource = CompanyResource;
Sink.OpenAPIFormats = OpenAPIFormats;
Sink.Parent = Parent;
Sink.Envelopes = Envelopes;
Sink.Types = Types;
Sink.Clients = Clients;
Sink.Names = Names;
Sink.Widgets = Widgets;
Sink.Webhooks = Webhooks;
Sink.ClientParams = ClientParams;
Sink.Responses = Responses;
Sink.PathParams = PathParams;
Sink.PositionalParams = PositionalParams;
Sink.EmptyBody = EmptyBody;
Sink.QueryParams = QueryParams;
Sink.BodyParams = BodyParams;
Sink.HeaderParams = HeaderParams;
Sink.MixedParams = MixedParams;
Sink.MakeAmbiguousSchemasLooser = MakeAmbiguousSchemasLooser;
Sink.MakeAmbiguousSchemasExplicit = MakeAmbiguousSchemasExplicit;
Sink.DecoratorTests = DecoratorTests;
Sink.Tests = Tests;
Sink.DeeplyNested = DeeplyNested;
Sink.Version1_30Names = Version1_30Names;
Sink.Recursion = Recursion;
Sink.SharedQueryParams = SharedQueryParams;
Sink.ModelReferencedInParentAndChildResource = ModelReferencedInParentAndChildResource;

export declare namespace Sink {
  export type RequestOptions = Core.RequestOptions;

  export import PageCursor = Pagination.PageCursor;
  export { type PageCursorParams as PageCursorParams, type PageCursorResponse as PageCursorResponse };

  export import PageCursorWithReverse = Pagination.PageCursorWithReverse;
  export {
    type PageCursorWithReverseParams as PageCursorWithReverseParams,
    type PageCursorWithReverseResponse as PageCursorWithReverseResponse,
  };

  export import PageCursorFromHeaders = Pagination.PageCursorFromHeaders;
  export {
    type PageCursorFromHeadersParams as PageCursorFromHeadersParams,
    type PageCursorFromHeadersResponse as PageCursorFromHeadersResponse,
  };

  export import PageCursorTopLevelArray = Pagination.PageCursorTopLevelArray;
  export {
    type PageCursorTopLevelArrayParams as PageCursorTopLevelArrayParams,
    type PageCursorTopLevelArrayResponse as PageCursorTopLevelArrayResponse,
  };

  export import PageCursorSharedRef = Pagination.PageCursorSharedRef;
  export {
    type PageCursorSharedRefParams as PageCursorSharedRefParams,
    type PageCursorSharedRefResponse as PageCursorSharedRefResponse,
  };

  export import PageCursorNestedObjectRef = Pagination.PageCursorNestedObjectRef;
  export {
    type PageCursorNestedObjectRefParams as PageCursorNestedObjectRefParams,
    type PageCursorNestedObjectRefResponse as PageCursorNestedObjectRefResponse,
  };

  export import PageCursorNestedItems = Pagination.PageCursorNestedItems;
  export {
    type PageCursorNestedItemsParams as PageCursorNestedItemsParams,
    type PageCursorNestedItemsResponse as PageCursorNestedItemsResponse,
  };

  export import PagePageNumber = Pagination.PagePageNumber;
  export {
    type PagePageNumberParams as PagePageNumberParams,
    type PagePageNumberResponse as PagePageNumberResponse,
  };

  export import PagePageNumberWithoutCurrentPageResponse = Pagination.PagePageNumberWithoutCurrentPageResponse;
  export {
    type PagePageNumberWithoutCurrentPageResponseParams as PagePageNumberWithoutCurrentPageResponseParams,
    type PagePageNumberWithoutCurrentPageResponseResponse as PagePageNumberWithoutCurrentPageResponseResponse,
  };

  export import PageOffsetTotalCount = Pagination.PageOffsetTotalCount;
  export {
    type PageOffsetTotalCountParams as PageOffsetTotalCountParams,
    type PageOffsetTotalCountResponse as PageOffsetTotalCountResponse,
  };

  export import PageOffset = Pagination.PageOffset;
  export { type PageOffsetParams as PageOffsetParams, type PageOffsetResponse as PageOffsetResponse };

  export import PageOffsetNoStartField = Pagination.PageOffsetNoStartField;
  export {
    type PageOffsetNoStartFieldParams as PageOffsetNoStartFieldParams,
    type PageOffsetNoStartFieldResponse as PageOffsetNoStartFieldResponse,
  };

  export import PageCursorURL = Pagination.PageCursorURL;
  export {
    type PageCursorURLParams as PageCursorURLParams,
    type PageCursorURLResponse as PageCursorURLResponse,
  };

  export import PageCursorID = Pagination.PageCursorID;
  export { type PageCursorIDParams as PageCursorIDParams, type PageCursorIDResponse as PageCursorIDResponse };

  export import FakePage = Pagination.FakePage;
  export { type FakePageParams as FakePageParams, type FakePageResponse as FakePageResponse };

  export {
    type APIStatus as APIStatus,
    type APIStatusAlias as APIStatusAlias,
    type CustomAPIStatusMessage as CustomAPIStatusMessage,
  };

  export { Testing as Testing, type RootResponse as RootResponse };

  export {
    ComplexQueries as ComplexQueries,
    type ComplexQueryArrayQueryResponse as ComplexQueryArrayQueryResponse,
    type ComplexQueryObjectQueryResponse as ComplexQueryObjectQueryResponse,
    type ComplexQueryUnionQueryResponse as ComplexQueryUnionQueryResponse,
    type ComplexQueryArrayQueryParams as ComplexQueryArrayQueryParams,
    type ComplexQueryObjectQueryParams as ComplexQueryObjectQueryParams,
    type ComplexQueryUnionQueryParams as ComplexQueryUnionQueryParams,
  };

  export { Casing as Casing };

  export {
    DefaultReqOptions as DefaultReqOptions,
    type DefaultReqOptionWithParamOverrideParams as DefaultReqOptionWithParamOverrideParams,
  };

  export {
    Tools as Tools,
    type ObjectSkippedProps as ObjectSkippedProps,
    type ToolSkippedParamsParams as ToolSkippedParamsParams,
  };

  export {
    UndocumentedResource as UndocumentedResource,
    type UndocumentedResourceReissueParams as UndocumentedResourceReissueParams,
  };

  export {
    MethodConfig as MethodConfig,
    type MethodConfigSkippedTestsAllResponse as MethodConfigSkippedTestsAllResponse,
    type MethodConfigSkippedTestsGoResponse as MethodConfigSkippedTestsGoResponse,
    type MethodConfigSkippedTestsJavaResponse as MethodConfigSkippedTestsJavaResponse,
    type MethodConfigSkippedTestsKotlinResponse as MethodConfigSkippedTestsKotlinResponse,
    type MethodConfigSkippedTestsNodeResponse as MethodConfigSkippedTestsNodeResponse,
    type MethodConfigSkippedTestsNodeAndPythonResponse as MethodConfigSkippedTestsNodeAndPythonResponse,
    type MethodConfigSkippedTestsPythonResponse as MethodConfigSkippedTestsPythonResponse,
    type MethodConfigSkippedTestsRubyResponse as MethodConfigSkippedTestsRubyResponse,
    type MethodConfigShouldNotShowUpInAPIDocsParams as MethodConfigShouldNotShowUpInAPIDocsParams,
  };

  export {
    Streaming as Streaming,
    type StreamingBasicResponse as StreamingBasicResponse,
    type StreamingNestedParamsResponse as StreamingNestedParamsResponse,
    type StreamingNoDiscriminatorResponse as StreamingNoDiscriminatorResponse,
    type StreamingQueryParamDiscriminatorResponse as StreamingQueryParamDiscriminatorResponse,
    type StreamingBasicParams as StreamingBasicParams,
    type StreamingBasicParamsNonStreaming as StreamingBasicParamsNonStreaming,
    type StreamingBasicParamsStreaming as StreamingBasicParamsStreaming,
    type StreamingNestedParamsParams as StreamingNestedParamsParams,
    type StreamingNestedParamsParamsNonStreaming as StreamingNestedParamsParamsNonStreaming,
    type StreamingNestedParamsParamsStreaming as StreamingNestedParamsParamsStreaming,
    type StreamingNoDiscriminatorParams as StreamingNoDiscriminatorParams,
    type StreamingQueryParamDiscriminatorParams as StreamingQueryParamDiscriminatorParams,
    type StreamingQueryParamDiscriminatorParamsNonStreaming as StreamingQueryParamDiscriminatorParamsNonStreaming,
    type StreamingQueryParamDiscriminatorParamsStreaming as StreamingQueryParamDiscriminatorParamsStreaming,
  };

  export { PaginationTests as PaginationTests };

  export {
    Docstrings as Docstrings,
    type DocstringLeadingDoubleQuoteResponse as DocstringLeadingDoubleQuoteResponse,
    type DocstringTrailingDoubleQuoteResponse as DocstringTrailingDoubleQuoteResponse,
  };

  export { InvalidSchemas as InvalidSchemas };

  export { ResourceRefs as ResourceRefs };

  export {
    Cards as Cards,
    type Card as Card,
    type CardAlias as CardAlias,
    type FundingAccount as FundingAccount,
    type CardListResponse as CardListResponse,
    type CardProvisionFooResponse as CardProvisionFooResponse,
    type CardCreateParams as CardCreateParams,
    type CardUpdateParams as CardUpdateParams,
    type CardListParams as CardListParams,
    type CardCreateAliasedParams as CardCreateAliasedParams,
    type CardCreateAliasedDeprecatedParams as CardCreateAliasedDeprecatedParams,
    type CardProvisionFooParams as CardProvisionFooParams,
    type CardReissueParams as CardReissueParams,
  };

  export {
    Files as Files,
    type FileCreateMultipartResponse as FileCreateMultipartResponse,
    type FileEverythingMultipartResponse as FileEverythingMultipartResponse,
    type FileNoFileMultipartResponse as FileNoFileMultipartResponse,
    type FileWithOptionalParamResponse as FileWithOptionalParamResponse,
    type FileCreateMultipartParams as FileCreateMultipartParams,
    type FileEverythingMultipartParams as FileEverythingMultipartParams,
    type FileNoFileMultipartParams as FileNoFileMultipartParams,
    type FileWithOptionalParamParams as FileWithOptionalParamParams,
  };

  export { Binaries as Binaries, type BinaryWithPathAndBodyParamParams as BinaryWithPathAndBodyParamParams };

  export { Resources as Resources };

  export {
    ConfigTools as ConfigTools,
    type ModelFromNestedResponseBodyRef as ModelFromNestedResponseBodyRef,
    type ModelFromSchemasRef as ModelFromSchemasRef,
    type ModelFromSchemasRefOpenAPIUri as ModelFromSchemasRefOpenAPIUri,
    type ModelFromSchemasRefOpenAPIUriJmespath as ModelFromSchemasRefOpenAPIUriJmespath,
    type ModelFromSchemasRefOpenAPIUriJsonpath as ModelFromSchemasRefOpenAPIUriJsonpath,
    type OnlyNodeModel as OnlyNodeModel,
    type ConfigToolModelRefFromNestedResponseBodyResponse as ConfigToolModelRefFromNestedResponseBodyResponse,
    type ConfigToolOnlyInNodeParams as ConfigToolOnlyInNodeParams,
  };

  export { CompanyResource as CompanyResource, type Company as Company };

  export {
    OpenAPIFormats as OpenAPIFormats,
    type OpenAPIFormatArrayTypeOneEntryResponse as OpenAPIFormatArrayTypeOneEntryResponse,
    type OpenAPIFormatArrayTypeOneEntryWithNullResponse as OpenAPIFormatArrayTypeOneEntryWithNullResponse,
    type OpenAPIFormatArrayTypeOneEntryParams as OpenAPIFormatArrayTypeOneEntryParams,
    type OpenAPIFormatArrayTypeOneEntryWithNullParams as OpenAPIFormatArrayTypeOneEntryWithNullParams,
  };

  export { Parent as Parent };

  export {
    Envelopes as Envelopes,
    type Address as Address,
    type EnvelopeInlineResponseResponse as EnvelopeInlineResponseResponse,
    type EnvelopeWrappedArrayResponse as EnvelopeWrappedArrayResponse,
  };

  export {
    Types as Types,
    type TypeDatesResponse as TypeDatesResponse,
    type TypeDatetimesResponse as TypeDatetimesResponse,
    type TypeDatesParams as TypeDatesParams,
    type TypeDatetimesParams as TypeDatetimesParams,
  };

  export { Clients as Clients, type Client as Client, type ClientCreateParams as ClientCreateParams };

  export {
    Names as Names,
    type Balance as Balance,
    type NameChildPropImportClashResponse as NameChildPropImportClashResponse,
    type NamePropertiesCommonConflictsResponse as NamePropertiesCommonConflictsResponse,
    type NamePropertiesIllegalGoIdentifiersResponse as NamePropertiesIllegalGoIdentifiersResponse,
    type NamePropertiesIllegalJavascriptIdentifiersResponse as NamePropertiesIllegalJavascriptIdentifiersResponse,
    type NameResponsePropertyClashesModelImportResponse as NameResponsePropertyClashesModelImportResponse,
    type NameResponseShadowsPydanticResponse as NameResponseShadowsPydanticResponse,
    type NamePropertiesCommonConflictsParams as NamePropertiesCommonConflictsParams,
    type NamePropertiesIllegalGoIdentifiersParams as NamePropertiesIllegalGoIdentifiersParams,
    type NamePropertiesIllegalJavascriptIdentifiersParams as NamePropertiesIllegalJavascriptIdentifiersParams,
  };

  export { Widgets as Widgets, type Widget as Widget };

  export {
    Webhooks as Webhooks,
    type CardCreatedWebhookEvent as CardCreatedWebhookEvent,
    type CardReadyWebhookEvent as CardReadyWebhookEvent,
    type CardErroredWebhookEvent as CardErroredWebhookEvent,
    type CardUpdatedWebhookEvent as CardUpdatedWebhookEvent,
    type CardDeletedWebhookEvent as CardDeletedWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };

  export {
    ClientParams as ClientParams,
    type ClientParamWithPathParamResponse as ClientParamWithPathParamResponse,
    type ClientParamWithPathParamAndStandardResponse as ClientParamWithPathParamAndStandardResponse,
    type ClientParamWithQueryParamResponse as ClientParamWithQueryParamResponse,
    type ClientParamWithPathParamParams as ClientParamWithPathParamParams,
    type ClientParamWithPathParamAndStandardParams as ClientParamWithPathParamAndStandardParams,
    type ClientParamWithQueryParamParams as ClientParamWithQueryParamParams,
  };

  export {
    Responses as Responses,
    type ModelFromNestedPath as ModelFromNestedPath,
    type ModelWithNestedModel as ModelWithNestedModel,
    type ObjectWithAnyOfNullProperty as ObjectWithAnyOfNullProperty,
    type ObjectWithOneOfNullProperty as ObjectWithOneOfNullProperty,
    type ObjectWithUnionProperties as ObjectWithUnionProperties,
    type ResponsesAllofCrossObject as ResponsesAllofCrossObject,
    type SimpleAllof as SimpleAllof,
    type UnknownObject as UnknownObject,
    type ResponseAdditionalPropertiesResponse as ResponseAdditionalPropertiesResponse,
    type ResponseAdditionalPropertiesNestedModelReferenceResponse as ResponseAdditionalPropertiesNestedModelReferenceResponse,
    type ResponseAllofCrossResourceResponse as ResponseAllofCrossResourceResponse,
    type ResponseAllofSimpleResponse as ResponseAllofSimpleResponse,
    type ResponseArrayObjectWithUnionPropertiesResponse as ResponseArrayObjectWithUnionPropertiesResponse,
    type ResponseArrayResponseResponse as ResponseArrayResponseResponse,
    type ResponseBooleanResponseResponse as ResponseBooleanResponseResponse,
    type ResponseIntegerResponseResponse as ResponseIntegerResponseResponse,
    type ResponseMissingRequiredResponse as ResponseMissingRequiredResponse,
    type ResponseNestedArrayResponse as ResponseNestedArrayResponse,
    type ResponseObjectAllPropertiesResponse as ResponseObjectAllPropertiesResponse,
    type ResponseObjectNoPropertiesResponse as ResponseObjectNoPropertiesResponse,
    type ResponseObjectWithAdditionalPropertiesPropResponse as ResponseObjectWithAdditionalPropertiesPropResponse,
    type ResponseObjectWithHeavilyNestedUnionResponse as ResponseObjectWithHeavilyNestedUnionResponse,
    type ResponseOnlyReadOnlyPropertiesResponse as ResponseOnlyReadOnlyPropertiesResponse,
    type ResponseStringResponseResponse as ResponseStringResponseResponse,
  };

  export {
    PathParams as PathParams,
    type PathParamColonSuffixResponse as PathParamColonSuffixResponse,
    type PathParamFileExtensionResponse as PathParamFileExtensionResponse,
    type PathParamMultipleResponse as PathParamMultipleResponse,
    type PathParamQueryParamResponse as PathParamQueryParamResponse,
    type PathParamSingularResponse as PathParamSingularResponse,
    type PathParamNullableParamsParams as PathParamNullableParamsParams,
  };

  export {
    PositionalParams as PositionalParams,
    type PositionalParamBasicBodyParams as PositionalParamBasicBodyParams,
    type PositionalParamBasicQueryParams as PositionalParamBasicQueryParams,
    type PositionalParamBodyParams as PositionalParamBodyParams,
    type PositionalParamBodyExtraParamParams as PositionalParamBodyExtraParamParams,
    type PositionalParamKitchenSinkParams as PositionalParamKitchenSinkParams,
    type PositionalParamMultiplePathParamsParams as PositionalParamMultiplePathParamsParams,
    type PositionalParamQueryParams as PositionalParamQueryParams,
    type PositionalParamQueryAndPathParams as PositionalParamQueryAndPathParams,
    type PositionalParamQueryMultipleParams as PositionalParamQueryMultipleParams,
    type PositionalParamUnionBodyAndPathParams as PositionalParamUnionBodyAndPathParams,
  };

  export {
    EmptyBody as EmptyBody,
    type EmptyBodyStainlessEmptyObjectParams as EmptyBodyStainlessEmptyObjectParams,
    type EmptyBodyTypedParamsParams as EmptyBodyTypedParamsParams,
  };

  export {
    QueryParams as QueryParams,
    type QueryParamAllOfParams as QueryParamAllOfParams,
    type QueryParamAnyOfParams as QueryParamAnyOfParams,
    type QueryParamAnyOfStringOrArrayParams as QueryParamAnyOfStringOrArrayParams,
    type QueryParamArrayParams as QueryParamArrayParams,
    type QueryParamEnumParams as QueryParamEnumParams,
    type QueryParamObjectParams as QueryParamObjectParams,
    type QueryParamOneOfParams as QueryParamOneOfParams,
    type QueryParamPrimitivesParams as QueryParamPrimitivesParams,
  };

  export {
    BodyParams as BodyParams,
    type ModelWithParamInName as ModelWithParamInName,
    type MyModel as MyModel,
    type NestedRequestModelA as NestedRequestModelA,
    type NestedRequestModelB as NestedRequestModelB,
    type NestedRequestModelC as NestedRequestModelC,
    type NullTypeModel as NullTypeModel,
    type StringMapModel as StringMapModel,
    type UnknownObjectModel as UnknownObjectModel,
    type BodyParamTopLevelAllOfResponse as BodyParamTopLevelAllOfResponse,
    type BodyParamUnionOverlappingPropResponse as BodyParamUnionOverlappingPropResponse,
    type BodyParamBinaryStringTypeParams as BodyParamBinaryStringTypeParams,
    type BodyParamBinaryTypeParams as BodyParamBinaryTypeParams,
    type BodyParamDuplicateSubpropertyParams as BodyParamDuplicateSubpropertyParams,
    type BodyParamEnumPropertiesParams as BodyParamEnumPropertiesParams,
    type BodyParamNestedRequestModelsParams as BodyParamNestedRequestModelsParams,
    type BodyParamNullTypeParams as BodyParamNullTypeParams,
    type BodyParamObjectWithArrayOfObjectsParams as BodyParamObjectWithArrayOfObjectsParams,
    type BodyParamObjectWithUnionPropertiesParams as BodyParamObjectWithUnionPropertiesParams,
    type BodyParamOnlyReadOnlyPropertiesParams as BodyParamOnlyReadOnlyPropertiesParams,
    type BodyParamParamInModelNameRefParams as BodyParamParamInModelNameRefParams,
    type BodyParamPropertyModelRefParams as BodyParamPropertyModelRefParams,
    type BodyParamPropertyWithComplexUnionParams as BodyParamPropertyWithComplexUnionParams,
    type BodyParamPropertyWithHeavilyNestedComplexUnionParams as BodyParamPropertyWithHeavilyNestedComplexUnionParams,
    type BodyParamReadOnlyPropertiesParams as BodyParamReadOnlyPropertiesParams,
    type BodyParamStringMapModelRefParams as BodyParamStringMapModelRefParams,
    type BodyParamTopLevelAllOfParams as BodyParamTopLevelAllOfParams,
    type BodyParamTopLevelAllOfNestedObjectParams as BodyParamTopLevelAllOfNestedObjectParams,
    type BodyParamTopLevelAnyOfWithRefParams as BodyParamTopLevelAnyOfWithRefParams,
    type BodyParamTopLevelArrayParams as BodyParamTopLevelArrayParams,
    type BodyParamTopLevelArrayWithChildrenParams as BodyParamTopLevelArrayWithChildrenParams,
    type BodyParamTopLevelArrayWithOtherParamsParams as BodyParamTopLevelArrayWithOtherParamsParams,
    type BodyParamTopLevelOneOfOneEntryParams as BodyParamTopLevelOneOfOneEntryParams,
    type BodyParamTopLevelSharedTypeParams as BodyParamTopLevelSharedTypeParams,
    type BodyParamUnionOverlappingPropParams as BodyParamUnionOverlappingPropParams,
    type BodyParamUnknownObjectParams as BodyParamUnknownObjectParams,
    type BodyParamWithDefaultBodyParamOptionalParams as BodyParamWithDefaultBodyParamOptionalParams,
    type BodyParamWithDefaultBodyParamRequiredParams as BodyParamWithDefaultBodyParamRequiredParams,
    type BodyParamWithModelPropertyParams as BodyParamWithModelPropertyParams,
  };

  export {
    HeaderParams as HeaderParams,
    type HeaderParamAllTypesParams as HeaderParamAllTypesParams,
    type HeaderParamArraysParams as HeaderParamArraysParams,
    type HeaderParamClientArgumentParams as HeaderParamClientArgumentParams,
    type HeaderParamNullableTypeParams as HeaderParamNullableTypeParams,
  };

  export {
    MixedParams as MixedParams,
    type MixedParamBodyWithTopLevelOneOfAndPathParams as MixedParamBodyWithTopLevelOneOfAndPathParams,
    type MixedParamQueryAndBodyParams as MixedParamQueryAndBodyParams,
    type MixedParamQueryBodyAndPathParams as MixedParamQueryBodyAndPathParams,
  };

  export {
    MakeAmbiguousSchemasLooser as MakeAmbiguousSchemasLooser,
    type MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse as MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse,
  };

  export {
    MakeAmbiguousSchemasExplicit as MakeAmbiguousSchemasExplicit,
    type MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse as MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse,
  };

  export {
    DecoratorTests as DecoratorTests,
    type DecoratorTestKeepMeResponse as DecoratorTestKeepMeResponse,
  };

  export { Tests as Tests };

  export { DeeplyNested as DeeplyNested };

  export {
    Version1_30Names as Version1_30Names,
    type Version1_30NameCreateResponse as Version1_30NameCreateResponse,
    type Version1_30NameCreateParams as Version1_30NameCreateParams,
  };

  export {
    Recursion as Recursion,
    type ArrayRecursion as ArrayRecursion,
    type SelfRecursion as SelfRecursion,
    type RecursionCreateEnvelopeResponse as RecursionCreateEnvelopeResponse,
    type RecursionCreateEnvelopeParams as RecursionCreateEnvelopeParams,
    type RecursionCreateSelfParams as RecursionCreateSelfParams,
  };

  export {
    SharedQueryParams as SharedQueryParams,
    type SharedQueryParamRetrieveResponse as SharedQueryParamRetrieveResponse,
    type SharedQueryParamDelResponse as SharedQueryParamDelResponse,
    type SharedQueryParamRetrieveParams as SharedQueryParamRetrieveParams,
    type SharedQueryParamDelParams as SharedQueryParamDelParams,
  };

  export {
    ModelReferencedInParentAndChildResource as ModelReferencedInParentAndChildResource,
    type ModelReferencedInParentAndChild as ModelReferencedInParentAndChild,
  };

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
