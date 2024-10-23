// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as TopLevelAPI from './top-level';

export interface APIStatus {
  message: CustomAPIStatusMessage;
}

export type APIStatusAlias = APIStatus

export type CustomAPIStatusMessage = string

export namespace TopLevel {
  export import APIStatus = TopLevelAPI.APIStatus;
  export import APIStatusAlias = TopLevelAPI.APIStatusAlias;
  export import CustomAPIStatusMessage = TopLevelAPI.CustomAPIStatusMessage;
}
