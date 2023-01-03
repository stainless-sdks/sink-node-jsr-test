// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource types', () => {
  test('enums', async () => {
    const response = await sink.types.enums({ input_currency: 'USD', problematic_enum: '123_FOO' });
  });
});
