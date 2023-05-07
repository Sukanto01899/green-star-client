import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosApi from '../../../../api/axiosApi';
import auth from '../../../../firebase.init';
import AddReviewRow from './AddReviewRow';

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

            <div className="overflow-x-auto bg-white">
  <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Product
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Total Review
        </th>
        
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Status
        </th>
        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Add Reviews</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
     
      {orders.map(order => <AddReviewRow order={order}/>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AddReview;