// File generated from our OpenAPI spec by Stainless.

import qs from 'qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';
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
  username?: string | null;
  clientId?: string | null;
  clientSecret?: string | null;
  someBooleanArg?: boolean | null;
  someIntegerArg?: number | null;
  someNumberArg?: number | null;
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
    });
    this.userToken = options.userToken || null;

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
  }

  testing: API.Testing = new API.Testing(this);
  paginationTests: API.PaginationTests = new API.PaginationTests(this);
  cards: API.Cards = new API.Cards(this);
  resources: API.Resources = new API.Resources(this);
  configTools: API.ConfigTools = new API.ConfigTools(this);
  company: API.CompanyResource = new API.CompanyResource(this);
  sta_563: API.Sta_563 = new API.Sta_563(this);
  sta_569: API.Sta_569 = new API.Sta_569(this);
  sta_630: API.Sta_630 = new API.Sta_630(this);
  parent: API.Parent = new API.Parent(this);
  sta_606: API.Sta_606 = new API.Sta_606(this);
  envelopes: API.Envelopes = new API.Envelopes(this);
  types: API.Types = new API.Types(this);
  names: API.Names = new API.Names(this);
  widgets: API.Widgets = new API.Widgets(this);
  sta_613: API.Sta_613 = new API.Sta_613(this);
  responses: API.Responses = new API.Responses(this);
  pathParams: API.PathParams = new API.PathParams(this);
  queryParams: API.QueryParams = new API.QueryParams(this);
  bodyParams: API.BodyParams = new API.BodyParams(this);
  decoratorTests: API.DecoratorTests = new API.DecoratorTests(this);
  tests: API.Tests = new API.Tests(this);

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
  sta_563PostEmptyObject(
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Sink.Sta_563PostEmptyObjectResponse>> {
    return this.post('/sta_563_empty_object', options);
  }

  protected override defaultHeaders(): Core.Headers {
    return {
      ...super.defaultHeaders(),
      'My-Api-Version': '11',
      'X-Enable-Metrics': '1',
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.userToken && headers['Authorization']) {
      return;
    }

    if (customHeaders['Authorization'] === null) {
      return;
    }

    throw new Error('Expected userToken to be set or Authorization header to be omitted.');
  }

  protected override authHeaders(): Core.Headers {
    return { Authorization: `Bearer ${this.userToken}` };
  }

  protected override qsOptions(): qs.IStringifyOptions {
    return { arrayFormat: 'comma' };
  }

  static APIError = Core.APIError;

  static APIConnectionError = Core.APIConnectionError;
  static APIConnectionTimeoutError = Core.APIConnectionTimeoutError;

  static BadRequestError = Core.BadRequestError;
  static AuthenticationError = Core.AuthenticationError;
  static PermissionDeniedError = Core.PermissionDeniedError;
  static NotFoundError = Core.NotFoundError;
  static ConflictError = Core.ConflictError;
  static UnprocessableEntityError = Core.UnprocessableEntityError;
  static RateLimitError = Core.RateLimitError;
  static InternalServerError = Core.InternalServerError;
}

export const {
  APIError,

  APIConnectionError,
  APIConnectionTimeoutError,

  BadRequestError,
  AuthenticationError,
  PermissionDeniedError,
  NotFoundError,
  ConflictError,
  UnprocessableEntityError,
  RateLimitError,
  InternalServerError,
} = Sink;

export namespace Sink {
  // Helper functions
  export import fileFromPath = FileFromPath.fileFromPath;

  export import CardPage = Pagination.CardPage;
  export import CardPageParams = Pagination.CardPageParams;
  export import CardPageResponse = Pagination.CardPageResponse;

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
  export import FakePageResponse = Pagination.FakePageResponse;

  export import APIStatus = API.APIStatus;
  export import APIStatusAlias = API.APIStatusAlias;
  export import CustomAPIStatusMessage = API.CustomAPIStatusMessage;
  export import Sta_563PostEmptyObjectResponse = API.Sta_563PostEmptyObjectResponse;

  export import TestingRootResponse = API.TestingRootResponse;

  export import Card = API.Card;
  export import CardAlias = API.CardAlias;
  export import FundingAccount = API.FundingAccount;
  export import CardProvisionFooResponse = API.CardProvisionFooResponse;
  export import CardsCardPage = API.CardsCardPage;
  export import CardCreateParams = API.CardCreateParams;
  export import CardUpdateParams = API.CardUpdateParams;
  export import CardListParams = API.CardListParams;
  export import CardCreateAliasedParams = API.CardCreateAliasedParams;
  export import CardProvisionFooParams = API.CardProvisionFooParams;
  export import CardReissueParams = API.CardReissueParams;

  export import Company = API.Company;

  export import DeleteEmptyObjectResponse = API.DeleteEmptyObjectResponse;

  export import Sta_569OneEntryResponse = API.Sta_569OneEntryResponse;
  export import Sta_569OneEntryWithNullResponse = API.Sta_569OneEntryWithNullResponse;
  export import Sta_569OneEntryParams = API.Sta_569OneEntryParams;
  export import Sta_569OneEntryWithNullParams = API.Sta_569OneEntryWithNullParams;

  export import GithubUser = API.GithubUser;
  export import GithubUserPreferences = API.GithubUserPreferences;

  export import Sta_606WithSharedParamsParams = API.Sta_606WithSharedParamsParams;

  export import Address = API.Address;
  export import EnvelopeInlineResponseResponse = API.EnvelopeInlineResponseResponse;

  export import TypeEnumsResponse = API.TypeEnumsResponse;
  export import TypeDatesResponse = API.TypeDatesResponse;
  export import TypeDatetimesResponse = API.TypeDatetimesResponse;
  export import TypeDatesParams = API.TypeDatesParams;
  export import TypeDatetimesParams = API.TypeDatetimesParams;
  export import TypeEnumsParams = API.TypeEnumsParams;

  export import NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;

  export import Widget = API.Widget;

  export import Sta_613OnlyGlobalResponse = API.Sta_613OnlyGlobalResponse;
  export import Sta_613GlobalWithStandardResponse = API.Sta_613GlobalWithStandardResponse;

  export import ObjectWithAnyOfNullProperty = API.ObjectWithAnyOfNullProperty;
  export import ObjectWithOneOfNullProperty = API.ObjectWithOneOfNullProperty;
  export import ResponseObjectNoPropertiesResponse = API.ResponseObjectNoPropertiesResponse;
  export import ResponseIntegerResponseResponse = API.ResponseIntegerResponseResponse;
  export import ResponseStringResponseResponse = API.ResponseStringResponseResponse;
  export import ResponseBooleanResponseResponse = API.ResponseBooleanResponseResponse;
  export import ResponseMissingRequiredResponse = API.ResponseMissingRequiredResponse;
  export import SimpleObjectsFakePage = API.SimpleObjectsFakePage;

  export import PathParamSingularResponse = API.PathParamSingularResponse;
  export import PathParamMultipleResponse = API.PathParamMultipleResponse;

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
  export import BodyParamUnionOverlappingPropParams = API.BodyParamUnionOverlappingPropParams;
  export import BodyParamWithModelPropertyParams = API.BodyParamWithModelPropertyParams;

  export import DecoratorTestKeepMeResponse = API.DecoratorTestKeepMeResponse;

  export import Currency = API.Currency;
  export import ObjectWithChildRef = API.ObjectWithChildRef;
  export import ShippingAddress = API.ShippingAddress;
  export import SimpleObject = API.SimpleObject;
  export import SimpleObjectAlias = API.SimpleObjectAlias;
}

exports = module.exports = Sink;
export default Sink;
