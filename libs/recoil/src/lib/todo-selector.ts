import { selector, useRecoilCallback } from 'recoil';
import { todoAtom, newTodoAtom, Todo } from './todo-atom';

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoAtom);
    return todoList;
  },
});

export const useAddTodo = () => {
  return useRecoilCallback(({ set, snapshot }) => async () => {
    const newTodoText = await snapshot.getPromise(newTodoAtom);
    
    if (!newTodoText.trim()) return;
    
    const todo: Todo = {
      id: Date.now(),
      text: newTodoText.trim(),
      completed: false
    };

    set(todoAtom, (prevTodos) => [...prevTodos, todo]);
    set(newTodoAtom, ''); 
  });
};