// File generated from our OpenAPI spec by Stainless.

import * as API from './';

export interface APIStatus {
  message: CustomAPIStatusMessage;
}

export type APIStatusAlias = APIStatus;

export type CustomAPIStatusMessage = string;

export interface Sta563PostEmptyObjectResponse {}

export namespace TopLevel {
  export import APIStatus = API.APIStatus;
  export import APIStatusAlias = API.APIStatusAlias;
  export import CustomAPIStatusMessage = API.CustomAPIStatusMessage;
  export import Sta563PostEmptyObjectResponse = API.Sta563PostEmptyObjectResponse;
}
