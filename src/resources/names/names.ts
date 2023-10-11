// File generated from our OpenAPI spec by Stainless.

import * as Core from 'sink-npm/core';
import { APIResource } from 'sink-npm/resource';
import * as NamesAPI from 'sink-npm/resources/names/names';
import * as Shared from 'sink-npm/resources/shared';
import * as ParamsAPI from 'sink-npm/resources/names/params';
import * as CanCauseClashesAPI from 'sink-npm/resources/names/can-cause-clashes/can-cause-clashes';
import * as ReservedNamesAPI from 'sink-npm/resources/names/reserved-names/reserved-names';

export class Names extends APIResource {
  reservedNames: ReservedNamesAPI.ReservedNames = new ReservedNamesAPI.ReservedNames(this.client);
  params: ParamsAPI.Params = new ParamsAPI.Params(this.client);
  canCauseClashes: CanCauseClashesAPI.CanCauseClashes = new CanCauseClashesAPI.CanCauseClashes(this.client);

  /**
   * Endpoint with request & response properties that could cause clashes due to
   * imports.
   */
  childPropImportClash(options?: Core.RequestOptions): Core.APIPromise<NameChildPropImportClashResponse> {
    return this.post('/names/child_prop_import_clash', options);
  }

  /**
   * Endpoint with the name `get` in the config.
   */
  get_(options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this.get('/names/method_name_get', options);
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
  export type Balance = NamesAPI.Balance;
  export type NameChildPropImportClashResponse = NamesAPI.NameChildPropImportClashResponse;
  export type NamePropertiesCommonConflictsResponse = NamesAPI.NamePropertiesCommonConflictsResponse;
  export type NameResponsePropertyClashesModelImportResponse =
    NamesAPI.NameResponsePropertyClashesModelImportResponse;
  export type NameResponseShadowsPydanticResponse = NamesAPI.NameResponseShadowsPydanticResponse;
  export type NamePropertiesCommonConflictsParams = NamesAPI.NamePropertiesCommonConflictsParams;
  export import ReservedNames = ReservedNamesAPI.ReservedNames;
  export import Params = ParamsAPI.Params;
  export type ParamOptionsParamParams = ParamsAPI.ParamOptionsParamParams;
  export type ParamTimeoutParamParams = ParamsAPI.ParamTimeoutParamParams;
  export import CanCauseClashes = CanCauseClashesAPI.CanCauseClashes;
}
