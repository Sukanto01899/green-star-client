import React from 'react';

const DashboardHome = () => {
    return (
        <div>
            <h1 className='text-xl'>Dashboard</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4'>
                <div className='bg-universal p-2 text-white'>
                    <h2 className='text-md'>Received Order</h2>
                    <h2 className='text-xl'>0</h2>
                </div>
                <div className='bg-universal p-2 text-white'>
                    <h2 className='text-md'>Panding Order</h2>
                    <h2 className='text-xl'>0</h2>
                </div>
                <div className='bg-universal p-2 text-white'>
                    <h2 className='text-md'>Paid Order</h2>
                    <h2 className='text-xl'>0</h2>
                </div>
                <div className='bg-universal p-2 text-white'>
                    <h2 className='text-md'>canceled Order</h2>
                    <h2 className='text-xl'>0</h2>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;