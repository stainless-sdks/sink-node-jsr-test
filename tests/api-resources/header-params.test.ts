// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource headerParams', () => {
  test('clientArgument', async () => {
    const response = await sink.headerParams.clientArgument({
      foo: 'string',
      'X-Custom-Endpoint-Header': 'string',
    });
  });
});
