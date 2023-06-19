import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('Button', () => {
  test('should first', () => {
    const button = renderer.create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
