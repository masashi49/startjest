import { seed } from './seed';

export const chohan = () => (seed() % 2 === 0 ? '丁' : '半');

// next 70pから
