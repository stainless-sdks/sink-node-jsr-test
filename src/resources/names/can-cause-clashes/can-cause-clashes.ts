// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EmploymentDataAPI from './employment-data';
import { EmploymentData } from './employment-data';
import * as ResponseAPI from './response';
import { Response } from './response';

export class CanCauseClashes extends APIResource {
  employmentData: EmploymentDataAPI.EmploymentData = new EmploymentDataAPI.EmploymentData(this._client);
  response: ResponseAPI.Response = new ResponseAPI.Response(this._client);
}

CanCauseClashes.Response = Response;

export declare namespace CanCauseClashes {
  export { type EmploymentData as EmploymentData };

  export { Response as Response };
}
