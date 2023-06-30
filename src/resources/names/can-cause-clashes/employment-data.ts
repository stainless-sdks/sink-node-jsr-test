// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as API from './';

export class EmploymentData extends APIResource {}

export interface EmploymentData {
  user_name?: string;
}

export namespace EmploymentData {
  export import EmploymentData = API.EmploymentData;
}
