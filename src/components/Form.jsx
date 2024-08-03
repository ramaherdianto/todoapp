import React from 'react';

const Form = ({
    sortBy,
    setSortBy,
    handleKeyDown,
    handleSubmitTask,
    formTask,
    onResetForm,
    onFormChange,
    open,
    handleClose,
    handleOpen,
}) => {
    return (
        <>
            <section className='px-4 py-10 flex items-center justify-center'>
                <section className='max-w-7xl px-4'>
                    <section className='flex w-full justify-between gap-4'>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className='bg-gray-50 font-medium w-[200px] sm:w-[300px] md:w-[350px] border border-b-[6px] border-r-[6px] border-slate-800 focus:outline-none text-slate-800 text-sm block px-2.5 py-4 rounded-lg'
                        >
                            <option value='input'>Sorted by Input</option>
                            <option value='title'>Sorted by Title</option>
                            <option value='status'>Sorted by status</option>
                        </select>
                        <button
                            onClick={handleOpen}
                            className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-slate-800 font-medium text-sm px-6 py-5 rounded-lg'
                        >
                            Add
                        </button>
                    </section>
                    {open ? (
                        <div className='bg-zinc-200 bg-opacity-80 fixed inset-0 z-50 px-4'>
                            <div className='flex justify-center items-center'>
                                <div className='w-full sm:w-[80%] md:w-[65%] lg:w-[40%] flex relative flex-col justify-center items-start bg-white py-12 px-4 border-[2px] border-b-[6px] border-r-[6px] border-slate-800 rounded-xl'>
                                    <div className='flex w-full justify-center items-center'>
                                        <h1 className='font-bold text-xl'>Add Task</h1>
                                        <button
                                            onClick={handleClose}
                                            className='absolute w-0 h-0 -top-[12em] sm:-top-[12em] right-[2em] sm:right-[2em]'
                                        >
                                            ❌
                                        </button>
                                    </div>
                                    <div className='w-full flex justify-center items-center text-lg text-zinc-600 mt-14'>
                                        <form
                                            onSubmit={handleSubmitTask}
                                            className='w-full flex items-start flex-col rounded-xl'
                                        >
                                            <input
                                                type='text'
                                                name='title'
                                                value={formTask.title}
                                                onChange={onFormChange}
                                                onKeyDown={handleKeyDown}
                                                placeholder='Title'
                                                id=''
                                                className='bg-gray-50 font-medium w-1/2 sm:w-1/2 md:w-[350px] border border-b-[6px] border-r-[6px] border-slate-800 focus:outline-none text-slate-800 text-sm block px-2.5 py-4 rounded-lg'
                                            />
                                            <textarea
                                                id='message'
                                                rows='4'
                                                name='description'
                                                value={formTask.description}
                                                onChange={onFormChange}
                                                className='block font-medium my-4 p-2.5 lg:h-[100px] w-full text-sm bg-gray-50 border border-b-[6px] border-r-[6px] border-slate-800 focus:outline-none text-slate-800 rounded-lg'
                                                placeholder='Description...'
                                            />
                                            <div className='flex items-center justify-center mt-4 gap-4'>
                                                <button
                                                    type='submit'
                                                    className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-slate-800 font-medium text-sm px-6 py-3 rounded-lg'
                                                >
                                                    Add
                                                </button>
                                                <button
                                                    onClick={onResetForm}
                                                    type='reset'
                                                    className='text-slate-800 focus:outline-none  font-medium text-sm px-6 py-3 rounded-lg'
                                                >
                                                    Reset
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </section>
            </section>
        </>
    );
};

export default Form;
