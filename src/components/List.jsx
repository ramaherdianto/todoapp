import React from 'react';

const List = ({ title, done }) => {
    return (
        <>
            <li className='flex w-full border border-r-[6px] border-b-[6px] border-slate-800 p-4 justify-between items-center gap-4'>
                <div className='flex items-center gap-4'>
                    <input
                        checked={done ? true : false}
                        id='red-checkbox'
                        type='checkbox'
                        value=''
                        class='w-6 h-6 accent-slate-700'
                    />
                    <span className='text-xl font-medium'>{title}</span>
                </div>
                <button>🗑️</button>
            </li>
        </>
    );
};

export default List;
