// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({
  userToken: 'My User Token',
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cards', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cards.create({ type: 'MERCHANT_LOCKED' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.cards.create({
      type: 'MERCHANT_LOCKED',
      account_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      card_program_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      exp_month: '06',
      exp_year: '2027',
      funding_token: '514aa2b7-898f-4ce7-bc05-c2fe993713e8',
      memo: 'New Card',
      not: 'not',
      pin: 'pin',
      product_id: '1',
      shipping_method: 'STANDARD',
      shippingAddress: {
        address1: '5 Broad Street',
        city: 'NEW YORK',
        country: 'USA',
        first_name: 'Michael',
        last_name: 'Bluth',
        postal_code: '10001-1809',
        state: 'NY',
        address2: 'Unit 25A',
        email: 'johnny@appleseed.com',
        line2_text: 'The Bluth Company',
        phone_number: '+12124007676',
      },
      spend_limit: 0,
      spend_limit_duration: 'ANNUALLY',
      state: 'OPEN',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.cards.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cards.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.cards.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: only required params', async () => {
    const responsePromise = client.cards.list({ begin: '2022-02-01T05:00:00Z', end: '2022-02-01T05:00:00Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cards.list({
      begin: '2022-02-01T05:00:00Z',
      end: '2022-02-01T05:00:00Z',
      account_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      page: 0,
      page_size: 1,
    });
  });

  test('createAliased: only required params', async () => {
    const responsePromise = client.cards.createAliased({ type: 'MERCHANT_LOCKED' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createAliased: required and optional params', async () => {
    const response = await client.cards.createAliased({
      type: 'MERCHANT_LOCKED',
      account_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      card_program_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      exp_month: '06',
      exp_year: '2027',
      funding_token: '514aa2b7-898f-4ce7-bc05-c2fe993713e8',
      memo: 'New Card',
      not: 'not',
      pin: 'pin',
      product_id: '1',
      shipping_method: 'STANDARD',
      shippingAddress: {
        address1: '5 Broad Street',
        city: 'NEW YORK',
        country: 'USA',
        first_name: 'Michael',
        last_name: 'Bluth',
        postal_code: '10001-1809',
        state: 'NY',
        address2: 'Unit 25A',
        email: 'johnny@appleseed.com',
        line2_text: 'The Bluth Company',
        phone_number: '+12124007676',
      },
      spend_limit: 0,
      spend_limit_duration: 'ANNUALLY',
      state: 'OPEN',
    });
  });

  test('createAliasedDeprecated: only required params', async () => {
    const responsePromise = client.cards.createAliasedDeprecated({ type: 'MERCHANT_LOCKED' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createAliasedDeprecated: required and optional params', async () => {
    const response = await client.cards.createAliasedDeprecated({
      type: 'MERCHANT_LOCKED',
      account_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      card_program_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      exp_month: '06',
      exp_year: '2027',
      funding_token: '514aa2b7-898f-4ce7-bc05-c2fe993713e8',
      memo: 'New Card',
      not: 'not',
      pin: 'pin',
      product_id: '1',
      shipping_method: 'STANDARD',
      shippingAddress: {
        address1: '5 Broad Street',
        city: 'NEW YORK',
        country: 'USA',
        first_name: 'Michael',
        last_name: 'Bluth',
        postal_code: '10001-1809',
        state: 'NY',
        address2: 'Unit 25A',
        email: 'johnny@appleseed.com',
        line2_text: 'The Bluth Company',
        phone_number: '+12124007676',
      },
      spend_limit: 0,
      spend_limit_duration: 'ANNUALLY',
      state: 'OPEN',
    });
  });

  test('deprecatedAllButGoDiffMessage', async () => {
    const responsePromise = client.cards.deprecatedAllButGoDiffMessage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deprecatedAllButGoDiffMessage: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cards.deprecatedAllButGoDiffMessage({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('deprecatedAllDiffMessage', async () => {
    const responsePromise = client.cards.deprecatedAllDiffMessage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deprecatedAllDiffMessage: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.cards.deprecatedAllDiffMessage({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('deprecatedMethod', async () => {
    const responsePromise = client.cards.deprecatedMethod();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deprecatedMethod: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.cards.deprecatedMethod({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('deprecatedOnlyGo', async () => {
    const responsePromise = client.cards.deprecatedOnlyGo();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deprecatedOnlyGo: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.cards.deprecatedOnlyGo({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('listNotPaginated', async () => {
    const responsePromise = client.cards.listNotPaginated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listNotPaginated: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cards.listNotPaginated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('provisionFoo', async () => {
    const responsePromise = client.cards.provisionFoo('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('reissue', async () => {
    const responsePromise = client.cards.reissue('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
