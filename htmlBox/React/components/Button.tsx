import { useState } from 'react';
import './button.css';

type Props = {
  classNameValue?: boolean;
};

export const Button = ({ classNameValue = true }: Props) => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const className = classNameValue ? 'hello' : 'bye';
  return (
    <button className={className} onClick={() => setIsToggleOn(!isToggleOn)}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
};
