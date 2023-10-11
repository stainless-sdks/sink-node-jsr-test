// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import * as EmploymentDataAPI from 'sink-npm/resources/names/can-cause-clashes/employment-data';

export class CanCauseClashes extends APIResource {
  employmentData: EmploymentDataAPI.EmploymentData = new EmploymentDataAPI.EmploymentData(this.client);
}

export namespace CanCauseClashes {
  export import EmploymentData = EmploymentDataAPI.EmploymentData;
}
