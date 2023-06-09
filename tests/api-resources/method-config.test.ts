// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource methodConfig', () => {
  // Because of this error
  test.skip('skippedTestsAll', async () => {
    const response = await sink.methodConfig.skippedTestsAll('string');
  });

  // Because of this error
  test.skip('skippedTestsAll: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.methodConfig.skippedTestsAll('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('skippedTestsGo', async () => {
    const response = await sink.methodConfig.skippedTestsGo('string');
  });

  test('skippedTestsGo: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.methodConfig.skippedTestsGo('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('skippedTestsJava', async () => {
    const response = await sink.methodConfig.skippedTestsJava('string');
  });

  test('skippedTestsJava: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.methodConfig.skippedTestsJava('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('skippedTestsKotlin', async () => {
    const response = await sink.methodConfig.skippedTestsKotlin('string');
  });

  test('skippedTestsKotlin: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.methodConfig.skippedTestsKotlin('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  // Because of this error
  test.skip('skippedTestsNode', async () => {
    const response = await sink.methodConfig.skippedTestsNode('string');
  });

  // Because of this error
  test.skip('skippedTestsNode: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.methodConfig.skippedTestsNode('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  // Because of this error
  test.skip('skippedTestsNodeAndPython', async () => {
    const response = await sink.methodConfig.skippedTestsNodeAndPython('string');
  });

  // Because of this error
  test.skip('skippedTestsNodeAndPython: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.methodConfig.skippedTestsNodeAndPython('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('skippedTestsPython', async () => {
    const response = await sink.methodConfig.skippedTestsPython('string');
  });

  test('skippedTestsPython: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.methodConfig.skippedTestsPython('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });
});
