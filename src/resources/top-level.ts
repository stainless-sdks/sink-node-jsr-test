// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TopLevelAPI from 'sink-npm/resources/top-level';

export interface APIStatus {
  message: CustomAPIStatusMessage;
}

export type APIStatusAlias = APIStatus;

export type CustomAPIStatusMessage = string;

export namespace TopLevel {
  export import APIStatus = TopLevelAPI.APIStatus;
  export import APIStatusAlias = TopLevelAPI.APIStatusAlias;
  export import CustomAPIStatusMessage = TopLevelAPI.CustomAPIStatusMessage;
}
