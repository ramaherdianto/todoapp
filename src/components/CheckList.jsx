import React from 'react';
import List from './List';

const CheckList = ({ handleCheckTask, handleDeleteTask, sortedItems }) => {
    return (
        <>
            <section className='flex justify-center items-center'>
                {sortedItems.length === 0 ? (
                    <div className='h-[300px]'></div>
                ) : (
                    <section className='max-w-7xl w-full flex items-center justify-center px-4 py-10'>
                        <ul className='w-full flex flex-wrap justify-center items-start gap-6 sm:gap-x-10 sm:gap-y-8 md:gap-x-8 md:gap-y-8'>
                            {sortedItems?.map(({ id, title, description, completed }) => {
                                return (
                                    <List
                                        key={id}
                                        {...{ id, title, description, completed }}
                                        handleCheckTask={handleCheckTask}
                                        handleDeleteTask={handleDeleteTask}
                                    />
                                );
                            })}
                        </ul>
                    </section>
                )}
            </section>
        </>
    );
};

export default CheckList;
