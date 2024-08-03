import React from 'react';

const Footer = ({ tasksList }) => {
    const sumTasks = tasksList.map((item) => item).length;
    const sumCompletedTasks = tasksList.filter((item) => item.completed === true).length;

    return (
        <>
            <footer
                className='flex border-[2px] px-4 py-5 mt-[2em] border-slate-800 w-full items-center justify-center'
            >
                <div className='max-w-7xl flex'>
                    <span className='text-center w-full'>
                        📝 You have {sumTasks} notes and{' '}
                        {sumCompletedTasks === 0
                            ? 'none of them'
                            : sumTasks === sumCompletedTasks
                            ? 'all of them'
                            : sumCompletedTasks}{' '}
                        are checked off (
                        {sumTasks > 0 ? Math.floor((sumCompletedTasks / sumTasks) * 100) : 0}
                        %) ✅
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
