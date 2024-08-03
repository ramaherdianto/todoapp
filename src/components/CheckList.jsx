import React from 'react';
import List from './List';

const items = [
    {
        id: 1,
        title: 'Coding',
        description:
            'Learn how to code Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, necessitatibus corporis soluta, mollitia deleniti saepe culpa consequatur aut illo veritatis cupiditate doloremque quam inventore debitis!',
        done: false,
    },
    {
        id: 2,
        title: 'Eating',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, necessitatibus corporis soluta, mollitia deleniti saepe culpa consequatur aut illo veritatis cupiditate doloremque quam inventore debitis!',
        done: true,
    },
    {
        id: 2,
        title: 'Eating',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, necessitatibus corporis soluta, mollitia deleniti saepe culpa consequatur aut illo veritatis cupiditate doloremque quam inventore debitis!',
        done: true,
    },
    {
        id: 2,
        title: 'Eating',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, necessitatibus corporis soluta, mollitia deleniti saepe culpa consequatur aut illo veritatis cupiditate doloremque quam inventore debitis!',
        done: true,
    },
    {
        id: 2,
        title: 'Eating',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, necessitatibus corporis soluta, mollitia deleniti saepe culpa consequatur aut illo veritatis cupiditate doloremque quam inventore debitis!',
        done: true,
    },
    {
        id: 2,
        title: 'Eating',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, necessitatibus corporis soluta, mollitia deleniti saepe culpa consequatur aut illo veritatis cupiditate doloremque quam inventore debitis!',
        done: true,
    },
    {
        id: 2,
        title: 'Eating',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, necessitatibus corporis soluta, mollitia deleniti saepe culpa consequatur aut illo veritatis cupiditate doloremque quam inventore debitis!',
        done: true,
    },
    {
        id: 2,
        title: 'Eating',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, necessitatibus corporis soluta, mollitia deleniti saepe culpa consequatur aut illo veritatis cupiditate doloremque quam inventore debitis!',
        done: true,
    },
];

const CheckList = () => {
    return (
        <>
            <section className='flex justify-center items-center'>
                <section className='max-w-7xl w-full flex items-center justify-center px-4 py-10'>
                    <ul className='w-full flex flex-wrap justify-center items-center gap-6 sm:gap-x-10 sm:gap-y-5 md:gap-x-8 md:gap-y-8'>
                        {items.map(({ id, title, description, done }) => {
                            return <List key={id} {...{ title, description, done }} />;
                        })}
                    </ul>
                </section>
            </section>
        </>
    );
};

export default CheckList;
