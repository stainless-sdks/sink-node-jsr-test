// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'My User Token',
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource streaming', () => {
  test('basic: only required params', async () => {
    const responsePromise = sink.streaming.basic({ model: 'string', prompt: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('basic: required and optional params', async () => {
    const response = await sink.streaming.basic({ model: 'string', prompt: 'string', stream: false });
  });

  test('nestedParams: only required params', async () => {
    const responsePromise = sink.streaming.nestedParams({ model: 'string', prompt: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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

  test('noDiscriminator: only required params', async () => {
    const responsePromise = sink.streaming.noDiscriminator({ model: 'string', prompt: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('noDiscriminator: required and optional params', async () => {
    const response = await sink.streaming.noDiscriminator({ model: 'string', prompt: 'string' });
  });

  test('queryParamDiscriminator: only required params', async () => {
    const responsePromise = sink.streaming.queryParamDiscriminator({ prompt: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryParamDiscriminator: required and optional params', async () => {
    const response = await sink.streaming.queryParamDiscriminator({ prompt: 'string', should_stream: false });
  });
});
