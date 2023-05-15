import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { HiCash, HiGift, HiTrendingUp, HiUsers } from 'react-icons/hi';
import { ResponsiveContainer } from 'recharts';
import auth from '../../../../firebase.init';
import SellingChart from './SellingChart';
import TotalPieChart from './TotalPieChart';

const AdminHome = () => {
    const [user] = useAuthState(auth);
    const [panelData, setPanelData] = useState(null);
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        axios(`http://localhost:5000/admin-dashboard/${user.email}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => {
            setPanelData(res.data)
            setOrders(res.data.all_orders)
        })
    }, [user.email])

    return (
        <div>

<header aria-label="Page Header">
  <div class="mx-auto max-w-screen-xl ">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome Back, Barry!
        </h1>

        <p class="mt-1.5 text-sm text-gray-500">
          Welcome to admin dashboard! 🎉
        </p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
          class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span class="text-sm font-medium"> View Website </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>

        <button
          class="block rounded-lg bg-universal px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          Create Post
        </button>
      </div>
    </div>
  </div>
</header>



           
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4 mt-5'>
                <div className='flex justify-between items-center space-x-6 bg-universal p-4 text-white'>
                    <div>
                    <h2 className='text-md'>Total Users</h2>
                    <h3 className='text-2xl'>{panelData ? panelData.total_users : 'Loading...'}</h3>
                    </div>
                    <HiUsers className='text-4xl'/>
                </div>
                <div className='flex justify-between items-center space-x-6 bg-universal p-4 text-white'>
                    <div>
                    <h2 className='text-md'>Total Products</h2>
                    <h3 className='text-2xl'>{panelData ? panelData.total_product : 'Loading...'}</h3>
                    </div>
                    <HiGift className='text-4xl'/>
                </div>
                <div className='flex justify-between items-center space-x-6 bg-universal p-4 text-white'>
                    <div>
                    <h2 className='text-md'>Total Sales</h2>
                    <h3 className='text-2xl'>{panelData ? panelData.shipped_order : 'Loading...'}</h3>
                    </div>
                    <HiTrendingUp className='text-4xl'/>
                </div>
                <div className='flex justify-between items-center space-x-6 bg-universal p-4 text-white'>
                    <div>
                    <h2 className='text-md'>Total Earned</h2>
                    <h3 className='text-2xl'>${panelData ? panelData.total_sales.toFixed(2) : 'Loading...'}</h3>
                    </div>
                    <HiCash className='text-4xl'/>
                </div>
            </div>


<div className='grid grid-cols-1 lg:grid-cols-2 mt-4 gap-5'>
    
    <div className='bg-white py-4'>
    <ResponsiveContainer width="100%" height="100%">
    <SellingChart orders={orders}/>
    </ResponsiveContainer>
    </div>
    
    <div className='bg-white lg:pl-20'>
        <ResponsiveContainer width="100%" height="100%" >
            <TotalPieChart orderStatus={{pending: panelData?.pending_order, paid: panelData?.paid_order, shipped: panelData?.shipped_order, canceled: panelData?.canceled_order}}/>
        </ResponsiveContainer>
    </div>
</div>

        </div>
    );
};

export default AdminHome;