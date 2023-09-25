import { APIClient, DefaultQuery } from 'sink-npm/core';
import { Response } from 'node-fetch';

class Test extends APIClient {
  protected override defaultQuery(): DefaultQuery | undefined {
    throw new Error('Method not implemented.');
  }
}

let toTest: Test;
let toTestSpy: any;

beforeEach(() => {
  jest.useFakeTimers().setSystemTime(new Date('Sun, 24 Sep 2023 10:52:00 GMT'));
  jest.spyOn(global.Math, 'random').mockReturnValue(0.75);
  jest.spyOn(global, 'setTimeout');
  toTest = new Test({
    baseURL: '',
    maxRetries: 3,
    timeout: 40000,
    httpAgent: undefined,
    fetch: undefined,
  });
  toTestSpy = jest.spyOn(toTest as any, 'makeRequest').mockResolvedValue({
    response: new Response(),
    options: { path: '', method: 'get' },
    controller: new AbortController(),
  });
});
afterEach(() => {
  jest.useRealTimers();
  jest.spyOn(global.Math, 'random').mockRestore();
});

describe('Test retries', () => {
  test('integer retry header is used', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 2, { 'retry-after': '10' });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 1);
  });

  test('time retry header is used', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 2, {
      'retry-after': 'Sun, 24 Sep 2023 10:52:30 GMT',
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 30000);

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 1);
  });

  test('invalid time retry header is ignored', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 2, { 'retry-after': 'gobbledygook' });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), expect.closeTo(750, 0));

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 1);
  });

  test('too long time retry header is ignored', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 2, {
      'retry-after': 'Sun, 24 Sep 2023 10:62:30 GMT',
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), expect.closeTo(750, 0));

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 1);
  });

  test('expired time retry header is ignored', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 2, {
      'retry-after': 'Sun, 24 Sep 2023 10:51:30 GMT',
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), expect.closeTo(750, 0));

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 1);
  });

  test('too large int header is ignored', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 2, { 'retry-after': '70' });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), expect.closeTo(750, 0));

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 1);
  });
});
