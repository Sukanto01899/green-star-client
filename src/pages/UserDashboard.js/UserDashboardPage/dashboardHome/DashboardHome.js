import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import axiosApi from '../../../../api/axiosApi';
import auth from '../../../../firebase.init';

const DashboardHome = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [signOut] = useSignOut(auth)
    
    useEffect(()=>{
        axiosApi.post(`/order-list/${user.email}?status=all`)
        .then(res => setOrders(res.data))
        .catch(err => {
            toast.error(err.code)
            if(err.response.status === 403 || err.response.status === 401){
                return signOut()
            }
        })
    }, [user.email, signOut])

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