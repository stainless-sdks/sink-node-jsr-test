// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource levelThree', () => {
  test('methodLevel3', async () => {
    const response = await sink.deeplyNested.levelOne.levelTwo.levelThree.methodLevel3(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
  });

  test('methodLevel3: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.deeplyNested.levelOne.levelTwo.levelThree.methodLevel3('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
