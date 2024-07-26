// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sink, { toFile } from 'sink-npm';
import { Response } from 'node-fetch';

const client = new Sink({
  userToken: 'My User Token',
  username: 'Robert',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
  requiredArgNoEnv: '<example>',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  test('createMultipart: only required params', async () => {
    const responsePromise = client.files.createMultipart({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'purpose',
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
    const response = await client.files.createMultipart({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'purpose',
    });
  });

  test('everythingMultipart: only required params', async () => {
    const responsePromise = client.files.everythingMultipart({
      b: true,
      e: 'a',
      f: 0,
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      i: 0,
      purpose: 'purpose',
      s: 's',
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
    const response = await client.files.everythingMultipart({
      b: true,
      e: 'a',
      f: 0,
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      i: 0,
      purpose: 'purpose',
      s: 's',
    });
  });

  test('noFileMultipart: only required params', async () => {
    const responsePromise = client.files.noFileMultipart({ purpose: 'purpose' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('noFileMultipart: required and optional params', async () => {
    const response = await client.files.noFileMultipart({ purpose: 'purpose' });
  });

  test('withOptionalParam: only required params', async () => {
    const responsePromise = client.files.withOptionalParam({
      image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      prompt: 'A cute baby sea otter wearing a beret',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('withOptionalParam: required and optional params', async () => {
    const response = await client.files.withOptionalParam({
      image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      prompt: 'A cute baby sea otter wearing a beret',
      mask: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
