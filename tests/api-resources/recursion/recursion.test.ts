// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource recursion', () => {
  test('createBranch', async () => {
    const response = await sink.recursion.createBranch({ child: { a: {} } });
  });

  test('createEnvelope', async () => {
    const response = await sink.recursion.createEnvelope({ data: { name: 'Robert' } });
  });

  test('createMutualA', async () => {
    const response = await sink.recursion.createMutualA({ b: {} });
  });

  test('createMutualB', async () => {
    const response = await sink.recursion.createMutualB({ a: {} });
  });

  test('createSelf: only required params', async () => {
    const response = await sink.recursion.createSelf({ child: { name: 'Robert' }, name: 'string' });
  });

  test('createSelf: required and optional params', async () => {
    const response = await sink.recursion.createSelf({ child: { name: 'Robert' }, name: 'string' });
  });
});
