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

  // 時間を操るテクニック
  beforeEach(() => {
    Date = jest.fn(() => mockDate) as unknown as jest.MockedFunction<
      typeof Date
    >;
  });
  test('jest.clearAllMocks', () => {
    const hoge = new Date(targetDate);
    expect(hoge).toBe(mockDate); // 49行目で Date がモック化されているので、何を入れても必ずmockDateが返る

    // 54行目で引数にtargetDateが入っているので、targetDateが入っている
    // jestのモック関数特有のプロパティやメソッド利用可能になる。
    expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([
      ['2020-12-25'],
    ]);
    expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual([
      { type: 'return', value: mockDate },
    ]);

    const Year = hoge.getFullYear();
    const Month = hoge.getMonth() + 1;
    const Dates = hoge.getDate();
    const Hour = hoge.getHours();
    const Min = hoge.getMinutes();
    const Sec = hoge.getSeconds();

    //2019年12月25日9:0:0
    console.log(
      Year + '年' + Month + '月' + Dates + '日' + Hour + ':' + Min + ':' + Sec
    );

    //モック関数の呼び出し履歴や戻り値の記録がクリアされますが、モック関数自体やその実装（つまりモック関数がどのような動作をするか）はクリアされません。
    jest.clearAllMocks();

    // mockのプロパティが全てリセットされる
    expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([]);
    expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual([]);

    console.log(
      Year + '年' + Month + '月' + Dates + '日' + Hour + ':' + Min + ':' + Sec
    );

    //mock関数が消えるわけではない。
    expect(new Date(targetDate)).toEqual(mockDate);
  });
});
