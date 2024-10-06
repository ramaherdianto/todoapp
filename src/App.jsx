import { useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CheckList from './components/CheckList';
import Footer from './components/Footer';
import { useTodoStore } from './store/todoStore';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
    const todos = useTodoStore((state) => state.todos);

    // for pull data from localStorage in the first render
    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    return (
        <>
            <main className='mx-auto w-full transition-all duration-500 ease-in-out'>
                <Header />
                <Form />
                <CheckList />
                <Footer />
                <ToastContainer />
            </main>
        </>
    );
}

export default App;
