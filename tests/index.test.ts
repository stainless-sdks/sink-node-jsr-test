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
    // fails if no api key provided
    expect(() => {
      new Sink();
    }).toThrow();

    // set api key via env var
    process.env['SINK_API_KEY'] = 'env var api key';
    const client = new Sink();
    expect(client.apiKey).toBe('env var api key');
  });

  test('with apiKey argument', () => {
    process.env['SINK_API_KEY'] = 'env var api key';

    const client = new Sink({ apiKey: 'another api key' });
    expect(client.apiKey).toBe('another api key');
  });

  test('with options argument', () => {
    process.env['SINK_API_KEY'] = 'env var api key';

    // apiKey
    const client = new Sink({ apiKey: 'my api key' });
    expect(client.apiKey).toBe('my api key');
  });

  test('with disabled authentication', () => {
    process.env['SINK_API_KEY'] = 'env var api key';

    const client = new Sink({ apiKey: null });
    expect(client.apiKey).toBeNull();
  });
});
