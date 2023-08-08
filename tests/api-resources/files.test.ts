// File generated from our OpenAPI spec by Stainless.

import Sink, { toFile } from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource files', () => {
  test('createMultipart: only required params', async () => {
    const responsePromise = sink.files.createMultipart({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createMultipart: required and optional params', async () => {
    const response = await sink.files.createMultipart({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'string',
    });
  });

  test('everythingMultipart: only required params', async () => {
    const responsePromise = sink.files.everythingMultipart({
      b: true,
      e: 'a',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      i: 0,
      n: 0,
      purpose: 'string',
      s: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('everythingMultipart: required and optional params', async () => {
    const response = await sink.files.everythingMultipart({
      b: true,
      e: 'a',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      i: 0,
      n: 0,
      purpose: 'string',
      s: 'string',
    });
  });
});
