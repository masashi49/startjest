import { seed, good } from './seed';

export const chohan = () => (seed() % 2 === 0 ? '丁' : '半');

export const godjob = () => {
  return `${good()}点です`;
};

// next 70pから
