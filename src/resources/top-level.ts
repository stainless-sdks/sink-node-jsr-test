// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface APIStatus {
  message: CustomAPIStatusMessage;
}

export type APIStatusAlias = APIStatus;

export type CustomAPIStatusMessage = string;

export declare namespace TopLevel {
  export {
    type APIStatus as APIStatus,
    type APIStatusAlias as APIStatusAlias,
    type CustomAPIStatusMessage as CustomAPIStatusMessage,
  };
}
