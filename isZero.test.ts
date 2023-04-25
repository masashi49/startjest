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
