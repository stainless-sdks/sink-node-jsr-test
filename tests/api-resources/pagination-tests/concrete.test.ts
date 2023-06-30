// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource concrete', () => {
  test('list: only required params', async () => {
    const response = await sink.paginationTests.concrete.list({ my_cursor: 'string' });
  });

  test('list: required and optional params', async () => {
    const response = await sink.paginationTests.concrete.list({ my_cursor: 'string', limit: 0 });
  });
});
