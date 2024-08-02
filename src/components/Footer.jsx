import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className='flex border px-4 py-5 mt-[5em] border-slate-800 w-full items-center justify-center'>
                <div className='max-w-7xl flex'>
                    <span className='text-center w-full'>
                        📝 You have 0 notes and none of them are checked off (0%) ✅
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
