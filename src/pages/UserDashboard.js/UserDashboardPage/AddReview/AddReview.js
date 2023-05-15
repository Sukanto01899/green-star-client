import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosApi from '../../../../api/axiosApi';
import auth from '../../../../firebase.init';
import ReviewCard from './ReviewCard';

const AddReview = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(()=>{
        axiosApi.post(`/order-list/${user.email}?status=shipped`)
        .then(res => setOrders(res.data))
    }, [user.email])
    return (
        <div>
            <h1 className='text-xl mb-4'>Add Review</h1>

            <div className=" bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
              {orders.map(order => <ReviewCard order={order}/>)}
           </div>
        </div>
    );
};

export default AddReview;