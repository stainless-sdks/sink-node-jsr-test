// File generated from our OpenAPI spec by Stainless.

import Sink from '~/index';
const sink = new Sink({ userToken: 'something1234', baseURL: 'http://127.0.0.1:4010', username: 'Robert' });

describe('resource body_params', () => {
  test('read_only_properties: only required params', async () => {
    const response = await sink.bodyParams.readOnlyProperties({});
  });

  test('read_only_properties: required and optional params', async () => {
    const response = await sink.bodyParams.readOnlyProperties({ in_both: true });
  });

  test('top_level_allOf_nested_object: only required params', async () => {
    const response = await sink.bodyParams.topLevelAllOfNestedObject({
      kind: 'VIRTUAL',
      nested_obj: { is_foo: true },
    });
  });

  test('top_level_allOf_nested_object: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelAllOfNestedObject({
      kind: 'VIRTUAL',
      nested_obj: { is_foo: true },
    });
  });

  test('union_overlapping_prop: only required params', async () => {
    const response = await sink.bodyParams.unionOverlappingProp();
  });

  test('union_overlapping_prop: required and optional params', async () => {
    const response = await sink.bodyParams.unionOverlappingProp({ foo: 'string' });
  });

  test('union_overlapping_prop: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.bodyParams.unionOverlappingProp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('union_overlapping_prop: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.bodyParams.unionOverlappingProp({ foo: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('with_model_property: only required params', async () => {
    const response = await sink.bodyParams.withModelProperty({});
  });

  test('with_model_property: required and optional params', async () => {
    const response = await sink.bodyParams.withModelProperty({ my_model: { bar: true }, foo: 'string' });
  });
});
