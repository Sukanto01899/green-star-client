import React from 'react';
import { HiCash, HiGift, HiTrendingUp, HiUsers } from 'react-icons/hi';

const AdminHome = () => {
    return (
        <div>
            <h1 className='text-xl mb-5'>Dashboard</h1>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4'>
                <div className='flex justify-between items-center space-x-6 bg-universal p-4 text-white'>
                    <div>
                    <h2 className='text-md'>Total Users</h2>
                    <h3 className='text-2xl'>5654</h3>
                    </div>
                    <HiUsers className='text-4xl'/>
                </div>
                <div className='flex justify-between items-center space-x-6 bg-universal p-4 text-white'>
                    <div>
                    <h2 className='text-md'>Total Products</h2>
                    <h3 className='text-2xl'>5654</h3>
                    </div>
                    <HiGift className='text-4xl'/>
                </div>
                <div className='flex justify-between items-center space-x-6 bg-universal p-4 text-white'>
                    <div>
                    <h2 className='text-md'>Total Sales</h2>
                    <h3 className='text-2xl'>5654</h3>
                    </div>
                    <HiTrendingUp className='text-4xl'/>
                </div>
                <div className='flex justify-between items-center space-x-6 bg-universal p-4 text-white'>
                    <div>
                    <h2 className='text-md'>Total Earned</h2>
                    <h3 className='text-2xl'>5654</h3>
                    </div>
                    <HiCash className='text-4xl'/>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;