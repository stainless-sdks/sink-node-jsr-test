// File generated from our OpenAPI spec by Stainless.

import * as API from './index';

export interface APIStatus {
  message: CustomAPIStatusMessage;
}

export type APIStatusAlias = APIStatus;

export type CustomAPIStatusMessage = string;

export namespace TopLevel {
  export import APIStatus = API.APIStatus;
  export import APIStatusAlias = API.APIStatusAlias;
  export import CustomAPIStatusMessage = API.CustomAPIStatusMessage;
}
