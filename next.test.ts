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

test.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('.add($a, $b)', ({ a, b, expected }) => {
  // 展開して受け取る方が直感的
  expect(a + b).toBe(expected);
});
