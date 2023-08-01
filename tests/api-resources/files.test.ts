// File generated from our OpenAPI spec by Stainless.

import Sink, { toFile } from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource files', () => {
  test('createMultipart: only required params', async () => {
    const response = await sink.files.createMultipart({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'string',
    });
  });

  test('createMultipart: required and optional params', async () => {
    const response = await sink.files.createMultipart({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'string',
    });
  });
});
