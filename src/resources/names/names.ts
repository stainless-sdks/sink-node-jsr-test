// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as OpenAPISpecialsAPI from './openapi-specials';
import { OpenAPISpecialUsedUsedAsPropertyNameResponse, OpenAPISpecials } from './openapi-specials';
import * as ParamsAPI from './params';
import { ParamOptionsParamParams, ParamTimeoutParamParams, Params } from './params';
import * as UnionsAPI from './unions';
import { DiscriminatedUnion, Unions, VariantsSinglePropObjects } from './unions';
import * as CanCauseClashesAPI from './can-cause-clashes/can-cause-clashes';
import { CanCauseClashes } from './can-cause-clashes/can-cause-clashes';
import * as ReservedNamesAPI from './reserved-names/reserved-names';
import { ReservedNameCommonReservedParamsParams, ReservedNames } from './reserved-names/reserved-names';

export class Names extends APIResource {
  unions: UnionsAPI.Unions = new UnionsAPI.Unions(this._client);
  reservedNames: ReservedNamesAPI.ReservedNames = new ReservedNamesAPI.ReservedNames(this._client);
  params: ParamsAPI.Params = new ParamsAPI.Params(this._client);
  canCauseClashes: CanCauseClashesAPI.CanCauseClashes = new CanCauseClashesAPI.CanCauseClashes(this._client);
  openAPISpecials: OpenAPISpecialsAPI.OpenAPISpecials = new OpenAPISpecialsAPI.OpenAPISpecials(this._client);

  /**
   * Endpoint with request & response properties that could cause clashes due to
   * imports.
   */
  childPropImportClash(options?: Core.RequestOptions): Core.APIPromise<NameChildPropImportClashResponse> {
    return this._client.post('/names/child_prop_import_clash', options);
  }

  /**
   * Endpoint with the name `get` in the config.
   */
  get(options?: Core.RequestOptions): Core.APIPromise<Shared.BasicSharedModelObject> {
    return this._client.get('/names/method_name_get', options);
  }

  /**
   * Endpoint with request & response properties that are likely to cause name
   * conflicts.
   */
  propertiesCommonConflicts(
    body: NamePropertiesCommonConflictsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamePropertiesCommonConflictsResponse> {
    return this._client.post('/names/properties_common_conflicts', { body, ...options });
  }

  /**
   * Endpoint with request & response properties with names that aren't legal go
   * identifiers.
   */
  propertiesIllegalGoIdentifiers(
    type: string,
    body: NamePropertiesIllegalGoIdentifiersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamePropertiesIllegalGoIdentifiersResponse> {
    return this._client.post(`/names/properties_illegal_go_identifiers/${type}`, { body, ...options });
  }

  /**
   * Endpoint with request & response properties with names that aren't legal
   * javascript identifiers.
   */
  propertiesIllegalJavascriptIdentifiers(
    body: NamePropertiesIllegalJavascriptIdentifiersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamePropertiesIllegalJavascriptIdentifiersResponse> {
    return this._client.post('/names/properties_illegal_javascript_identifiers', { body, ...options });
  }

  /**
   * Endpoint with a response model property that can cause clashes with a model
   * import.
   */
  responsePropertyClashesModelImport(
    options?: Core.RequestOptions,
  ): Core.APIPromise<NameResponsePropertyClashesModelImportResponse> {
    return this._client.get('/names/response_property_clashes_model_import', options);
  }

  /**
   * Endpoint with a response model property that would clash with pydantic.
   */
  responseShadowsPydantic(
    options?: Core.RequestOptions,
  ): Core.APIPromise<NameResponseShadowsPydanticResponse> {
    return this._client.get('/names/response_property_shadows_pydantic', options);
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
  /**
   * In certain languages the leading underscore in combination with this property
   * name may cause issues
   */
  _1_digit_leading_underscore: string;

  /**
   * In certain languages the leading underscore in this property name may cause
   * issues
   */
  _leading_underscore: string;

  /**
   * In certain languages the leading underscore in this property name may cause
   * issues alongside a case change
   */
  _leading_underscore_MixedCase: string;

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

export interface NamePropertiesIllegalGoIdentifiersResponse {
  defer: string;
}

export type NamePropertiesIllegalJavascriptIdentifiersResponse =
  | NamePropertiesIllegalJavascriptIdentifiersResponse._2llegalJavascriptIdentifiers
  | number;

export namespace NamePropertiesIllegalJavascriptIdentifiersResponse {
  export interface _2llegalJavascriptIdentifiers {
    irrelevant?: number;
  }
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
  /**
   * In certain languages the leading underscore in combination with this property
   * name may cause issues
   */
  _1_digit_leading_underscore: string;

  /**
   * In certain languages the leading underscore in this property name may cause
   * issues
   */
  _leading_underscore: string;

  /**
   * In certain languages the leading underscore in this property name may cause
   * issues alongside a case change
   */
  _leading_underscore_MixedCase: string;

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

export interface NamePropertiesIllegalGoIdentifiersParams {
  defer?: string;
}

export type NamePropertiesIllegalJavascriptIdentifiersParams =
  | NamePropertiesIllegalJavascriptIdentifiersParams._2llegalJavascriptIdentifiers
  | NamePropertiesIllegalJavascriptIdentifiersParams._3llegalJavascriptIdentifiers;

export namespace NamePropertiesIllegalJavascriptIdentifiersParams {
  export interface _2llegalJavascriptIdentifiers {
    irrelevant?: number;
  }

  export type _3llegalJavascriptIdentifiers = number;
}

Names.Unions = Unions;
Names.ReservedNames = ReservedNames;
Names.Params = Params;
Names.CanCauseClashes = CanCauseClashes;
Names.OpenAPISpecials = OpenAPISpecials;

export declare namespace Names {
  export {
    type Balance as Balance,
    type NameChildPropImportClashResponse as NameChildPropImportClashResponse,
    type NamePropertiesCommonConflictsResponse as NamePropertiesCommonConflictsResponse,
    type NamePropertiesIllegalGoIdentifiersResponse as NamePropertiesIllegalGoIdentifiersResponse,
    type NamePropertiesIllegalJavascriptIdentifiersResponse as NamePropertiesIllegalJavascriptIdentifiersResponse,
    type NameResponsePropertyClashesModelImportResponse as NameResponsePropertyClashesModelImportResponse,
    type NameResponseShadowsPydanticResponse as NameResponseShadowsPydanticResponse,
    type NamePropertiesCommonConflictsParams as NamePropertiesCommonConflictsParams,
    type NamePropertiesIllegalGoIdentifiersParams as NamePropertiesIllegalGoIdentifiersParams,
    type NamePropertiesIllegalJavascriptIdentifiersParams as NamePropertiesIllegalJavascriptIdentifiersParams,
  };

  export {
    Unions as Unions,
    type DiscriminatedUnion as DiscriminatedUnion,
    type VariantsSinglePropObjects as VariantsSinglePropObjects,
  };

  export {
    ReservedNames as ReservedNames,
    type ReservedNameCommonReservedParamsParams as ReservedNameCommonReservedParamsParams,
  };

  export {
    Params as Params,
    type ParamOptionsParamParams as ParamOptionsParamParams,
    type ParamTimeoutParamParams as ParamTimeoutParamParams,
  };

  export { CanCauseClashes as CanCauseClashes };

  export {
    OpenAPISpecials as OpenAPISpecials,
    type OpenAPISpecialUsedUsedAsPropertyNameResponse as OpenAPISpecialUsedUsedAsPropertyNameResponse,
  };
}
