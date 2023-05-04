// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource readOnlyParams', () => {
  test('simple', async () => {
    const response = await sink.types.readOnlyParams.simple({ should_show_up: 'string' });
  });
});
