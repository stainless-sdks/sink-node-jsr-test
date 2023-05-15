// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource bodyParams', () => {
  test('readOnlyProperties', async () => {
    const response = await sink.bodyParams.readOnlyProperties({ in_both: true });
  });

  test('topLevelAllOfNestedObject', async () => {
    const response = await sink.bodyParams.topLevelAllOfNestedObject({ kind: 'VIRTUAL' });
  });

  test('topLevelAnyOfWithRef', async () => {
    const response = await sink.bodyParams.topLevelAnyOfWithRef({ kind: 'VIRTUAL' });
  });

  test('unionOverlappingProp', async () => {
    const response = await sink.bodyParams.unionOverlappingProp();
  });

  test('unionOverlappingProp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.bodyParams.unionOverlappingProp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('unionOverlappingProp: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.bodyParams.unionOverlappingProp({ foo: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('withModelProperty', async () => {
    const response = await sink.bodyParams.withModelProperty({ foo: 'string', my_model: {} });
  });
});
