import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export type Todo = {
  id: number
  text: string
  completed: boolean
}

const { persistAtom } = recoilPersist({
  key: 'recoil-todos',
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  storage: localStorage,
});

export const todoAtom = atom<Todo[]>({
  key: 'todoAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const newTodoAtom = atom<string>({
  key: 'newTodoAtom',
  default: '',
  effects_UNSTABLE: [persistAtom],
});