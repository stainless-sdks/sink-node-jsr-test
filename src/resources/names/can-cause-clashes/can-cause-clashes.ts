// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { EmploymentData } from './employment-data';
import { Response } from './response';
import * as EmploymentDataAPI from './employment-data';
import * as ResponseAPI from './response';

export class CanCauseClashes extends APIResource {
  employmentData: EmploymentDataAPI.EmploymentData = new EmploymentDataAPI.EmploymentData(this._client);
  response: ResponseAPI.Response = new ResponseAPI.Response(this._client);
}

export namespace CanCauseClashes {
  export import EmploymentData = EmploymentDataAPI.EmploymentData;
  export import Response = ResponseAPI.Response;
}
