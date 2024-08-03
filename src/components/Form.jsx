import React, { useState } from 'react';

const Form = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <section className='px-4 py-10 flex items-center justify-center'>
                <section className='max-w-7xl px-4'>
                    <section className='flex w-full justify-between gap-4'>
                        <select
                            id='countries'
                            className='bg-gray-50 font-medium w-[200px] sm:w-[300px] md:w-[350px] border border-b-[6px] border-r-[6px] border-slate-800 focus:outline-none text-slate-800 text-sm block px-2.5 py-4 rounded-lg'
                        >
                            <option selected>Filter Task</option>
                            <option value='US'>United States</option>
                            <option value='CA'>Canada</option>
                            <option value='FR'>France</option>
                            <option value='DE'>Germany</option>
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
                                <form className='w-full sm:w-[80%] md:w-[65%] lg:w-1/2 flex relative flex-col justify-center items-start bg-white py-12 px-4 border-[2px] border-b-[6px] border-r-[6px] border-slate-800 rounded-xl gap-8'>
                                    <div className='flex w-full justify-center items-center'>
                                        <h1 className='font-bold text-xl'>Add Task</h1>
                                        <button
                                            onClick={handleClose}
                                            className='absolute w-0 h-0 -top-[13.5em] sm:-top-[14.5em] right-[2em]'
                                        >
                                            ❌
                                        </button>
                                    </div>
                                    <div className='w-full flex flex-col items-center sm:items-start gap-5 text-lg  text-zinc-600 mt-10'>
                                        <input
                                            type='text'
                                            name=''
                                            placeholder='Title'
                                            id=''
                                            className='bg-gray-50 font-medium w-full sm:w-1/2 md:w-[350px] border border-b-[6px] border-r-[6px] border-slate-800 focus:outline-none text-slate-800 text-sm block px-2.5 py-4 rounded-lg'
                                        />
                                        <textarea
                                            id='message'
                                            rows='4'
                                            className='block font-medium p-2.5 lg:h-[100px] w-full text-sm bg-gray-50 border border-b-[6px] border-r-[6px] border-slate-800 focus:outline-none text-slate-800 rounded-lg'
                                            placeholder='Description...'
                                        />
                                    </div>

                                    <div className='flex justify-center sm:mt-10'>
                                        <button
                                            type='submit'
                                            className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-slate-800 font-medium text-sm px-6 py-5 rounded-lg'
                                        >
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : null}
                </section>
            </section>
        </>
    );
};

export default Form;
