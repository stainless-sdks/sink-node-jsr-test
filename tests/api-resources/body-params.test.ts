// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';
import { Response } from 'node-fetch';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource bodyParams', () => {
  test('propertyWithComplexUnion: only required params', async () => {
    const responsePromise = sink.bodyParams.propertyWithComplexUnion({ name: 'string', unions: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('propertyWithComplexUnion: required and optional params', async () => {
    const response = await sink.bodyParams.propertyWithComplexUnion({
      name: 'string',
      unions: { in_both: true },
    });
  });

  test('readOnlyProperties', async () => {
    const responsePromise = sink.bodyParams.readOnlyProperties({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelAllOf: only required params', async () => {
    const responsePromise = sink.bodyParams.topLevelAllOf({ is_foo: true, kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelAllOf: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelAllOf({ is_foo: true, kind: 'VIRTUAL' });
  });

  test('topLevelAllOfNestedObject: only required params', async () => {
    const responsePromise = sink.bodyParams.topLevelAllOfNestedObject({ kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelAllOfNestedObject: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelAllOfNestedObject({
      kind: 'VIRTUAL',
      nested_obj: { is_foo: true },
    });
  });

  test('topLevelAnyOfWithRef: only required params', async () => {
    const responsePromise = sink.bodyParams.topLevelAnyOfWithRef({ kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelAnyOfWithRef: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelAnyOfWithRef({ kind: 'VIRTUAL' });
  });

  test('topLevelArray: only required params', async () => {
    const responsePromise = sink.bodyParams.topLevelArray([
      { foo: 'string' },
      { foo: 'string' },
      { foo: 'string' },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelArray: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelArray([
      { foo: 'string' },
      { foo: 'string' },
      { foo: 'string' },
    ]);
  });

  test('topLevelArrayWithChildren: only required params', async () => {
    const responsePromise = sink.bodyParams.topLevelArrayWithChildren([
      { id: 'string' },
      { id: 'string' },
      { id: 'string' },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelArrayWithChildren: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelArrayWithChildren([
      { id: 'string' },
      { id: 'string' },
      { id: 'string' },
    ]);
  });

  test('topLevelOneOfOneEntry: only required params', async () => {
    const responsePromise = sink.bodyParams.topLevelOneOfOneEntry({ kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelOneOfOneEntry: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelOneOfOneEntry({ kind: 'VIRTUAL' });
  });

  test('unionOverlappingProp: only required params', async () => {
    const responsePromise = sink.bodyParams.unionOverlappingProp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unionOverlappingProp: required and optional params', async () => {
    const response = await sink.bodyParams.unionOverlappingProp({ foo: 'string' });
  });

  test('unionOverlappingProp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.bodyParams.unionOverlappingProp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('unionOverlappingProp: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.bodyParams.unionOverlappingProp({ foo: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('withModelProperty', async () => {
    const responsePromise = sink.bodyParams.withModelProperty({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
