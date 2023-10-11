// File generated from our OpenAPI spec by Stainless.

import * as TopLevelAPI from 'sink-npm/resources/top-level';

export interface APIStatus {
  message: CustomAPIStatusMessage;
}

export type APIStatusAlias = APIStatus;

export type CustomAPIStatusMessage = string;

export namespace TopLevel {
  export type APIStatus = TopLevelAPI.APIStatus;
  export type APIStatusAlias = TopLevelAPI.APIStatusAlias;
  export type CustomAPIStatusMessage = TopLevelAPI.CustomAPIStatusMessage;
}
