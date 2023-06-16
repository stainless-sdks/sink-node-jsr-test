// File generated from our OpenAPI spec by Stainless.

import qs from 'qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';
import * as Errors from '~/error';
import type { Agent } from 'http';
import * as FileFromPath from 'formdata-node/file-from-path';

const environments = {
  production: 'https://demo.stainlessapi.com/',
  sandbox: 'https://demo-sanbox.stainlessapi.com/',
};

type Config = {
  /**
   * Defaults to process.env["SINK_CUSTOM_API_KEY_ENV"]. Set it to null if you want to send unauthenticated requests.
   */
  userToken?: string | null;
  environment?: keyof typeof environments;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
  maxRetries?: number;
  defaultHeaders?: Core.Headers;
  username?: string | null;
  clientId?: string | null;
  clientSecret?: string | null;
  someBooleanArg?: boolean | null;
  someIntegerArg?: number | null;
  someNumberArg?: number | null;
  requiredArgNoEnv: string;
};

/** Instantiate the API Client. */
export class Sink extends Core.APIClient {
  userToken: string | null;
  username: string;
  clientId?: string | null;
  clientSecret?: string | null;
  someBooleanArg?: boolean | null;
  someIntegerArg?: number | null;
  someNumberArg?: number | null;
  requiredArgNoEnv: string;

  private _options: Config;

  constructor(config: Config) {
    const options: Config = {
      userToken: process.env['SINK_CUSTOM_API_KEY_ENV'] || '',
      environment: 'production',
      ...config,
    };

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
    });
    this.userToken = options.userToken || null;
    this._options = options;
    this.idempotencyHeader = 'Idempotency-Key';

    const username = config.username || process.env['SINK_USER'];
    if (!username) {
      throw new Error(
        "The SINK_USER environment variable is missing or empty; either provide it, or instantiate the Sink client with an username option, like new Sink({ username: 'Robert' }).",
      );
    }
    this.username = username;
    this.clientId = config.clientId || process.env['SINK_CLIENT_ID'] || null;
    this.clientSecret = config.clientSecret || process.env['SINK_CLIENT_SECRET'] || 'hellosecret';
    this.someBooleanArg =
      config.someBooleanArg ||
      (process.env['SINK_SOME_BOOLEAN_ARG'] && Core.coerceBoolean(process.env['SINK_SOME_BOOLEAN_ARG'])) ||
      true;
    this.someIntegerArg =
      config.someIntegerArg ||
      (process.env['SINK_SOME_INTEGER_ARG'] && Core.coerceInteger(process.env['SINK_SOME_INTEGER_ARG'])) ||
      123;
    this.someNumberArg =
      config.someNumberArg ||
      (process.env['SINK_SOME_NUMBER_ARG'] && Core.coerceFloat(process.env['SINK_SOME_NUMBER_ARG'])) ||
      1.2;
    this.requiredArgNoEnv = config.requiredArgNoEnv;
  }

  testing: API.Testing = new API.Testing(this);
  casing: API.Casing = new API.Casing(this);
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
  apiStatus(options?: Core.RequestOptions): Promise<Core.APIResponse<Sink.APIStatus>> {
    return this.get('/status', options);
  }
  apiStatusAlias = this.apiStatus;
  /**
   * Endpoint returning no response
   */
  createNoResponse(options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
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
  sta563PostEmptyObject(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Sink.Sta563PostEmptyObjectResponse>> {
    return this.post('/sta_563_empty_object', options);
  }

  protected override defaultHeaders(): Core.Headers {
    return {
      ...super.defaultHeaders(),
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

  protected override authHeaders(): Core.Headers {
    if (this.userToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.userToken}` };
  }

  protected override qsOptions(): qs.IStringifyOptions {
    return { arrayFormat: 'comma' };
  }

  static CONSTANT_WITH_NEWLINES = '\n\nHuman:';

  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
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
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import fileFromPath = FileFromPath.fileFromPath;

export namespace Sink {
  // Helper functions
  export import fileFromPath = FileFromPath.fileFromPath;

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

  export import RootResponse = API.RootResponse;

  export import MethodConfigSkippedTestsAllResponse = API.MethodConfigSkippedTestsAllResponse;

  export import StreamingBasicResponse = API.StreamingBasicResponse;
  export import StreamingBasicParams = API.StreamingBasicParams;
  export import StreamingNestedParamsParams = API.StreamingNestedParamsParams;
  export import StreamingQueryParamDiscriminatorParams = API.StreamingQueryParamDiscriminatorParams;

  export import DocstringLeadingDoubleQuoteResponse = API.DocstringLeadingDoubleQuoteResponse;
  export import DocstringTrailingDoubleQuoteResponse = API.DocstringTrailingDoubleQuoteResponse;

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

  export import FileCreateMultipartResponse = API.FileCreateMultipartResponse;
  export import FileCreateMultipartParams = API.FileCreateMultipartParams;

  export import Company = API.Company;

  export import DeleteEmptyObjectResponse = API.DeleteEmptyObjectResponse;

  export import Sta569OneEntryResponse = API.Sta569OneEntryResponse;
  export import Sta569OneEntryWithNullResponse = API.Sta569OneEntryWithNullResponse;
  export import Sta569OneEntryParams = API.Sta569OneEntryParams;
  export import Sta569OneEntryWithNullParams = API.Sta569OneEntryWithNullParams;

  export import GithubUser = API.GithubUser;
  export import GithubUserPreferences = API.GithubUserPreferences;

  export import Sta606WithSharedParamsParams = API.Sta606WithSharedParamsParams;

  export import Address = API.Address;
  export import EnvelopeInlineResponseResponse = API.EnvelopeInlineResponseResponse;

  export import TypeEnumsResponse = API.TypeEnumsResponse;
  export import TypeDatesResponse = API.TypeDatesResponse;
  export import TypeDatetimesResponse = API.TypeDatetimesResponse;
  export import TypeDatesParams = API.TypeDatesParams;
  export import TypeDatetimesParams = API.TypeDatetimesParams;
  export import TypeEnumsParams = API.TypeEnumsParams;

  export import NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;
  export import NamePropertiesCommonConflictsResponse = API.NamePropertiesCommonConflictsResponse;
  export import NamePropertiesCommonConflictsParams = API.NamePropertiesCommonConflictsParams;

  export import Widget = API.Widget;

  export import Sta613OnlyGlobalResponse = API.Sta613OnlyGlobalResponse;
  export import Sta613GlobalWithStandardResponse = API.Sta613GlobalWithStandardResponse;

  export import ObjectWithAnyOfNullProperty = API.ObjectWithAnyOfNullProperty;
  export import ObjectWithOneOfNullProperty = API.ObjectWithOneOfNullProperty;
  export import SimpleAllof = API.SimpleAllof;
  export import ResponseObjectNoPropertiesResponse = API.ResponseObjectNoPropertiesResponse;
  export import ResponseObjectWithAdditionalPropertiesPropResponse = API.ResponseObjectWithAdditionalPropertiesPropResponse;
  export import ResponseObjectWithHeavilyNestedUnionResponse = API.ResponseObjectWithHeavilyNestedUnionResponse;
  export import ResponseAdditionalPropertiesResponse = API.ResponseAdditionalPropertiesResponse;
  export import ResponseAdditionalPropertiesNestedModelReferenceResponse = API.ResponseAdditionalPropertiesNestedModelReferenceResponse;
  export import ResponseIntegerResponseResponse = API.ResponseIntegerResponseResponse;
  export import ResponseStringResponseResponse = API.ResponseStringResponseResponse;
  export import ResponseBooleanResponseResponse = API.ResponseBooleanResponseResponse;
  export import ResponseUnionOfObjectsResponse = API.ResponseUnionOfObjectsResponse;
  export import ResponseUnionOfMixedTypesResponse = API.ResponseUnionOfMixedTypesResponse;
  export import ResponseMissingRequiredResponse = API.ResponseMissingRequiredResponse;
  export import ResponseArrayResponseResponse = API.ResponseArrayResponseResponse;
  export import ResponseAllofSimpleResponse = API.ResponseAllofSimpleResponse;
  export import ResponseObjectAllPropertiesResponse = API.ResponseObjectAllPropertiesResponse;

  export import PathParamSingularResponse = API.PathParamSingularResponse;
  export import PathParamMultipleResponse = API.PathParamMultipleResponse;

  export import PositionalParamBasicBodyParams = API.PositionalParamBasicBodyParams;
  export import PositionalParamBasicQueryParams = API.PositionalParamBasicQueryParams;
  export import PositionalParamBodyParams = API.PositionalParamBodyParams;
  export import PositionalParamBodyExtraParamParams = API.PositionalParamBodyExtraParamParams;
  export import PositionalParamKitchenSinkParams = API.PositionalParamKitchenSinkParams;
  export import PositionalParamMultiplePathParamsParams = API.PositionalParamMultiplePathParamsParams;
  export import PositionalParamQueryMultipleParams = API.PositionalParamQueryMultipleParams;
  export import PositionalParamUnionBodyAndPathParams = API.PositionalParamUnionBodyAndPathParams;

  export import QueryParamAnyOfParams = API.QueryParamAnyOfParams;
  export import QueryParamArrayParams = API.QueryParamArrayParams;
  export import QueryParamEnumParams = API.QueryParamEnumParams;
  export import QueryParamObjectParams = API.QueryParamObjectParams;
  export import QueryParamOneOfParams = API.QueryParamOneOfParams;
  export import QueryParamPrimitivesParams = API.QueryParamPrimitivesParams;

  export import MyModel = API.MyModel;
  export import BodyParamUnionOverlappingPropResponse = API.BodyParamUnionOverlappingPropResponse;
  export import BodyParamReadOnlyPropertiesParams = API.BodyParamReadOnlyPropertiesParams;
  export import BodyParamTopLevelAllOfNestedObjectParams = API.BodyParamTopLevelAllOfNestedObjectParams;
  export import BodyParamTopLevelAnyOfWithRefParams = API.BodyParamTopLevelAnyOfWithRefParams;
  export import BodyParamTopLevelArrayParams = API.BodyParamTopLevelArrayParams;
  export import BodyParamTopLevelArrayWithChildrenParams = API.BodyParamTopLevelArrayWithChildrenParams;
  export import BodyParamTopLevelOneOfOneEntryParams = API.BodyParamTopLevelOneOfOneEntryParams;
  export import BodyParamUnionOverlappingPropParams = API.BodyParamUnionOverlappingPropParams;
  export import BodyParamWithModelPropertyParams = API.BodyParamWithModelPropertyParams;

  export import HeaderParamClientArgumentParams = API.HeaderParamClientArgumentParams;

  export import MixedParamQueryAndBodyParams = API.MixedParamQueryAndBodyParams;
  export import MixedParamQueryBodyAndPathParams = API.MixedParamQueryBodyAndPathParams;

  export import MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse = API.MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse;

  export import MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse = API.MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse;

  export import DecoratorTestKeepMeResponse = API.DecoratorTestKeepMeResponse;

  export import Version1_30NameCreateResponse = API.Version1_30NameCreateResponse;
  export import Version1_30NameCreateParams = API.Version1_30NameCreateParams;

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

exports = module.exports = Sink;
export default Sink;
