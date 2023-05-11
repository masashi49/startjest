describe('グループにする', () => {
  test('trueはtrue', () => {
    expect(true).toBe(true);
  });
  test('1は1', () => {
    expect(1).not.toBe('1');
  });

  describe('いれこ', () => {
    test('テスト名', () => {
      expect(false).toBe(false);
    });
  });
});

// パラメタライズドテスト
// 繰り返し違う値でテストする方法

test.each([{ a: 1, b: 2, expected: 3 }])('足し算', (data) => {
  // eachをオブジェクトで受け取る
  expect(data.a + data.b).toBe(data.expected);
});

type TestParams = {
  a: number;
  b: number;
  expected: number;
};
test.each<TestParams>([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('.add($a, $b)', ({ a, b, expected }) => {
  // 展開して受け取る方が直感的
  expect(a + b).toBe(expected);
});
test.each([{ a: 'hello', b: 'world', expected: 'helloworld' }])(
  '.add($a, $b)',
  ({ a, b, expected }) => {
    // 展開して受け取る方が直感的
    expect(a + b).toBe(expected);
  }
);

function tax(amount: number) {
  if (amount <= 0) return 0;
  const taxRate = 0.1;
  const taxAmount = Math.round(amount * taxRate); // round 小数点第一位を四捨五入
  return taxAmount;
}

test('消費税10％テスト', () => {
  expect(tax(100)).toBe(10);
});

test.each([
  { a: 100, expected: 10 },
  { a: 320, expected: 32 },
  { a: 7654, expected: 765 },
  { a: 0, expected: 0 },
  { a: -2435, expected: 0 },
])('消費税10％テストEach', ({ a, expected }) => {
  expect(tax(a)).toBe(expected);
});
