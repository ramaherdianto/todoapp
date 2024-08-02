import React from 'react';
import List from './List';

const items = [
    {
        id: 1,
        title: 'Coding',
        done: false,
    },
    {
        id: 2,
        title: 'Eating',
        done: true,
    },
    {
        id: 3,
        title: 'Eating',
        done: true,
    },
    {
        id: 4,
        title: 'Eating',
        done: true,
    },
    {
        id: 5,
        title: 'Eating',
        done: true,
    },
    {
        id: 5,
        title: 'Eating',
        done: true,
    },
    {
        id: 5,
        title: 'Eating',
        done: true,
    },
    {
        id: 5,
        title: 'Eating',
        done: true,
    },
    {
        id: 5,
        title: ' adga dhasodha duahd adhao sdhoad',
        done: true,
    },
    {
        id: 5,
        title: 'Eating',
        done: true,
    },
    {
        id: 5,
        title: 'Eating',
        done: true,
    },
];

const CheckList = () => {
    return (
        <>
            <section className='flex justify-center items-center'>
                <section className='max-w-7xl w-full justify-center px-4 py-10'>
                    <ul className='w-full flex flex-col justify-center items-center gap-4'>
                        {items.map(({ id, title, done }) => {
                            return <List key={id} {...{ title, done }} />;
                        })}
                    </ul>
                </section>
            </section>
        </>
    );
};

export default CheckList;
