// File generated from our OpenAPI spec by Stainless.

import Sink from '../index';

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  test('maxRetries option is correctly set', () => {
    const client = new Sink({ maxRetries: 1, username: 'Robert', userToken: 'my user token' });
    expect(client.maxRetries).toEqual(1);

    // default
    const client2 = new Sink({ username: 'Robert', userToken: 'my user token' });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with minimal arguments', () => {
    // set user token via env var
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'env var user token';
    const client = new Sink({ username: 'Robert' });
    expect(client.userToken).toBe('env var user token');
    expect(client.username).toBe('Robert');
  });

  test('with userToken argument', () => {
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'env var user token';

    const client = new Sink({ userToken: 'another user token', username: 'Robert' });
    expect(client.userToken).toBe('another user token');
  });

  test('with options argument', () => {
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'env var user token';

    // userToken and custom options
    const client = new Sink({ userToken: 'my user token', username: 'Robert' });
    expect(client.userToken).toBe('my user token');
  });

  test('with disabled authentication', () => {
    process.env['SINK_CUSTOM_API_KEY_ENV'] = 'env var user token';
    const client = new Sink({ userToken: null, username: 'Robert' });
    expect(client.userToken).toBeNull();
  });
});

describe('idempotency', () => {
  test('key can be set per-request', async () => {
    const client = new Sink({
      userToken: 'my user token',
      username: 'Robert',
      baseURL: 'http://127.0.0.1:4010',
    });
    await client.cards.create(
      {
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
          address1: '5 Broad Street',
          city: 'NEW YORK',
          state: 'NY',
          postal_code: '10001-1809',
          country: 'USA',
        },
        spend_limit: 0,
        spend_limit_duration: 'ANNUALLY',
        state: 'OPEN',
        type: 'MERCHANT_LOCKED',
      },
      { idempotencyKey: 'my-idempotency-key' },
    );
  });
});
