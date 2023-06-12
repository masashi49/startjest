// jest.fn モックオブジェクトの作成　jest.mock jest.spyOnと組み合わせて使用する
// jest.mock() オブジェクトの全体や、オブジェクトの一部のメソッドをモックsかする (npm パッケージなど axiosとか)
// jest.spyOn() オブジェクトの一部のメソッドをモックかする

import { mock } from 'node:test';
import { callbackify } from 'node:util';
import { chohan } from './chohan';

// 内部モジュールをモックかする。
jest.mock('./seed', () => {
  return {
    seed: jest
      .fn()
      .mockImplementationOnce(() => 2)
      .mockImplementationOnce(() => 1),
  };
});

describe('chohan', () => {
  it('returns 丁 when seed returns an even number like 2', () => {
    expect(chohan()).toBe('丁');
  });
  it('returns 半 when seed returns an odd number like 1', () => {
    expect(chohan()).toBe('半');
  });
});

describe('mockが持っているものをてすとで確認する', () => {
  test('mock', () => {
    const mockFun = jest.fn();
    expect(mockFun('foo', 'baa')).toBe(undefined); // mock化された関数の初期値はundefinedである

    expect(mockFun).toHaveProperty('mock'); // 関数はmockプロパティを持っているか

    expect(mockFun.mock).toHaveProperty('calls'); // mockは、callsを持っているか

    expect(mockFun.mock.calls).toHaveLength(1); // 1度呼び出した

    expect(mockFun.mock.calls[0]).toEqual(['foo', 'baa']); // 1回目呼び出された時の引数

    expect(mockFun.mock).toHaveProperty('results'); // mockはresultsを持っている

    expect(mockFun.mock.results).toHaveLength(1); // １回呼ばれた

    expect(mockFun.mock.results[0].value).toBe(undefined); // 1回目の呼び出しのreturnはundefinedだった

    expect(mockFun.mock.results[0].type).toBe('return');
  });

  test('helloと返す関数のmoc', () => {
    const hello = jest.fn(() => 'hello');
    const helloOB = jest.fn(() => {
      return { id: 1 };
    });
    expect(hello()).toBe('hello');
    expect(helloOB()).toEqual({ id: 1 });
  });

  test('return hello', () => {
    const mockFun = jest
      .fn()
      .mockImplementationOnce(() => 'hello') // その時1回のみつかえる引数
      .mockImplementationOnce(() => 'Goodbye'); // 1回のみつかえる引数
    expect(mockFun()).toBe('hello');
    expect(mockFun()).toBe('Goodbye');
    expect(mockFun()).toBe(undefined);
  });
});
