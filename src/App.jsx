import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import CheckList from './components/CheckList';
import Footer from './components/Footer';

function App() {
    const [tasksList, setTasksList] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [formTask, setFormTask] = useState({
        id: new Date().getTime(),
        title: '',
        description: '',
        completed: false,
    });

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
            console.log(newTask);
            setTasksList([...tasksList, newTask]);
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

    return (
        <>
            <main className='min-h-screen mx-auto w-full'>
                <Header />
                <Form
                    handleKeyDown={handleKeyDown}
                    onFormChange={onFormChange}
                    handleSubmitTask={handleSubmitTask}
                    formTask={formTask}
                    onResetForm={onResetForm}
                    open={open}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                />
                <CheckList
                    tasksList={tasksList}
                    handleCheckTask={handleCheckTask}
                    handleDeleteTask={handleDeleteTask}
                />
                <Footer />
            </main>
        </>
    );
}

export default App;
