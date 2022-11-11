// File generated from our OpenAPI spec by Stainless.

import * as Core from '../core';

export type Currency = 'USD' | 'GBP' | 'PAB' | 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM'

export interface ObjectWithChildRef  {

bar?: SimpleObject

foo?: string
}

export namespace ObjectWithChildRef {export interface Bar  {

bar?: number
}}

export interface SimpleObject  {

bar?: number
}