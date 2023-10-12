// File generated from our OpenAPI spec by Stainless.

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

describe('resource bodyParams', () => {
  test('nestedRequestModels', async () => {
    const responsePromise = sink.bodyParams.nestedRequestModels({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('paramInModelNameRef: only required params', async () => {
    const responsePromise = sink.bodyParams.paramInModelNameRef({
      model_ref: { foo: 'string' },
      name: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('paramInModelNameRef: required and optional params', async () => {
    const response = await sink.bodyParams.paramInModelNameRef({
      model_ref: { foo: 'string' },
      name: 'string',
    });
  });

  test('propertyModelRef: only required params', async () => {
    const responsePromise = sink.bodyParams.propertyModelRef({ model_ref: {}, name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('propertyModelRef: required and optional params', async () => {
    const response = await sink.bodyParams.propertyModelRef({ model_ref: { bar: true }, name: 'string' });
  });

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

  test('propertyWithHeavilyNestedComplexUnion', async () => {
    const responsePromise = sink.bodyParams.propertyWithHeavilyNestedComplexUnion({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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

  test('stringMapModelRef: only required params', async () => {
    const responsePromise = sink.bodyParams.stringMapModelRef({
      model_ref: { foo: 'string' },
      name: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('stringMapModelRef: required and optional params', async () => {
    const response = await sink.bodyParams.stringMapModelRef({
      model_ref: { foo: 'string' },
      name: 'string',
    });
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
      { foo: 'string', bar: 'string' },
      { foo: 'string', bar: 'string' },
      { foo: 'string', bar: 'string' },
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
      { foo: 'string', bar: 'string' },
      { foo: 'string', bar: 'string' },
      { foo: 'string', bar: 'string' },
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

  test('topLevelSharedType', async () => {
    const responsePromise = sink.bodyParams.topLevelSharedType();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelSharedType: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.bodyParams.topLevelSharedType({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('topLevelSharedType: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.bodyParams.topLevelSharedType(
        { bar: { bar: 0 }, foo: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
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

  test('withDefaultBodyParamOptional', async () => {
    const responsePromise = sink.bodyParams.withDefaultBodyParamOptional({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('withDefaultBodyParamRequired: only required params', async () => {
    const responsePromise = sink.bodyParams.withDefaultBodyParamRequired({
      my_version_body_param: 'string',
      normal_param: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('withDefaultBodyParamRequired: required and optional params', async () => {
    const response = await sink.bodyParams.withDefaultBodyParamRequired({
      my_version_body_param: 'string',
      normal_param: true,
    });
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
