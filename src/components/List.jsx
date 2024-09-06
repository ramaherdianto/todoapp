import React from 'react';

const List = ({ id, title, description, completed, handleCheckTask, handleDeleteTask }) => {
    return (
        <>
            <li className='flex w-full sm:h-[250px] max-h-[300px] sm:w-[45%] md:w-[40%] lg:w-[28%] border border-r-[6px] border-b-[6px] border-slate-800 p-4 justify-between items-center gap-4 rounded-lg'>
                <div className='flex w-full flex-col gap-4'>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='flex items-center gap-4'>
                            <input
                                onChange={() => handleCheckTask(id)}
                                type='checkbox'
                                className='w-5 h-5 accent-slate-700'
                                checked={completed}
                            />
                            <h2
                                className={`text-xl sm:text-lg font-medium capitalize ${
                                    completed ? 'line-through' : ''
                                }`}
                            >
                                {title}
                            </h2>
                        </div>
                        <button onClick={() => handleDeleteTask(id)}>🗑️</button>
                    </div>
                    <div className='flex flex-col justify-center py-5'>
                        <span
                            className={`text-base sm:text-sm text-slate-500 font-medium ${
                                completed ? 'line-through' : ''
                            }`}
                        >
                            {description}
                        </span>
                    </div>
                </div>
            </li>
        </>
    );
};

export default List;
