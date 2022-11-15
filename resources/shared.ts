// File generated from our OpenAPI spec by Stainless.

export type Currency =
  | 'USD'
  | 'GBP'
  | 'PAB'
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM';

export interface ObjectWithChildRef {
  bar?: SimpleObject;

  foo?: string;
}

export interface SimpleObject {
  bar?: number;
}
