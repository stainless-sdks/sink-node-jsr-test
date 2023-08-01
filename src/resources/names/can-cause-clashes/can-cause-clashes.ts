// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sink-npm/resource';
import { EmploymentData } from './employment-data';
import * as API from './index';

export class CanCauseClashes extends APIResource {
  employmentData: EmploymentData = new EmploymentData(this.client);
}

export namespace CanCauseClashes {
  export import EmploymentData = API.EmploymentData;
}
