/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
describe('Button', () => {
  // react-test-rendererを利用した、スナップショットテスト
  it('renders correctly with react-test-renderer', () => {
    const button = renderer.create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });

  test('fireEvent', () => {
    const button = render(<Button />);
    fireEvent.click(button.getByText('ON'));
    expect(button.getByText(/OFF/i)).toBeTruthy();

    fireEvent.click(button.getByText('OFF'));
    expect(button.getByText(/ON/i)).toBeTruthy();
  });
});
