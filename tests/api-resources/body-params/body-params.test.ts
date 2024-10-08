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

describe('resource bodyParams', () => {
  test('binaryStringType: only required params', async () => {
    const responsePromise = client.bodyParams.binaryStringType('binary_string_body');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('binaryStringType: required and optional params', async () => {
    const response = await client.bodyParams.binaryStringType('binary_string_body');
  });

  test('binaryType: only required params', async () => {
    const responsePromise = client.bodyParams.binaryType(
      await toFile(Buffer.from('# my file contents'), 'README.md'),
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('binaryType: required and optional params', async () => {
    const response = await client.bodyParams.binaryType(
      await toFile(Buffer.from('# my file contents'), 'README.md'),
    );
  });

  test('duplicateSubproperty', async () => {
    const responsePromise = client.bodyParams.duplicateSubproperty({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enumProperties', async () => {
    const responsePromise = client.bodyParams.enumProperties({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('nestedRequestModels', async () => {
    const responsePromise = client.bodyParams.nestedRequestModels({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('nullType: only required params', async () => {
    const responsePromise = client.bodyParams.nullType({ name: 'name', null_type_prop: null });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('nullType: required and optional params', async () => {
    const response = await client.bodyParams.nullType({ name: 'name', null_type_prop: null });
  });

  test('objectWithArrayOfObjects', async () => {
    const responsePromise = client.bodyParams.objectWithArrayOfObjects({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('objectWithUnionProperties: only required params', async () => {
    const responsePromise = client.bodyParams.objectWithUnionProperties({ bar: { bar: 0 }, foo: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('objectWithUnionProperties: required and optional params', async () => {
    const response = await client.bodyParams.objectWithUnionProperties({ bar: { bar: 0 }, foo: 0 });
  });

  test('onlyReadOnlyProperties', async () => {
    const responsePromise = client.bodyParams.onlyReadOnlyProperties({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('paramInModelNameRef: only required params', async () => {
    const responsePromise = client.bodyParams.paramInModelNameRef({
      model_ref: { foo: 'string' },
      name: 'name',
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
    const response = await client.bodyParams.paramInModelNameRef({
      model_ref: { foo: 'string' },
      name: 'name',
    });
  });

  test('propertyModelRef: only required params', async () => {
    const responsePromise = client.bodyParams.propertyModelRef({ model_ref: {}, name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('propertyModelRef: required and optional params', async () => {
    const response = await client.bodyParams.propertyModelRef({ model_ref: { bar: true }, name: 'name' });
  });

  test('propertyWithComplexUnion: only required params', async () => {
    const responsePromise = client.bodyParams.propertyWithComplexUnion({ name: 'name', unions: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('propertyWithComplexUnion: required and optional params', async () => {
    const response = await client.bodyParams.propertyWithComplexUnion({
      name: 'name',
      unions: { in_both: true },
    });
  });

  test('propertyWithHeavilyNestedComplexUnion', async () => {
    const responsePromise = client.bodyParams.propertyWithHeavilyNestedComplexUnion({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('readOnlyProperties', async () => {
    const responsePromise = client.bodyParams.readOnlyProperties({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('stringMapModelRef: only required params', async () => {
    const responsePromise = client.bodyParams.stringMapModelRef({
      model_ref: { foo: 'string' },
      name: 'name',
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
    const response = await client.bodyParams.stringMapModelRef({
      model_ref: { foo: 'string' },
      name: 'name',
    });
  });

  test('topLevelAllOf: only required params', async () => {
    const responsePromise = client.bodyParams.topLevelAllOf({ is_foo: true, kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelAllOf: required and optional params', async () => {
    const response = await client.bodyParams.topLevelAllOf({ is_foo: true, kind: 'VIRTUAL' });
  });

  test('topLevelAllOfNestedObject: only required params', async () => {
    const responsePromise = client.bodyParams.topLevelAllOfNestedObject({ kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelAllOfNestedObject: required and optional params', async () => {
    const response = await client.bodyParams.topLevelAllOfNestedObject({
      kind: 'VIRTUAL',
      nested_obj: { is_foo: true },
    });
  });

  test('topLevelAnyOfWithRef: only required params', async () => {
    const responsePromise = client.bodyParams.topLevelAnyOfWithRef({ kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelAnyOfWithRef: required and optional params', async () => {
    const response = await client.bodyParams.topLevelAnyOfWithRef({ kind: 'VIRTUAL' });
  });

  test('topLevelArray: only required params', async () => {
    const responsePromise = client.bodyParams.topLevelArray([
      { bar: 'bar', foo: 'foo' },
      { bar: 'bar', foo: 'foo' },
      { bar: 'bar', foo: 'foo' },
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
    const response = await client.bodyParams.topLevelArray([
      { bar: 'bar', foo: 'foo' },
      { bar: 'bar', foo: 'foo' },
      { bar: 'bar', foo: 'foo' },
    ]);
  });

  test('topLevelArrayWithChildren: only required params', async () => {
    const responsePromise = client.bodyParams.topLevelArrayWithChildren([
      { id: 'id' },
      { id: 'id' },
      { id: 'id' },
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
    const response = await client.bodyParams.topLevelArrayWithChildren([
      { id: 'id' },
      { id: 'id' },
      { id: 'id' },
    ]);
  });

  test('topLevelArrayWithOtherParams: only required params', async () => {
    const responsePromise = client.bodyParams.topLevelArrayWithOtherParams({
      id: 'id',
      items: [
        { bar: 'bar', foo: 'foo' },
        { bar: 'bar', foo: 'foo' },
        { bar: 'bar', foo: 'foo' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelArrayWithOtherParams: required and optional params', async () => {
    const response = await client.bodyParams.topLevelArrayWithOtherParams({
      id: 'id',
      items: [
        { bar: 'bar', foo: 'foo' },
        { bar: 'bar', foo: 'foo' },
        { bar: 'bar', foo: 'foo' },
      ],
    });
  });

  test('topLevelOneOfOneEntry: only required params', async () => {
    const responsePromise = client.bodyParams.topLevelOneOfOneEntry({ kind: 'VIRTUAL' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topLevelOneOfOneEntry: required and optional params', async () => {
    const response = await client.bodyParams.topLevelOneOfOneEntry({ kind: 'VIRTUAL' });
  });

  test('topLevelSharedType', async () => {
    const responsePromise = client.bodyParams.topLevelSharedType();
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
    await expect(client.bodyParams.topLevelSharedType({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('topLevelSharedType: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bodyParams.topLevelSharedType(
        { bar: { bar: 0 }, foo: 'foo' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('unionOverlappingProp: only required params', async () => {
    const responsePromise = client.bodyParams.unionOverlappingProp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unionOverlappingProp: required and optional params', async () => {
    const response = await client.bodyParams.unionOverlappingProp({ foo: 'foo' });
  });

  test('unionOverlappingProp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bodyParams.unionOverlappingProp({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('unionOverlappingProp: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bodyParams.unionOverlappingProp({ foo: 'foo' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('unknownObject: only required params', async () => {
    const responsePromise = client.bodyParams.unknownObject({ name: 'name', unknown_object_prop: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unknownObject: required and optional params', async () => {
    const response = await client.bodyParams.unknownObject({ name: 'name', unknown_object_prop: {} });
  });

  test('withDefaultBodyParamOptional', async () => {
    const responsePromise = client.bodyParams.withDefaultBodyParamOptional({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('withDefaultBodyParamRequired: only required params', async () => {
    const responsePromise = client.bodyParams.withDefaultBodyParamRequired({ normal_param: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('withDefaultBodyParamRequired: required and optional params', async () => {
    const response = await client.bodyParams.withDefaultBodyParamRequired({
      my_version_body_param: 'my_version_body_param',
      normal_param: true,
    });
  });

  test('withModelProperty', async () => {
    const responsePromise = client.bodyParams.withModelProperty({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
