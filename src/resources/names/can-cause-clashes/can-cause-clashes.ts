// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EmploymentDataAPI from './employment-data';

export class CanCauseClashes extends APIResource {
  employmentData: EmploymentDataAPI.EmploymentData = new EmploymentDataAPI.EmploymentData(this._client);
}

export namespace CanCauseClashes {
  export import EmploymentData = EmploymentDataAPI.EmploymentData;
}
