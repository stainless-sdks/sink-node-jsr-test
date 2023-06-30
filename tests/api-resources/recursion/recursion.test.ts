// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource recursion', () => {
  test('createBranch', async () => {
    const response = await sink.recursion.createBranch({});
  });

  test('createEnvelope', async () => {
    const response = await sink.recursion.createEnvelope({});
  });

  test('createMutualA', async () => {
    const response = await sink.recursion.createMutualA({});
  });

  test('createMutualB', async () => {
    const response = await sink.recursion.createMutualB({});
  });

  test('createSelf: only required params', async () => {
    const response = await sink.recursion.createSelf({ name: 'string' });
  });

  test('createSelf: required and optional params', async () => {
    const response = await sink.recursion.createSelf({ name: 'string', child: { name: 'Robert' } });
  });
});
