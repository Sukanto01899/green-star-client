import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosApi from '../../../../api/axiosApi';
import auth from '../../../../firebase.init';

const DashboardHome = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    
    useEffect(()=>{
        axiosApi.post(`/order-list/${user.email}`)
        .then(res => setOrders(res.data))
    }, [user.email])

    const orderState = [
        {state: "Pending Order", count: orders.filter(order => order.status === 'pending').length},
        {state: "Paid Order", count: orders.filter(order => order.status === 'paid').length},
        {state: "Received Order", count: orders.filter(order => order.status === 'received').length},
        {state: "Canceled Order", count: orders.filter(order => order.status === 'canceled').length}
    ]

    return (
        <div>
            <h1 className='text-xl'>Dashboard</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4'>
                
                {orderState.map((states, index)=> <div key={index} className='bg-white p-2 text-universal shadow-md'>
                    <h2 className='text-md'>{states.state}</h2>
                    <h2 className='text-xl'>{states.count}</h2>
                </div>)}
                
            </div>
        </div>
    );
};

export default DashboardHome;