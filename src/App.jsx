import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import CheckList from './components/CheckList';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <main className='min-h-screen mx-auto w-full'>
                <Header />
                <Form />
                <CheckList />
                <Footer />
            </main>
        </>
    );
}

export default App;
