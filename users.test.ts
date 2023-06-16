import axios from 'axios';
import Users from './users';

jest.mock('axios'); // axios全体をmoc。各メソッドにはjest.fnが設定される

test('should fetch all users', async () => {
  const users = [{ name: 'bob' }];
  const resp = { data: users };

  //mockResolvedValue : モック関数が Promise を返すようにし、その Promise が指定した値で解決されるように設定します
  (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(resp);
  await expect(Users.search()).resolves.toEqual(users);
});

test('should fetch all users2', async () => {
  const errorText = [{ data: 'error' }];
  const errorResp = { data: errorText };
  (axios as jest.Mocked<typeof axios>).get.mockRejectedValue(errorResp);
  await expect(Users.search()).rejects.toEqual(errorResp); // axiosからのエラーレスポンスがそのままスローされるため、エラーの値はerrorRespになるから
});

describe('radome', () => {
  let spy: any;

  afterEach(() => {
    spy.mockRestore(); // testが終わる毎に元へ戻す
    // jest.resotreAllMopcks() // mockした全ての関数を元に戻すことも可能
  });
  it('randomを100固定', () => {
    // Math.random()は1を返す (元々は0~1)。
    // モック関数の戻り値を変更するには、mockImplementationを利用します
    spy = jest.spyOn(Math, 'random').mockImplementation(() => 100);
    expect(Math.random()).toBe(100);
  });

  // ↓このままだとこけます。spyが見当たらず、初期化できないため。
  // afterEac内を spy && spy.mockRestore() で囲めば動く
  it('not random', () => {
    expect(Math.random()).toBeLessThan(1); // 1未満である
  });
});

// リセット関数を試す
describe('reset mock with jest.fn', () => {
  const targetDate = '2020-12-25';
  const mockDate = new Date('2019-12-25');

  beforeEach(() => {
    Date = jest.fn(() => mockDate) as unknown as jest.MockedFunction<
      typeof Date
    >;
  });
  test('jest.clearAllMocks', () => {
    expect(new Date(targetDate)).toBe(mockDate); // 49行目で Date がモック化されているので、必ずmockDateが返る
  });
});
