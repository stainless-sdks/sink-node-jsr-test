// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class Allofs extends APIResource {}

export interface AllofBaseParent {
  from_parent?: boolean;
}

export interface AllofMultipleInlineEntries extends AllofBaseParent {
  in_first_entry?: string;

  in_second_entry?: number;
}

export declare namespace Allofs {
  export {
    type AllofBaseParent as AllofBaseParent,
    type AllofMultipleInlineEntries as AllofMultipleInlineEntries,
  };
}
