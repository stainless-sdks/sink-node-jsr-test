// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource bodyParams', () => {
  test('readOnlyProperties', async () => {
    const response = await sink.bodyParams.readOnlyProperties({});
  });

  test('topLevelAllOfNestedObject: only required params', async () => {
    const response = await sink.bodyParams.topLevelAllOfNestedObject({ kind: 'VIRTUAL' });
  });

  test('topLevelAllOfNestedObject: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelAllOfNestedObject({
      kind: 'VIRTUAL',
      nested_obj: { is_foo: true },
    });
  });

  test('topLevelAnyOfWithRef: only required params', async () => {
    const response = await sink.bodyParams.topLevelAnyOfWithRef({ kind: 'VIRTUAL' });
  });

  test('topLevelAnyOfWithRef: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelAnyOfWithRef({ kind: 'VIRTUAL' });
  });

  test('topLevelArray: only required params', async () => {
    const response = await sink.bodyParams.topLevelArray([
      { foo: 'string' },
      { foo: 'string' },
      { foo: 'string' },
    ]);
  });

  test('topLevelArray: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelArray([
      { foo: 'string' },
      { foo: 'string' },
      { foo: 'string' },
    ]);
  });

  test('topLevelArrayWithChildren: only required params', async () => {
    const response = await sink.bodyParams.topLevelArrayWithChildren([
      { id: 'string' },
      { id: 'string' },
      { id: 'string' },
    ]);
  });

  test('topLevelArrayWithChildren: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelArrayWithChildren([
      { id: 'string' },
      { id: 'string' },
      { id: 'string' },
    ]);
  });

  test('topLevelOneOfOneEntry: only required params', async () => {
    const response = await sink.bodyParams.topLevelOneOfOneEntry({ kind: 'VIRTUAL' });
  });

  test('topLevelOneOfOneEntry: required and optional params', async () => {
    const response = await sink.bodyParams.topLevelOneOfOneEntry({ kind: 'VIRTUAL' });
  });

  test('unionOverlappingProp: only required params', async () => {
    const response = await sink.bodyParams.unionOverlappingProp({ foo: 'string' });
  });

  test('unionOverlappingProp: required and optional params', async () => {
    const response = await sink.bodyParams.unionOverlappingProp({ foo: 'string' });
  });

  test('withModelProperty', async () => {
    const response = await sink.bodyParams.withModelProperty({});
  });
});
