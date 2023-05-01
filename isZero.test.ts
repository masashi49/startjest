import { isZero } from './isZero';

test('0を渡すとtrue', () => {
  const result = isZero(0);
  expect(result).toBe(true);
});

test('1を渡すとfalse', () => {
  const result = isZero(1);
  expect(result).toBe(false);
});

function sum(a: number, b: number) {
  return a + b;
}
test('1 + 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('testを利用してテストケース', () => {
  const result = true;
  const geee = true;
  expect(result).toBe(geee);
});

it('true true ', () => {
  expect(true).toBe(true);
});

const numberBalur = 0;
const stringssss = 'moji';
const booleeadfa = true;

it('est', () => {
  expect(numberBalur).toBe(0);
  expect(stringssss).toBe('moji');
  expect(booleeadfa).toBe(true);
});

it('est2', () => {
  expect(numberBalur).toEqual(0);
  expect(stringssss).toEqual('moji');
  expect(booleeadfa).toEqual(true);
});

it('est3', () => {
  expect(numberBalur).toStrictEqual(0);
  expect(stringssss).toStrictEqual('moji');
  expect(booleeadfa).toStrictEqual(true);
});

type CanType = {
  flavor: string;
  ounces: number;
};
const can1: CanType = {
  flavor: 'aaa',
  ounces: 0,
};
const can2: CanType = {
  flavor: 'aaa',
  ounces: 0,
};
const can3: CanType = can2;

class Can {
  flavor: string;
  ounces: number;

  constructor({ flavor, ounces }: CanType) {
    this.flavor = flavor;
    this.ounces = ounces;
  }
}
const can4 = new Can({
  flavor: 'aaa',
  ounces: 0,
});

const can5 = new Can({
  flavor: 'aaa',
  ounces: 0,
});

it('canTest', () => {
  expect(can1).not.toBe(can2); // toBeは参照も等しいかみるため toBeではない。
});
it('canTest2', () => {
  expect(can2).toBe(can3); // can2とcan3は参照が同じためtoBeはtrue
});

it('canTest1,2 toEqual', () => {
  expect(can1).toEqual(can2); // toEqualはプロパティが同じかどうかを評価する。参照は見ない
});

it('canTest2,4 toEqual', () => {
  expect(can2).toEqual(can4); // toEqualはプロパティが同じかどうかを評価する。参照は見ない
});

it('canTest2,4 toStrictEqual', () => {
  expect(can2).not.toStrictEqual(can4); // toStrictEqualはプロトタイプの一まで見る
});

it('canTest4,5 toStrictEqual', () => {
  expect(can4).toStrictEqual(can5); //
});

it('toEqualとtoStrictEqulalの違い', () => {
  expect({
    foo: NaN,
    bar: undefined,
    safd: undefined,
    jhdg: undefined,
    joy: 10,
  }).toEqual({
    foo: NaN,
    joy: 10,
  }); //toEqualはundefinedを持プロパティを無視する
});
it('toEqualとtoStrictEqulalの違い', () => {
  expect({
    foo: NaN,
    bar: undefined,
    safd: undefined,
    jhdg: undefined,
    joy: 10,
  }).not.toStrictEqual({
    foo: NaN,
    joy: 10,
  }); //toStrictEqualはundefinedを持プロパティも評価する
});

it('toEqualとtoStrictEqulalの違い', () => {
  expect([, undefined, 1]).toEqual([, , 1]); // 未定義とundefinedを区別しない
  expect([, undefined, 1]).not.toStrictEqual([, , 1]); // 未定義とundefinedを区別する
});

// 真偽地
// toBeは厳密な真偽地を評価する。true === true
// 0 == false など、曖昧な真偽地はtoBeTruthy , toBeFalsyを使う。

it('', () => {
  expect('0').toBeTruthy(); // "0"は文字列なのでtrue
  expect(0).toBeFalsy(); // 0は数字かつfalseなのでtrue
});

test('should be null', () => {
  expect(null).toBe(null);
  expect(null).toBeNull();

  expect(undefined).toBe(undefined);
  expect(undefined).toBeUndefined();
});

const hhhhhh = () => ({ hoge: 'hogehoge', id: 0 });

test('曖昧な結果の表示', () => {
  //expect.anythingはnullとundefined以外の値はtrueとなる
  expect(hhhhhh()).toEqual(expect.anything());

  expect(hhhhhh()).toEqual({
    hoge: 'hogehoge',
    id: expect.anything(),
  });

  expect(hhhhhh()).toEqual({
    hoge: 'hogehoge',
    id: expect.any(Number), // anyはその型ならなんでもOK
  });
});

test('0.1+0.2', () => {
  expect(0.1 + 0.2).not.toBe(0.3); // 0.30000000000000004になるよ。
  expect(0.1 + 0.2).toBeCloseTo(0.3); // デフォルトでは小数点二桁まで計算してくれる、
  expect(0.1 + 0.02).toBeCloseTo(0.12, 3); // 下3桁まで計算
  expect(0.1 + 0.02).not.toBe(0.12); // 0.12000000000000001
});

test('greater', () => {
  // toBeGreaterThan 期待された値よりも大きい
  expect(0.1 + 0.2).toBeGreaterThan(0.3);
  expect(0.1 + 0.2 === 0.3).toBe(false);

  // toBeGreaterThanOrEqual　期待された値 `以上`である
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3);

  //toBeLessThan 期待された値よりも小さい
  expect(0.1 + 0.2).toBeLessThan(0.4);
  //toBeLessThanOrEqual 期待された値より `以下`である
  expect(0.1 + 0.2).toBeLessThanOrEqual(0.30000000000000004);
});

test('striongContain', () => {
  const log1 =
    '10.0.0.3 - - [30/Jan/2023:12:20:12 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';
  const log2 =
    '10.0.0.11 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';
  const log3 =
    '10.0.0.99 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';

  const expected = /^10.0.0.([1-9]?[0-9]) /;

  // expect.stringMatching 文字列が一致する
  expect(log1).toEqual(expect.stringMatching(expected));
  expect(log2).toEqual(expect.stringMatching(expected));
  expect(log3).toEqual(expect.stringMatching(expected));

  // 正規表現で使う toMatch 文字列が一致する
  expect(log1).toMatch(expected);
  expect(log2).toMatch(expected);
  expect(log3).toMatch(expected);

  //stringMatchingやtoMatchと同じ評価ができる
  const regex = new RegExp(expected);
  expect(regex.test(log1)).toBe(true);
  expect(regex.test(log2)).toBe(true);
  expect(regex.test(log3)).toBe(true);
});


















