// File generated from our OpenAPI spec by Stainless.

import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
});

describe('resource types', () => {
  test('dates: only required params', async () => {
    const response = await sink.types.dates({
      required_date: '2019-12-27',
      required_nullable_date: '2019-12-27',
    });
  });

  test('dates: required and optional params', async () => {
    const response = await sink.types.dates({
      required_date: '2019-12-27',
      required_nullable_date: '2019-12-27',
      list_date: ['2019-12-27', '2019-12-27', '2019-12-27'],
      oneof_date: '2019-12-27',
      optional_date: '2019-12-27',
    });
  });

  test('datetimes: only required params', async () => {
    const response = await sink.types.datetimes({
      required_datetime: '2019-12-27T18:11:19.117Z',
      required_nullable_datetime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('datetimes: required and optional params', async () => {
    const response = await sink.types.datetimes({
      required_datetime: '2019-12-27T18:11:19.117Z',
      required_nullable_datetime: '2019-12-27T18:11:19.117Z',
      list_datetime: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
      oneof_datetime: '2019-12-27T18:11:19.117Z',
      optional_datetime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('enums', async () => {
    const response = await sink.types.enums({});
  });
});
