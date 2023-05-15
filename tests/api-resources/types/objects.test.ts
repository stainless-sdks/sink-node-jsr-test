// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource objects', () => {
  test('mixedKnownAndUnknown', async () => {
    const response = await sink.types.objects.mixedKnownAndUnknown();
  });

  test('mixedKnownAndUnknown: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.types.objects.mixedKnownAndUnknown({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('multipleArrayPropertiesSameRef', async () => {
    const response = await sink.types.objects.multipleArrayPropertiesSameRef();
  });

  test('multipleArrayPropertiesSameRef: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.types.objects.multipleArrayPropertiesSameRef({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('multiplePropertiesSameModel', async () => {
    const response = await sink.types.objects.multiplePropertiesSameModel();
  });

  test('multiplePropertiesSameModel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.types.objects.multiplePropertiesSameModel({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('multiplePropertiesSameRef', async () => {
    const response = await sink.types.objects.multiplePropertiesSameRef();
  });

  test('multiplePropertiesSameRef: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.types.objects.multiplePropertiesSameRef({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
