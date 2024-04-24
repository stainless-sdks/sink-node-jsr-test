import { APIClient, DefaultQuery } from 'sink-npm/core';
import { Response } from 'node-fetch';
import { AsymmetricMatcher } from 'expect';

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
  class BetweenMatcher extends AsymmetricMatcher<[unknown, unknown]> {
    low: number;
    high: number;

    constructor(low: number, high: number) {
      super([low, high]);
      this.low = low;
      this.high = high;
    }

    asymmetricMatch(value: any) {
      return this.low <= value && value <= this.high;
    }

    toString() {
      return 'BetweenMatcher';
    }

    override toAsymmetricMatcher() {
      return `${this.toString()}<${this.sample.join(', ')}>`;
    }
  }

  test('retry timing 0', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 3, { 'retry-after': 'gobbledygook' });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), new BetweenMatcher(600 * 0.75, 600));

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 2);
  });

  test('retry timing 1', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 2, { 'retry-after': 'gobbledygook' });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), new BetweenMatcher(1200 * 0.75, 1200));

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 1);
  });

  test('retry timing 2', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 1, { 'retry-after': 'gobbledygook' });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), new BetweenMatcher(2400 * 0.75, 2400));

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 0);
  });

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
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), new BetweenMatcher(1200 * 0.75, 1200));

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
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), new BetweenMatcher(1200 * 0.75, 1200));

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
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), new BetweenMatcher(1200 * 0.75, 1200));

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 1);
  });

  test('too large int header is ignored', async () => {
    toTest['retryRequest']({ method: 'get', path: '' }, 2, { 'retry-after': '70' });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), new BetweenMatcher(1200 * 0.75, 1200));

    jest.advanceTimersByTime(100000);
    await Promise.resolve();

    expect(toTestSpy).toHaveBeenCalledTimes(1);
    expect(toTestSpy).toHaveBeenCalledWith(expect.anything(), 1);
  });
});
