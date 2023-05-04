// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource fakePages', () => {
  test('list: only required params', async () => {
    const response = await sink.paginationTests.fakePages.list({ my_fake_page_param: 'string' });
  });

  test('list: required and optional params', async () => {
    const response = await sink.paginationTests.fakePages.list({ my_fake_page_param: 'string' });
  });
});
