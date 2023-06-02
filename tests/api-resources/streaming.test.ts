// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource streaming', () => {
  test('basic', async () => {
    const response = await sink.streaming.basic({ model: 'string', prompt: 'string', stream: true });
  });
});
