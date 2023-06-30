// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource names', () => {
  test('propertiesCommonConflicts: only required params', async () => {
    const response = await sink.names.propertiesCommonConflicts({ date: '2019-12-27' });
  });

  test('propertiesCommonConflicts: required and optional params', async () => {
    const response = await sink.names.propertiesCommonConflicts({ date: '2019-12-27' });
  });

  test('responseShadowsPydantic', async () => {
    const response = await sink.names.responseShadowsPydantic();
  });

  test('responseShadowsPydantic: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.names.responseShadowsPydantic({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });
});
