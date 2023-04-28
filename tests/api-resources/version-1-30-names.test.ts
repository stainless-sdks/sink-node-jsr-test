// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource version_1_30_names', () => {
  test('create', async () => {
    const response = await sink.version1_30Names.create('string', {
      version_1_16: 'string',
      version_1_17: 'string',
      version_1_14: 'string',
    });
  });
});
