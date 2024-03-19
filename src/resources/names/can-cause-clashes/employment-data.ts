// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'sink-npm/resource';
import * as EmploymentDataAPI from 'sink-npm/resources/names/can-cause-clashes/employment-data';

export class EmploymentData extends APIResource {}

export interface EmploymentData {
  user_name?: string;
}

export namespace EmploymentData {
  export import EmploymentData = EmploymentDataAPI.EmploymentData;
}
