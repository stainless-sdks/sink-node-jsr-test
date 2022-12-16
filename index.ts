// File generated from our OpenAPI spec by Stainless.
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
   * Defaults to to process.env["SINK_USER_TOKEN"]. Set it to null if you want to send unauthenticated requests.
   */
  userToken?: string | null;
  environment?: keyof typeof environments;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
  username?: string | null;
};

export class Sink extends Core.APIClient {
  userToken: string | null;
  username: string;

  constructor(config: Config) {
    const options: Config = {
      userToken: process.env['SINK_USER_TOKEN'] || '',
      environment: 'production',
      ...config,
    };

    if (!options.userToken && options.userToken !== null) {
      throw new Error(
        "The SINK_USER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Sink client with an userToken option, like new Sink({userToken: 'my user token'}).",
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout,
      httpAgent: options.httpAgent,
    });
    this.userToken = options.userToken;

    const username = config.username || process.env['SINK_USER'];
    if (!username) {
      throw new Error(
        "The SINK_USER environment variable is missing or empty; either provide it, or instantiate the Sink client with an username option, like new Sink({ username: 'Robert' }).",
      );
    }
    this.username = username;
  }

  testing: API.TestingResource = new API.TestingResource(this);
  cards: API.Cards = new API.Cards(this);
  resources: API.Resources = new API.Resources(this);
  configTools: API.ConfigTools = new API.ConfigTools(this);
  sta_563: API.Sta_563Resource = new API.Sta_563Resource(this);
  sta_569: API.Sta_569Resource = new API.Sta_569Resource(this);
  sta_630: API.Sta_630Resource = new API.Sta_630Resource(this);
  parent: API.ParentResource = new API.ParentResource(this);
  sta_606: API.Sta_606Resource = new API.Sta_606Resource(this);
  envelopes: API.Envelopes = new API.Envelopes(this);
  types: API.Types = new API.Types(this);
  names: API.Names = new API.Names(this);
  widgets: API.Widgets = new API.Widgets(this);
  sta_613: API.Sta_613Resource = new API.Sta_613Resource(this);
  pathParams: API.PathParams = new API.PathParams(this);
  responses: API.Responses = new API.Responses(this);
  params: API.Params = new API.Params(this);
  decoratorTests: API.DecoratorTests = new API.DecoratorTests(this);

  status(options?: Core.RequestOptions): Promise<Core.APIResponse<Sink.APIStatus>> {
    return this.get('/status', options);
  }
  createNoResponse(options?: Core.RequestOptions): Promise<void> {
    return this.post('/no_response', { ...options, headers: { Accept: '', ...options?.headers } });
  }
  sta_563PostEmptyObject(options?: Core.RequestOptions): Promise<Core.APIResponse<unknown>> {
    return this.post('/sta_563_empty_object', options);
  }

  protected override defaultHeaders(): Core.Headers {
    return {
      ...super.defaultHeaders(),
      'My-Api-Version': '11',
      'X-Enable-Metrics': '1',
    };
  }

  protected override authHeaders(): Core.Headers {
    return { Authorization: `My Token: ${this.userToken}` };
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

  export import PageNumber = Pagination.PageNumber;
  export import PageNumberParams = Pagination.PageNumberParams;
  export import PageNumberResponse = Pagination.PageNumberResponse;

  export import MyFakePage = Pagination.MyFakePage;
  export import MyFakePageResponse = Pagination.MyFakePageResponse;

  export import APIStatus = API.APIStatus;

  export import TestingRootResponse = API.TestingRootResponse;

  export import Card = API.Card;
  export import CardProvisionFooResponse = API.CardProvisionFooResponse;
  export import CardsPageNumber = API.CardsPageNumber;
  export import CardCreateParams = API.CardCreateParams;
  export import CardUpdateParams = API.CardUpdateParams;
  export import CardListParams = API.CardListParams;
  export import CardProvisionFooParams = API.CardProvisionFooParams;
  export import CardReissueParams = API.CardReissueParams;

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
  export import TypeEnumsParams = API.TypeEnumsParams;

  export import NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;

  export import Widget = API.Widget;

  export import Sta_613GlobalWithStandardResponse = API.Sta_613GlobalWithStandardResponse;
  export import Sta_613OnlyGlobalResponse = API.Sta_613OnlyGlobalResponse;

  export import PathParamMultipleResponse = API.PathParamMultipleResponse;
  export import PathParamSingularResponse = API.PathParamSingularResponse;

  export import ObjectWithAnyOfNullProperty = API.ObjectWithAnyOfNullProperty;
  export import ObjectWithOneOfNullProperty = API.ObjectWithOneOfNullProperty;
  export import SimpleObjectsMyFakePage = API.SimpleObjectsMyFakePage;

  export import MyModel = API.MyModel;
  export import ParamTopLevelAnyOfResponse = API.ParamTopLevelAnyOfResponse;
  export import ParamTopLevelOneOfResponse = API.ParamTopLevelOneOfResponse;
  export import ParamUnionOverlappingPropResponse = API.ParamUnionOverlappingPropResponse;
  export import ParamReadOnlyPropertiesParams = API.ParamReadOnlyPropertiesParams;
  export import ParamTopLevelAllOfParams = API.ParamTopLevelAllOfParams;
  export import ParamTopLevelAllOfNestedObjectParams = API.ParamTopLevelAllOfNestedObjectParams;
  export import ParamTopLevelAnyOfParams = API.ParamTopLevelAnyOfParams;
  export import ParamTopLevelOneOfParams = API.ParamTopLevelOneOfParams;
  export import ParamUnionOverlappingPropParams = API.ParamUnionOverlappingPropParams;
  export import ParamWithModelPropertyParams = API.ParamWithModelPropertyParams;

  export import DecoratorTestKeepMeResponse = API.DecoratorTestKeepMeResponse;
}

exports = module.exports = Sink;
export default Sink;
