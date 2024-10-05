import React, { useEffect } from 'react';
import { useTodoStore } from '../store/todoStore';
import { useShallow } from 'zustand/shallow';
import { toast } from 'react-toastify';

const List = ({ todo }) => {
    const [todos, checkTodo, removeTodo] = useTodoStore(
        useShallow((state) => [state.todos, state.checkTodo, state.removeTodo])
    );

    // handle deleted todo
    const handleDeletedTodo = (id) => {
        removeTodo(id);

        // Filter the parsed array and update localStorage
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));

        // Show success toast
        toast.success('Todo has been deleted', {
            position: 'top-center',
            autoClose: 1000,
        });
    };

    return (
        <>
            <li className='flex w-full sm:h-[250px] max-h-[300px] sm:w-[45%] md:w-[40%] lg:w-[28%] border border-r-[6px] border-b-[6px] border-slate-800 p-4 justify-between items-center gap-4 rounded-lg'>
                <div className='flex w-full flex-col gap-4'>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='flex items-center gap-4'>
                            <input
                                onChange={() => checkTodo(todo.id)}
                                type='checkbox'
                                className='w-5 h-5 accent-slate-700 cursor-pointer'
                                checked={todo.completed}
                            />
                            <h2
                                className={`text-xl sm:text-lg font-medium capitalize ${
                                    todo.completed ? 'line-through' : ''
                                }`}
                            >
                                {todo.title}
                            </h2>
                        </div>
                        <button onClick={() => handleDeletedTodo(todo.id)}>🗑️</button>
                    </div>
                    <div className='flex flex-col justify-center py-5'>
                        <span
                            className={`text-base sm:text-sm text-slate-500 font-medium ${
                                todo.completed ? 'line-through' : ''
                            }`}
                        >
                            {todo.description}
                        </span>
                    </div>
                </div>
            </li>
        </>
    );
};

export default List;
