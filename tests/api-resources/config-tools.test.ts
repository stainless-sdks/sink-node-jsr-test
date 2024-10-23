// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink, { toFile } from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({ userToken: 'My User Token', username: 'Robert', someNumberArgRequiredNoDefault: 0, someNumberArgRequiredNoDefaultNoEnv: 0, requiredArgNoEnv: '<example>', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource configTools', () => {
  test('modelRefFromNestedResponseBody', async () => {
    const responsePromise = client.configTools.modelRefFromNestedResponseBody();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('modelRefFromNestedResponseBody: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.configTools.modelRefFromNestedResponseBody({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('modelRefFromSchemas', async () => {
    const responsePromise = client.configTools.modelRefFromSchemas();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('modelRefFromSchemas: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.configTools.modelRefFromSchemas({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Sink.NotFoundError);
  });

  test('onlyInNode: only required params', async () => {
    const responsePromise = client.configTools.onlyInNode({ type: 'MERCHANT_LOCKED' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('onlyInNode: required and optional params', async () => {
    const response = await client.configTools.onlyInNode({ type: 'MERCHANT_LOCKED', account_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', card_program_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', exp_month: '06', exp_year: '2027', funding_token: '514aa2b7-898f-4ce7-bc05-c2fe993713e8', memo: 'New Card', not: 'not', pin: 'pin', product_id: '1', shipping_method: 'STANDARD', shippingAddress: { address1: '5 Broad Street', city: 'NEW YORK', country: 'USA', first_name: 'Michael', last_name: 'Bluth', postal_code: '10001-1809', state: 'NY', address2: 'Unit 25A', email: 'johnny@appleseed.com', line2_text: 'The Bluth Company', phone_number: '+12124007676' }, spend_limit: 0, spend_limit_duration: 'ANNUALLY', state: 'OPEN' });
  });
});
