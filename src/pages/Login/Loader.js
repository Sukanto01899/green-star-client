import React from 'react';

const Loader = () => {
    return (
        <div className='absolute z-50 top-0 w-full h-screen bg-slate-800 bg-opacity-20 backdrop-blur-[2px]'>
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-universal text-4xl'>Loading...</h1>
            </div>
        </div>
    );
};

export default Loader;