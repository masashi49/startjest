export function isZero(value: number): boolean {
  return value === 0;
}

export const seed = (): number => {
  return Math.floor(Math.random() * 10);
};

export const chohan = () => {
  seed() % 2 === 0 ? '丁' : '半';
};

// next 70pから
