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

  test('with minimal arguments', () => {
    // set user token via env var
    process.env['SINK_USER_TOKEN'] = 'env var user token';
    const client = new Sink({ username: 'Robert' });
    expect(client.userToken).toBe('env var user token');
    expect(client.username).toBe('Robert');
  });

  test('with userToken argument', () => {
    process.env['SINK_USER_TOKEN'] = 'env var user token';

    const client = new Sink({ userToken: 'another user token', username: 'Robert' });
    expect(client.userToken).toBe('another user token');
  });

  test('with options argument', () => {
    process.env['SINK_USER_TOKEN'] = 'env var user token';

    // userToken and custom options
    const client = new Sink({ userToken: 'my user token', username: 'Robert' });
    expect(client.userToken).toBe('my user token');
  });

  test('with disabled authentication', () => {
    process.env['SINK_USER_TOKEN'] = 'env var user token';
    const client = new Sink({ userToken: null, username: 'Robert' });
    expect(client.userToken).toBeNull();
  });
});
