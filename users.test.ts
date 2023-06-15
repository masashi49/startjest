import axios from 'axios';
import Users from './users';

jest.mock('axios'); // axios全体をmoc。各メソッドにはjest.fnが設定される

test('should fetch all users', async () => {
  const users = [{ name: 'bob' }];
  const resp = { data: users };

  (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(resp);
  await expect(Users.search()).resolves.toEqual(users);
});
