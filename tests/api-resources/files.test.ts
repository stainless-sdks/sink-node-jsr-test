// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path';
import Sink from '~/index';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource files', () => {
  // skipped: prism mock server is broken for file uploads
  test.skip('createMultipart: only required params', async () => {
    const response = await sink.files.createMultipart({
      file: await fileFromPath('README.md'),
      purpose: 'string',
    });
  });

  // skipped: prism mock server is broken for file uploads
  test.skip('createMultipart: required and optional params', async () => {
    const response = await sink.files.createMultipart({
      file: await fileFromPath('README.md'),
      purpose: 'string',
    });
  });
});
