import { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CheckList from './components/CheckList';
import Footer from './components/Footer';

function App() {
    const savedLocal = localStorage.getItem('tasksList');
    const initialValue = JSON.parse(savedLocal);
    const [tasksList, setTasksList] = useState(initialValue || []);
    const [showAlert, setShowAlert] = useState(false);
    const [formTask, setFormTask] = useState({
        id: new Date().getTime(),
        title: '',
        description: '',
        completed: false,
    });
    const [sortBy, setSortBy] = useState('input');

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onResetForm();
    };

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setFormTask({
            ...formTask,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormTask({
            title: '',
            description: '',
        });
    };

    const handleSubmitTask = (event) => {
        event.preventDefault();
        if (formTask.title.trim() === '' || formTask.description.trim() === '') {
            setShowAlert(true);
            alert('Input field cannot be empty my dear😘');
        } else {
            const newTask = {
                id: new Date().getTime(),
                title: formTask.title,
                description: formTask.description,
                completed: false,
            };
            setTasksList([...tasksList, newTask]);
            localStorage.setItem('taskList', tasksList);
            setOpen(false);
            onResetForm();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            handleSubmitTask(event);
        }
    };

    const handleCheckTask = (id) => {
        const newTask = tasksList.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            } else {
                return item;
            }
        });
        setTasksList(newTask);
    };

    const handleDeleteTask = (id) => {
        const deleteTask = tasksList.filter((item) => item.id !== id);
        setTasksList(deleteTask);
    };

    const sortedTasks = () => {
        switch (sortBy) {
            case 'reset':
                return tasksList.slice().sort((a, b) => a.title.localeCompare(b.title));
            case 'completed':
                return tasksList.slice().sort((a, b) => Number(b.completed) - Number(a.completed));
            case 'incompleted':
                return tasksList.slice().sort((a, b) => Number(a.completed) - Number(b.completed));
            case 'input':
            default:
                return tasksList;
        }
    };

    const handleClearTasks = () => {
        const confirm = window.confirm('Are you sure you want to delete all tasks?');
        if (confirm) {
            setTasksList([]);
            localStorage.removeItem('tasksList');
        }
    };

    const sortedItems = sortedTasks();

    useEffect(() => {
        if (tasksList.length > 0) {
            localStorage.setItem('tasksList', JSON.stringify(tasksList));
        }
    }, [tasksList]);

    return (
        <>
            <main className='mx-auto w-full transition-all duration-500 ease-in-out'>
                <Header />
                <Form
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    handleKeyDown={handleKeyDown}
                    onFormChange={onFormChange}
                    handleSubmitTask={handleSubmitTask}
                    formTask={formTask}
                    onResetForm={onResetForm}
                    open={open}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    handleClearTasks={handleClearTasks}
                    tasksList={tasksList}
                />
                <CheckList
                    tasksList={tasksList}
                    handleCheckTask={handleCheckTask}
                    handleDeleteTask={handleDeleteTask}
                    sortedItems={sortedItems}
                />
                <Footer tasksList={tasksList} />
            </main>
        </>
    );
}

export default App;
