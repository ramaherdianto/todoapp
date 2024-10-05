import React from 'react';
import { useTodoStore } from '../store/todoStore';

const Footer = () => {
    const todos = useTodoStore((state) => state.todos);

    // to sum up the todos
    const sumTodos = todos.map((item) => item).length;

    // to sum up the todos that has been completed
    const sumCompletedTodos = todos.filter((item) => item.completed === true).length;

    return (
        <>
            <footer className='flex border-[2px] px-4 py-5 mt-[2em] border-slate-800 w-full items-center justify-center'>
                <div className='max-w-7xl flex'>
                    <span className='text-center w-full'>
                        📝 You have {sumTodos} notes and{' '}
                        {sumCompletedTodos === 0
                            ? 'none of them'
                            : sumTodos === sumCompletedTodos
                            ? 'all of them'
                            : sumCompletedTodos}{' '}
                        are checked off (
                        {sumTodos > 0 ? Math.floor((sumCompletedTodos / sumTodos) * 100) : 0}
                        %) ✅
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
