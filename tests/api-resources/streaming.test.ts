// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource streaming', () => {
  test('basic: only required params', async () => {
    const response = await sink.streaming.basic({ model: 'string', prompt: 'string' });
  });

  test('basic: required and optional params', async () => {
    const response = await sink.streaming.basic({ model: 'string', prompt: 'string', stream: false });
  });

  test('nestedParams: only required params', async () => {
    const response = await sink.streaming.nestedParams({ model: 'string', prompt: 'string' });
  });

  test('nestedParams: required and optional params', async () => {
    const response = await sink.streaming.nestedParams({
      model: 'string',
      prompt: 'string',
      parent_object: {
        child_prop: { from_object: 'string' },
        array_prop: [{ from_array_items: true }, { from_array_items: true }, { from_array_items: true }],
      },
      stream: false,
    });
  });

  test('queryParamDiscriminator: only required params', async () => {
    const response = await sink.streaming.queryParamDiscriminator({ prompt: 'string' });
  });

  test('queryParamDiscriminator: required and optional params', async () => {
    const response = await sink.streaming.queryParamDiscriminator({ prompt: 'string', should_stream: false });
  });
});
