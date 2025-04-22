import { atom } from 'recoil';

export const counterAtom = atom<number>({
  key: 'counterAtom',
  default: 0,
});
