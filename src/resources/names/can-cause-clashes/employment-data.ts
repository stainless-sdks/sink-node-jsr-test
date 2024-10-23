// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as EmploymentDataAPI from './employment-data';

export class EmploymentData extends APIResource {

}

export interface EmploymentData {
  user_name?: string;
}

export namespace EmploymentData {
  export import EmploymentData = EmploymentDataAPI.EmploymentData;
}
