// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource responses', () => {
  test('additionalProperties', async () => {
    const response = await sink.responses.additionalProperties();
  });

  test('additionalProperties: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.additionalProperties({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('additionalPropertiesNestedModelReference', async () => {
    const response = await sink.responses.additionalPropertiesNestedModelReference();
  });

  test('additionalPropertiesNestedModelReference: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.responses.additionalPropertiesNestedModelReference({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('allofCrossResource', async () => {
    const response = await sink.responses.allofCrossResource();
  });

  test('allofCrossResource: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.allofCrossResource({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('allofSimple', async () => {
    const response = await sink.responses.allofSimple();
  });

  test('allofSimple: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.allofSimple({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('anyofNull', async () => {
    const response = await sink.responses.anyofNull();
  });

  test('anyofNull: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.anyofNull({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('arrayResponse', async () => {
    const response = await sink.responses.arrayResponse();
  });

  test('arrayResponse: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.arrayResponse({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('booleanResponse', async () => {
    const response = await sink.responses.booleanResponse();
  });

  test('booleanResponse: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.booleanResponse({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('emptyResponse', async () => {
    const response = await sink.responses.emptyResponse();
  });

  test('emptyResponse: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.emptyResponse({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('integerResponse', async () => {
    const response = await sink.responses.integerResponse();
  });

  test('integerResponse: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.integerResponse({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('missingRequired', async () => {
    const response = await sink.responses.missingRequired();
  });

  test('missingRequired: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.missingRequired({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('nestedArray', async () => {
    const response = await sink.responses.nestedArray();
  });

  test('nestedArray: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.nestedArray({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('objectAllProperties', async () => {
    const response = await sink.responses.objectAllProperties();
  });

  test('objectAllProperties: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.objectAllProperties({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('objectNoProperties', async () => {
    const response = await sink.responses.objectNoProperties();
  });

  test('objectNoProperties: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.objectNoProperties({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('objectWithAdditionalPropertiesProp', async () => {
    const response = await sink.responses.objectWithAdditionalPropertiesProp();
  });

  test('objectWithAdditionalPropertiesProp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.responses.objectWithAdditionalPropertiesProp({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('objectWithHeavilyNestedUnion', async () => {
    const response = await sink.responses.objectWithHeavilyNestedUnion();
  });

  test('objectWithHeavilyNestedUnion: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sink.responses.objectWithHeavilyNestedUnion({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sink.NotFoundError);
  });

  test('oneofNull', async () => {
    const response = await sink.responses.oneofNull();
  });

  test('oneofNull: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.oneofNull({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('sharedResponseObject', async () => {
    const response = await sink.responses.sharedResponseObject();
  });

  test('sharedResponseObject: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.sharedResponseObject({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('stringResponse', async () => {
    const response = await sink.responses.stringResponse();
  });

  test('stringResponse: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.stringResponse({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('unionOfMixedTypes', async () => {
    const response = await sink.responses.unionOfMixedTypes();
  });

  test('unionOfMixedTypes: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.unionOfMixedTypes({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });

  test('unionOfObjects', async () => {
    const response = await sink.responses.unionOfObjects();
  });

  test('unionOfObjects: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sink.responses.unionOfObjects({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sink.NotFoundError,
    );
  });
});
