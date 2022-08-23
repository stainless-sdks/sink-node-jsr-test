// File generated from our OpenAPI spec by Stainless.
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';
import type { Agent } from 'http';

const environments = {
  production: 'https://demo.stainlessapi.com/',
  sandbox: 'https://demo-sanbox.stainlessapi.com/',
};

type Config = {
  /**
   * Defaults to to process.env["SINK_API_KEY"]. Set it to null if you want to send unauthenticated requests.
   */
  apiKey?: string | null;
  environment?: keyof typeof environments;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
};

export class Sink extends Core.APIClient {
  constructor(config?: Config) {
    const options: Config = {
      apiKey: process.env['SINK_API_KEY'] || '',
      environment: 'production',
      ...config,
    };

    if (!options.apiKey && options.apiKey !== null) {
      throw new Error(
        "The SINK_API_KEY environment variable is missing or empty; either provide it, or instantiate the Sink client with an apiKey option, like new Sink({apiKey: 'my api key'}).",
      );
    }

    super({
      apiKey: options.apiKey,
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout,
      httpAgent: options.httpAgent,
    });
  }

  cards: API.Cards = new API.Cards(this);

  status(options?: Core.RequestOptions): Promise<Core.APIResponse<Sink.APIStatus>> {
    return this.get('/status', options);
  }

  protected override defaultHeaders(): Core.Headers {
    const Authorization = `Bearer ${this.apiKey}`;
    return {
      ...super.defaultHeaders(),
      Authorization,
    };
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

export namespace Sink {
  export import Page = Pagination.Page;
  export import PageParams = Pagination.PageParams;
  export import PageResponse = Pagination.PageResponse;

  export import APIStatus = API.APIStatus;

  export import Card = API.Card;
  export import CardProvisionResponse = API.CardProvisionResponse;
  export import CardsPage = API.CardsPage;
  export import CardCreateParams = API.CardCreateParams;
  export import CardUpdateParams = API.CardUpdateParams;
  export import CardListParams = API.CardListParams;
  export import CardProvisionParams = API.CardProvisionParams;
  export import CardReissueParams = API.CardReissueParams;
}

exports = module.exports = Sink;
export default Sink;
