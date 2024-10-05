import React from 'react';
import List from './List';
import { useTodoStore } from '../store/todoStore';

const CheckList = () => {
    const todos = useTodoStore((state) => state.todos);
    return (
        <>
            <section className='flex justify-center items-center'>
                {todos.length === 0 ? (
                    <div className='h-[300px]'></div>
                ) : (
                    <section className='max-w-7xl w-full flex items-center justify-center px-4 py-10'>
                        <ul
                            className='w-full flex flex-wrap justify-center items-start gap-6 sm:gap-x-10 sm:gap-y-8 md:gap-x-8 md:gap-y-8'
                            style={{ margin: '0 auto' }}
                        >
                            {todos?.map((todo) => {
                                return <List key={todo.id} todo={todo} />;
                            })}
                        </ul>
                    </section>
                )}
            </section>
        </>
    );
};

export default CheckList;
