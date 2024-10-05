import React, { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import { useShallow } from 'zustand/shallow';
import { toast } from 'react-toastify';

const Form = () => {
    const [todos, addTodo, sortedTodo, removeAllTodos] = useTodoStore(
        useShallow((state) => [state.todos, state.addTodo, state.sortedTodo, state.removeAllTodos])
    );

    const [formTodo, setFormTodo] = useState({
        title: '',
        description: '',
    });

    const [sortedBy, setSortedBy] = useState('input');

    const [showAlert, setShowAlert] = useState(false);

    // handle onChange input
    const onFormChange = (e) => {
        const { name, value } = e.target;
        setFormTodo({
            ...formTodo,
            [name]: value,
        });
    };

    // handle open or close modal form todos
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onResetForm();
    };

    // hanlde reset input after user submitted the form
    const onResetForm = () => {
        setFormTodo({
            title: '',
            description: '',
        });
    };

    // handle submit form
    const handleSubmitTodos = (event) => {
        event.preventDefault();
        // handle if user not filled the input yet
        if (formTodo.title.trim() === '' || formTodo.description.trim() === '') {
            setShowAlert(true);
            toast.error('Input fields cannot be empty ⛔', {
                position: 'top-center',
                autoClose: 1000,
            });
        } else {
            //hanlde if user hasbeen filled in the form
            addTodo(formTodo.title, formTodo.description);
            localStorage.setItem('todos', todos);
            setOpen(false);
            toast.success('Added Todo Successfully ✅', {
                position: 'top-center',
                autoClose: 1000,
            });
            onResetForm();
        }
    };

    // hanlde for submit form when user press the enter button on their keyboard
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmitTodos(event);
        }
    };

    // handle sorted todos
    const handleSortChange = (e) => {
        const selectedOption = e.target.value;
        setSortedBy(selectedOption);
        sortedTodo(selectedOption);
    };

    // handle button for clear all todos
    const handleClearTasks = () => {
        const confirm = window.confirm('Are you sure you want to delete all tasks?');
        if (confirm) {
            removeAllTodos();
            localStorage.removeItem('todos');
            toast.success('Deleted All Todos Successfully', {
                position: 'top-center',
                autoClose: 2000,
            });
        }
    };

    return (
        <>
            <section className='px-4 py-10 flex items-center justify-center'>
                <section className='max-w-7xl flex px-4'>
                    <section className='flex flex-wrap w-full justify-center sm:justify-between gap-8 md:gap-10'>
                        <select
                            onChange={handleSortChange}
                            className='bg-gray-50 font-medium w-full sm:w-[300px] md:w-[350px] border border-b-[6px] border-r-[6px] border-slate-800 focus:outline-none text-slate-800 text-sm block px-2.5 py-4 rounded-lg'
                        >
                            <option selected disabled>
                                Filter
                            </option>
                            <option value='reset'>Reset Filter</option>
                            <option value='title'>Filter: Title</option>
                            <option value='incompleted'>Filter: Incompleted</option>
                            <option value='completed'>Filter: Completed</option>
                        </select>
                        <section className='flex items-center gap-4'>
                            <button
                                onClick={handleOpen}
                                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-slate-800 font-medium text-sm px-6 py-5 rounded-lg'
                            >
                                Add
                            </button>
                            {todos.length >= 2 ? (
                                <button
                                    onClick={handleClearTasks}
                                    className='text-slate-800 border hover:border-b-[6px] hover:border-r-[6px] border-slate-800 font-medium text-sm px-6 py-5 rounded-lg transition-all duration-300 ease-in-out'
                                >
                                    Delete All
                                </button>
                            ) : null}
                        </section>
                    </section>
                    {open ? (
                        <div className='bg-zinc-200 bg-opacity-80 fixed inset-0 z-50 px-4'>
                            <div className='flex min-h-screen justify-center items-center'>
                                <div className='w-full sm:w-[80%] md:w-[65%] lg:w-[40%] flex flex-col justify-center items-start bg-white py-12 px-4 border-[2px] border-b-[6px] border-r-[6px] border-slate-800 rounded-xl'>
                                    <div className='flex w-full justify-center items-center relative'>
                                        <h1 className='font-bold text-xl'>Add Task</h1>
                                        <button
                                            onClick={handleClose}
                                            className='absolute w-0 h-0 -top-[2em] sm:-top-[2em] right-[1em] sm:right-[1em]'
                                        >
                                            ❌
                                        </button>
                                    </div>
                                    <div className='w-full flex justify-center items-center text-lg text-zinc-600 mt-14'>
                                        <form
                                            onSubmit={handleSubmitTodos}
                                            className='w-full flex items-start flex-col rounded-xl'
                                        >
                                            <input
                                                type='text'
                                                name='title'
                                                value={formTodo.title}
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
                                                value={formTodo.description}
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
