// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource cards', () => {
  test('create: only required params', async () => {
    const response = await sink.cards.create({ type: 'MERCHANT_LOCKED' });
  });

  test('create: required and optional params', async () => {
    const response = await sink.cards.create({
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

  test('retrieve', async () => {
    const response = await sink.cards.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.cards.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('update', async () => {
    const response = await sink.cards.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
  });

  test('list', async () => {
    const response = await sink.cards.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.cards.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(Sink.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.cards.list(
        {
          account_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          begin: '2019-12-27T18:11:19.117Z',
          end: '2019-12-27T18:11:19.117Z',
          page: 0,
          page_size: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('createAliased: only required params', async () => {
    const response = await sink.cards.createAliased({ type: 'MERCHANT_LOCKED' });
  });

  test('createAliased: required and optional params', async () => {
    const response = await sink.cards.createAliased({
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

  test('getAuthURL', () => {
    const url = sink.getAuthURL({
      clientId: '<client_id>',
      redirectUri: 'http://localhost:8000/auth/success',
    });
    expect(url).toEqual(
      'http://localhost:8000/auth?client_id=%3Cclient_id%3E&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fsuccess',
    );
  });

  test('deprecatedMethod', async () => {
    const response = await sink.cards.deprecatedMethod();
  });

  test('deprecatedMethod: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.cards.deprecatedMethod({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('listNonGet', async () => {
    const response = await sink.cards.listNonGet();
  });

  test('listNonGet: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.cards.listNonGet({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('listNonGet: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.cards.listNonGet(
        {
          account_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          begin: '2019-12-27T18:11:19.117Z',
          end: '2019-12-27T18:11:19.117Z',
          page: 0,
          page_size: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('listNotPaginated', async () => {
    const response = await sink.cards.listNotPaginated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
  });

  test('listNotPaginated: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.cards.listNotPaginated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('provisionFoo', async () => {
    const response = await sink.cards.provisionFoo('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
  });

  test('reissue', async () => {
    const response = await sink.cards.reissue('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
  });
});
