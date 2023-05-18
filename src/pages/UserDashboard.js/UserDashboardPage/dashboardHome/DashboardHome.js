import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import auth from '../../../../firebase.init';

const DashboardHome = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState(null);
    const [signOut] = useSignOut(auth)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/user-dashboard/data/${user.email}`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
        .catch(err => {
            toast.error(err.message)
            if(err.response.status === 403 || err.response.status === 401){
                return signOut()
            }
        })
    }, [user, signOut])

    const orderState = [
        {state: "Pending Order", count: orders ? orders.pending_order : 'Loading...'},
        {state: "Paid Order", count: orders ? orders.paid_order : 'Loading...'},
        {state: "Received Order", count: orders ? orders.shipped_order : 'Loading...'},
        {state: "Canceled Order", count: orders ? orders.canceled_order : 'Loading...'}
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