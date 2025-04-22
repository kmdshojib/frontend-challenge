import { useRecoilState } from 'recoil';
import { todoAtom, newTodoAtom } from '@fronend-challenge/recoil';
import { useAddTodo } from '@fronend-challenge/recoil';

import { Button, Input, PlusIcon, RadioButton, } from "@fronend-challenge/ui";

const TodoMain = () => {
    const [todos, setTodos] = useRecoilState(todoAtom);
    const [newTodo, setNewTodo] = useRecoilState(newTodoAtom);
    const addTodo = useAddTodo();
    return (
        <div className="max-w-xl mx-auto p-6 bg-white space-y-6 min-h-screen mt-16">
            <h1 className="text-2xl font-bold">Todo List</h1>
            {
                todos.length === 0 && <div className=" text-gray-500">No todos available please add your task!</div>
            }
            <div className='border-b-2 ml-0 lg:ml-8 mt-2 mb-0' />

            <div className="space-y-3">
                {todos.map((todo) => (
                    <div key={todo.id} className="flex items-center gap-3">
                        <RadioButton
                            label={todo.text}
                            checked={todo.completed}
                            onDelete={() => {
                                const updatedTodos = todos.filter(t => t.id !== todo.id);
                                setTodos(updatedTodos);
                            }}
                            onClick={() => {
                                const updatedTodos = todos.map(t =>
                                    t === todo ? { ...todo, completed: !todo.completed } : t
                                )
                                setTodos(updatedTodos)
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-3 pt-0  transition lg:flex-row flex-col">
                <div className='flex flex-row justify-between w-full'>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-violet-600 text-white mr-3">
                        <PlusIcon size={18} />
                    </div>
                    <Input
                        value={newTodo}
                        onChange={(e: any) => setNewTodo(e.target.value)}
                        onEnter={addTodo}
                        placeholder="Memorize the dictionary"
                        className="flex-1"
                    />
                </div>

                <Button
                    className="bg-violet-600 text-white hover:bg-violet-700 transition rounded-2xl w-full lg:w-[212px] h-[38px]"
                    name="Add Item"
                    onClick={addTodo}
                />
            </div>
            <div className='border-b-2 ml-0 lg:ml-8 mt-2' />
        </div>
    )
}

export default TodoMain