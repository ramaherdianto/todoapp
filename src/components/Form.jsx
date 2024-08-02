import React from 'react';

const Form = () => {
    return (
        <>
            <section className='px-4 py-10 flex items-center justify-center'>
                <section className='max-w-7xl px-4'>
                    <form className='w-full flex justify-center items-center gap-4'>
                        <input
                            type='text'
                            name=''
                            placeholder='your task'
                            id=''
                            class='bg-gray-50 font-medium w-[200px] sm:w-[300px] md:w-[350px] border border-b-[6px] border-r-[4px] border-slate-800 focus:outline-none text-slate-800 text-sm block px-2.5 py-4'
                        />
                        <button
                            type='button'
                            class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-slate-800 font-medium text-sm px-6 py-5'
                        >
                            Add
                        </button>
                    </form>
                </section>
            </section>
        </>
    );
};

export default Form;
