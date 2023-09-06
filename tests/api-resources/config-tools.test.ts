// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource configTools', () => {
  test('onlyInNode: only required params', async () => {
    const responsePromise = sink.configTools.onlyInNode({ type: 'MERCHANT_LOCKED' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('onlyInNode: required and optional params', async () => {
    const response = await sink.configTools.onlyInNode({
      type: 'MERCHANT_LOCKED',
      account_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      card_program_token: '00000000-0000-0000-1000-000000000000',
      exp_month: '06',
      exp_year: '2027',
      funding_token: '514aa2b7-898f-4ce7-bc05-c2fe993713e8',
      memo: 'New Card',
      not: 'string',
      pin: 'string',
      product_id: '1',
      shipping_method: 'STANDARD',
      shippingAddress: {
        first_name: 'Michael',
        last_name: 'Bluth',
        line2_text: 'The Bluth Company',
        address1: '5 Broad Street',
        address2: 'Unit 25A',
        city: 'NEW YORK',
        state: 'NY',
        postal_code: '10001-1809',
        country: 'USA',
        email: 'johnny@appleseed.com',
        phone_number: '+12124007676',
      },
      spend_limit: 0,
      spend_limit_duration: 'ANNUALLY',
      state: 'OPEN',
    });
  });
});
