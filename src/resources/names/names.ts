// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import { Params } from './params';
import { CanCauseClashes } from './can-cause-clashes/can-cause-clashes';
import * as API from './index';

export class Names extends APIResource {
  params: Params = new Params(this.client);
  canCauseClashes: CanCauseClashes = new CanCauseClashes(this.client);

  /**
   * Endpoint with request & response properties that could cause clashes due to
   * imports.
   */
  childPropImportClash(options?: Core.RequestOptions): Core.APIPromise<NameChildPropImportClashResponse> {
    return this.post('/names/child_prop_import_clash', options);
  }

  /**
   * Endpoint with request & response properties that are likely to cause name
   * conflicts.
   */
  propertiesCommonConflicts(
    body: NamePropertiesCommonConflictsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamePropertiesCommonConflictsResponse> {
    return this.post('/names/properties_common_conflicts', { body, ...options });
  }

  /**
   * Endpoint with a response model property that can cause clashes with a model
   * import.
   */
  responsePropertyClashesModelImport(
    options?: Core.RequestOptions,
  ): Core.APIPromise<NameResponsePropertyClashesModelImportResponse> {
    return this.get('/names/response_property_clashes_model_import', options);
  }

  /**
   * Endpoint with a response model property that would clash with pydantic.
   */
  responseShadowsPydantic(
    options?: Core.RequestOptions,
  ): Core.APIPromise<NameResponseShadowsPydanticResponse> {
    return this.get('/names/response_property_shadows_pydantic', options);
  }
}

export interface Balance {
  foo?: string;
}

export interface NameChildPropImportClashResponse {
  balance: NameChildPropImportClashResponse.Balance;

  balance_model: Balance;
}

export namespace NameChildPropImportClashResponse {
  export interface Balance {
    bar?: string;
  }
}

export interface NamePropertiesCommonConflictsResponse {
  bool: boolean;

  /**
   * In certain languages the type declaration for this prop can shadow the `bool`
   * property declaration.
   */
  bool_2: boolean;

  /**
   * This shadows the stdlib `datetime.date` type in Python & causes type errors.
   */
  date: string;

  /**
   * In certain languages the type declaration for this prop can shadow the `date`
   * property declaration.
   */
  date_2: string;

  float: number;

  /**
   * In certain languages the type declaration for this prop can shadow the `float`
   * property declaration.
   */
  float_2: number;

  int: number;

  /**
   * In certain languages the type declaration for this prop can shadow the `int`
   * property declaration.
   */
  int_2: number;
}

export interface NameResponsePropertyClashesModelImportResponse {
  balance: Balance;

  optional_balance?: Balance;
}

export interface NameResponseShadowsPydanticResponse {
  parse_raw: string;

  model_id?: string;
}

export interface NamePropertiesCommonConflictsParams {
  bool: boolean;

  /**
   * In certain languages the type declaration for this prop can shadow the `bool`
   * property declaration.
   */
  bool_2: boolean;

  /**
   * This shadows the stdlib `datetime.date` type in Python & causes type errors.
   */
  date: string;

  /**
   * In certain languages the type declaration for this prop can shadow the `date`
   * property declaration.
   */
  date_2: string;

  float: number;

  /**
   * In certain languages the type declaration for this prop can shadow the `float`
   * property declaration.
   */
  float_2: number;

  int: number;

  /**
   * In certain languages the type declaration for this prop can shadow the `int`
   * property declaration.
   */
  int_2: number;
}

export namespace Names {
  export import Balance = API.Balance;
  export import NameChildPropImportClashResponse = API.NameChildPropImportClashResponse;
  export import NamePropertiesCommonConflictsResponse = API.NamePropertiesCommonConflictsResponse;
  export import NameResponsePropertyClashesModelImportResponse = API.NameResponsePropertyClashesModelImportResponse;
  export import NameResponseShadowsPydanticResponse = API.NameResponseShadowsPydanticResponse;
  export import NamePropertiesCommonConflictsParams = API.NamePropertiesCommonConflictsParams;

  export import Params = API.Params;
  export import ParamOptionsParamParams = API.ParamOptionsParamParams;
  export import ParamTimeoutParamParams = API.ParamTimeoutParamParams;

  export import CanCauseClashes = API.CanCauseClashes;
}
