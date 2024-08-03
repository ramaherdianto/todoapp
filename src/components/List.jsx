import React from 'react';

const List = ({ title, description, done }) => {
    return (
        <>
            <li className='flex w-full sm:h-[300px] max-h-[450px] sm:w-[45%] md:w-[40%] lg:w-[28%] border border-r-[6px] border-b-[6px] border-slate-800 p-4 justify-between items-center gap-4 rounded-lg'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='flex items-center gap-4'>
                            <input
                                checked={done ? true : false}
                                id='red-checkbox'
                                type='checkbox'
                                value=''
                                class='w-5 h-5 accent-slate-700'
                            />
                            <h2 className='text-xl sm:text-lg font-medium'>{title}</h2>
                        </div>
                        <button>🗑️</button>
                    </div>
                    <div className='flex flex-col justify-center py-5'>
                        <span className='text-base sm:text-sm text-slate-500 font-medium'>
                            {description}
                        </span>
                    </div>
                </div>
            </li>
        </>
    );
};

export default List;
